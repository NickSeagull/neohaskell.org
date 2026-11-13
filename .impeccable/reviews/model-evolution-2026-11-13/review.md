# Model evolution review

Final editorial verdict: **ready**. Final visual verdict: **keep**. Both material findings were resolved in one correction round. No structural redesign or additional explanatory UI is needed.

## Scope and evidence

Fresh combined adversarial editorial and teaching-example review of the complete `src/content/docs/introduction/event-modeling/index.mdx` lesson and `ShopEventModel.astro`, `GrowthComparison.astro`, and `IdeScreenshot.astro`. All 28 current desktop/phone, light/dark captures and the original `ide-initial.png` were opened before reading component implementation. The `before-*` captures were excluded. This review also read the authoring, source-evidence, verification, PRODUCT, and GLOSSARY records and the applicable progressive-explanation, learning-example, minimal-visual, Event Model, terminology, semantic-color, plain-copy, and Unslop guidance.

The learner should understand how the same model connects a business process, divides development into slices, supports additive contract evolution, and keeps the specification inspectable in source. The evidence is sufficient to judge that conceptual lesson. It does not establish improved learning outcomes or deployed runtime behavior.

The owner-approved deployment design is accepted as the documentation target. Revision `033ae4a` does not prove freeze enforcement, and this review does not require public readiness caveats or implementation of that future behavior. The actual IDE capture establishes an inspection interface with an illustrative locally seeded model. Its disconnected status is intact; neither the image nor this review establishes a connected backend or an executed source-edit round trip.

## Initial material findings

1. **Scope the new contact requirement to the consumer adopting it.** In "Freeze the contract when it is deployed," "the shop now requires delivery contact details before accepting an order" reads as a shop-wide acceptance rule. The next paragraph permits an existing consumer to keep ordering through the original contract. A competent developer can reasonably ask whether the old checkout is now violating the requirement. This weakens the concrete explanation of coexistence, even though coexistence itself is coherent. Make this a new delivery checkout that requires contact details, while the existing checkout retains its existing order policy. Carry that scope through the later shared-endpoint and stable-contract comparison. Preserve the named replacement, independent consumer migration, and the separate bug-fix example. This issue was confirmed on re-reading after the author identified the candidate clarification.

2. **Raise the light-theme slice boundary contrast.** In `light-1440-model.png` and the two light phone model captures, the vertical divisions are perceptibly weaker than the information-flow arrows. `ShopEventModel.astro` uses `--sl-color-gray-4` for these boundaries; the light theme defines it as `#a391af` against `#fdfcfe`. Independent calculation confirms 2.84:1, below the semantic-color skill's 3:1 requirement for essential non-text boundaries. These lines teach the development-unit distinction, so they carry meaning. Use a light-theme stroke reaching at least 3:1, retaining the thinner boundary stroke and stronger connectors. Recheck the same desktop and phone captures. The author had already reported this correction; it remains pending in the reviewed evidence.

## What should survive the corrections

The four vertical columns and the two chapter arrows answer the learner's grouping question directly. Place order spans the first command/event and query slices; Cancel order spans the last two. Names sit above the arrows. Native 16px labels, distinguishable roles, semantic colors, fixed geometry, and horizontal phone scrolling preserve the model instead of shrinking it. The clipped connector supplies a continuation cue. Repeated query nodes are explicitly explained as answers at different points in the process.

The lesson's purpose and conviction remain clear. It starts with sufficient local shop context and named conceptual links, makes unresolved business questions valuable developer work, then moves from development units to their deployed promises. Semantic bold identifies meaningful claims. The rendered paragraphs form a continuous guide rather than a collection of promotional claims or tool instructions.

Keep the sequential plots. The shared endpoint and shared Order changes explain the first plot before it appears; the stable-contract mechanism explains the second. A through G and R have a preceding explanation. The y-axis says effort per change, while the following prose correctly connects roughly level marginal effort with roughly linear total effort for comparable additions. The curves are conceptual, not quantitative evidence. The explicit dispatch dependency prevents the stable-contract story from implying that business dependencies disappear.

Keep the real IDE image and full-size link. At phone article width its node text is too small for primary teaching, but that teaching already occurs in the native diagram and surrounding prose. Here the image reveals the actual interface and recognizable chapter/slice structure. No recapture, artificial enlargement of embedded labels, new caption, or screenshot modification is warranted for that purpose.

The final section connects features, chapters, slices, integrations, and Given/When/Then cases to the specification in source. It distinguishes the cancellation decision from the query's stock update. It ends on the source-of-truth argument without duplicating navigation. The final "different angles" sentence could be removed without loss, but this is not a material finding and does not require a new review cycle.

## Separate status records

Technical checks: the refreshed verification records report a passing production build and copy check, plus 37 passing browser checks at 320, 390, 768, and 1440 pixels in both themes. The JSON was inspected and all 37 checks report true. It records 18px prose, a 16px minimum native figure label, contained nodes, correct chapter spans, keyboard scrolling, image access, static fallback, and no browser errors. The expanded set includes separator contrast and desktop canvas fit. Those are supplied execution results, not independently rerun tests in this review.

Review status: initial review and one bounded correction review complete. No unresolved or partial material findings.

Owner acceptance: approval to document the target deployment behavior is recorded. Acceptance of this completed implementation and authorization to publish are separate and are not established by this report.

## Correction round 1

1. **Delivery-contact scope: resolved.** The revised freeze passage now introduces a delivery checkout requiring contact details and an existing collection checkout using `PlaceOrder`. Its following paragraph and coexistence section preserve that distinction. Later references to the same delivery-contact requirement and the old checkout now have an unambiguous antecedent. The full revised lesson was re-read, and refreshed light desktop/phone freeze captures retain readable paragraph rhythm. The scenario demonstrates independent contracts without permitting a consumer to violate a purported universal acceptance rule.

2. **Light-theme slice boundaries: resolved.** The refreshed light desktop model and both phone scroll positions show stronger vertical separators with the original four columns, chapter spans, and information-flow hierarchy intact. Refreshed computed evidence records a 5.75:1 separator contrast in light mode and the unchanged 3.45:1 dark result. Desktop fit passes at 768 and 1440 pixels. Phones continue to use the intended horizontal canvas; their `desktopFits: false` is expected, not page overflow.

The optional final sentence was also removed; the article now ends directly on deriving documentation from the source declarations. The final verdict covers the complete conceptual lesson and the three reviewed teaching components, with the evidence boundaries stated above. It is not runtime certification, owner acceptance, or publication approval.
