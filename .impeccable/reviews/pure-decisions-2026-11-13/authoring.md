# Pure decisions before integrations

Checkpoint: `0d37dc466b4e42dc300f4364257193c666f2aeb6`, clean before changes.

Page purpose: explain how commands request changes, pure decisions make the business rules understandable and thoroughly testable, and queries provide useful answers. Introduce integrations only after the reader understands the value of keeping effects outside application logic.

The owner's correction replaces the plain-text PlaceOrder sketch with a constructed Haskell record value, assuming the type already exists. It is an illustrative shop type, not a copied public API or a standalone runnable program. The language-tagged block supplies syntax highlighting without adding a type declaration or lesson about syntax.

The follow-up specifies familiar record punctuation: opening brace beside the constructor, separating commas at field ends, and the closing brace on its own line. The new neohaskell-code-examples skill owns this convention and the existing local-binding convention, with pointers from AGENTS.md and neohaskell-docs.

The revised argument teaches the pure boundary first, then concrete benefits: generated test cases, reproducible failures, behavioral comparison during refactoring, provider-independent policy, and local reasoning and reuse. The short following section answers how useful effects happen. A worker knows its task and receives the information it needs; it does not contain the shop's decisions. The owner's latest instruction explicitly removes implementation-language and HTTP discussion from this introduction.

Preserve the accepted page opening, linked history context, decision and query diagrams, query explanation, guide layout, and semantic colors. The source record stays distinct from its displayed answer. No new diagram is needed: the existing decision flow already shows the relevant boundary, and the requested record is a small syntax example. The current guide's readable prose, semantic emphasis, and native code block remain the visual direction.

Source evidence is the inspected NeoHaskell snapshot at revision `033ae4a570686cd885ca14c6595997d9498d5287`, located at `/tmp/neohaskell-sidebar-2026-11-13/source`. `core/service/Decider.hs:67-74` exposes a closed decision description with no arbitrary Task or IO lift; `core/service/Service/Command/Core.hs:161-171` receives command, state, and request context and returns Decision. The runtime interpreter has controlled operations such as identifier generation and protected values, so the lesson describes pure application logic rather than claiming that the interpreter performs no effects. The deterministic example is specifically the shop's stock acceptance rule.

`docs/decisions/0008-integration-pattern.md` separates pure application configuration from reusable effectful integration packages. `core/service/Integration.hs:246,302-310` exposes effectful actions, while `core/service/Service/Application/Integrations.hs:203-209` documents workers and command dispatch. The accepted-order path and event append boundaries are already recorded in [the source review](../progressive-intro-2026-11-13/source-review.md). Provider replacement concerns the unchanged stock policy, not a promise of zero integration or migration work. No NeoHaskell runtime or benchmark is executed for this prose revision.

The fresh combined [editorial and rendered example review](review.md) returned ready and keep, with no material findings. The [verification record](verification.md) records a passing production build, skill validation, and 19 browser checks on the single development server at port 4323, restarted after the change batch. Owner acceptance remains separate. Deliver a local commit without translation or publication.
