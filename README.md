# NeoHaskell website

Astro + Starlight, with a custom homepage and static documentation. The site targets `https://neohaskell.org` on GitHub Pages.

## Run locally

Use Node.js 24 (or Node.js 22.23.4+).

```sh
npm ci
npm run dev
```

`npm run build` checks Astro/TypeScript and generates `dist/`. `npm run preview` serves that production build. `npm test` verifies the bounded campaign-context handling and the illustrative order model.

## Main files

- `src/pages/index.astro`: homepage, navigation, and theme control.
- `src/components/EventLedger.astro`: one 3.8-second ecommerce animation; reduced motion and no JavaScript show the completed model.
- `src/components/DecisionExample.astro` and `src/examples/`: a real Counter decision excerpt with build-time highlighting, source attribution, and readable native scrolling on phones.
- `src/styles/home.css`: selected workshop identity in both themes.
- `src/content/docs/`: MDX guides for core concepts and installation/agent setup.
- `src/scripts/attribution.ts`: optional, screened five-field UTM context; same-origin navigation only, per-tab storage with a 30-minute expiry. No analytics service or durable backend events.

The homepage has no tutorial widget, replay control, scenario switcher, or concept-step interaction. Documentation teaches the vocabulary before AI-agent setup. The setup page includes a source-verified agent-skills command and links to the upstream framework environment instructions.

## Documentation

Open `/learn/` for core concepts or `/getting-started/` for agent setup. The pages use Starlight's native topic sidebar, title, search, contents outline, anchor navigation, and code copying. The article scrolls normally. Examples and outcome tables sit inline with the relevant explanation. The owner requested the Stripe Docs guide-page direction after rejecting the earlier snapping/shared-widget format.

`/resources/` collects verified setup, language/framework guidance, project status, releases, and community destinations. The setup guide distinguishes application preparation from agent-skills installation; it is not a verified zero-to-running-app walkthrough.

Author content directly in `src/content/docs/learn/index.mdx` and `src/content/docs/getting-started/index.mdx`. Reading styles live in `src/styles/docs.css`; prose is 18px and code/table examples are 16px. Concept snippets are explicitly illustrative plain text, not executable NeoHaskell or API payloads. Use `learning-example-review` as required by `AGENTS.md` when creating or materially changing examples. The earlier components in `src/components/learn/` and their scroll scripts are retired and are not imported by the pages.

## Deployment

`.github/workflows/deploy.yml` builds on `main` or manual dispatch and uploads the static artifact to GitHub Pages. The configured custom domain is in `public/CNAME`; no project subpath is used. Connect this checkout to the intended GitHub repository and enable Pages with GitHub Actions before deploying. This working session has not published the site or changed DNS.

Framework references: [Starlight custom pages](https://starlight.astro.build/guides/pages/) and [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

## Assets and design

The original NeoHaskell logo is preserved in `public/logo.svg`. Sansation, Manrope, and Pixelify Sans are self-hosted; their open-font licenses are included in `public/fonts/`. Font sources: Google Fonts and its `google/fonts` repository. No generated raster artwork ships in the site.

`GLOSSARY.md` defines canonical vocabulary. The approved scope and direction contract are in `.impeccable/surfaces/src-pages-index-astro.md`. Earlier studies under `.impeccable/diagrams/` are review artifacts, not website features.

See [the design artifact policy](.impeccable/README.md) for what is committed from `.impeccable/`. Shared design records and approved references are versioned; generated captures, caches, logs, and unused explorations stay local.

## Agent quality standard

`AGENTS.md` applies the project-local [Unslop skill](.agents/skills/unslop/SKILL.md) to every task. Unslop is by [Damir Sokolovsky (@heydamir)](https://github.com/heydamir/unslop), licensed under CC BY 4.0. Its [installation record](.agents/skills/unslop/UPSTREAM.md) pins the source revision and documents browser tooling. After `npm ci`, run `npx playwright install chromium` to enable its snapshots.
