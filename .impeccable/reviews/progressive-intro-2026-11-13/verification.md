# Progressive introduction verification

Pre-change checkpoint: `b193e3f29add002a8538e98d7df89ee88621f9cb`. The owner accepted the preceding diagram style and requested a more substantial, progressive explanation. This review concerns the new sequence, not acceptance of the owner's earlier single-page version.

## Implemented scope

Start here contains four pages: The work behind the code, Events and history, Commands and queries, and Model the whole process. Developer judgment, enjoyment, and control precede the shop example. The history lesson establishes why identical stock changes can have different business meanings, acknowledges meaningful snapshots, and explains event-derived state. Commands and queries follow their concrete purpose. Event Modeling connects the established parts, with the retained growth comparison in its own later section.

Setup is a separate seven-destination group. Documentation plan moves into Reference and help. There are 64 documentation destinations, six top-level groups, and 16 initially expanded native disclosures. All prior routes remain. The five accepted diagrams retain their implementation and semantic colors; the sequence adds a compact history comparison table and keeps a plain-text command example. No diagram generation or interactive teaching tool was added.

Three initial Astra agents investigated source contracts, proposed the editorial progression, and created the reusable writing skill in parallel. The new `neohaskell-progressive-explanations` skill requires a fresh adversarial reader for substantial conceptual arguments and combines it with rendered teaching review. The documentation and plain-copy skills now allow substantive philosophy before a scenario. All three changed skills passed the bundled validator using `uv run --with pyyaml`.

## Technical checks

- The normal build passes the repository copy check and Astro reports zero errors, warnings, or hints. The build produces 586 pages and rebuilds Pagefind. Log: `/tmp/neohaskell-sidebar-2026-11-13/build-progressive-intro.log`.
- All 19 existing tests pass. Existing content-dependent localization assertions were adjusted to the new link and heading while preserving checks for unchanged code, stable English anchors, localized document links, and preserved asset/fragment URLs. No translation model or external translation service runs in these tests. Log: `/tmp/neohaskell-sidebar-2026-11-13/test-progressive-intro.log`.
- The targeted browser harness passes all 151 checks. It covers 576 documentation routes across nine locale prefixes; the ten-page conceptual/setup pagination sequence; internal links and fragments; all four new lesson layouts at 320, 390, 768, 1024, 1440, and 1600px in light and dark modes; at least 18px prose and 16px essential examples; no page overflow; model node bounds; native phone keyboard scrolling and navigation; Pagefind discovery; and reading without JavaScript. No browser runtime errors were observed.
- Manual Impeccable detection returned no findings for the changed lesson and map files. Shared diagram styling and role colors remain at the previously reviewed implementation. `git diff --check` passes.

The first browser measurement mixed diagram labels into prose and counted a redundant code-block title as essential example text. The revised harness measures article prose separately from teaching figures. The redundant title was removed. All checked reading text and essential example content meet their respective size floor in the final capture set.

The browser harness is `/tmp/neohaskell-sidebar-2026-11-13/verify-progressive-intro.mjs`. Local generated evidence in this directory includes `verification.json`, `route-inventory.json`, native-scale viewport captures, and `live-verification.json`.

## Editorial and visual review

The fresh combined [teaching and adversarial review](teaching-review.md) returns editorial ready and visual keep, with no material corrections. The reviewer receives the current lesson and source evidence without an author verdict, and opens raw captures before implementation. Technical checks establish the inspected behavior; neither they nor reviewer approval establish measured learning outcomes or owner acceptance.

Unslop scope is refinement within the accepted guide identity. Reused spacing, type, palette, navigation, and diagram geometry remain. The added detail belongs to the business questions, competing explanations of a stock change, and the command boundary. No decorative cards, identity labels, figure footers, new icons, animation, or added browser controls compete with the lesson. Both desktop and phone captures were opened at normal scale.

The [source investigation](source-review.md) checks framework revision `033ae4a570686cd885ca14c6595997d9498d5287`. It verifies snapshots, append behavior, query maintenance, decision contracts, retention boundaries, and source-to-model IDE synchronization. No NeoHaskell runtime or performance benchmark was executed. Benefits shared with other architectures are distinguished from NeoHaskell's selected contracts and integrated tooling.

## Delivery

Local development remains available at <http://127.0.0.1:4324/introduction/> from the canonical checkout. Its server required a restart to load the changed sidebar configuration even though MDX prose had already refreshed. Only the owned port-4324 process was restarted. The four conceptual routes return current content and the expanded navigation. Translation is postponed; saved locale documents, catalogs, and manifest remain unchanged. Only the English catalog gains the setup group name, with normal fallback in other locales. The homepage remains unchanged. This iteration is committed locally, without pushing or deploying.
