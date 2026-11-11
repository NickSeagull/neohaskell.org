export const UTM_FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
type UtmField = typeof UTM_FIELDS[number];
type Fields = Partial<Record<UtmField, string>>;
type SessionStore = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
export const STORAGE_KEY = 'neohaskell:entry-context:v1';
const MAX_AGE_MS = 30 * 60 * 1000;

function safeValue(value: unknown): value is string {
  if (typeof value !== 'string' || !value.trim() || value.length > 256 || /[\x00-\x1f\x7f]/.test(value)) return false;
  if (/bearer\s|-----BEGIN|(?:password|passwd|secret|api[_-]?key|access[_-]?token)\s*[:=]|\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+|\b(?:sk|ghp|gho|github_pat)[_-][A-Za-z0-9_-]{12,}/i.test(value)) return false;
  if (/https?:\/\/[^\s/]*@/i.test(value)) return false;
  return true;
}

export function screenFields(params: URLSearchParams): Fields {
  const fields: Fields = {};
  for (const key of UTM_FIELDS) {
    const first = params.get(key);
    if (safeValue(first)) fields[key] = first;
  }
  return fields;
}

export interface EntryContext {
  version: 1;
  fields: Fields;
  source: 'entry_url_query';
  application: 'neohaskell.org';
  trust: 'browser_submitted';
  observedAt: string;
  expiresAt: number;
}

export function captureEntry(url: string, storage?: SessionStore, now = Date.now()): EntryContext {
  try {
    const raw = storage?.getItem(STORAGE_KEY);
    if (raw) {
      const prior = JSON.parse(raw);
      if (prior.version === 1 && prior.source === 'entry_url_query' && prior.application === 'neohaskell.org' && prior.trust === 'browser_submitted' && Number.isFinite(prior.expiresAt) && prior.expiresAt > now && prior.expiresAt <= now + MAX_AGE_MS && Number.isFinite(Date.parse(prior.observedAt)) && Date.parse(prior.observedAt) <= now && prior.fields && typeof prior.fields === 'object') {
        const fields: Fields = {};
        for (const key of UTM_FIELDS) if (safeValue(prior.fields[key])) fields[key] = prior.fields[key];
        if (Object.keys(fields).length) return { version: 1, fields, source: 'entry_url_query', application: 'neohaskell.org', trust: 'browser_submitted', observedAt: prior.observedAt, expiresAt: prior.expiresAt };
      }
      storage?.removeItem(STORAGE_KEY);
    }
  } catch { /* Attribution must not prevent navigation when storage is unavailable. */ }
  let fields: Fields = {};
  try { fields = screenFields(new URL(url).searchParams); } catch { /* An absent or invalid URL is optional context. */ }
  const snapshot: EntryContext = { version: 1, fields, source: 'entry_url_query', application: 'neohaskell.org', trust: 'browser_submitted', observedAt: new Date(now).toISOString(), expiresAt: now + MAX_AGE_MS };
  if (Object.keys(fields).length) {
    try { storage?.setItem(STORAGE_KEY, JSON.stringify(snapshot)); } catch { /* Links still carry screened fields. */ }
  }
  return snapshot;
}

export function carryToInternalLink(href: string, currentUrl: string, fields: Fields): string {
  try {
    const current = new URL(currentUrl);
    const target = new URL(href, current);
    if (target.origin !== current.origin || !['http:', 'https:'].includes(target.protocol) || href.startsWith('#')) return href;
    for (const key of UTM_FIELDS) {
      target.searchParams.delete(key);
      if (safeValue(fields[key])) target.searchParams.set(key, fields[key]);
    }
    return target.pathname + target.search + target.hash;
  } catch { return href; }
}

export function preserveAttribution() {
  let storage: SessionStore | undefined;
  try { storage = window.sessionStorage; } catch { /* Optional storage. */ }
  const snapshot = captureEntry(window.location.href, storage);
  const decorate = () => {
    for (const link of document.querySelectorAll<HTMLAnchorElement>('a[href]')) {
      if (link.hasAttribute('download')) continue;
      const href = link.getAttribute('href')!;
      const carried = carryToInternalLink(href, window.location.href, snapshot.fields);
      if (carried !== href) link.setAttribute('href', carried);
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', decorate, { once: true });
  else decorate();
  document.addEventListener('astro:page-load', decorate);
}
