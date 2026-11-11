import test from 'node:test';
import assert from 'node:assert/strict';
import { captureEntry, carryToInternalLink, screenFields, STORAGE_KEY, UTM_FIELDS } from '../src/scripts/attribution.ts';
const makeStore = () => {
  const data = new Map();
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value), removeItem: key => data.delete(key) };
};

test('all five fields survive entry and navigation without replacing the original observation', () => {
  const store = makeStore();
  const url = 'https://neohaskell.org/?utm_source=docs&utm_medium=link&utm_campaign=launch&utm_term=events&utm_content=hero';
  const first = captureEntry(url, store, 1_000_000);
  const next = captureEntry('https://neohaskell.org/learn/', store, 1_010_000);
  assert.deepEqual(next, first);
  const carried = new URL(carryToInternalLink('/getting-started/#agent', url, next.fields), url);
  for (const field of UTM_FIELDS) assert.equal(carried.searchParams.get(field), first.fields[field]);
  assert.equal(carried.hash, '#agent');
});

test('first occurrence wins, including rejected or empty first values', () => {
  const fields = screenFields(new URLSearchParams('utm_source=first&utm_source=second&utm_medium=&utm_medium=link'));
  assert.deepEqual(fields, { utm_source: 'first' });
});

test('only bounded, decoded, secret-screened allowlisted values are retained', () => {
  const bad = ['a'.repeat(257), 'line\nbreak', 'Bearer synthetic-test-token', 'password=example', 'https://user:pass@example.invalid/', 'sk_synthetic_secret_example', 'eyJhbGciOiJIUzI1NiJ9.c3ludGhldGlj.c2lnbmF0dXJl'];
  for (const value of bad) {
    const store = makeStore();
    const url = new URL('https://neohaskell.org/');
    url.searchParams.set('utm_source', value);
    url.searchParams.set('utm_medium', 'safe');
    url.searchParams.set('auth_code', 'synthetic-private');
    const result = captureEntry(url.href, store);
    assert.deepEqual(result.fields, { utm_medium: 'safe' });
    const saved = store.getItem(STORAGE_KEY);
    assert.ok(!saved.includes(value));
    assert.ok(!saved.includes('synthetic-private'));
  }
});

test('missing context and inaccessible storage do not block navigation', () => {
  const broken = { getItem() { throw Error('denied'); }, setItem() { throw Error('denied'); }, removeItem() { throw Error('denied'); } };
  assert.deepEqual(captureEntry('https://neohaskell.org/', broken).fields, {});
  assert.equal(carryToInternalLink('/learn/', 'https://neohaskell.org/', {}), '/learn/');
  assert.equal(captureEntry('https://neohaskell.org/?utm_source=example', broken).fields.utm_source, 'example');
});

test('external, fragment and non-HTTP links never receive campaign values', () => {
  for (const href of ['https://github.com/neohaskell/NeoHaskell', '#main', 'mailto:hello@example.invalid']) {
    assert.equal(carryToInternalLink(href, 'https://neohaskell.org/', { utm_source: 'example' }), href);
  }
});

test('expired context is removed and a new entry can be captured', () => {
  const store = makeStore();
  captureEntry('https://neohaskell.org/?utm_source=old', store, 1000);
  const next = captureEntry('https://neohaskell.org/?utm_source=new', store, 2_000_000);
  assert.equal(next.fields.utm_source, 'new');
  assert.equal(next.observedAt, new Date(2_000_000).toISOString());
});
