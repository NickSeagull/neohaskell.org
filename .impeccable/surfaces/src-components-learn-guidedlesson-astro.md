---
version: 1
slug: "src-components-learn-guidedlesson-astro"
primary_target: "src/content/docs/docs/index.mdx"
related_targets:
  - "src/content/docs/learn/index.mdx"
  - "src/content/docs/getting-started/index.mdx"
  - "src/content/docs/resources.mdx"
  - "src/content/docs/tutorial/index.mdx"
  - "src/content/docs/tutorial/first-feature/index.mdx"
  - "src/content/docs/tutorial/test-behavior/index.mdx"
  - "src/content/docs/tutorial/change-safely/index.mdx"
  - "src/content/docs/guides/ai-workflow/index.mdx"
  - "src/content/docs/guides/transports/index.mdx"
  - "src/content/docs/guides/storage/index.mdx"
  - "src/content/docs/guides/authorization/index.mdx"
  - "src/content/docs/guides/integrations/index.mdx"
  - "src/content/docs/guides/files/index.mdx"
  - "src/content/docs/guides/deployment/index.mdx"
  - "src/content/docs/concepts/event-modeling/index.mdx"
  - "src/content/docs/concepts/history-and-state/index.mdx"
  - "src/content/docs/concepts/pure-decisions/index.mdx"
  - "src/content/docs/reference/language/index.mdx"
  - "src/content/docs/reference/core/index.mdx"
  - "src/content/docs/reference/framework/index.mdx"
  - "src/content/docs/reference/cli/index.mdx"
  - "src/content/docs/reference/configuration/index.mdx"
  - "src/content/docs/reference/errors/index.mdx"
  - "src/styles/docs.css"
  - "astro.config.mjs"
---

# NeoHaskell documentation guides

Mode: Read. The stable brief filename is retained for existing references; it targets the current documentation map and MDX guides. User-pinned canon: Stripe Docs guide pages. Reference captures: `.impeccable/review/stripe-docs/stripe-guide.png` and `stripe-api.png`. The owner explicitly confirmed "Guide pages: flowing prose, inline code and examples" on 2026-11-09 and accepted that baseline with "yes, this is much better". The 2026-11-12 request extends its architecture with researched page plans. It does not establish owner acceptance of the expanded render. No new concept roll is required for this extension. Inherited identity seed: 17e1b5de.

THESIS: Find the right documentation for a first journey, a task, an explanation, or a reference question; examples support the article. The present scaffold clearly distinguishes existing guidance from future page plans.

OWN-WORLD: Stripe's conventional guide structure in NeoHaskell's original logo, Manrope, dark violet/cyan and daylight/violet identity. Fine separators and restrained code frames; no simulation console or decorative material.

STORY: Understand commands, decisions, events, and queries through one ceramic-mug order. The planned first journey then creates a checked project, specifies one shop feature, implements its backend behavior and callable interface, tests accepted/rejected outcomes, and changes one requirement. Independent task guides and reference pages serve returning readers. These future steps are briefs, not completed tutorials.

FIRST VIEWPORT: Site header and search, five native collapsible topic groups, a clear article title and introduction, and a right local contents outline when useful. The current group expands automatically. The Documentation plan identifies the three existing guides in its main prose, followed by linked definition lists. A short brief has one Page plan paragraph and no empty outline. On phones the article fills the width and native Starlight controls expose navigation and the outline.

FORM: Continuous MDX prose and native scrolling, ordinary content-driven spacing, inline code and comparison tables. No snapping, full-screen sections, fixed/shared teaching widget, or scroll-driven state. Keep 18px prose and 16px code/tables; horizontal scrolling stays inside code/table content when necessary. Sidebar links use 36px single-line desktop rows and 44px phone rows. The map uses native definition lists with 24px block margins, 20px before terms, and 4px before descriptions. Existing guides add a final planning section after 48px. Homepage, existing examples, and screened UTM handling are unchanged. The 2026-11-09 rejection still supersedes all former widget and slide-like layout requirements.

FINISH: Keep proposal approval, visual review, technical checks, and owner acceptance distinct. The current scaffold passes local build, copy, localization, desktop/phone/light/dark, 320px, reflow-equivalent 200%, navigation/search/copy, and translated-view checks as recorded below; the final review returns Ship. No image comp is required for this Read surface. A new or materially changed teaching example requires its own fresh `learning-example-review`; this scaffold changes none. Preserve homepage canon.

## Resource discovery extension, 11 November 2026

The owner's comparison-and-build workflow extends the guide set with `/resources/`. Keep the same continuous reading surface and native navigation. Expose verified CLI, syntax, framework, testing, storage, authorization, release, and contribution destinations. Correct the setup guide's generic README handoff and align its introductory positioning with the AI-first language. This extends the earlier two-route scope; it does not replace the accepted guide format or create an interactive lesson. A complete first-run walkthrough remains unverified.

## Research and architecture extension, 12 November 2026

The owner requested researched documentation architecture and short planning paragraphs after adversarial review. The [proposal](../../docs/research/documentation-design-2026-11-12.md) defines 24 destinations: `/docs/`, the three preserved substantive guides, and 20 new page briefs. Start here, Build an application, Solve a task, Understand the design, and Reference and help organize them without adding a custom navigation system. Previous/next links form two bounded sequences: Core concepts to Set up your agent, and the four tutorial chapters. Independent guides, explanations, reference pages, the map, and Resources have no previous/next links.

Preserve the reviewed ownership boundaries. Core concepts explains the vocabulary. Setup owns the complete future first-run path to a checked project. The tutorial model supplies a concrete shop specification, and implementation starts from that specification and project with direct syntax help. Event Modeling owns general tradeoffs; the AI workflow guide owns reusable collaboration and recovery. The tutorial promises one backend behavior and callable interface, not a complete frontend or production course.

Standalone briefs use `pagefind: false` and `noindex`. The Documentation plan is internally searchable and externally noindexed. Planning appendices on the existing guides use `data-pagefind-ignore`; the guides remain useful search results. Resources links to current upstream answers. Built English storage, syntax, and CLI searches and representative Spanish topic searches reach existing guides or the map, never standalone briefs. The planning-only sentinel query returns no results.

The [second Astra review](../reviews/docs-research-2026-11-12/astra-round-2.md) approved the proposal after three revisions. The [final independent review](../reviews/docs-research-2026-11-12/final-review.md) returns Ship, superseding the initial English review's technical conditions. It inspected saved results and eight final English, Spanish, Chinese, and Armenian captures and found no material implementation blockers.

[Local verification](../reviews/docs-research-2026-11-12/verification.md) passes: 24 pages in nine languages produce 216 valid routes, with 944 browser assertions and zero failures. All 19 tests pass; production build and copy pass with zero Astro errors, warnings, or hints. Strict freshness checks find all 26 source records current in each of the eight target locales. Both pagination sequences, internal links and fragments, language switching, search, keyboard phone navigation, existing Copy, and no-JavaScript reading pass. Forty-eight English layout cases span 320px to 1600px in both themes; 32 translated cases cover desktop and phone. The 720 CSS-pixel check verifies reflow equivalent to 200% zoom in a 1440px window, not native browser zoom.

Existing translated homepage values and substantive guide text remain byte-for-byte preserved apart from new pagination settings and planning appendices. Native editorial translation review, comprehensive accessibility conformance, and NeoHaskell runtime execution are not established. Owner acceptance of the expanded render remains unrecorded. Public deployment is tracked through GitHub Actions, separately from reviewer approval.
