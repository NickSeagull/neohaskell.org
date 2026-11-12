# Documentation experience

Status as of 2026-11-12: the researched architecture and page briefs are implemented in English and all eight existing translations. Astra approved the revised proposal; local verification passes and the final independent review returns Ship with no material implementation blockers. Owner acceptance of this final render remains unrecorded; deployment is tracked separately through GitHub Actions. The owner-approved 2026-11-09 guide format remains the visual baseline.

## Current direction

Use ordinary documentation: native topic navigation, search, readable continuous prose, inline examples, comparison tables, and an on-page contents outline when headings warrant one. The owner confirmed "Guide pages: flowing prose, inline code and examples" on 2026-11-09. Retain NeoHaskell's logo, Manrope, dark violet/cyan and daylight/violet identity, Astro Starlight, and existing hosting configuration. The 2026-11-12 request extends the documentation architecture and plans future content within that format.

## Content

The [approved proposal](../../docs/research/documentation-design-2026-11-12.md) defines 24 destinations in five native collapsible groups: Start here, Build an application, Solve a task, Understand the design, and Reference and help. The current group opens automatically. Previous/next navigation forms two bounded sequences: Core concepts to Set up your agent, and the four tutorial chapters. Independent guides, explanations, reference pages, the map, and Resources have no previous/next links.

`/docs/` is an explicitly titled Documentation plan with linked descriptions. It identifies `/learn/`, `/getting-started/`, and `/resources/` as existing guidance. Their substantive material and examples remain intact, with a final planning paragraph on each. Twenty new pages contain short briefs describing future explanations, examples, and figures. No finished lesson or widget is implied.

Keep page ownership distinct. Core concepts teaches recognition of commands, decisions, events, and queries. Setup owns the future machine-to-checked-project walkthrough, including prerequisites, toolchain versus skills, creation, launch, first response, and recovery. The tutorial first produces a shop specification, then implements one backend behavior and callable interface from that specification and checked project, tests it, and changes it. Implementation links to minimum syntax help. Event Modeling explains general boundaries and tradeoffs; the AI workflow guide explains reusable collaboration, review, and recovery. Neither repeats the tutorial.

Standalone briefs are excluded from Pagefind and external indexing. The map is internally searchable and externally noindexed. The three existing guides remain searchable, with their planning appendices ignored. Resources supplies usable upstream answers while the new material is planned. Built searches for storage, syntax, and CLI must reach useful existing content or the honestly titled map, never standalone briefs.

## Reading and examples

Native scrolling replaces snapping and viewport-height sections. Examples stay next to their explanations in document flow. Prose is 18px and essential code and tables are 16px. Desktop sidebar links have 36px single-line rows; phone links retain 44px rows. The map uses native definition lists and ordinary article spacing. Starlight owns navigation and the contents outline. Tables and code can scroll internally without shrinking text. No new teaching widget, scroll-linked state, or actual example was introduced in this scaffold.

Every future new or materially changed teaching example requires `learning-example-review` under `AGENTS.md`. Static examples are the default. Any later interaction must teach a specific causal relationship, work with keyboard and touch, and retain a readable static equivalent. Planning text does not establish executed NeoHaskell behavior.

## Verification and acceptance

The [second adversarial review](../reviews/docs-research-2026-11-12/astra-round-2.md) approved the proposal after resolving first-run ownership, page overlap, and discovery. The [final independent review](../reviews/docs-research-2026-11-12/final-review.md) returns Ship after inspecting saved results and eight final captures, superseding the initial English review's technical conditions. No material implementation blocker remains for this scaffold.

[Local verification](../reviews/docs-research-2026-11-12/verification.md) records 944 passing browser assertions with zero failures across 216 routes, covering 24 pages in nine languages. Production build and copy pass with zero Astro errors, warnings, or hints, and all 19 tests pass. Both bounded pagination sequences, internal links and fragments, language switching, keyboard phone navigation, search and focus restoration, exact existing command copying, and no-JavaScript reading pass. English and Spanish searches return existing guidance or the honestly titled map; standalone briefs and planning appendices stay excluded.

The layout checks cover 48 English cases from 320px to 1600px in both themes and 32 translated desktop/phone cases. The final reviewer inspected eight English, Spanish, Chinese, and Armenian captures. A 720 CSS-pixel viewport verifies reflow equivalent to a 1440px window at 200% zoom; native browser zoom and comprehensive accessibility conformance were not audited.

Strict localization checks find all 26 source records current in each of the eight target locales, with no pending or orphaned records. Existing translated homepage values and substantive guide text remain byte-for-byte preserved apart from new pagination settings and planning appendices. Translation parity and visual checks do not establish native editorial quality; no native editorial review is recorded. Owner acceptance of the final render remains unrecorded. Public deployment is tracked through GitHub Actions, separately from reviewer approval. No NeoHaskell runtime was executed.

## Accepted baseline and scope

On 2026-11-09, the owner accepted the guide-page direction with "yes, this is much better" and "looks good" for setup. That baseline passed a build and 39 browser checks, with a fresh ship/keep review after improving narrow-screen Copy and wrapping the installation command. Evidence: `.impeccable/review/stripe-docs/`. Those results do not validate the expanded 2026-11-12 scaffold. The rejected snapping, persistent widget, and vertically centered lesson remain retired; `shared-widget/` and `vertical-center/` captures are historical.

This task does not change the homepage. Its accepted benefits-led direction is recorded in `PRODUCT.md` and `.impeccable/surfaces/src-pages-index-astro.md`; the former homepage outline in this documentation brief is superseded by those records.
