# Understand the design: proposed sidebar

Expand three broad entries into eight concrete conceptual questions. Preserve the accepted article layout and all existing routes. This is an editorial scaffold supported by source inspection, not an executed framework demonstration.

Site checkpoint: `dfc5554cdd2c9411430dd4e1fdb4c173cd188ef5`. Upstream snapshot: `033ae4a570686cd885ca14c6595997d9498d5287`, resolved 2026-11-13.

## Proposed pages

### Features, chapters, and slices

Route: `/concepts/event-modeling/`

Reader question: How does an application story become a model that stays connected to its implementation?

This page will explain how an Event Model groups application behavior into features, chapters, and slices, and why each slice has a focused responsibility. An annotated Counter feature tree will connect a command slice and a query slice to their declared events. It will contrast organizing a story with enforcing an entity boundary, then link to the tutorial for implementation and framework reference for the DSL.

Source evidence:

- [`neo/starter/src/Starter/Counter/Feature.hs:15-38`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Feature.hs#L15-L38): `counterFlow`.
- [`testbed/src/Testbed/Stock/Feature.hs:15-44`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Stock/Feature.hs#L15-L44): `stockFlow`.
- [`core/service/Service/EventModel.hs:69-97`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/EventModel.hs#L69-L97): `features, feature, chapter, slice, rule`.

### Commands, decisions, and outcomes

Route: `/concepts/command-outcomes/`

Reader question: What can happen when a command reaches the application?

This page will follow a stock reservation from intention to domain decision and persistence. A compact outcome table will distinguish acceptance with one or several events, acceptance without events, domain rejection, and execution failure. It will explain why rejecting insufficient stock differs from failing to save an accepted change. The first shop illustration will remain a deliberately small case, with links to testing and troubleshooting for procedures.

Source evidence:

- [`testbed/src/Testbed/Stock/Commands/ReserveStock.hs:25-47`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Stock/Commands/ReserveStock.hs#L25-L47): `getEntityId, decide`.
- [`core/service/Decider.hs:49-74`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Decider.hs#L49-L74): `CommandResult, Decision`.
- [`core/service/Service/CommandExecutor/Core.hs:327-362`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/CommandExecutor/Core.hs#L327-L362): `appendAcceptedEvents`.
- [`core/service/Service/CommandExecutor/CommandOutcome.hs:21-47`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/CommandExecutor/CommandOutcome.hs#L21-L47): `CommandOutcome, executionResult`.

### Entities and consistency boundaries

Route: `/concepts/entities-and-streams/`

Reader question: Which facts must a decision consider together, and what happens when commands compete?

This page will explain an entity as state reconstructed from one identified event stream and as the boundary within which a command checks its conditions. Two competing stock reservations will illustrate a stale decision, an append conflict, and evaluation against refreshed state. A two-lane sequence figure will keep cart and stock histories separate. It will explain the boundary without promising an atomic transaction across both entities.

Source evidence:

- [`core/service/Service/Entity/Core.hs:34-65`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Entity/Core.hs#L34-L65): `Event, Entity`.
- [`testbed/src/Testbed/Stock/Commands/ReserveStock.hs:25-47`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Stock/Commands/ReserveStock.hs#L25-L47): `decide`.
- [`core/service/Service/CommandExecutor/Core.hs:381-399`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/CommandExecutor/Core.hs#L381-L399): `appendEventsToStore`.
- [`core/service/Service/CommandExecutor/Core.hs:444-462`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/CommandExecutor/Core.hs#L444-L462): `handleConflict`.

### History and current state

Route: `/concepts/history-and-state/`

Reader question: Why retain events when the application already has current state?

This page will distinguish the facts recorded in an event stream from the entity state obtained by applying them in order. An aligned Counter ledger and state table will show how the same history reconstructs the same entity through its update function. It will explain that replay derives state from recorded facts rather than rerunning original commands, and hand query rebuilding to its own page and persistence setup to the storage guide.

Source evidence:

- [`core/service/Service/Entity/Core.hs:45-65`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Entity/Core.hs#L45-L65): `Entity.initialStateImpl, Entity.updateImpl`.
- [`neo/starter/src/Starter/Counter/Feature.hs:15-38`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Feature.hs#L15-L38): `counterFlow`.

### Query projections and replay

Route: `/concepts/query-projections/`

Reader question: How can the same history answer different questions, and how does a query catch up?

This page will explain query state as a separately maintained answer derived from selected event sources. The cart and stock activity query will show that a query can combine entities without merging their command boundaries. A diagram will separate event history, projection updates, and persisted checkpoint position. It will compare resuming compatible progress with rebuilding changed query state, including readiness during replay, without turning the explanation into a recovery runbook.

Source evidence:

- [`testbed/src/Testbed/Stock/Feature.hs:33-44`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Stock/Feature.hs#L33-L44): `stockFlow query slices`.
- [`testbed/src/Testbed/Cart/Queries/CartStockActivity.hs:33-57`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Cart/Queries/CartStockActivity.hs#L33-L57): `QueryOf instances, combine`.
- [`core/service/Service/Query/Subscriber.hs:356-460`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Query/Subscriber.hs#L356-L460): `rebuildFrom, rebuildFromInner`.
- [`core/service/Service/QueryObjectStore/Postgres.hs:476-500`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/QueryObjectStore/Postgres.hs#L476-L500): `CheckpointStore`.

### Pure decisions and effects

Route: `/concepts/pure-decisions/`

Reader question: What does purity mean when a decision needs context or generated values?

This page will separate constructing a decision from interpreting it and performing effects. A boundary figure will place command data, current entity state, and request context beside the decision description, with UUID generation and protected-value operations in the interpreter. It will explain which inputs must be controlled for repeatable tests and why purity does not prove the intended business behavior. Network integrations will lead to the workflow explanation and task guide.

Source evidence:

- [`core/service/Decider.hs:58-95`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Decider.hs#L58-L95): `Decision, DecisionContext`.
- [`core/service/Decider.hs:125-174`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Decider.hs#L125-L174): `runDecisionStep`.
- [`core/service/Service/Auth.hs:62-83`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Auth.hs#L62-L83): `RequestContext`.
- [`core/service/Service/CommandExecutor/Core.hs:327-336`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/CommandExecutor/Core.hs#L327-L336): `Decider.runDecisionWithKeys call`.

### Workflows across entities

Route: `/concepts/event-driven-workflows/`

Reader question: How does one recorded fact cause another part of the application to act?

This page will explain how outbound integrations react to recorded events and issue commands to another entity, while inbound integrations introduce commands from outside. The existing cart-to-stock declaration will provide a small sequence figure with two separate decisions and histories. The explanation will identify where later work can fail and why an earlier event remains a fact. Provider configuration and retry procedures will stay in the integration guide.

Source evidence:

- [`testbed/src/Testbed/Cart/Feature.hs:100-117`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Cart/Feature.hs#L100-L117): `outboundIntegration, inboundIntegration, triggersCommand`.
- [`testbed/src/Testbed/Stock/Commands/ReserveStock.hs:16-47`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Stock/Commands/ReserveStock.hs#L16-L47): `ReserveStock, decide`.

### Identity and permissions

Route: `/concepts/identity-and-permissions/`

Reader question: Why does knowing who someone is not decide what they may do or read?

This page will separate authenticated identity, permission to invoke an operation, ownership of particular data, and domain acceptance. A small comparison table will trace the same signed-in user through an allowed query, a forbidden record, and a rejected business command. It will explain request context and the distinct query access and instance checks, while leaving provider setup, policy implementation, and endpoint testing to the access-control guide.

Source evidence:

- [`core/service/Service/Auth.hs:62-83`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Auth.hs#L62-L83): `RequestContext`.
- [`core/service/Service/AccessControl.hs:1-30`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/AccessControl.hs#L1-L30): `canAccess, canView`.
- [`core/service/Service/AccessControl.hs:63-87`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/AccessControl.hs#L63-L87): `AccessError, QueryEndpointError`.
- [`core/service/Service/CommandExecutor/CommandOutcome.hs:21-47`](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/CommandExecutor/CommandOutcome.hs#L21-L47): `CommandOutcome`.

## Editorial decisions and evidence limits

Current-source evidence: inspected the supplied upstream main snapshot 033ae4a570686cd885ca14c6595997d9498d5287, resolved 2026-11-13. No NeoHaskell application, compiler, tests, persistence, or integration was executed.

Intended content: all briefs and proposed figures describe future explanatory content. This report adds no teaching snippet or finished lesson. Preserve Page plan, noindex, pagefind:false, and the accepted continuous article design.

Keep existing concepts/event-modeling, concepts/history-and-state, and concepts/pure-decisions routes. The first changes title from Model application behavior to Features, chapters, and slices; its modeling tradeoffs remain within that concrete scope.

Use one Understand the design group with eight pages. This is a finite conceptual map, not one page per API symbol. If navigation density requires subgroups, group the first three as Behavior, the next two as State, and the final three as Boundaries without adding landing pages.

Purity caveat: Decision is a pure description with a Task interpreter. Current source includes GenUuid, ProtectValue, and TransformValue. Do not promise identical generated bytes or identifiers from the same command unless interpreter inputs are controlled.

Outcome caveat: a domain decision accepts an event array or rejects with text. An accepted empty array is supported; execution errors and unauthorized outcomes are distinct runtime results. Do not present errors as additional constructors of CommandResult.

Terminology: use decision and query in prose. Source DSL rule describes a behavior example; View and canView are source identifiers, not replacements for the approved product vocabulary.

Checkpoint caveat: a query checkpoint stores replay progress tied to a query hash. It is not event history, an entity snapshot, an undo facility, or a promise to reverse external effects.

Permission caveat: RequestContext documents trustedBypass for deployments without configured JWT auth. Do not infer a universal secure deployment default from authorization helper comments.

Official docs inspiration: https://react.dev/learn/state-as-a-snapshot answers one mental-model question with a bounded timeline; https://vuejs.org/guide/essentials/reactivity-fundamentals.html separates fundamentals and focused caveats; https://phoenix.hexdocs.pm/contexts.html names responsibilities and boundaries in an application domain. Borrow granularity and concrete questions, not their runtime semantics or UI. Pages were read on 2026-11-13.

Ownership: setup installs and runs; tutorial implements one feature; task guides configure and recover; reference documents signatures and exhaustive variants. These concept pages explain why behavior is structured this way and link to those owners.

## Official documentation comparison

[React: State as a Snapshot](https://react.dev/learn/state-as-a-snapshot) gives a named misconception its own page and traces a short sequence. This supports separate history, command outcomes, and query projection pages instead of one broad architecture essay.

[Vue: Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) keeps its main concept together while naming limitations precisely. This supports keeping interpreter caveats on Pure decisions and effects, rather than adding small standalone pages for UUID generation or every helper.

[Phoenix: Intro to Contexts](https://phoenix.hexdocs.pm/contexts.html) connects named boundaries to concrete responsibilities in an application. This supports Entities and consistency boundaries, while explicitly avoiding a claim that a Phoenix context and a NeoHaskell entity have identical semantics.

## Restraint check

The proposed labels describe NeoHaskell questions visible in current source. No decorative sidebar labels, empty reference stubs, new runtime widgets, or framework installation steps are proposed. Each page owns a distinct explanation and one useful figure or table. The existing article, search treatment for briefs, and canonical terminology remain authoritative.
