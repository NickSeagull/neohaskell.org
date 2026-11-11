## verdict

1. **Resolved — experiment state transfer.** `copyExperiment()` in `src/scripts/guided-lesson.ts` transfers the rendered phase, raw form values, result, and pending/invalid feedback in both reading-view directions. The supplied six regression checks confirm that an unsubmitted quantity of two retains three mugs and an empty ledger, explicit submission changes the result, accepted/rejected results survive switching, and an invalid empty quantity stays pending. All 54 supplied browser checks pass with no runtime errors; the refreshed opening captures retain the unevaluated command and unchanged stock, while `code-inspection.png` retains the completed two-mug result and Exploring state.
2. **Resolved — heading eyebrows.** The refreshed desktop, light, mobile, and 2589 px captures show canonical concepts inside the subsection headings. Setup captures show step numbers within their headings. Order mode now sits beneath “One order. Made visible.”; setup mode sits in the companion footer below the active panel. The code-inspection capture keeps Exploring and Return to lesson clearly visible without a label above the heading.
3. **Resolved — glyph icons.** The refreshed sidebar and source links retain readable link text without Unicode external-link arrows. `code-inspection.png` shows the explicit “Unpin” action in place of the close glyph, and the component preserves its “Unpin explanation” accessible label.

## remaining

Clear. All ten required captures were reopened and are valid at their named viewport sizes. No regression introduced by this fix batch was observed. Ship covers the scored fixes, not the whole surface.

disposition: ship
