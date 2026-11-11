import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://neohaskell.org',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [starlight({
    title: 'NeoHaskell',
    description: 'A Haskell-based language and framework for building applications with clear, explicit behavior.',
    logo: { src: './public/logo.svg', replacesTitle: false },
    favicon: '/logo.svg',
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/neohaskell/NeoHaskell' }],
    customCss: ['./src/styles/docs.css'],
    components: { Head: './src/components/DocsHead.astro' },
    sidebar: [
      { label: 'Learn NeoHaskell', items: [{ label: 'Core concepts', slug: 'learn' }] },
      { label: 'Build an application', items: [{ label: 'Set up your agent', slug: 'getting-started' }] },
    ],
    editLink: undefined,
  })],
});
