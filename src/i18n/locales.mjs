export const locales = [
  { code: 'en', lang: 'en', label: 'English', name: 'English' },
  { code: 'es', lang: 'es', label: 'Español', name: 'Castilian Spanish (Spain)' },
  { code: 'zh-cn', lang: 'zh-CN', label: '简体中文', name: 'Simplified Chinese' },
  { code: 'ru', lang: 'ru', label: 'Русский', name: 'Russian' },
  { code: 'hy', lang: 'hy', label: 'Հայերեն', name: 'Eastern Armenian' },
  { code: 'ja', lang: 'ja', label: '日本語', name: 'Japanese' },
  { code: 'de', lang: 'de', label: 'Deutsch', name: 'German' },
  { code: 'fr', lang: 'fr', label: 'Français', name: 'French' },
  { code: 'pt', lang: 'pt', label: 'Português', name: 'Portuguese (Portugal)' },
];

export const targetLocales = locales.filter(({ code }) => code !== 'en');
export function localeByCode(code) {
  const locale = locales.find((locale) => locale.code === code);
  if (!locale) throw new Error(`Unknown locale: ${code}`);
  return locale;
}

export function localePath(locale, path = '/') {
  localeByCode(locale);
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const prefix = path.split('/')[1];
  if (targetLocales.some(({ code }) => code === prefix)) path = path.slice(prefix.length + 1) || '/';
  return locale === 'en' ? path : `/${locale}${path}`;
}
