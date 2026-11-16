# History visual-language calibration

Date: 16 November 2026. Starting checkpoint: `fcc229521fd0490d36867fe0f4cb2e8b87f55bd5`. Final fresh visual-review verdict: **keep**, with the narrow-phone row overflow **resolved**. This records a reviewed pattern and correction, not new owner acceptance of a finished visual language.

## Purpose and decision

Make retained events distinguishable from the current answer calculated from them. The homepage makes traceability and recovery concrete; the documentation lets readers follow each event's effect. Both already support that distinction through named records, grouping, placement and number hierarchy as well as semantic color.

Keep the existing compositions. For these history examples, group retained events and give the current answer a separate position and emphasis. The homepage emphasizes the completed cancellation; the lesson marks the event being replayed without removing other records. The connected Event Model provides a useful limit on the rule: its query answers belong inside labeled query containers. An unboxed answer is not a universal requirement.

## Correction and evidence

At 320px, the replay's 6rem rows overflowed with existing Spanish, German, French, Japanese, Portuguese and Russian labels. A single component rule now uses 8rem rows through 360px. Labels remain 16px and the cursor uses the existing row-height variable. Translated wording and animation code are unchanged.

The implementing agent captured the local development server at `http://127.0.0.1:4323`, using headless Chromium at normal browser zoom. Initial comparisons covered homepage history, documentation replay and the connected model at 1440px and 390px in both themes, with reduced motion for stable completed states. The narrow-layout stress check then exposed the translated overflow. Final captures used the same origin after the required preview restart.

| Check | Result |
| --- | --- |
| Final layout matrix | 90 combinations: nine configured locales, 320/360/361/390/1440px, light/dark. No page or row overflow; labels at least 16px; static result 3. |
| Replay at 320px in Spanish | Three events retained throughout. Answer sequence 0, 3, 2, 3; updates sampled 452-453ms after cause selection. Initial, cause, effect and final captures inspected. |
| Static access and navigation | Reduced motion gives phase 3 with animation disabled. No JavaScript retains three events and answer 3 without overflow. Homepage history action reaches the lesson; its direct section anchor returns 200 and exists. |
| Existing composition | Fresh reviewer inspected the corrected 320px Spanish captures, 361px breakpoint boundary, original desktop/phone English layouts, reading context and motion captures. No further material correction. |
| Repository checks | Normal build: copy check passed, zero Astro errors/warnings, 586 pages. All 20 tests passed. Mechanical detector returned no findings. |

Raw evidence remains local at `/private/tmp/neohaskell-history-calibration/`: `before-*.png`, `context-*.png`, `stress-before.json`, `after-*.png`, `after.json`, `motion-*.png`, `final.png`, `behavior.json`, build/test logs, `detector.json`, and the fresh reviewer's full `review.md`. Captures are generated evidence, not committed design assets. The source change is the `max-width: 360px` rule in `src/components/learn/EventHistoryReplay.astro`.

## Scope and remaining questions

The reviewer inspected supplied captures and saved behavior measurements; the implementing agent executed the checks. The model check confirms a focusable native horizontal-scroll region, not full keyboard/touch traversal to its rightmost slice. Offscreen replay suspension remains unchanged source behavior and was not separately exercised in this pass. Appearance and sampled behavior do not prove improved learning outcomes or runtime language capabilities.

The older `neohaskell-docs` skill referenced by `AGENTS.md` was not found in the installed skill roots or working repositories. This bounded comparison used the checked-in documentation surface contract, local visual-language skill, and available teaching-example and diagram skills. It does not claim execution of the unavailable skill.

`DESIGN.md` now owns the scoped history pattern and reconciles stale event-color, sidebar-width and animation prose with later decisions and the implementation. Older swatches/specimens remain historical rather than current semantic guidance. This calibration does not settle universal shapes, connector routing, density or motion for every NeoHaskell visual.
