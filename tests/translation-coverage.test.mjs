import test from 'node:test';
import assert from 'node:assert/strict';
import { copyFile, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { missingTranslationFiles } from '../scripts/check-translations.mjs';
import { targetLocales } from '../src/i18n/locales.mjs';

async function put(root, path, content = '') {
  await mkdir(dirname(join(root, path)), { recursive: true });
  await writeFile(join(root, path), content);
}

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'translation-coverage-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await put(root, 'src/content/docs/guide/index.mdx', '# Revised English');
  await put(root, 'src/content/docs/resources.md', '# Resources');
  for (const { code, lang } of targetLocales) {
    await put(root, `src/content/docs/${code}/guide/index.mdx`, '# Earlier translation');
    await put(root, `src/content/docs/${code}/resources.md`);
    await put(root, `src/i18n/${code}/site.json`, '{}');
    await put(root, `src/content/i18n/${lang}.json`, '{}');
  }
  return root;
}

test('coverage permits older translations and ignores assets and locale-only pages', async t => {
  const root = await fixture(t);
  await put(root, 'src/content/docs/diagram.svg');
  await put(root, 'src/content/docs/es/extra.mdx');
  assert.deepEqual(await missingTranslationFiles(root), []);
});

test('new nested English pages require translations in every configured locale', async t => {
  const root = await fixture(t);
  await put(root, 'src/content/docs/new/topic/index.mdx');
  assert.deepEqual(await missingTranslationFiles(root), targetLocales.map(({ code }) =>
    `src/content/docs/${code}/new/topic/index.mdx`).sort());
});

test('a missing locale directory reports all its missing documentation files', async t => {
  const root = await fixture(t);
  await rm(join(root, 'src/content/docs/es'), { recursive: true });
  assert.deepEqual(await missingTranslationFiles(root), [
    'src/content/docs/es/guide/index.mdx',
    'src/content/docs/es/resources.md',
  ]);
});

test('catalog coverage respects language tags and rejects directories in place of files', async t => {
  const root = await fixture(t);
  await rm(join(root, 'src/content/i18n/zh-CN.json'));
  await rm(join(root, 'src/i18n/fr/site.json'));
  await mkdir(join(root, 'src/i18n/fr/site.json'));
  assert.deepEqual(await missingTranslationFiles(root), [
    'src/content/i18n/zh-CN.json',
    'src/i18n/fr/site.json',
  ]);
});

test('CLI fails with the missing path and succeeds after the file is restored', async t => {
  const root = await fixture(t);
  await mkdir(join(root, 'scripts'));
  await copyFile(new URL('../scripts/check-translations.mjs', import.meta.url), join(root, 'scripts/check-translations.mjs'));
  await copyFile(new URL('../src/i18n/locales.mjs', import.meta.url), join(root, 'src/i18n/locales.mjs'));
  const path = 'src/content/docs/es/guide/index.mdx';
  await rm(join(root, path));
  const run = () => spawnSync(process.execPath, [join(root, 'scripts/check-translations.mjs')], { encoding: 'utf8' });
  const failed = run();
  assert.equal(failed.status, 1, failed.stderr);
  assert.ok(failed.stderr.includes(path));
  await put(root, path, '# Restored translation');
  const passed = run();
  assert.equal(passed.status, 0, passed.stderr);
  assert.match(passed.stdout, /coverage passed/);
});
