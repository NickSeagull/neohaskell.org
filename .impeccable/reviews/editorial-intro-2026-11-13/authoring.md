# Start here editorial revision

Checkpoint: `836b11dcba0b4683420b4e1d87158ccfb150228a`. The tree was clean before edits. The owner approved the five proposed editorial principles and explicitly identified One Person Framework as NeoHaskell's philosophy. After reading the rewrite, the owner said it was much better and corrected the product category: NeoHaskell is a language with integrated capabilities, not a framework as its primary identity. The previous review did not establish owner acceptance of its prose.

## Page purposes

1. `/introduction/`: Recognize the value and complexity of developer judgment, and understand why NeoHaskell integrates application capabilities into its language to make a whole application understandable and enjoyable for one person. The shop questions demonstrate intellectual work; they are not solved here.
2. `/introduction/history/`: Understand why recording a business fact preserves meaning that a current stock number does not, and how events support derived state, correction, replay, and snapshots. This page establishes the shop's accepted-order stock policy.
3. `/learn/`: Understand why an intention cannot declare its own accepted outcome, and how commands, decisions, integrations, and queries give that boundary a concrete implementation.
4. `/introduction/event-modeling/`: Use the connected process to discover missing business decisions and locate implementation changes, including explicit shared dependencies that support bounded growth.

## Visual direction

Product: NeoHaskell concepts for a developer using AI or working by hand.
Character: opinionated, thoughtful, readable.
World: the existing violet workshop guide, with native documentation navigation and a mug-shop process.
Moments: existing diagrams teach the mechanism beside the relevant explanation; semantic bold carries the prose argument.
Signature: command blue, event orange, query cyan-green, integration neutral, unchanged.

The visual audit found dense paragraphs and no semantic bold in the opening. Preserve the accepted layout, typography, palette, expanded navigation, and diagrams. Move the first stock diagram to history, where its accepted-order policy is taught. Keep linear growth and the connected Event Model as separate sections. No translation or deployment. Native next/previous links own the reading sequence.

## Evidence

Capability evidence remains pinned to framework revision `033ae4a570686cd885ca14c6595997d9498d5287` in [the source review](../progressive-intro-2026-11-13/source-review.md). A new read-only source pass confirmed command execution, snapshots, query maintenance, shared HTTP/MCP command behavior, and source-to-model IDE synchronization. Shared command behavior does not imply identical transport authorization. The public explanations do not claim diagram-to-code generation or benchmarked growth. No NeoHaskell runtime was executed.

## Review status

Fresh Astra review returns editorial ready and visual keep after one correction pass. The model/prose mismatch concerning order identity is resolved. Language-first identity and complete phone command captures were checked. The build, 19 tests, and 159 browser checks pass. The owner accepted the stronger prose direction and requested the language-first correction; no separate owner acceptance of that final correction is recorded.
