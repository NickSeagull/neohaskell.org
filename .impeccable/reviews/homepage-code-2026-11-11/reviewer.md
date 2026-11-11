# Fresh teaching-example review

Verdict: **keep**. No material simplification required within this example's scope.

Learning goal: A first-time AI builder can recognize the rule “increase an existing counter by a positive amount,” then connect its rejected and accepted outcomes to reviewable source.

Evidence reviewed, in order: dark/light 1440px example captures; dark/light 390px example captures; light 320px example capture; native-size desktop and phone viewport captures; `evidence.json`; then `DecisionExample.astro`, `counter-decision.hs`, its provenance README, and the relevant homepage markup/styles. No previous review verdicts consulted.

1. **Focus:** The bold rule and two plain-language outcomes give a readable path into the code. The two reject branches and `acceptExisting` branch visibly support those outcomes. Keep this mapping; removing the outcomes would leave new readers to decode syntax first.
2. **Simplicity:** The example is a single static source panel with one source link. Its caption establishes where the code comes from, while “Function body” accurately limits the claim. There are no competing controls or status panels to remove.
3. **Readability:** Desktop shows all lines at once. Both phone themes retain readable 16px code at 25.6px line height, as corroborated by the computed-style evidence. At 320px/390px, long lines clip inside the code region, with an explicit sideways-scroll cue. The reported keyboard-scroll checks pass, and the document does not overflow horizontally. This is an acceptable compromise for preserving exact source without shrinking it.
4. **Truthful behavior:** The rendering implies source inspection, not execution. Supplied evidence reports exact excerpt matching and no-JavaScript rendering; local source shows the static excerpt and pinned full-source link. No execution or improved learning outcome is established by this review.

Must survive: the positive-amount/existing-counter rule; rejection versus event acceptance; the exact source excerpt and provenance; readable code in both themes; keyboard/touch access to long lines; the visible mobile scroll cue; the full-source link; and the existing AI-first page identity.

Scope: appearance and teaching clarity of this static example, plus the supplied browser behavior evidence. This is not broader homepage design approval or user acceptance. No correction capture is needed because no changes are requested.
