---
version: 1
slug: src-components-learn-guidedlesson-astro
primary_target: src/content/docs/introduction/index.mdx
related_targets:
  - src/components/learn/EventModelTour.astro
  - src/components/learn/GrowthComparison.astro
  - src/components/learn/ShopEventModel.astro
  - src/styles/diagram-colors.css
  - src/content/docs/docs/index.mdx
  - src/content/docs/learn/index.mdx
  - src/content/docs/getting-started/installation/index.mdx
  - src/content/docs/getting-started/create-project/index.mdx
  - src/content/docs/getting-started/run/index.mdx
  - src/content/docs/getting-started/first-response/index.mdx
  - src/content/docs/getting-started/project-files/index.mdx
  - src/content/docs/getting-started/index.mdx
  - src/content/docs/getting-started/troubleshooting/index.mdx
  - src/content/docs/tutorial/index.mdx
  - src/content/docs/tutorial/first-feature/index.mdx
  - src/content/docs/tutorial/decide-orders/index.mdx
  - src/content/docs/tutorial/stock-query/index.mdx
  - src/content/docs/tutorial/http-orders/index.mdx
  - src/content/docs/tutorial/test-behavior/index.mdx
  - src/content/docs/tutorial/change-safely/index.mdx
  - src/content/docs/guides/ai-workflow/index.mdx
  - src/content/docs/guides/transports/index.mdx
  - src/content/docs/guides/transports/mcp/index.mdx
  - src/content/docs/guides/transports/cli/index.mdx
  - src/content/docs/guides/storage/index.mdx
  - src/content/docs/guides/storage/query-rebuilds/index.mdx
  - src/content/docs/guides/files/index.mdx
  - src/content/docs/guides/files/generated-documents/index.mdx
  - src/content/docs/guides/storage/erase-protected-values/index.mdx
  - src/content/docs/guides/authentication/index.mdx
  - src/content/docs/guides/authorization/index.mdx
  - src/content/docs/guides/authorization/query-access/index.mdx
  - src/content/docs/guides/integrations/index.mdx
  - src/content/docs/guides/integrations/inbound-workers/index.mdx
  - src/content/docs/guides/integrations/oauth-connections/index.mdx
  - src/content/docs/guides/deployment/index.mdx
  - src/content/docs/guides/deployment/readiness-and-failures/index.mdx
  - src/content/docs/concepts/event-modeling/index.mdx
  - src/content/docs/concepts/command-outcomes/index.mdx
  - src/content/docs/concepts/entities-and-streams/index.mdx
  - src/content/docs/concepts/history-and-state/index.mdx
  - src/content/docs/concepts/query-projections/index.mdx
  - src/content/docs/concepts/pure-decisions/index.mdx
  - src/content/docs/concepts/event-driven-workflows/index.mdx
  - src/content/docs/concepts/identity-and-permissions/index.mdx
  - src/content/docs/reference/language/index.mdx
  - src/content/docs/reference/language/types/index.mdx
  - src/content/docs/reference/core/index.mdx
  - src/content/docs/reference/core/containers/index.mdx
  - src/content/docs/reference/core/results/index.mdx
  - src/content/docs/reference/core/tasks/index.mdx
  - src/content/docs/reference/core/json/index.mdx
  - src/content/docs/reference/framework/index.mdx
  - src/content/docs/reference/framework/commands/index.mdx
  - src/content/docs/reference/framework/entities/index.mdx
  - src/content/docs/reference/framework/queries/index.mdx
  - src/content/docs/reference/framework/transports/index.mdx
  - src/content/docs/reference/cli/index.mdx
  - src/content/docs/reference/cli/model-tools/index.mdx
  - src/content/docs/reference/cli/agent-commands/index.mdx
  - src/content/docs/reference/configuration/index.mdx
  - src/content/docs/reference/configuration/project/index.mdx
  - src/content/docs/reference/errors/index.mdx
  - src/content/docs/reference/errors/runtime/index.mdx
  - src/content/docs/resources.mdx
  - src/styles/docs.css
  - astro.config.mjs
  - src/components/Home.astro
  - src/content.config.ts
---

# NeoHaskell documentation guides

Mode: Read. This stable filename targets the native MDX documentation, not a retired teaching widget. The owner accepted conventional Stripe Docs guide pages on 9 November 2026. Preserve NeoHaskell's original logo, Manrope, dark violet/cyan and daylight/violet identity. On 13 November the owner accepted the concrete 61-page index, requested all groups open on entry, and added an Event Modeling introduction before code or setup. Translation is postponed until documentation is complete. Inherited identity seed: 17e1b5de.

THESIS: Understand application behavior with the people who know the business, then carry that model into NeoHaskell and find concrete development tasks.

OWN-WORLD: Native documentation navigation, continuous articles, quiet separators, and readable inline code. No decorative cards, simulation console, or teaching companion.

STORY: Follow one mug-order story through five diagrams, agree its behavior with business stakeholders, learn the core concepts, check the supplied Counter starter, and then build a shop feature through a decision, query, HTTP interface, tests, and one policy change. Independent guides and reference serve returning readers. Most destinations remain explicit plans.

FIRST VIEWPORT: Header and search, native left topic navigation, article title and main prose, and a right outline when useful. Five top-level sections contain 62 destinations. Start here, tutorial, and concepts are flat. Guides and reference each use five subgroups. All 15 groups are initially expanded, with native manual collapse controls and desktop session restoration. The desktop sidebar is 18rem wide; selected links retain the accepted accent. Phone navigation uses the native Starlight menu and wrapping labels.

FORM: Continuous MDX prose and native scrolling. Preserve 18px prose and 16px essential code and tables. Links and disclosure controls have minimum 36px desktop and 44px phone rows. The map uses native definition lists with existing spacing. Each standalone brief has one Page plan paragraph and no empty outline. The introduction has five static HTML/SVG diagrams with 16px minimum text: customer experience, command/decision/event, query answers, a conceptual effort comparison, and a connected Event Model. Promotional opening slogans are removed. Domain colors follow src/styles/diagram-colors.css and vocabulary follows GLOSSARY.md. The Event Model preserves its connections on phones with native horizontal scrolling and keyboard access. The entry label is Design your application. Author mentions and the paper exercise are removed by owner direction. Existing guides preserve their substantive content and examples, with updated planning appendices and the new previous-page link from Core concepts. No snapping, viewport-height sections, persistent widget, or scroll-linked state.

FLOW: An eight-page first-project sequence starts with the introduction; the shop tutorial retains seven pages. Homepage primary documentation links enter the introduction. The Core concepts article still links directly to usable agent setup. Independent pages have no unrelated previous/next links. All previous URLs remain valid. Native language switching preserves destinations; draft content uses English fallback while saved translations remain untouched.

DISCOVERY: Standalone plans are excluded from Pagefind and external indexing. The honestly titled Documentation plan remains internally searchable and externally noindexed. Existing guides remain searchable with planning appendices ignored. Resources provides current usable upstream destinations at its documented revisions.

EVIDENCE: The [integrated proposal](../../docs/research/sidebar-2026-11-13/integrated.json), [five source investigations](../../docs/research/sidebar-2026-11-13/README.md), and [adversarial approval](../reviews/sidebar-2026-11-13/proposal-review.md) own the current architecture. They pin framework source to 033ae4a and distinguish main from release and starter identities. The current rebuild brief explicitly documents name-based hashes. The introduction research additionally verifies the implemented visual IDE and code-to-model synchronization. No runtime execution is implied.

FINISH: The previous navigation and table-introduction verification is under `.impeccable/reviews/event-modeling-2026-11-13/`. The owner's visual-tour correction supersedes that introduction. Fresh visual-first teaching review returns keep after one correction round. All 19 tests, 24 targeted browser checks, and the production build pass; evidence is under `.impeccable/reviews/event-modeling-tour-2026-11-13/`. The owner accepted the concrete 61-page structure; acceptance of the new visual tour remains separate. Later material teaching-example changes require a fresh learning-example-review. Existing homepage copy and visuals remain unchanged.

## Earlier evidence

The 9 November accepted guide baseline is recorded in `.impeccable/review/stripe-docs/`. The 12 November 24-page scaffold is recorded in `.impeccable/reviews/docs-research-2026-11-12/`. Those reviews are historical and do not validate the current expanded implementation. The owner correction supersedes their sidebar granularity while retaining the accepted guide format.

## Color, vocabulary, and diagram correction, 13 November 2026

The owner requested two separate growth and Event Model sections using supplied visual references, plus reusable skills for domain colors, terminology, and inline Event Models. These replace the earlier repeated four-stage slice figure. Evidence is in `.impeccable/reviews/diagram-language-2026-11-13/`. Keep changes local until the owner requests publication.
