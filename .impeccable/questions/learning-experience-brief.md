# Documentation experience

Status on 13 November 2026: the owner accepted the concrete 61-page navigation, requested every sidebar group expanded on entry, and asked for a motivating Event Modeling introduction before code or installation. Translation is explicitly postponed until the documentation is complete. The current implementation has 62 pages, an English introduction, and native English fallback at the other locale routes. The owner subsequently corrected the initial table-and-exercise introduction toward a visual tour. The current article uses four static diagrams, removes author mentions and the paper exercise, and introduces terminology through the example. Its fresh rendered review and targeted verification are recorded separately from the earlier navigation pass.

## Current direction

Preserve ordinary documentation with native navigation, search, continuous prose, inline examples, and an on-page outline where useful. The accepted guide format, original logo, Manrope, violet/cyan and daylight/violet palette, Astro Starlight, and hosting remain. The correction changes specificity, entry order, and initial navigation state.

Five sections contain 62 destinations: Start here has ten, Build a mug shop seven, Solve a task 17, Understand the design eight, and Reference and help 20. Guides and reference each have five subgroups. All 15 native disclosures are initially open, including subgroups. Readers can collapse them normally; native desktop session restoration retains their explicit choices. All 24 original routes remain valid.

The desktop sidebar is 18rem wide. Links and disclosure controls retain minimum 36px desktop and 44px phone rows, wrapping labels, native scrolling, and the selected-link treatment. Preserve 18px prose and 16px essential code and tables. No teaching widget or runtime control is added.

## Entry and content

The homepage's main documentation links enter `/introduction/`, labeled Design your application in navigation. The article motivates the developer's role in agreeing application behavior with business people. Four diagrams follow the customer's order, explain command/decision/event, derive useful query answers, and show bounded behavior slices. The prose explains linear growth as a design aim dependent on explicit contracts, covers understanding an existing application, and connects the shared model to NeoHaskell's implemented visual IDE. Author references remain in research records; the public article has no paper exercise. It contains no code or installation prerequisites.

The [source research](../../docs/research/event-modeling-introduction-2026-11-13.md) and [visual-tour correction](../../docs/research/event-modeling-tour-2026-11-13.md) pin the IDE and framework evidence to source revision 033ae4a. Code-to-model synchronization and diagram inspection are implemented; diagram-to-Haskell field generation is not implied. No NeoHaskell runtime was executed.

The introduction leads into the existing Core concepts article. An eight-page first-project sequence then reaches installation, creation, launch, first response, project files, and agent setup. The shop tutorial remains seven pages. The map and independent pages have no unrelated pagination. Existing Core concepts, setup, and Resources retain their substantive prose and examples; Core concepts gains only the previous-page link for the new introduction.

The [approved 61-page proposal](../../docs/research/sidebar-2026-11-13/integrated.json) still owns the other page responsibilities. The introduction is the subsequent owner-directed addition. Most destinations remain one-paragraph plans. The map links concrete reader questions and honestly distinguishes the four substantive articles from unfinished lessons.

Standalone plans are excluded from Pagefind and external indexing. The map remains internally searchable and externally noindexed. Substantive guides are searchable; their planning appendices remain ignored. Resources continues to provide usable upstream instructions at its documented revisions.

## Translation pause

Do not generate translations during the English authoring phase. Saved translated documents, catalogs, and the manifest retain the pre-task baseline. The content loader excludes translated MDX so stale headings and content cannot enter the draft build; Starlight supplies English fallback with its native language notice. The localized homepage remains intact. CI reports translation backlog without requiring freshness. README records how to restore the normal loader and strict gate when translation resumes. The backlog is not marked current.

## Verification and acceptance

The [expanded-navigation review](../reviews/sidebar-2026-11-13/expanded-navigation.md) verifies native open defaults and manual keyboard control. The [earlier teaching review](../reviews/event-modeling-2026-11-13/teaching-review.md) covers the superseded table-and-exercise version. The [tour verification](../reviews/event-modeling-tour-2026-11-13/verification.md) records 24 targeted browser checks, 19 passing tests, a clean 568-page build, and the fresh review. The [verification record](../reviews/event-modeling-2026-11-13/verification.md) records 19 passing tests, a clean production build, 558 documentation locale routes, and 2915 passing browser assertions. Review approval, technical checks, publication, and owner acceptance remain separate.

Any future new or materially changed teaching example requires learning-example-review. Static examples remain the default; interaction must teach a causal relationship and retain keyboard, touch, and static reading access.

## History

The owner accepted the conventional guide format on 9 November 2026. The snapping, persistent widget, and vertically centered lesson remain retired. The 12 November 24-page scaffold and its 944 assertions are historical evidence, not checks of this revision. The original clean checkpoint was dfc5554cdd2c9411430dd4e1fdb4c173cd188ef5. Checkpoint 46f9c39551ab4c8807a810b7f69ea9bddc63a208 preserves the accepted 61-page iteration before the expanded-navigation and introduction correction.
