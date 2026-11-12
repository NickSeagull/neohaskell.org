import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import { readFileSync, existsSync } from 'node:fs';
import { locales, targetLocales } from './src/i18n/locales.mjs';
import { remarkLocales } from './scripts/i18n-lib.mjs';
import english from './src/i18n/en/site.json' with { type: 'json' };

const catalogs = Object.fromEntries(targetLocales.map(({ code }) => {
  const path = new URL(`./src/i18n/${code}/site.json`, import.meta.url);
  return [code, existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : english];
}));
const group = (key, slugs) => ({
  label: english[key],
  translations: Object.fromEntries(targetLocales.map(({ code, lang }) => [lang, catalogs[code][key] ?? english[key]])),
  collapsed: true,
  items: slugs.map((slug) => ({ slug })),
});

export default defineConfig({
  site: process.env.GITHUB_PAGES_PREVIEW === 'true' ? 'https://nickseagull.dev' : 'https://neohaskell.org',
  base: process.env.GITHUB_PAGES_PREVIEW === 'true' ? '/neohaskell.org' : '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  markdown: { processor: unified({ remarkPlugins: [remarkLocales] }) },
  integrations: [starlight({
    title: 'NeoHaskell',
    description: 'An AI-first programming language for applications with clear behavior and recorded history.',
    logo: { src: './public/logo.svg', replacesTitle: false },
    favicon: '/logo.svg',
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/neohaskell/NeoHaskell' }],
    customCss: ['./src/styles/docs.css'],
    defaultLocale: 'root',
    locales: Object.fromEntries(locales.map(({ code, label, lang }) => [code === 'en' ? 'root' : code, { label, lang }])),
    components: { Head: './src/components/DocsHead.astro', LanguageSelect: './src/components/DocsLanguagePicker.astro' },
    sidebar: [
      group('docs.start', ['docs', 'learn', 'getting-started']),
      group('docs.tutorial', ['tutorial', 'tutorial/first-feature', 'tutorial/test-behavior', 'tutorial/change-safely']),
      group('docs.guides', ['guides/ai-workflow', 'guides/transports', 'guides/storage', 'guides/authorization', 'guides/integrations', 'guides/files', 'guides/deployment']),
      group('docs.concepts', ['concepts/event-modeling', 'concepts/history-and-state', 'concepts/pure-decisions']),
      group('docs.reference', ['reference/language', 'reference/core', 'reference/framework', 'reference/cli', 'reference/configuration', 'reference/errors', 'resources']),
    ],
    editLink: undefined,
  })],
});
