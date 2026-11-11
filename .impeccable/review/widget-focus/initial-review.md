# Widget focus: fresh initial review

**Verdict: simplify.** The learner should see an order intention become an accepted fact and a changed stock answer, or see rejection leave both history and stock unchanged. Simplify the widget's visible text; retain the full documentation prose inline.

I opened `../minimal/desktop.png` (1440 × 1000) and `../minimal/mobile.png` (390 × 844) at native scale before reading implementation. I then opened `desktop-scene.png` and `mobile-rejected.png`, inspected the four supplied source files and `GLOSSARY.md`, and read the existing size evidence in `browser-checks.json`. These are baseline captures, not proof of the forthcoming correction. The metadata records normal zoom, 16px role/action text and 18px principal node text on desktop and phone. The visible type is legible; reducing it would not address the complaint.

## Necessary simplifications

1. **Remove the widget's repeated role headings.** Both initial captures show two texts in each of the first three nodes: “Command / Order 1 mug”, “Decision / In stock?”, and “Event / No event”. The headings compete with the actual state changes, especially on the phone. Keep the changing phrase in each shape: `Order 1 mug`, `In stock?` → `Accept` or `Reject`, and `No event` → `OrderPlaced`. Keep Command, Decision, Event and Query in the full prose, accessible names and on-demand inspection. Also remove the default event quantity payload: the implementation repeats the quantity already present in the command; event details can supply it during inspection. The supplied captures do not show the recorded event payload, so verify that cut in the corrected accepted-event capture.

2. **Combine the query's three competing texts into one meaningful answer.** The initial and rejection captures show “Query”, “Stock” and an isolated large `3`. Use one visible phrase such as `3 left` or `2 left`. The event phase must still distinguish the previous answer from the updated query, for example `3 before` followed by `2 left`; do not silently show an apparently current `3 left` beside a recorded order. Keep the exact temporal meaning in the query's accessible name and inspection explanation. This is a consolidation of the existing query state, not a new status row or caption.

## Behavior and identity to preserve

Keep one primary scenario action plus the optional Code toggle. Preserve pointer, keyboard and touch inspection, pin/unpin/Escape behavior, stable experiments while reading and the explicit Return to lesson action. Inspection must not change the scenario. Pending intention, acceptance, rejection, retained event history, the before-query answer and the current answer must remain distinct. Rejection creates no `OrderPlaced` event and does not reduce stock. Retain essential text at 16px or larger, the approved violet/cyan dark identity and daylight/violet light identity, localized change emphasis and a persistent reduced-motion state cue.

Do not shorten or collapse the documentation prose to satisfy these findings. Do not add default instructions or captions. Do not substitute increased scroll height for the user's sticky effect. Exact sticky/scroll behavior is outside this visual verdict while the owner's clarification is pending; the latest owner answer governs it.

## Correction evidence needed

At the same desktop and phone sizes, provide initial, accepted-event/before-query, current-query and rejected captures, plus a light-theme capture and computed essential text sizes. Supply behavioral evidence for inspection access, stable comparison/Return and the agreed sticky behavior; provide timed change captures plus the relevant transition code. The next pass will score only the two findings above and preservation of these behaviors. Screenshots establish appearance, interaction checks establish behavior, and neither establishes improved learning outcomes without reader evaluation.
