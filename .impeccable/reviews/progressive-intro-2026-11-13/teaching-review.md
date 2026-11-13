# Independent introduction review

Editorial verdict: **ready**.

Visual teaching verdict: **keep**.

Scope: the four English introduction lessons, their static teaching examples, and the supplied desktop and phone render evidence. No material findings require a correction round. This is reviewer approval within that scope, not owner acceptance or publication approval.

## Reader and learning goal

The reader is a competent developer considering NeoHaskell without prior Event Sourcing, CQRS, or Event Modeling knowledge. The sequence should explain which work remains valuable with AI, why retaining business facts matters, why proposed changes need a decision boundary, how maintained answers differ from recorded facts, and how these parts expose missing business decisions when connected.

The adversarial question was: why does this help compared with another language plus AI? The text gives a defensible answer: the patterns can be reproduced elsewhere, while NeoHaskell supplies their contracts, execution path, and shared arrangement. It does not establish measured superiority, and does not need to make that claim to explain the benefit.

## Editorial assessment

1. The opening preserves substantive philosophy. Asking who may make an exception and which process nobody has agreed on gives developer judgment concrete work. The second paragraph explains why a building program does not settle that disagreement. Enjoyment is identified as an aim and connected to understanding, expressing, reviewing, and diagnosing behavior, with both agent-written and handwritten code included. These paragraphs are not interchangeable motivational slogans.
2. The progression supplies a need before each main abstraction. Three possible causes for stock changing from three to two motivate a business event before Event Sourcing is named. An unfulfillable four-mug request motivates commands and decisions. Customer stock and staff order counts motivate separate query answers before CQRS is named. Missing connections between parts motivate Event Modeling. Integrations are introduced where external actions need a separate place, without forcing the reader through their API.
3. The history comparison is fair. It explicitly acknowledges richer snapshots, ordinary databases preserving history, and NeoHaskell using snapshots itself. Replay is limited to derived state and retained information; it does not reverse payments. Old event shapes, privacy, retention, and query catch-up remain visible responsibilities. The simple example's opening stock is explicitly given, rather than silently represented as a recorded order.
4. Concrete differentiation appears in the framework's shared policy location, fetch/decision/append path, separation of external actions, query maintenance, and source-backed visual model. These match the mechanisms and boundaries documented in `source-review.md`. The lesson does not claim that only NeoHaskell permits validation or shared logic. The growth comparison is explicitly conceptual and conditional, and the following cancellation/dispatch example acknowledges cross-boundary coordination. It is not presented as a benchmark or universal linear-cost promise.
5. The process diagram is deliberately incomplete enough to motivate useful questions. The prose asks where cancellation obtains order identity, what prevents cancellation after dispatch, and which answer confirms success. It does not claim the small stock diagram fully implements these cases. Setup remains after conceptual understanding, with unfinished first-project material identified at the transition.

## Visual assessment

I opened the ten requested raw captures before reading component implementation, then inspected `customer-story-light-390.png`, `growth-comparison-light-390.png`, and `shop-event-model-dark-390.png`. The initial evidence included the desktop and phone opening, both table themes, the command example, decision flow, query flow, full Event Model, its scrolled end, and growth comparison.

The table makes its three information levels immediately comparable without an inspector or added controls. On the phone, wrapping preserves the distinction between a current value, two snapshots, and a meaningful fact. The story gives a legible three-to-two change. The decision example separates proposed intention, stock condition, and accepted fact. Query results retain their separate labels and large two/one values. Semantic command, event, and query colors reinforce these distinctions without replacing text.

The Event Model preserves readable nodes on the phone through horizontal scrolling. The initial phone capture shows the order half and a connection continuing beyond the viewport; the end capture shows the cancellation half, restored stock, and keyboard focus. The supplied keyboard checks support reachability of that second half. The growth comparison stacks on the phone without shrinking essential text. Its purpose and caveat remain in the article rather than an auxiliary caption bar.

No repeated status rows, competing controls, empty inspectors, or additional interaction are needed. These are static teaching artifacts, so no scroll-driven state changes or animation cues need validation. Preserve the event/result distinction, accepted versus proposed behavior, labeled values, horizontal keyboard access, and the article's normal reading flow.

## Evidence and limits

Read all four current lesson files, `EventModelTour.astro`, `ShopEventModel.astro`, `GrowthComparison.astro`, `GLOSSARY.md`, `PRODUCT.md`, and the supplied `source-review.md`. The editorial-proposal verdict was not used as authority.

The saved `verification.json` contains 151 checks, all passing. It records the 576 documentation routes, lesson ordering, article links, viewport coverage from 320 to 1600 in both themes, 18px prose and 16px essential example text at normal zoom, phone keyboard scrolling, no-JavaScript rendering, search indexing, and no browser runtime errors. These are saved implementation checks, not tests independently rerun by this reviewer.

Framework claims were assessed against the supplied source inspection record at revision `033ae4a570686cd885ca14c6595997d9498d5287`. No NeoHaskell runtime, upstream tests, productivity comparison, or reader learning study was executed in this review. The verdict does not establish deployment readiness, correctness of a future shop implementation, or measured learning outcomes.
