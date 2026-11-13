Verdict: keep.

This extends the teaching review to German at `/de/introduction/history/`, `/de/learn/`, and `/de/introduction/event-modeling/` on `http://127.0.0.1:4323`. The rendered examples were reviewed at normal zoom, 1440 by 1000 desktop and 390 by 844 phone viewports, with dark-theme reading context and light-theme diagram captures. The reviewed locale set now includes English, Spanish, Simplified Chinese, Russian, Armenian, Japanese, and German. Remaining locales, deployment approval, and user acceptance are outside this verdict.

The learning goal remains clear: retained events explain changing stock; commands request changes; decisions accept or reject them; queries expose maintained answers; slices divide work and chapter arrows group the process. German command/event wording preserves the distinction, including `Bestellung aufgeben` versus `Bestellung aufgegeben` and `Bestellung stornieren` versus `Bestellung storniert`.

No material simplifications are required. Long labels wrap within their cards and columns without overlap or reduced text size. `review-de-learn-decision-flow-0-phone.png` and `review-de-learn-query-flow-0-phone-context.png` show readable command, decision, event, and query labels. `Bestätigte Bestellungen` uses two lines while its answer remains distinct from available stock. The cancellation event's restored-stock detail also fits within its node.

The 1.4x translated Event Model preserves aligned connectors, vertical slice boundaries, and chapter arrows. `review-de-model-shop-event-model-0-phone.png` and its `-end.png` companion confirm that native horizontal scrolling exposes both chapters. The prose names `Bestellung aufgeben`, `Bestellung stornieren`, and `Verfügbare Tassen` exactly match the diagram. `reviewer-de-fit-and-names.json` records these references in the first two explanatory sections.

The replay uses the default 96px rows. At 390px, each row retains 22px above and below its text group. Timed captures show the cue moving through retained events as stock becomes 3, then 2, then 3. The final cursor is centered exactly on the cancellation row. Reduced motion and no-script checks retain the final answer 3. `reviewer-de-fit-and-names.json` records row geometry and cursor alignment; `reviewer-de-supplement.json` records final behavior and fallback checks.

Both growth charts keep a 4px clear gap between their axis label and plot. Labels remain readable, with the appropriate rotated Latin-script orientation. Semantic diagram colors remain blue for commands, orange for events, and cyan-green for queries and displayed answers in both themes. No extra controls, captions, or auxiliary explanation rows were added.

`reviewer-de-capture-metrics.json` records a minimum diagram text size of 16px. The rendered DSL code remains 16px and matches the English cancellation example exactly. Bold emphasis renders without raw Markdown markers. This review establishes rendering and preservation, not compilation of the illustrative DSL.

Retain the full labels, readable text and padding, command/event distinction, stable event history, current-event cue, query values, native scrolling, slice boundaries, chapter arrows, and unchanged DSL. The reviewer changed only evidence and this report.

Next action: open `review-de-learn-query-flow-0-phone-context.png` to inspect the longest query label at phone width.
