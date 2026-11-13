# Progressive introduction source boundaries

Reviewed 13 November 2026. Website checkpoint: `b193e3f29add002a8538e98d7df89ee88621f9cb`. Framework source snapshot: `/tmp/neohaskell-sidebar-2026-11-13/source`, revision `033ae4a570686cd885ca14c6595997d9498d5287`. All framework paths below are relative to that snapshot. This is source inspection, not runtime or performance validation. No upstream tests were run.

## Recommended explanatory order

Start with a business question whose answer changes the program: does ordering reserve a mug immediately, or only after payment? The developer contributes by uncovering that choice, finding exceptions and agreeing observable outcomes. AI can help write the implementation, or the developer can write it directly. Neither changes who must understand the process and decide what is correct. Joy and control are an invitation to this way of working, not a measured productivity claim.

Then show why the current answer alone is insufficient. A stock value of three does not distinguish an untouched shelf from an accepted order followed by a cancellation. Recording `OrderPlaced` and `OrderCancelled` preserves that distinction. These retained facts can explain a present answer and support a new question later, provided the required facts were recorded and remain available.

Only then introduce commands as proposed changes, decisions as the boundary that checks them, events as accepted facts, and queries as maintained answers with a separate read interface. Finish with Event Modeling as the process for designing these connected behaviors with other people. This follows the owner's latest direction even though the older `PRODUCT.md` opening sequence places Event Modeling first.

## History, snapshots and erasure

| Safe claim | Evidence and boundary |
| --- | --- |
| Accepted changes normally append events, preserving earlier business facts rather than replacing them with only a new current value. | `core/service/Service/CommandExecutor/Core.hs:381-399` inserts accepted event payloads. `core/service/Service/EventStore/Postgres/Sessions.hs:360` performs `INSERT INTO Events`. Say "normally" or describe the ordinary application path. This is not a promise that records cannot ever be removed. |
| A cancellation can be recorded as another fact while retaining the original order fact. | Supported by the append mechanism. Whether cancellation restores stock, refunds money or is allowed after dispatch is application behavior the developer must specify. The framework does not infer these consequences. |
| Current state can be reconstructed from retained events, with cached snapshots reducing repeated work. | `core/service/Service/EntityFetcher/Core.hs:139-145` describes the snapshot path; `174-185` selects snapshot state and the next event position; `221-228` stores an updated snapshot. A snapshot is an optimization compatible with history, not an alternative the framework prohibits. |
| History retention and personal-data erasure require deliberate policies. | `core/service/Service/EventStore/Core.hs:145-149` exposes protected rendering and erasable keys; `195-196` exposes stream truncation. The Postgres implementation actually deletes events with positions below the threshold in `core/service/Service/EventStore/Postgres/Sessions.hs:511-525`. |
| Protected values can become unavailable while historical event structure remains. | `core/service/Service/EventStore/Postgres/ErasableKeys.hs:82-86,102-125` clears encryption key bytes; `core/core/Erasable/Internal.hs:227` renders erased data as an `Erased` value with null contents. Do not promise recovery of erased data by replaying events. |

Avoid "infinite history", "undeletable events", "nothing is ever lost" and "rebuild anything at any time". The starter itself uses `persistent = False` in `neo/starter/src/App.hs:19-27`; a running process retaining events is not durable storage. Also avoid saying traditional applications only overwrite rows: other stacks can keep audit logs, temporal records or event streams. The relevant contrast is **keeping only current values versus keeping the business facts needed to explain those values**.

## Commands protect the intended write path

`core/service/Service/Command/Core.hs:109-131` defines a command contract with an entity identifier and decision logic. Its typed decision receives the command, optional entity state and request context (`161-171`). Authorization runs before the decision, and the default requires authentication (`133-147`).

`core/service/Service/CommandExecutor/Core.hs:327-336` evaluates a decision and returns a rejection without taking the accepted-event append branch. `354-362` validates the insertion and also permits accepted outcomes with zero events. `381-399` appends accepted events and handles consistency conflicts. `444-462` refetches the entity and reruns the attempt on conflicts, with ten retries rather than an unbounded guarantee of success.

Safe introductory wording: "A command asks for a change. Its decision checks the current state before the framework records accepted events. In our shop, an order for a mug is rejected when none is available."

The useful boundary is not merely a command-shaped function name. NeoHaskell supplies the typed contract and execution path that fetches state, checks the decision, appends the outcome and handles conflicting writes. However, the developer must still encode the correct stock rule and choose an entity boundary that can enforce it. A system-wide promise such as "overselling is impossible" does not follow automatically from these APIs. Direct administrative database access also lies outside this application boundary.

Do not imply the AI agent decides whether a customer's order is accepted at runtime. The application decision does that. Do not claim every accepted command emits exactly one event: zero-event acceptance is present in the executor, and accepted events are an array.

### Decision purity wording

Use: "The decision API separates business logic from external actions such as sending an email or charging a payment. Those actions belong in integrations."

`core/service/Decider.hs:67-74` defines the closed decision operations: `Return`, `Bind`, `GenUuid`, `ProtectValue`, `TransformValue`, `Accept` and `Reject`. There is no general `Task` or `IO` lifting operation in this API. The command contract returns `Decision`, not `Task` (`core/service/Service/Command/Core.hs:167-171`). External integration actions explicitly carry a `Task` (`core/service/Integration.hs:246,302-310`). This supports the intended separation under the normal public API, not a security claim about hostile code using unsafe language escape hatches.

Avoid saying that evaluating a decision has literally no effects. Its framework interpreter runs UUID generation, encryption-key generation, protected-key lookup, encryption and logging (`core/service/Decider.hs:128-173`). The command executor supplies the UUID generator and event-store key lookup (`core/service/Service/CommandExecutor/Core.hs:327-331`). The pure decision description and restricted operation vocabulary are distinct from the effectful interpreter that executes it. Consequently "evaluating it cannot quietly send an email, write a file, or call a payment service" should be narrowed to what the decision API exposes, rather than phrased as an absolute runtime guarantee.

## Queries are maintained answers, not write commands

`core/service/Service/Query/Core.hs:126-139` defines `QueryOf`: `queryId` selects a query instance, and `combine` receives entity state plus existing query state and returns an update, deletion or no-op. Query state is maintained separately from reading its answer.

`core/service/Service/Query/Updater.hs:93-123` receives an event, reconstructs its entity, computes the query action and atomically updates query storage. `core/service/Service/Query/Subscriber.hs:150-174` supports rebuilding from event history and explicitly fails on unreadable events. Rebuilding therefore relies on available, readable source data.

`core/service/Service/Query/Endpoint.hs:76-117` implements the public read path: access checks, reading query objects, per-result authorization, filtering, pagination and protected-data rendering. It does not append business events. This is the precise sense in which reading an answer does not place or cancel an order.

Safe wording: "Queries keep the information each screen needs up to date from application state. Reading the stock query answers how many mugs are available; it does not order one."

Avoid "a query does not change any state" without distinguishing retrieval from maintenance, because the query updater changes query storage. Avoid implying every read replays the entire ledger. Avoid claiming automatic fast reads or unlimited scale: this endpoint calls `getAll` before filtering and pagination (`81-105`). No benchmark was run. Separate paths permit different representations, but do not by themselves establish performance or immediate consistency after every write.

## Concrete differentiation from an arbitrary language plus an agent

| NeoHaskell supplies | What the developer still decides |
| --- | --- |
| Typed command, entity, event and query contracts with an executor for fetch, decision, append and conflict retry. | Business conditions, entity boundaries, event payloads, authorization requirements and meaningful rejection reasons. |
| A declared executable Event Model. `core/service/Service/EventModel.hs:533-545` requires one primary declaration per slice; `555-565` ties commands and produced events to an entity; `568-584` wires typed query sources. | Which behaviors exist, how journeys cross slices, the scenarios worth testing, and which shared meanings must stay compatible. A whole order journey is not one slice containing every primary declaration. |
| Query maintenance and query read endpoints with access checks, filtering and pagination. | What questions screens need answered, the query shape, projection logic, access policy and workload suitability. |
| A starter with selected application structure, HTTP transport and an event-store configuration. `neo/starter/src/App.hs:23-38` declares these together. | Durability and deployment configuration. `App.hs:28-35,44-53` leaves an explicit Postgres configuration path. Command transport membership is a declared type family in `core/service/Service/Command/Core.hs:66-73`. |
| A visual IDE backed by source inspection and code-to-model synchronization. `neo/src/ide/sync.rs:1-9,47-97` refreshes model data from source; `neo/src/commands/ide.rs:156-190` installs the source watcher. | Business truth and source implementation. Diagram edits are not a shipped general diagram-to-code generator: `sync.rs:7-9` explicitly says that direction is future work. |

These are integrated conventions and mechanisms, not capabilities that no other language can implement. The defensible comparison is that another general-purpose stack usually asks the team or agent to choose and assemble an equivalent structure, while NeoHaskell gives both a shared structure to follow. "Fewer recurring technical choices" is safe. "No technical decisions" is not.

The model's explicit boundaries and contracts can help a person review an agent's work against intended behavior. They do not prove that the model is complete, that a business rule is correct, that all generated code is safe, or that change cost always grows linearly. Event Modeling remains useful for handwritten implementation and for understanding an existing system.

## Current introduction correction targets

The current `src/content/docs/introduction/index.mdx` starts directly with a shop scenario but names Event Modeling before explaining the reason to preserve history. Move the motivation for history earlier, using the identical final stock value reached by different histories as the concrete comparison.

Its sentence "A query answers a question from the application's state without changing it" should explicitly refer to reading the answer. The existing glossary already distinguishes query definition, maintained state and returned answer.

The current introduction's "Keep growth close to linear" section describes an aim with a caveat. It should not become the main concrete difference from traditional programming. The typed write path, separate query maintenance and source-backed visual model are more direct, inspectable differences for this introduction.

The existing "Carry the picture into NeoHaskell" section can explain source-to-model inspection. Do not extend it to bidirectional synchronization. Keep the developer's contribution visible throughout: choosing behavior, asking what happens in exceptions, and reviewing outcomes whether code is written by hand or with an agent.
