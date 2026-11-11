import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://neohaskell.org',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [starlight({
    title: 'NeoHaskell',
    description: 'An AI-first programming language for applications with clear behavior and recorded history.',
    logo: { src: './public/logo.svg', replacesTitle: false },
    favicon: '/logo.svg',
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/neohaskell/NeoHaskell' }],
    customCss: ['./src/styles/docs.css'],
    components: { Head: './src/components/DocsHead.astro' },
    sidebar: [
      { label: 'Learn NeoHaskell', items: [{ label: 'Core concepts', slug: 'learn' }] },
      { label: 'Build an application', items: [{ label: 'Set up your agent', slug: 'getting-started' }] },
      { label: 'Explore the project', items: [{ label: 'Resources and project status', slug: 'resources' }] },
    ],
    editLink: undefined,
  })],
});
