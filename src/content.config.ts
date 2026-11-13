import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { targetLocales } from './i18n/locales.mjs';

// Keep saved translations untouched while the documentation is authored in English.
// Starlight supplies its native English fallback until translation work resumes.
const documentationLoader = glob({
  base: './src/content/docs',
  pattern: ['**/[^_]*.{md,mdx}', ...targetLocales.map(({ code }) => `!${code}/**`)],
});

export const collections = {
  docs: defineCollection({ loader: documentationLoader, schema: docsSchema() }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
