# Documentation experience

Status on 13 November 2026: the owner found the 24-page index too sparse and generic. Five Astra researchers inspected one section each against current NeoHaskell source and official documentation. A separate adversarial review approved the revised 61-page proposal after two corrections. The English scaffold is implemented; translation and final production verification are in progress. Owner acceptance of this expanded render remains unrecorded.

## Current direction

Use ordinary documentation with native topic navigation, search, continuous prose, inline examples, and an on-page outline when headings warrant one. The owner accepted this guide format on 9 November 2026. Preserve the original logo, Manrope, violet/cyan and daylight/violet palette, Astro Starlight, and hosting. The current correction changes information structure and concrete page responsibilities.

The [integrated proposal](../../docs/research/sidebar-2026-11-13/integrated.json) defines 61 destinations in five sections. Start here has nine; Build a mug shop has seven; Solve a task has 17; Understand the design has eight; Reference and help has 20. All 24 existing URLs remain. Task guides and reference use five subgroups each. The other sections remain flat. Native disclosures open the current branch, with no depth beyond section, subgroup, and page.

The desktop sidebar is 18rem wide. Links and disclosure controls have minimum 36px desktop and 44px phone rows, with wrapping labels. Preserve 18px prose, 16px essential code and tables, native scrolling, selected-link treatment, and ordinary article spacing. No new widget, runtime control, teaching code, or figure is implemented by this scaffold.

## Content and handoffs

Start here separates installation, project creation, launch, the first Counter response, project files, agent setup, and recovery. Counter is the supplied starter. The tutorial then implements one ceramic-mug shop feature through its specification, state/events, decision, query, HTTP interface, tests, and a stock-reserve policy change. These are planning paragraphs, not completed lessons.

Two bounded seven-page sequences connect the planned first project and the shop tutorial. The existing Core concepts article still links directly to the substantive agent setup article. The map, setup recovery, independent task guides, concepts, and reference have no unrelated previous/next navigation.

Guides separate HTTP, MCP, and application CLI; event history and query persistence; authentication, command permissions, and query access; provider OAuth; uploads and generated files; inbound and outbound integrations; and deployment and readiness. Concepts explain the mechanisms and boundaries. Reference owns syntax, common types and operations, framework contracts, CLI options, and configuration. Filtering and pagination belong to query-reference sections. The rebuild guide explicitly records that current hashes are name-based, so changing projection code alone does not invalidate saved progress.

`/docs/` remains explicitly titled Documentation plan and links each destination with the question it will answer. `/learn/`, `/getting-started/`, and `/resources/` retain their useful existing content and examples, with updated final planning paragraphs. The other pages contain one future-content paragraph. Standalone plans remain excluded from Pagefind and external indexing. The map is searchable internally and noindexed externally. Existing guides remain searchable with planning appendices ignored. Resources provides usable upstream instructions while plans are unfinished.

## Source and review boundaries

Research is pinned to [NeoHaskell main at 033ae4a](https://github.com/neohaskell/NeoHaskell/tree/033ae4a570686cd885ca14c6595997d9498d5287), resolved on 13 November 2026. The [five reports and integrated decisions](../../docs/research/sidebar-2026-11-13/README.md) preserve file-and-line evidence. Main, the starter's framework pin, published CLI releases, and agent-skills versions are distinct. Existing substantive instructions retain their earlier pinned evidence. No NeoHaskell runtime was executed.

The [proposal review](../reviews/sidebar-2026-11-13/proposal-review.md) approved the final architecture and paragraph responsibilities. Proposal approval, rendered review, technical verification, publication, and owner acceptance are separate. Final implementation evidence belongs to `.impeccable/reviews/sidebar-2026-11-13/`.

Any future new or materially changed teaching example requires `learning-example-review` under AGENTS.md. Static examples are the default. Later interaction must teach a specific causal relationship, work with keyboard and touch, and retain a readable static equivalent.

## Preserved baseline and history

The owner accepted the guide-page direction on 9 November with "yes, this is much better" and "looks good" for setup. Its evidence is `.impeccable/review/stripe-docs/`. The rejected snapping, persistent widget, and vertically centered lesson remain retired. The homepage is outside this correction and retains its benefits-led direction in PRODUCT.md and its own surface brief.

The 12 November scaffold had 24 destinations, nine languages, two shorter sequences, 19 passing tests, and 944 browser assertions. Its [final review](../reviews/docs-research-2026-11-12/final-review.md) and [verification](../reviews/docs-research-2026-11-12/verification.md) remain historical evidence. Those results do not validate the current 61-page scaffold. The clean checkpoint for this correction is dfc5554cdd2c9411430dd4e1fdb4c173cd188ef5.
