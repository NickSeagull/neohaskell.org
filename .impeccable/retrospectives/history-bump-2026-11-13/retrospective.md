# Retrospective: minimal teaching graphics

Checkpoint: `1ab11961e1de9ecea0c6b2fc5d9457873ebdbbfc`. This retrospective changes authoring guidance, not the rendered page.

## What changed

The history lesson first compared stock values, snapshots, and meaningful events in a table. The owner redirected it toward retained events and a derived stock answer, moving storage optimization out of the introductory example. The first animation showed those records, a descending cursor, a stock number, arithmetic beneath it, and a pause control. The next correction removed the arithmetic and control and made the event nudge toward the number, with the value changing at the impulse peak.

The [initial authoring record](../../reviews/history-entry-2026-11-13/authoring.md), [impact revision](../../reviews/history-bump-2026-11-13/authoring.md), and [visual review](../../reviews/history-bump-2026-11-13/visual-review.md) preserve the actual iterations. The owner then requested this retrospective and reusable principle. The review establishes its visual and behavioral scope; it is not a learning-outcome study.

## What the earlier approach missed

The first implementation made the calculation explicit and supplied a conventional playback control. Neither choice began with a necessary reader action. The immediate question was how recorded events produce the current answer. The formula added a second representation of that change, while the button presented an operation the owner did not want the reader to perform.

Technical checks and visual review confirmed legibility, correct stock values, and usable controls. They did not establish that the formula or control improved this explanation. The review needed an earlier representation decision and a stronger deletion test, not more polish on those elements.

The final motion gives the event and the changed answer a shared moment. Retaining the records makes the unchanged history visible; the cursor identifies the selected event; the brief impulse connects it to the number; the settled value allows reading to continue. Each remaining part has an explanatory job.

## Principle to retain

Use a graphic when it makes a relationship visible that the reader would otherwise have to reconstruct mentally. Keep the elements needed to observe that relationship. Choose prose, comparison, diagram, animation, or interaction according to the question being answered. Remove any element whose absence does not reduce understanding, necessary action, or access.

Minimal does not mean fewer labels regardless of meaning. Event names, quantities, ordering, and the answer label remain because they establish the scenario. It also does not mean every diagram should animate, every animation should loop, or every control should disappear. Arithmetic belongs when arithmetic is the subject; controls belong when the reader needs to explore or inspect.

## Durable change

The reusable `minimal-teaching-visuals` skill owns representation choice, the deletion test, and causal timing. It is reachable from AGENTS.md, neohaskell-docs, and learning-example-review. The existing review skill still owns rendered evidence and its fresh reviewer loop. The new skill introduces no additional review stage and does not change NeoHaskell's semantic color or terminology rules.

The skill is checked against three distinct cases: a short installation instruction stays prose or code; comparing command, event, and query responsibilities can use a static table; showing retained history changing derived stock can use a short animation. A request to explore different quantities can justify deliberate interaction. These are authoring checks, not newly built examples.

Validation: the new skill and its two updated callers pass the skill validator. Their linked references resolve. The repository copy check and production build pass, generating 586 pages. No rendered content, animation, or translation was changed by this retrospective. The existing development preview remains available; delivery is a local commit.
