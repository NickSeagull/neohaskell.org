# Counter event naming

Checkpoint: `923e6398faa6a022157486df88c76ae57006d86a`.

The owner requested one `CounterIncremented` datatype and constructor in place of the nested constructor and qualified payload. The decision now constructs that record directly. The update accepts `event` directly instead of unwrapping the removed sum. The `else do` binding, validation and record fields remain unchanged.

Unslop scope: remove the redundant event layer and keep the existing visual design. No new labels, captions, helper text, layout, color or motion changes. Provenance in `src/examples/README.md` records this owner-directed adaptation of the upstream representation.

A fresh learning-example reviewer inspected native-scale write and read section captures in both themes at 390 and 1440px before source and returned **keep**, with no material findings. The verdict covers the simplified event's continuity and rendered presentation, not upstream runtime compatibility or learning outcomes. Owner acceptance remains separate.

The build and all 12 existing tests pass. Six exact snippets render across 16 viewport/theme cases from 320 to 1600px, with no page overflow or page errors. Code remains 16px, prose 18px, horizontal scrolling keyboard-accessible, and all snippets render without JavaScript. The website task does not compile these adapted excerpts against NeoHaskell.

The existing server remains running at `http://127.0.0.1:4321/#see-the-code`. Captures, `checks.json` and the independent review are saved locally in `/tmp/neohaskell-counter-event/`; build output is `/tmp/neohaskell-counter-event-build.log`.
