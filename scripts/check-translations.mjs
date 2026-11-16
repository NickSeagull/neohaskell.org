import { readdir, stat } from 'node:fs/promises';
import { realpathSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { targetLocales } from '../src/i18n/locales.mjs';

export async function missingTranslationFiles(root) {
  const docs = join('src', 'content', 'docs');
  const localeCodes = new Set(targetLocales.map(({ code }) => code));
  const required = [];

  async function visit(relative = '') {
    for (const entry of await readdir(join(root, docs, relative), { withFileTypes: true })) {
      if (!relative && localeCodes.has(entry.name)) continue;
      const path = join(relative, entry.name);
      if (entry.isDirectory()) {
        await visit(path);
      } else if (entry.isFile() && ['.md', '.mdx'].includes(extname(entry.name))) {
        for (const { code } of targetLocales) required.push(join(docs, code, path));
      }
    }
  }

  await visit();
  for (const { code, lang } of targetLocales) {
    required.push(join('src', 'i18n', code, 'site.json'));
    required.push(join('src', 'content', 'i18n', `${lang}.json`));
  }

  const missing = [];
  for (const path of required.sort()) {
    try {
      if (!(await stat(join(root, path))).isFile()) missing.push(path);
    } catch (error) {
      if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error;
      missing.push(path);
    }
  }
  return missing;
}

if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href) {
  const missing = await missingTranslationFiles(fileURLToPath(new URL('../', import.meta.url)));
  if (missing.length) {
    console.error(`Translation coverage failed: ${missing.length} missing file(s).`);
    console.error(missing.join('\n'));
    console.error('Translation requires an explicit request. See AGENTS.md and README.md.');
    process.exitCode = 1;
  } else {
    console.log('Translation file coverage passed.');
  }
}
