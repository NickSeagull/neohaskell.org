## verdict

**keep** — both scored widget findings are resolved. The learning goal remains visible: distinguish an order intention, its acceptance or rejection, the recorded fact, and the stock answer.

1. **Repeated node headings and default event payload — resolved.** `desktop.png`, `mobile-widget.png`, both light-theme captures and `user-2589.png` show one meaningful phrase per node, without Command/Decision/Event/Query headings competing with the values. `snap-next.png` and the motion captures show `OrderPlaced` alone in the event node. The full documentation prose is inline again, including the canonical terms. `OrderExample.astro` and `guided-lesson.ts` preserve canonical roles and changing values in accessible names and retain inspection explanations. One scenario action plus Code remains the default control set.

2. **Query text consolidation with before/current distinction — resolved.** Initial and rejected captures show `3 left`; the accepted-event capture visibly marks `3 left · before`; the query capture shows `2 left` while retaining `OrderPlaced`. The answer is now one phrase rather than a role heading, a stock label and a detached number. `reduced-motion.png` preserves the highlighted current answer and separately shows rejection with `No event` and `0 left`.

All 15 required captures were opened and are valid for their stated viewports and states: desktop 1440 × 1000, phone 390 × 844 and the reported 2589 × 1298 viewport. The provided browser evidence records 63 passing checks and no runtime errors, including pointer/keyboard/touch inspection, pin/Escape, stable comparison while reading and Return to lesson. It measures 20px node/query text, 16px actions and 18–20px leads. Source and motion evidence support a localized 550ms cue, cancellation of obsolete cues and a persistent nonanimated reduced-motion state. Violet/cyan dark and daylight/violet light identities remain intact. These checks support appearance and implementation behavior; they do not establish improved learning outcomes without reader evaluation.

## remaining

Clear for the two scored widget fixes and restoration of full inline prose. No material regression from those fixes is visible in the supplied evidence.

The scroll evidence demonstrates the parent's proposed native section snapping: the small wheel movement returns to scroll position 175px, the larger movement advances to Decision at 641px with its top at approximately 96px, and long phone sections remain readable between boundaries. `scroll-sections.ts` observes native scrolling; CSS supplies snapping, with no added dwell height or wheel/touch interception and snapping disabled for reduced motion. This is technical verification of that implementation, **not owner confirmation that section snapping matches the requested “sticky” effect**. That preference remains unconfirmed and is outside this ship verdict.

Ship covers these two scored fixes and their preserved learning behavior only. It does not approve the whole site, a homepage redesign, or the unresolved interpretation of the scroll preference. No additional detector pass or whole-surface review was performed.

disposition: ship
