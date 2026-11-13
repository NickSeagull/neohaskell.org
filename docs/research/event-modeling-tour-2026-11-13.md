# Visual introduction correction

On 13 November 2026 the owner requested a more visual, explanatory introduction. The title should describe designing and understanding an application without introducing terminology at the entry point. Author mentions and the paper exercise should be removed from the public article. The article should teach commands, events, and queries through a quick visual tour, explain the motivation for keeping complexity close to linear, and use the currently published neohaskell.org as a reference.

The clean checkpoint before comparison is `7d2a55d313a4fd68694143610917890daa2b2396`. The previous review's keep verdict remains evidence for its earlier scope; the owner's later correction supersedes that table-and-exercise direction. Expanded navigation, the other 61 destinations, accepted guide styling, and the translation pause remain.

## Actual reference

The [published NeoHaskell homepage](https://neohaskell.org/) was opened on 13 November and captured at 1440px and 390px. Its opening connects an intention, decision, accepted event, and useful answer with a visible flow. Its history comparison contrasts a replaced balance with recorded facts. Its growth illustration compares a widening change surface against visible behavior slices and shared contracts.

Borrow the teaching mechanism: put a diagram beside each concept, use a concrete change, and make relationships visible. Preserve our accepted typography, palette, and conventional article shell. The reference's display lettering, thick shadows, caption rows, older request/view vocabulary, and small chart labels are not adopted.

The introduction uses the existing ceramic-mug scenario rather than copying the reference's account-history story. Its four figures show the customer's before/after experience, command/decision/event flow, queries derived from an accepted fact and initial stock, and repeated behavior slices with an explicit shared contract. The figures are HTML and SVG geometry with a readable source order and no JavaScript or installation requirement.

## Linear-growth claim

The article presents linear growth as a design aim: new behavior can be implemented and checked as a bounded slice with explicit inputs and outputs, while the same modeling pattern is reused. Stable boundaries help keep a change local. Shared meaning and contracts still require coordination. No universal complexity bound, algorithmic runtime claim, measured productivity comparison, or constant-cost guarantee is implied.

This framing is consistent with the reference's visible-slice illustration and the earlier [primary-source research](event-modeling-introduction-2026-11-13.md), while avoiding those sources' stronger general cost claims. Author attribution and detailed evidence remain in research records rather than interrupting the requested public tour.

## Direction

Product: Help developers understand and design application behavior before implementation.

Character: Concrete, visual, readable.

World: The accepted NeoHaskell guide, with a small shop model beside the prose.

Moments: A customer's intention becomes an accepted fact; the same fact answers different questions.

Signature: Commands, decisions, events, and queries retain their meaning across the story, the figures, and the eventual NeoHaskell implementation.

The page remains a short guide rather than an editor, simulator, notation manual, or workshop. The next-page link continues to Core concepts. A fresh independent teaching-example review is required because the examples changed after owner feedback.

## Implemented correction

The fresh Astra review requested three bounded changes: make the initial order count explicit, remove article sibling margins from the diagrams, and explain the shared contract concretely. The scenario now starts with three mugs and no orders. Figure internals own their spacing. The growth figure names order identity and status, and the prose explains that cancellation and dispatch must agree on what cancelled means. The [teaching review](../../.impeccable/reviews/event-modeling-tour-2026-11-13/teaching-review.md) and [verification](../../.impeccable/reviews/event-modeling-tour-2026-11-13/verification.md) retain the evidence and limits.
