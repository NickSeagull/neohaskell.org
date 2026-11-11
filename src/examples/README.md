# Homepage decision example

`counter-decision.hs` is an owner-requested simplification of the `decide` function from `neo/starter/src/Starter/Counter/Commands/IncrementCounter.hs` in [NeoHaskell revision cacc8069070721539ae0aac53286ce9492e906a5](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/neo/starter/src/Starter/Counter/Commands/IncrementCounter.hs#L30-L43), checked 11 November 2026.

The owner supplied the revised body on 11 November 2026: ignore the entity and context arguments, reject non-positive amounts, and use `cmd.counterId` for the event. The accepted event is bound with a `let` statement inside `else do`, then passed to `Decider.acceptExisting`. Follow the repository convention of `do` blocks with `let` statements instead of `let ... in` expressions. The example no longer checks whether the counter exists.

The homepage describes this as a simplified decision and links its upstream basis inline in the main paragraph. Astro provides build-time syntax highlighting. There are no captions or metadata bars. This is a static example, not an unchanged upstream quotation, standalone program, or interactive execution. It has not been compiled against the NeoHaskell runtime in this website task.

The original repository distributes this source under Apache License 2.0; a copy ships at [`public/licenses/neohaskell-apache-2.0.txt`](../../public/licenses/neohaskell-apache-2.0.txt). Preserve the source link, license, and this provenance when changing or replacing the excerpt.
