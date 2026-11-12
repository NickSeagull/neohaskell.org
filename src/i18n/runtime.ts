import english from './en/site.json';
export { localePath } from './locales.mjs';

const catalogs = import.meta.glob<Record<string, string>>('./*/site.json', { eager: true, import: 'default' });
export function messages(locale = 'en') {
  const catalog = catalogs[`./${locale}/site.json`] ?? english;
  return (key: keyof typeof english) => catalog[key] ?? english[key];
}
