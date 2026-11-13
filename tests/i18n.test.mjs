import test from 'node:test';
import assert from 'node:assert/strict';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import { remarkStableHeadings } from '../scripts/remark-stable-headings.mjs';
import { localePath } from '../src/i18n/locales.mjs';

function headings(content) {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(content);
  remarkStableHeadings()(tree);
  return tree.children.filter(node => node.type === 'heading');
}

test('language links preserve page, query and anchor without double prefixes', () => {
  assert.equal(localePath('es', '/introduction/history/#record-what-happened'), '/es/introduction/history/#record-what-happened');
  assert.equal(localePath('ja', '/es/learn/?a=1#commands'), '/ja/learn/?a=1#commands');
  assert.equal(localePath('en', '/zh-cn/'), '/');
  assert.equal(localePath('fr', 'https://example.com/a'), 'https://example.com/a');
  assert.equal(localePath('de', '//example.com'), '//example.com');
  assert.throws(() => localePath('xx', '/'));
});

test('heading anchors survive independent edits and reordered translated sections', () => {
  const english = headings('## History <a id="history" />\n\n## Added later\n\n## Commands <a id="commands" />');
  const spanish = headings('## Pedir cambios <a id="commands" />\n\n## Hechos registrados <a id="history" />');
  assert.deepEqual(english.map(node => node.data?.hProperties.id), ['history', undefined, 'commands']);
  assert.deepEqual(spanish.map(node => node.data.hProperties.id), ['commands', 'history']);
  assert.equal(spanish[0].children[0].value, 'Pedir cambios');
  assert.equal(spanish[0].children.length, 1, 'the marker adds no visible link or extra anchor');
});

test('ordinary headings and actual links keep native Markdown behavior', () => {
  const nodes = headings('## Native heading\n\n## [Guide](../guide/)\n\n## Link <a id="link" href="../guide/">Guide</a>');
  assert.ok(nodes.every(node => !node.data?.hProperties?.id));
  assert.equal(nodes[1].children[0].url, '../guide/');
  assert.equal(nodes[2].children.at(-1).attributes.find(a => a.name === 'href').value, '../guide/');
});
