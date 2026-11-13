Verdict: keep, after the resolved CJK axis-orientation correction.

Correction score: resolved. Both Japanese and Chinese charts were recaptured at desktop and phone sizes in dark and light themes. `reviewer-cjk-axis-correction.json` records 16 checks: every axis now has `transform: none`, 16px text, and a 4px clear gap before the plot. `review-ja-axis-corrected-0-phone-dark.png` and `review-ja-axis-corrected-1-desktop-light.png` show upright Japanese text. The original finding below is retained as review history; no correction remains open.

This extends the teaching review to Japanese at `/ja/introduction/history/`, `/ja/learn/`, and `/ja/introduction/event-modeling/` on `http://127.0.0.1:4323`. The review uses normal zoom at 1440 by 1000 desktop and 390 by 844 phone viewports, with dark-theme context and light-theme diagram captures. English, Spanish, Simplified Chinese, Russian, and Armenian have separate reports. Remaining locales, deployment approval, and user acceptance are outside this verdict.

The learning goal remains visible: events retain accepted facts, commands request changes, decisions determine acceptance, queries expose maintained answers, and vertical slices group under chapter arrows. Japanese labels distinguish `注文する` from `注文を受理`, and the event list remains separate from current available stock. Prose punctuation and bold emphasis render without raw Markdown markers or overlapping text.

| Finding | Observed learning cost | Concrete correction |
| --- | --- | --- |
| Japanese and Chinese growth-chart y-axis glyphs are upside down. | `review-ja-model-growth-comparison-0-phone-context.png` shows the Japanese label inverted. `writing-mode: vertical-rl` already presents CJK glyphs upright; the shared `rotate(180deg)` then flips them. The same issue appears in the earlier Chinese chart capture on cross-check. `reviewer-cjk-axis-before.json` records the rendered transform and vertical writing mode in both locales. | Remove the rotation for Japanese and Chinese while retaining natural vertical text, 16px size, and the dynamic axis width. Keep the existing rotation for Latin and Armenian labels. No extra label or chart redesign is needed. |

The Event Model's 1.4x translated columns preserve label fit, vertical slice boundaries, chapter spans, and connector alignment. `review-ja-model-shop-event-model-0-phone.png` and its `-end.png` companion confirm native horizontal scrolling exposes the order and cancellation chapters. `review-ja-shop-event-model-desktop-light.png` preserves blue commands, orange accepted events, and cyan-green query answers in the light theme.

The history replay retains readable 96px rows at 390px. Normal replay reaches stock 3, then 2, then 3 without changing its three recorded facts. `review-ja-history-final-phone.png` shows cancellation selected and stock at 3. Reduced motion and no-script checks retain that final answer. Command and query examples wrap cleanly at phone width without adding controls or captions.

`reviewer-ja-capture-metrics.json` records diagram text sizes and geometry. `reviewer-ja-supplement.json` confirms 16px code, no raw bold markers, the normal/reduced/no-script final states, and an unchanged cancellation DSL matching the English rendered example. This review verifies rendering and preservation, not compilation of the illustrative snippet.

After the axis correction, preserve the readable text, full domain labels, current-event cue, stable event list, query values, native scrolling, vertical slice boundaries, chapter arrows, and unchanged DSL.

The identical cancellation wording `注文をキャンセル` in the command and event does not require another correction within this complete example. `review-ja-cancellation-detail.png` shows the blue dashed card explicitly labeled `コマンド`; the orange solid card is labeled `イベント`, adds `在庫を回復`, and connects to the restored-stock answer 3. These visible roles and consequences preserve requested action versus recorded result. The replay also introduces its entries as recorded events. This assessment applies to the complete teaching artifact, not to the phrase in isolation.

Next action: open `review-ja-axis-corrected-0-phone-dark.png` to inspect the resolved orientation correction.
