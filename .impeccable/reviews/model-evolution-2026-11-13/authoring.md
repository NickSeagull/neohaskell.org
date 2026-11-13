# Model structure and evolution

Checkpoint: `d580b6fc753cd052fff43752e5dfe71c1951eba7`, clean before changes.

Page purpose: show a developer how the Event Model divides business behavior into development units, supports additive contract evolution, and remains an inspectable specification in source throughout the application's life.

The owner's correction requires four vertically divided slices under two chronological chapter arrows, with names above the arrows. Place order groups the command/event change slice and the stock-query slice; Cancel order groups the corresponding cancellation slices. Preserve the accepted information flow, semantic colors, native guide layout, and readable phone scrolling. Update the reusable Event Model skill so this grouping survives future changes.

Direction: a conceptual guide for developers; exact and approachable; existing NeoHaskell documentation typography and tinted neutral ground; domain color concentrated in the Event Model; explicit slice boundaries and chapter spans as the structural signature. The baseline's missing grouping and side-by-side growth plots are the scoped issues. No unrelated redesign is authorized.

The owner also requires a concrete account of frozen deployed contracts, new identities for changed behavior, coexistence and deprecation, two sequential growth explanations, and an expanded source-derived IDE/specification section. Source inspection found no implemented deployment freeze enforcement. On 13 November the owner explicitly answered "Documentar el comportamiento objetivo" when offered target behavior versus checking another branch. The published draft therefore describes that approved target design for future publication. It is not a current-release availability or runtime-verification claim. The same distinction must survive editorial review and delivery.

The first growth figure follows concrete shared-endpoint and shared-order-model changes. The second follows additive slices and frozen contracts. Both retain effort-per-change axes: a roughly level marginal cost implies roughly linear total effort, not a measured universal bound. Shared dispatch/cancellation policy remains an explicit dependency.

The IDE screenshot is a capture of the actual locally built NeoHaskell IDE frontend displaying an illustrative mug-shop model. It is not a painted mockup or an execution of the shop backend. Native full-size image access is available through the image link. Keep the screenshot's actual interface intact, including its connection status. Primary lesson meaning remains in prose and the readable native diagram; the screenshot establishes the real inspection surface.

The fresh Astra [combined review](review.md) returned editorial ready and visual keep after one correction round. Delivery and collection now have explicitly different requirements, and light-theme slice boundaries meet the contrast requirement. The [verification record](verification.md) records the passing production build, skill validation, and 37 browser checks. Owner acceptance remains separate. The sole repository development server was restarted at port 4323 after the changes. No translation or publication.
