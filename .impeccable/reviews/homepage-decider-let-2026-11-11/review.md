# Counter decision binding

Checkpoint: `13171003c4be5946cde366ce1fd84c3154e7d1af`. Preview: `http://127.0.0.1:4321/#see-the-code`.

The owner supplied a simplified decision body and asked to extract the event into a let binding inside the else branch. The implementation uses `decide cmd _ _`, rejects non-positive amounts, binds the full `CounterIncremented` event using `cmd.counterId` and `cmd.amount`, then calls `Decider.acceptExisting [event]`. Main prose and outcomes now describe amount validation alone. The inline link remains the upstream basis; the main paragraph and provenance document identify the example as adapted.

Unslop restraint preserves the existing composition and type, with no captions, language badges, or footnotes. Build, all 12 existing tests, and the copy check pass. Eight desktop/tablet/phone cases across both themes confirm 16px code, exact rendering of the local example, matching outcomes, an inline source link, no page overflow, and phone keyboard scrolling. The website checks do not compile or execute the NeoHaskell example.

The fresh learning-example reviewer inspected desktop and phone captures in both themes and the revised implementation. Verdict: keep, with no corrections. The review establishes visual clarity and source/prose consistency within this edit; it does not establish runtime compilation or user acceptance. Screenshots and checks are in `artifacts/`.


## Binding syntax correction

The owner clarified: use a `do` block with a `let` statement, never a `let ... in` expression. Checkpoint `039bc66` preserves the previous version. The example now uses `else do` and a local `let event` statement followed by `Decider.acceptExisting [event]`. `AGENTS.md` records this as the NeoHaskell example convention.

Build, all 12 tests, and eight viewport/theme checks pass. A fresh reviewer inspected both themes on desktop and phone and returned keep, with no corrections. The review covers the syntax and readability change; no runtime compilation is claimed. Updated evidence is in `artifacts/do-block/`.
