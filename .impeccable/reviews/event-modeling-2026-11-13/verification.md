# Event Modeling entry and expanded navigation verification

Local production verification completed on 13 November 2026. The final adversarial review says [ship](final-review.md); the fresh teaching-example review says [keep](teaching-review.md). These are review verdicts, not owner acceptance of the new article or NeoHaskell runtime execution.

## Scope

The owner accepted the 61-page concrete sidebar, requested every section and subgroup initially expanded, and added a short motivating Event Modeling introduction before code or installation. The implementation now has 62 English destinations: 57 standalone plans, the documentation map, and four substantive articles. All 24 original routes remain. The first-project sequence has eight pages; the shop sequence has seven. Homepage primary documentation links enter `/introduction/`.

The original clean checkpoint is `dfc5554cdd2c9411430dd4e1fdb4c173cd188ef5`. The checkpoint before this correction is `46f9c39551ab4c8807a810b7f69ea9bddc63a208`. Framework and IDE research inspect source `033ae4a570686cd885ca14c6595997d9498d5287`; they do not establish release compatibility or executed runtime behavior.

## Checks

- `npm test`: 19 passed, zero failed. Translation workflow tests use a local fake CLI and make no model calls.
- `npm run build`: copy check passed; Astro reported zero errors, warnings, and hints; 568 static pages built, including 558 documentation locale routes.
- Production browser QA: 2915 assertions passed. All 558 documentation routes returned 200, with one title, the expected shell language and English article language, 62 unique sidebar links, and all 15 native navigation groups open. Pagination, internal links, fragments, and indexing policy passed.
- Layout and interaction: 60 English width/theme cases, 32 fallback-locale cases, 320px through 1600px widths, 200% zoom-equivalent reflow, 36px desktop and 44px phone navigation rows, keyboard menu/search, Escape focus restoration, exact installation-command copying, same-page language links, native navigation without JavaScript, and homepage entry links passed. Browser execution errors: zero.
- Search: Event Modeling and existing practical queries return substantive content or the honest planning map. Standalone plans and planning appendices remain excluded. An exact phrase search for `"NeoQL"`, present only in an unfinished plan, returned zero results.

Two initial negative-search assertions used inputs that Pagefind tokenized or stemmed into ordinary terms. Their saved results showed legitimate substantive pages. The harness was corrected to an exact phrase query; no product change was needed. The corrected result and original failure evidence remain in the local verification JSON.

## Rendered review

The introduction and story were captured at 1440 by 1000 in light mode and 390 by 844 in light and dark modes. Root and the fresh Astra reviewer opened the raw images. A later root capture inspected the exercise at both widths. Prose is 18px, table text is 16px, normal viewport scale and CSS zoom are 1, and no horizontal overflow was found. The static example requires no interaction or scroll-linked cue.

The navigation agent independently verified fresh desktop and phone sessions, all groups open, native keyboard collapse/reopen, manual desktop persistence, and no-JavaScript navigation. Its [report](../sidebar-2026-11-13/expanded-navigation.md) records the exact behavior.

The manual Impeccable detector returned two advisory sizes in shared navigation: `.95rem` group labels and `.9375rem` pagination. Both preserve existing navigation typography; the new subgroup labels reuse the accepted group size. DESIGN.md records these narrow exceptions. Reading and example type remains at the required sizes.

No decorative captions, widget identity rows, language badges on examples, redundant action reassurance, footnotes, or forbidden authored punctuation were added. Native language fallback notices communicate necessary content availability.

## Translation pause

The owner explicitly stopped translation until documentation is complete. The prior process had already ended; no translator remained active and no further model call or translation application was performed. The incomplete iteration's saved Spanish and Chinese work is preserved in checkpoint `46f9c39`; final locale files, catalogs, and manifest match the pre-task `dfc5554` baseline byte for byte. Other locale files were never changed.

The content loader excludes saved translated MDX during the English authoring phase, allowing Starlight's native English fallback without stale heading mappings. Existing localized homepage content is preserved. CI reports translation backlog instead of enforcing freshness. The backlog remains explicit, not marked current. README records how to restore the normal loader and strict gate when translation resumes.

## Evidence and publication

Local raw evidence is in this directory: `verification.json`, `capture-metadata.json`, introductory/story/exercise screenshots, and final layout captures. The build and test logs are under `/tmp/neohaskell-sidebar-2026-11-13/`. Generated evidence stays ignored; these durable reports are committed.

Local production preview: `http://127.0.0.1:4325/introduction/`. The publication destination is `https://nickseagull.dev/neohaskell.org/introduction/`. Exact-commit CI and public-response verification follow the final push and are reported separately.
