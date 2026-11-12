# NeoHaskell website

Astro + Starlight, with a custom homepage and static documentation. Local builds target `https://neohaskell.org`. GitHub Actions publishes a preview at `https://nickseagull.dev/neohaskell.org/`. GitHub redirects `https://nickseagull.github.io/neohaskell.org/` there because the account's Pages site uses a custom domain.

## Run locally

Use Node.js 24 (or Node.js 22.23.4+).

```sh
npm ci
npm run dev
```

`npm run build` checks Astro/TypeScript and generates `dist/`. `npm run preview` serves that production build. `npm test` verifies campaign-context handling, the illustrative order model, and the translation workflow.

## Main files

- `src/components/Home.astro`: shared homepage, navigation, and theme control for every language.
- `src/components/HomepageVisual.astro`: static application, event-history, pure-decision, and transport illustrations.
- `src/styles/home.css`: selected workshop identity in both themes.
- `src/content/docs/`: MDX guides for core concepts and installation/agent setup.
- `src/scripts/attribution.ts`: optional, screened five-field UTM context; same-origin navigation only, per-tab storage with a 30-minute expiry. No analytics service or durable backend events.

The homepage has no tutorial widget, replay control, scenario switcher, or concept-step interaction. Documentation teaches the vocabulary before AI-agent setup. The setup page includes a source-verified agent-skills command and links to the upstream framework environment instructions.

## Documentation

Open `/learn/` for core concepts or `/getting-started/` for agent setup. The pages use Starlight's native topic sidebar, title, search, contents outline, anchor navigation, and code copying. The article scrolls normally. Examples and outcome tables sit inline with the relevant explanation. The owner requested the Stripe Docs guide-page direction after rejecting the earlier snapping/shared-widget format.

`/resources/` collects verified setup, language/framework guidance, project status, releases, and community destinations. The setup guide distinguishes application preparation from agent-skills installation; it is not a verified zero-to-running-app walkthrough.

Author content directly in `src/content/docs/learn/index.mdx` and `src/content/docs/getting-started/index.mdx`. Reading styles live in `src/styles/docs.css`; prose is 18px and code/table examples are 16px. Concept snippets are explicitly illustrative plain text, not executable NeoHaskell or API payloads. Use `learning-example-review` as required by `AGENTS.md` when creating or materially changing examples. The earlier components in `src/components/learn/` and their scroll scripts are retired and are not imported by the pages.

## Translation workflow

English is the source of truth. Write documentation in `src/content/docs/` outside the language directories, homepage copy in `src/i18n/en/site.json`, and documentation controls in `src/content/i18n/en.json`. JSON keys are stable identifiers; change their English values when revising copy. Preserve inline markup in rich messages. Shared Astro components contain layout, not translations.

English keeps `/`, `/learn/`, `/getting-started/`, and `/resources/`. The other languages use `/es/` (Castilian Spanish), `/zh-cn/` (Simplified Chinese), `/ru/`, `/hy/` (Eastern Armenian), `/ja/`, `/de/`, `/fr/`, and `/pt/` (Portuguese from Portugal). `src/i18n/locales.mjs` owns this list. The language menu links to the same page and works without JavaScript. Internal documentation links retain the selected language; section anchors retain their English identifiers. Starlight supplies localized navigation, search, and code-copy controls.

1. Edit the English source and inspect pending translations:

   ```sh
   npm run i18n:check
   ```

2. Translate one language, or omit `--locale es` to update all eight:

   ```sh
   npm run i18n:translate -- --locale es
   ```

3. Verify freshness and build the website:

   ```sh
   npm run i18n:check -- --strict
   npm test
   npm run build
   ```

The translator requires an installed, authenticated Codex CLI (`codex login`). It invokes `codex exec --model gpt-6-luna -c 'model_reasoning_effort="max"'` once per language with pending work, passing all pending files in that one prompt. It uses an ephemeral read-only session, ignores user configuration while retaining Codex authentication, and requests a structured JSON response. There is no call for an up-to-date language, no session resume, and no automatic retry or fallback model. Languages run sequentially. This is one CLI execution per language, not a promise about the CLI's internal network requests. See [Codex non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode) and [GPT-6 Luna](https://developers.openai.com/api/docs/models/gpt-6-luna).

`i18n-manifest.json` records the source hash, translated-file hash, translation timestamp, model, and reasoning effort for each file. Source hashes include the English content, `GLOSSARY.md`, and the translation-policy version. An old translation remains current when its source is unchanged. New pages, changed English or glossary, missing output, and edited translation files become pending. `npm run i18n:check -- --json` exposes the report for automation; `--strict` exits with code 1 when work remains. Normal builds can use Starlight's English fallback for new, untranslated documents while you work.

All files in a language batch are validated before any are written. Validation checks JSON keys, markup, placeholders, MDX structure, configuration, links, inline identifiers, executable code, and the repository's copy rules. Prose in illustrative `text` fences is translated; shell commands are preserved. English-source changes during a running translation reject that result. Output files are replaced atomically and the manifest is written last, so interrupted work cannot appear current. A process lock prevents overlapping translation runs.

Failures keep the response, prompt, invocation metadata, and bounded Codex diagnostics under the ignored `.i18n/runs/` directory. Inspect that result before retrying. After correcting a validation issue, `node scripts/i18n.mjs apply --locale es --from .i18n/runs/<saved-run>` revalidates and applies the saved response without another Codex call. It rejects a response whose recorded source hashes no longer match the pending English revision. Each call has a 15-minute deadline. If a process was forcibly interrupted, check the PID in `.i18n/translate.lock/owner.json` before removing its abandoned lock. When deleting an English page, remove its translated copies and corresponding manifest entries; the checker reports these as orphaned and never deletes them automatically. Commit translations and `i18n-manifest.json` together. Review translated prose before publication; structural validation does not establish linguistic accuracy.

## Deployment

`.github/workflows/deploy.yml` checks translation freshness, builds on every push to `main` or manual dispatch, and publishes to the GitHub Pages project URL. Pending translations block deployment; CI never invokes Codex. The preview build uses `/neohaskell.org/` as its base path and omits the production `CNAME` and `robots.txt` files from the artifact. Local builds still use `https://neohaskell.org` without a base path. To reproduce the preview build locally, run `GITHUB_PAGES_PREVIEW=true npm run build`.

Framework references: [Starlight custom pages](https://starlight.astro.build/guides/pages/) and [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

## Assets and design

The original NeoHaskell logo is preserved in `public/logo.svg`. Sansation, Manrope, and Pixelify Sans are self-hosted; their open-font licenses are included in `public/fonts/`. Font sources: Google Fonts and its `google/fonts` repository. No generated raster artwork ships in the site.

`GLOSSARY.md` defines canonical vocabulary. The approved scope and direction contract are in `.impeccable/surfaces/src-pages-index-astro.md`. Earlier studies under `.impeccable/diagrams/` are review artifacts, not website features.

See [the design artifact policy](.impeccable/README.md) for what is committed from `.impeccable/`. Shared design records and approved references are versioned; generated captures, caches, logs, and unused explorations stay local.

## Agent quality standard

`AGENTS.md` applies the project-local [Unslop skill](.agents/skills/unslop/SKILL.md) to every task. Unslop is by [Damir Sokolovsky (@heydamir)](https://github.com/heydamir/unslop), licensed under CC BY 4.0. Its [installation record](.agents/skills/unslop/UPSTREAM.md) pins the source revision and documents browser tooling. After `npm ci`, run `npx playwright install chromium` to enable its snapshots.
