import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, cp, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { sources, status, validateTranslation, hash, destination, markdown, remarkLocales, walk } from '../scripts/i18n-lib.mjs';
import { localePath } from '../src/i18n/locales.mjs';

const project = new URL('../', import.meta.url).pathname;
async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'neohaskell-i18n-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const dir of ['scripts', 'src/i18n/en', 'src/content/i18n', 'src/content/docs']) await mkdir(join(root, dir), { recursive: true });
  for (const file of ['scripts/i18n.mjs', 'scripts/i18n-lib.mjs', 'src/i18n/locales.mjs']) await cp(join(project, file), join(root, file));
  await symlink(join(project, 'node_modules'), join(root, 'node_modules'));
  await writeFile(join(root, 'GLOSSARY.md'), 'Commands express intent; events record facts.');
  await writeFile(join(root, 'src/i18n/en/site.json'), '{"title":"Hello"}');
  await writeFile(join(root, 'src/content/i18n/en.json'), '{"search.label":"Search"}');
  await writeFile(join(root, 'src/content/docs/learn.mdx'), '---\ntitle: Learn\ndescription: Learn the model\n---\n\n## Commands\n\nA **command** expresses intent. [Setup](/getting-started/#install)\n\n```sh\necho hello\n```\n');
  return root;
}

test('localized URLs preserve page, query and anchor without double prefixes', () => {
  assert.equal(localePath('es', '/learn/#events'), '/es/learn/#events');
  assert.equal(localePath('ja', '/es/learn/?a=1#events'), '/ja/learn/?a=1#events');
  assert.equal(localePath('en', '/zh-cn/'), '/');
  assert.equal(localePath('fr', 'https://example.com/a'), 'https://example.com/a');
  assert.equal(localePath('de', '//example.com'), '//example.com');
  assert.throws(() => localePath('xx', '/'));
});

test('freshness detects new, changed, missing, modified and deleted sources', async (t) => {
  const root = await fixture(t);
  let result = await status(root, [{ code: 'es' }]);
  assert.ok(result.reports[0].entries.every(({ state }) => state === 'missing'));
  const manifest = { version: 1, locales: { es: {} } };
  for (const source of result.originals) {
    const path = join(root, destination(source.path, 'es'));
    await mkdir(new URL('.', `file://${path}`).pathname, { recursive: true });
    await writeFile(path, source.content);
    manifest.locales.es[source.path] = { sourceHash: source.hash, targetHash: hash(source.content), translatedAt: '2000-01-01T00:00:00Z' };
  }
  await writeFile(join(root, 'i18n-manifest.json'), JSON.stringify(manifest));
  result = await status(root, [{ code: 'es' }]);
  assert.ok(result.reports[0].entries.every(({ state }) => state === 'current'), 'age alone never expires unchanged translations');
  await writeFile(join(root, 'src/i18n/en/site.json'), '{"title":"Hello again"}');
  await writeFile(join(root, 'src/content/i18n/es.json'), '{"search.label":"Buscar"}');
  await rm(join(root, 'src/content/docs/es/learn.mdx'));
  result = await status(root, [{ code: 'es' }]);
  assert.deepEqual(result.reports[0].entries.map(({ state }) => state).sort(), ['missing', 'modified', 'stale']);
  await rm(join(root, 'src/content/docs/learn.mdx'));
  result = await status(root, [{ code: 'es' }]);
  assert.deepEqual(result.reports[0].orphaned, ['src/content/docs/learn.mdx']);
});

test('validation rejects changed code, links, identifiers, markup and incomplete catalogs', async () => {
  const originals = await sources(project);
  const source = originals.find(({ path }) => path.includes('getting-started/index'));
  assert.doesNotThrow(() => validateTranslation(source, source.content.replace('Prepare your environment', 'Prepara tu entorno')));
  for (const changed of [source.content.replace("npx skills add", 'npm install'), source.content.replace('/introduction/', '/evil/'), source.content.replace('`OrderPlaced`', '`Pedido`'), source.content + '\n<script>attack()</script>']) assert.throws(() => validateTranslation(source, changed));
  const concepts = originals.find(({ path }) => path.includes('learn/index'));
  assert.throws(() => validateTranslation(concepts, concepts.content.replace('PlaceOrder\n', 'RealizarPedido\n')));
  assert.throws(() => validateTranslation(concepts, concepts.content.replace('quantity: 1', 'quantity: 9')));
  assert.doesNotThrow(() => validateTranslation(source, source.content.replace('one ceramic mug', '1 ceramic mug')));
  assert.doesNotThrow(() => validateTranslation(source, source.content.replace('The **Neo CLI**', '**Neo CLI**')));
  const json = { path: 'site.json', content: '{"title":"<span>Hi</span>","count":"[COUNT] results"}' };
  assert.doesNotThrow(() => validateTranslation(json, '{"title":"<span>Hola</span>","count":"[COUNT] resultados"}'));
  for (const changed of ['{}', '{"title":"<img src=x>","count":"[COUNT]"}', '{"title":"<span>Hola</span>","count":"resultados"}']) assert.throws(() => validateTranslation(json, changed));
});

test('translated headings retain English anchors and internal links stay localized', async () => {
  const source = await readFile(join(project, 'src/content/docs/learn/index.mdx'), 'utf8');
  const { tree } = markdown(source.replace('## Ask for a change with a command', '## Eventos') + '\n[Setup](/getting-started/)\n\n[Event anchor](#events)\n\n[Download](/sample.pdf)\n\n<a href="/logo.svg">Logo</a>\n');
  await remarkLocales()(tree, { path: join(project, 'src/content/docs/es/learn/index.mdx') });
  const ids = [], links = [];
  walk(tree, (node) => { if (node.type === 'heading') ids.push(node.data.hProperties.id); if (node.type === 'link') links.push(node.url); });
  assert.ok(ids.includes('ask-for-a-change-with-a-command'));
  assert.ok(links.includes('/es/getting-started/'));
  assert.ok(links.includes('#events'));
  assert.ok(links.includes('/sample.pdf'));
  walk(tree, (node) => { if (node.name === 'a') assert.equal(node.attributes[0].value, '/logo.svg'); });
});

test('MDX translation ignores attribute positions while preserving their values', () => {
  const source = { path: 'guide.mdx', content: '---\ntitle: Guide\ndescription: A guide\n---\n\nA short introduction.\n\n<section class="docs-plan" data-pagefind-ignore>\n\n## Page plan\n\nRead the <a href="/learn/">concepts</a>.\n\n</section>\n' };
  const translated = source.content.replace('A short introduction.', 'Una introducción con una longitud diferente.').replace('Page plan', 'Plan de la página').replace('concepts</a>', 'conceptos</a>');
  assert.doesNotThrow(() => validateTranslation(source, translated));
  for (const changed of [translated.replace('docs-plan', 'other'), translated.replace('/learn/', '/other/'), translated.replace('data-pagefind-ignore', 'data-other')]) {
    assert.throws(() => validateTranslation(source, changed), /changed document structure/);
  }
});

test('CLI uses one Luna max call per pending language, skips current, rejects incomplete batches', async (t) => {
  const root = await fixture(t);
  const fake = join(root, 'fake-codex.mjs');
  await writeFile(fake, `#!/usr/bin/env node\nimport fs from 'node:fs';\nconst args=process.argv.slice(2);\nfs.appendFileSync(process.env.CALL_LOG, JSON.stringify(args)+'\\n');\nlet prompt='';for await(const chunk of process.stdin)prompt+=chunk;\nlet files=JSON.parse(prompt.split('Files to translate:\\n')[1]);\nif(process.env.FAKE_FAIL==='1'){process.exit(3)}\nif(process.env.FAKE_INCOMPLETE==='1')files.pop();\nfs.writeFileSync(args[args.indexOf('--output-last-message')+1],JSON.stringify({files}));\n`, { mode: 0o755 });
  const log = join(root, 'calls.jsonl');
  const run = (args, extra = {}) => spawnSync(process.execPath, [join(root, 'scripts/i18n.mjs'), ...args], { encoding: 'utf8', env: { ...process.env, CODEX_BIN: fake, CALL_LOG: log, ...extra } });
  assert.equal(run(['check', '--strict', '--locale', 'es']).status, 1);
  let result = run(['translate', '--locale', 'es']);
  assert.equal(result.status, 0, result.stderr);
  assert.equal(run(['translate', '--locale', 'es']).status, 0);
  assert.equal(run(['check', '--strict', '--locale', 'es']).status, 0);
  let calls = (await readFile(log, 'utf8')).trim().split('\n').map(JSON.parse);
  assert.equal(calls.length, 1);
  assert.equal(calls[0][calls[0].indexOf('--model') + 1], 'gpt-6-luna');
  assert.ok(calls[0].includes('model_reasoning_effort="max"'));
  const before = await readFile(join(root, 'i18n-manifest.json'), 'utf8');
  result = run(['translate', '--locale', 'fr'], { FAKE_INCOMPLETE: '1' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /incomplete/);
  assert.equal(await readFile(join(root, 'i18n-manifest.json'), 'utf8'), before);
  assert.ok((await status(root, [{ code: 'fr' }])).reports[0].entries.every(({ state }) => state === 'missing'));
  result = run(['translate', '--locale', 'de'], { FAKE_FAIL: '1' });
  assert.equal(result.status, 1);
  calls = (await readFile(log, 'utf8')).trim().split('\n');
  assert.equal(calls.length, 3, 'failed calls are never automatically retried');
  result = run(['translate']);
  assert.equal(result.status, 0, result.stderr);
  calls = (await readFile(log, 'utf8')).trim().split('\n');
  assert.equal(calls.length, 10, 'all-language run calls the seven remaining languages once each');
  assert.equal(run(['check', '--strict']).status, 0);
  assert.equal(run(['translate']).status, 0);
  assert.equal((await readFile(log, 'utf8')).trim().split('\n').length, 10);
  await mkdir(join(root, '.i18n/translate.lock'));
  result = run(['translate']);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Another translation is running/);
});

test('saved responses apply without Codex and cannot cross language or source revisions', async (t) => {
  const root = await fixture(t);
  const original = await sources(root);
  const saved = join(root, 'saved');
  await mkdir(saved);
  await writeFile(join(saved, 'invocation.json'), JSON.stringify({ locale: 'es', model: 'gpt-6-luna', reasoningEffort: 'max', sources: original.map(({ path, hash }) => ({ path, hash })) }));
  await writeFile(join(saved, 'response.json'), JSON.stringify({ files: original.map(({ path, content }) => ({ path, content })) }));
  const apply = (locale) => spawnSync(process.execPath, [join(root, 'scripts/i18n.mjs'), 'apply', '--locale', locale, '--from', saved], { encoding: 'utf8', env: { ...process.env, CODEX_BIN: '/does-not-exist' } });
  assert.equal(apply('ru').status, 1);
  assert.equal(apply('es').status, 0);
  await writeFile(join(root, 'src/i18n/en/site.json'), '{"title":"Changed source"}');
  assert.equal(apply('es').status, 1);
  assert.match(apply('es').stderr, /pending English revision/);
});
