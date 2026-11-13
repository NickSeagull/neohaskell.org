import { createHash } from 'node:crypto';
import { readFile, readdir, mkdir, rename, writeFile } from 'node:fs/promises';
import { dirname, join, relative, sep } from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkGfm from 'remark-gfm';
import { parse as parseYaml } from 'yaml';
import GithubSlugger from 'github-slugger';
import { toString } from 'mdast-util-to-string';
import { targetLocales, localePath, localeByCode } from '../src/i18n/locales.mjs';

export const policyVersion = 2;
export const hash = (text) => createHash('sha256').update(text).digest('hex');
export const parser = unified().use(remarkParse).use(remarkMdx).use(remarkGfm);
export function markdown(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error('Markdown must have YAML frontmatter');
  return { frontmatter: parseYaml(match[1]), tree: parser.parse(text.slice(match[0].length)) };
}
export function walk(node, callback) {
  callback(node);
  for (const child of node.children ?? []) walk(child, callback);
}
export function headings(text) {
  const slugger = new GithubSlugger();
  const result = [];
  walk(markdown(text).tree, (node) => { if (node.type === 'heading') result.push(slugger.slug(toString(node))); });
  return result;
}
export async function readOptional(path, fallback = undefined) {
  try { return await readFile(path, 'utf8'); } catch (error) { if (error.code === 'ENOENT') return fallback; throw error; }
}
export async function atomicWrite(path, text) {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.${process.pid}.tmp`;
  await writeFile(temporary, text);
  await rename(temporary, path);
}
export function destination(source, locale) {
  if (source.startsWith('src/content/docs/')) return source.replace('src/content/docs/', `src/content/docs/${locale}/`);
  if (source === 'src/content/i18n/en.json') return `src/content/i18n/${localeByCode(locale).lang}.json`;
  return source.replace('/en/', `/${locale}/`);
}
export async function sources(root) {
  const files = ['src/i18n/en/site.json', 'src/content/i18n/en.json'];
  async function scan(directory) {
    for (const entry of await readdir(join(root, directory), { withFileTypes: true })) {
      if (entry.name.startsWith('_')) continue;
      if (directory === 'src/content/docs' && targetLocales.some(({ code }) => entry.name === code)) continue;
      const path = `${directory}/${entry.name}`;
      if (entry.isDirectory()) await scan(path);
      else if (/\.mdx?$/.test(entry.name)) files.push(path);
    }
  }
  await scan('src/content/docs');
  const glossary = await readFile(join(root, 'GLOSSARY.md'), 'utf8');
  return Promise.all(files.sort().map(async (path) => {
    const content = await readFile(join(root, path), 'utf8');
    return { path, content, hash: hash(`${policyVersion}\n${glossary}\n${content}`) };
  }));
}
export async function status(root, selected = targetLocales) {
  const originals = await sources(root);
  const manifest = JSON.parse(await readOptional(join(root, 'i18n-manifest.json'), '{"version":1,"locales":{}}'));
  if (manifest.version !== 1) throw new Error('Unsupported i18n manifest version');
  const reports = [];
  for (const locale of selected) {
    const entries = [];
    for (const source of originals) {
      const path = destination(source.path, locale.code);
      const content = await readOptional(join(root, path));
      const record = manifest.locales[locale.code]?.[source.path];
      const state = content === undefined ? 'missing' : !record || record.sourceHash !== source.hash ? 'stale' : record.targetHash !== hash(content) ? 'modified' : 'current';
      entries.push({ source: source.path, target: path, state });
    }
    const orphaned = Object.keys(manifest.locales[locale.code] ?? {}).filter((path) => !originals.some((source) => source.path === path));
    reports.push({ locale: locale.code, entries, orphaned });
  }
  return { originals, manifest, reports };
}
function structure(node) {
  const copy = {};
  for (const [key, value] of Object.entries(node)) {
    if (['position', 'data'].includes(key)) continue;
    if (key === 'children') copy.children = value.filter((child) => child.type !== 'text').map(structure);
    else if (key === 'value' && node.type === 'text') copy.value = '';
    else if (key === 'value' && node.type === 'code' && node.lang === 'text') copy.value = {
      identifiers: value.match(/\b[A-Z][a-z\d]*[A-Z][A-Za-z\d]*\b/g) ?? [],
      numbers: [...value.matchAll(/^\s*(?:\w+:\s*)?([+-]?\d+(?:\.\d+)?)\s*$/gm)].map((match) => match[1]),
      fields: [...value.matchAll(/^\s*([a-zA-Z_]\w*):/gm)].map((match) => match[1]),
    };
    else if (key === 'meta' && node.type === 'code') copy.meta = value?.replace(/title="[^"]*"/, 'title=""');
    else if (key === 'title' && ['link', 'image', 'definition'].includes(node.type)) copy.title = value === null ? null : '';
    else if (key === 'alt' && node.type === 'image') copy.alt = '';
    // MDX attributes also carry source positions, which change as prose is translated.
    else if (Array.isArray(value)) copy[key] = value.map((item) => item && typeof item === 'object' ? structure(item) : item);
    else copy[key] = value && typeof value === 'object' ? structure(value) : value;
  }
  return copy;
}
const tags = (value) => value.match(/<[^>]*>/g) ?? [];
const placeholders = (value) => (value.match(/\{\{[^}]+\}\}|\[[A-Z_]+\]/g) ?? []).sort();
export function validateTranslation(source, translated) {
  if (typeof translated !== 'string' || !translated.trim()) throw new Error(`${source.path}: empty translation`);
  if (/[\u00b7\u2014]|\p{Extended_Pictographic}|\p{Regional_Indicator}|\u20e3/u.test(translated) || /\[\^[^\]]+\]|(?:role|rel)=["'](?:doc-)?footnote/.test(translated)) throw new Error(`${source.path}: forbidden punctuation or footnotes`);
  if (source.path.endsWith('.json')) {
    const from = JSON.parse(source.content), to = JSON.parse(translated);
    if (!isDeepStrictEqual(Object.keys(from).sort(), Object.keys(to).sort())) throw new Error(`${source.path}: translation keys differ`);
    for (const [key, value] of Object.entries(from)) {
      if (typeof to[key] !== 'string' || !to[key].trim()) throw new Error(`${source.path}: missing text for ${key}`);
      if (!isDeepStrictEqual(tags(value), tags(to[key])) || !isDeepStrictEqual(placeholders(value), placeholders(to[key]))) throw new Error(`${source.path}: changed markup or placeholders in ${key}`);
    }
    return JSON.stringify(to, null, 2) + '\n';
  }
  const from = markdown(source.content), to = markdown(translated);
  for (const field of ['title', 'description']) {
    if (typeof to.frontmatter[field] !== 'string' || !to.frontmatter[field].trim()) throw new Error(`${source.path}: missing ${field}`);
    from.frontmatter[field] = to.frontmatter[field];
  }
  if (typeof from.frontmatter.sidebar?.label === 'string') {
    if (typeof to.frontmatter.sidebar?.label !== 'string' || !to.frontmatter.sidebar.label.trim()) throw new Error(`${source.path}: missing sidebar label`);
    from.frontmatter.sidebar.label = to.frontmatter.sidebar.label;
  }
  if (!isDeepStrictEqual(from.frontmatter, to.frontmatter)) throw new Error(`${source.path}: changed frontmatter configuration`);
  if (!isDeepStrictEqual(structure(from.tree), structure(to.tree))) throw new Error(`${source.path}: changed document structure, links, identifiers, or executable code`);
  return translated.trimEnd() + '\n';
}

// Keep English fragment identifiers stable across languages and localize internal document links.
export function remarkLocales() {
  return async (tree, file) => {
    const path = relative(join(process.cwd(), 'src/content/docs'), String(file.path)).split(sep).join('/');
    const locale = targetLocales.find(({ code }) => path.startsWith(`${code}/`));
    const original = locale ? await readFile(join(process.cwd(), 'src/content/docs', path.slice(locale.code.length + 1)), 'utf8') : '';
    const ids = locale ? headings(original) : [];
    const base = process.env.GITHUB_PAGES_PREVIEW === 'true' ? '/neohaskell.org' : '';
    const localize = (url) => `${base}${locale ? localePath(locale.code, url) : url}`;
    let index = 0;
    walk(tree, (node) => {
      if (locale && node.type === 'heading') {
        node.data ??= {};
        node.data.hProperties = { ...node.data.hProperties, id: ids[index++] };
      }
      if (node.type === 'link' && /^\/(?!\/)/.test(node.url) && !/\.[a-z\d]+(?:[?#]|$)/i.test(node.url)) node.url = localize(node.url);
      if (['mdxJsxFlowElement', 'mdxJsxTextElement'].includes(node.type) && node.name === 'a') {
        const href = node.attributes.find((attribute) => attribute.name === 'href');
        if (typeof href?.value === 'string' && /^\/(?!\/)/.test(href.value) && !/\.[a-z\d]+(?:[?#]|$)/i.test(href.value)) href.value = localize(href.value);
      }
    });
    if (locale && index !== ids.length) throw new Error(`${path}: translated heading count differs from English. Run npm run i18n:translate.`);
  };
}
