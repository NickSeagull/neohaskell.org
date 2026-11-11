# Homepage Counter examples

The six snippets are owner-requested simplifications of the [Counter starter at NeoHaskell revision cacc8069070721539ae0aac53286ce9492e906a5](https://github.com/neohaskell/NeoHaskell/tree/cacc8069070721539ae0aac53286ce9492e906a5/neo/starter), checked 11 November 2026. They show the increment flow for an existing counter inside that starter's HTTP service.

Paths below are relative to `neo/starter/src/Starter/Counter/` at that revision.

| Homepage file | Upstream basis | Adaptation |
| --- | --- | --- |
| `counter-command.hs` | `Commands/IncrementCounter.hs` | Rename the command's `entityId` field to the owner-approved `counterId`; omit deriving, instances, entity routing and registration. |
| `counter-decision.hs` | `Commands/IncrementCounter.hs` | Use the owner-supplied decision described below. |
| `counter-event.hs` | `Events/CounterIncremented.hs` | Rename the payload datatype and constructor to `CounterIncremented`; preserve its fields and omit deriving and the separate `CounterEvent` sum. |
| `counter-entity.hs` | `Core.hs` | Show only the identity and value fields, omitting the unrelated label. |
| `counter-update.hs` | `Entity.hs` | Accept the increment record directly as `event`, with current state named `counter`. Creation and decrement cases are outside this increment example. |
| `counter-query.hs` | `Queries/CounterView.hs` | Show the view datatype and `combine` definition. Omit `queryId` at the owner's request, plus the label field, access functions, derivation and `QueryOf` instance wrapper. |

The owner supplied the revised body on 11 November 2026: ignore the entity and context arguments, reject non-positive amounts, and use `cmd.counterId` for the event. The accepted event is bound with a `let` statement inside `else do`, then passed to `Decider.acceptExisting`. Follow the repository convention of `do` blocks with `let` statements instead of `let ... in` expressions. The example no longer checks whether the counter exists.

The owner then requested a single `CounterIncremented` datatype and constructor, replacing the qualified payload and outer sum wrapper. The decision now constructs that record directly, and `update event counter` reads its amount without unwrapping it. This intentionally simplifies the starter's event representation; it is not its unchanged API.

The omitted command routing must read `cmd.counterId` to match the renamed field. The omitted query instance associates `CounterEntity` with `CounterView`. The starter supplies the create-counter flow, initial state, module imports, registrations, access configuration and HTTP server in `src/App.hs` and `Feature.hs`.

The starter's `tests/integration/counter-flow.hurl` exercises `POST /commands/increment-counter` and `GET /queries/counter-view`. The latter returns a paginated collection of projected views. The homepage names these routes in its main prose and links the upstream starter and query source inline. It does not show an invented response envelope or claim that an increment creates a counter.

Astro provides build-time syntax highlighting. There are no captions or metadata bars. These static, adapted snippets omit wiring and are not a standalone program or interactive execution. They have not been compiled against the NeoHaskell runtime in this website task.

The original repository distributes this source under Apache License 2.0; a copy ships at [`public/licenses/neohaskell-apache-2.0.txt`](../../public/licenses/neohaskell-apache-2.0.txt). Preserve the source link, license, and this provenance when changing or replacing the excerpt.
