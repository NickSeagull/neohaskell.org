# Documentation scaffold verification

Verified locally on 12 November 2026 against the production build at `http://127.0.0.1:4325/`. Checkpoint: `67cc7d513f77feac182c2304a163a93616a8ab27`.

## Result

The build and copy check pass with zero Astro errors, warnings, or hints. All 19 automated tests pass. Strict localization verification reports 26 current source records in each of the eight target locales, with no pending or orphaned records. The browser run records 944 passing assertions and zero failures across 216 documentation routes.

## Scope checked

| Area | Evidence |
| --- | --- |
| Architecture and routes | 24 pages in each of nine languages return 200, expose one main heading, and declare the expected document language. Internal article links and fragments resolve. |
| Navigation | Five groups and one current page across the English layout matrix. Core concepts leads to setup, whose sequence ends there. The four tutorial chapters form a separate bounded sequence. Independent guides, explanations, reference, Resources, and the map have no previous/next links. |
| Reading | 48 English layout cases cover four representative routes at 320, 390, 768, 1024, 1440, and 1600 CSS pixels in both themes. No document overflow; prose is at least 18px and visible code at least 16px. Another 32 light-theme cases check the map and implementation brief at 390 and 1440px in all eight target locales. |
| Interaction | Existing installation command copies exactly, all nine language links retain the nested route, the phone menu responds to keyboard input, search opens with Enter and returns results, and Escape closes it and returns focus. Page plans and links remain readable without JavaScript. No browser execution errors were observed in the exercised main-page paths. |
| Search and indexing | Standalone briefs have no Pagefind body and declare `noindex`. The map is internally indexed and externally noindexed. Existing guides retain searchable bodies and ignore their final planning regions. Representative English and Spanish searches return existing guides or the honestly titled map, never standalone briefs. |
| Reflow | A 720 CSS-pixel viewport, equivalent to the layout width of a 1440px window at 200% zoom, has no document overflow. This is a reflow-equivalent check, not an automated native browser zoom or complete accessibility audit. |

## Built search observations

English `storage`, `syntax`, and `CLI` each return Resources, the Documentation plan, and setup, in query-dependent order. Spanish `almacenamiento` and `sintaxis` return the same three destinations. Spanish `CLI` also returns Core concepts. `unprepared`, a word present only in the setup planning appendix, returns zero results. These observations establish the scaffold's discovery policy; they do not evaluate the relevance of every possible query.

## Localization preservation and validation repair

The maintained translation client generated the new material. Existing translated homepage values and the original prose and examples in the three guides were preserved from the checkpoint. New navigation labels, pagination settings, and planning paragraphs were retained and all 32 merged files were structurally validated before their manifest hashes were updated. The client translates complete files and has no partial-content merge operation, so this retention was a bounded filesystem edit using its existing validator.

Translation validation previously compared nested MDX attribute source positions, rejecting valid translations when preceding prose changed length. The comparison now ignores those positions recursively while preserving attribute names, values, links, and executable code. The regression test accepts a different-length translation and rejects changed classes, links, and ignore attributes. Two saved responses converted an HTML link into Markdown; their original link structure was restored and validated through the client's recovery command without another model call. The translation prompt now explicitly preserves HTML links.

## Visual evidence and limits

The final capture set contains the Spanish map on desktop/light and phone/dark, the Spanish implementation brief on phone/light, Chinese and Armenian maps on phones, the English map at 320px, setup on desktop/dark, and Core concepts on phone/light. The parent inspected all eight captures. The fresh reviewer receives the same evidence for the final disposition.

Generated `verification.json`, screenshots, and command logs remain local under the existing ignored evidence paths. The durable results are recorded here. An early preview command encountered an existing Astro preview lock; the final run used the supported `--ignore-lock` option on port 4325. Two harness selectors were corrected after inspecting rendered markup: visible code inherits its size on `code`, and Pagefind's input is a text input. No site change was needed for either observation. The complete rerun passed.

No new teaching example or runtime widget was implemented. Native editorial translation review, full assistive-technology testing, real NeoHaskell execution, owner acceptance of the expanded render, and deployment are separate from this local verification.
