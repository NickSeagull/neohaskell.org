Verdict: keep.

This extends the review to Russian at `/ru/introduction/history/`, `/ru/learn/`, and `/ru/introduction/event-modeling/` on `http://127.0.0.1:4323`. The evidence uses normal zoom at 1440 by 1000 desktop and 390 by 844 phone viewports, with dark-theme page context and light-theme diagram captures. The reviewed locale set is now English, Spanish, Simplified Chinese, and Russian. Armenian and the remaining locales are outside this verdict. User acceptance and deployment approval remain separate.

The learning goal remains clear: recorded events explain why stock changed; commands request changes that decisions may accept; queries expose maintained answers; vertical slices divide development work and chapter arrows group related slices. The Russian prose preserves these distinctions, including the distinction between a cancelled order and one that never existed.

No material simplification is required. Long Cyrillic labels wrap within the existing cards and query columns at 390px without reducing text below 16px. `review-ru-history-history-replay-0-phone-context.png`, `review-ru-learn-decision-flow-0-phone.png`, and `review-ru-learn-query-flow-0-phone-context.png` retain readable labels, details, and values. The wrapping of `Подтверждённые заказы` keeps its query answer separate from available stock. The growth charts retain legible axis and comparison labels.

`review-ru-model-shop-event-model-0-phone.png` and its `-end.png` companion show aligned connectors, vertical slice boundaries, chapter arrows, and full access through horizontal scrolling. `review-ru-shop-event-model-desktop-light.png` confirms the same structure and blue command, orange event, and cyan-green query mapping in the light theme. No new captions or controls compete with the diagram.

`reviewer-ru-capture-metrics.json` records a minimum rendered diagram text size of 16px. `reviewer-ru-supplement.json` records 16px code, no visible raw bold markers, and a cancellation DSL identical to the English rendered example. Timed replay captures preserve the same event list as stock changes from 0 to 3 to 2 to 3. The final, reduced-motion, and no-script checks all show three available mugs; `review-ru-history-final-phone.png` shows the final cancellation cue. This verifies rendering and preservation, not compilation of the illustrative DSL.

Retain the current labels, command/event distinction, stable event history, current-row cue, query values, readable scrolling, vertical slice boundaries, chapter arrows, and unchanged DSL literals. No component or source edits were made by the reviewer.

Next action: open `review-ru-learn-query-flow-0-phone-context.png` to inspect the longest two-column query labels.
