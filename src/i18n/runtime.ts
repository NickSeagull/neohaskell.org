import english from './en/site.json';
import { localePath } from './locales.mjs';

export function sitePath(locale: string, path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const localPath = base && (path === base || path.startsWith(`${base}/`)) ? path.slice(base.length) || '/' : path;
  const localized = localePath(locale, localPath);
  return localized.startsWith('/') && !localized.startsWith('//') ? `${base}${localized}` : localized;
}

const catalogs = import.meta.glob<Record<string, string>>('./*/site.json', { eager: true, import: 'default' });
export function messages(locale = 'en') {
  const catalog = catalogs[`./${locale}/site.json`] ?? english;
  return (key: keyof typeof english) => catalog[key] ?? english[key];
}
