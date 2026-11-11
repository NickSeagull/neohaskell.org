import { readdir, readFile } from 'node:fs/promises';
import { extname, relative } from 'node:path';

const source = new URL('../src/', import.meta.url);
const extensions = new Set(['.astro', '.md', '.mdx', '.html', '.ts', '.js', '.mjs', '.json']);
const forbidden = /[\u00b7\u2014]|\p{Extended_Pictographic}|\p{Regional_Indicator}|\u20e3/gu;
const markdownFootnote = /\[\^[^\]]+\]/;
const htmlFootnote = /(?:role|rel)\s*=\s*["'](?:doc-)?footnote["']/;
const failures = [];

async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    if (entry.isDirectory()) {
      await check(path);
    } else if (extensions.has(extname(entry.name))) {
      const extension = extname(entry.name);
      const lines = (await readFile(path, 'utf8')).split('\n');
      for (const [index, line] of lines.entries()) {
        const characters = [...line.matchAll(forbidden)].map(([value]) =>
          `U+${value.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`);
        const hasFootnote = (['.md', '.mdx'].includes(extension) && markdownFootnote.test(line))
          || (['.astro', '.html', '.md', '.mdx'].includes(extension) && htmlFootnote.test(line));
        if (characters.length || hasFootnote) {
          const reason = characters.length ? `forbidden character ${[...new Set(characters)].join(', ')}` : 'footnote markup';
          failures.push(`${relative(process.cwd(), path.pathname)}:${index + 1}: ${reason}`);
        }
      }
    }
  }
}

await check(source);
if (failures.length) {
  console.error(failures.join('\n'));
  console.error('Use plain sentence punctuation and keep explanations in the main content. See AGENTS.md.');
  process.exitCode = 1;
} else {
  console.log('Copy check passed.');
}
