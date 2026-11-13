# Build an application: proposed sidebar

Recommend seven sequential pages at one level. Keep the four existing routes and add three chapters where the current implementation brief hides distinct work: the decision, the query, and HTTP wiring. The outcome is one small shop backend, not a complete storefront. This is a proposal for short planning pages; none of the proposed shop source has been implemented or executed.

Reviewed 13 November 2026. Site checkpoint: `dfc5554cdd2c9411430dd4e1fdb4c173cd188ef5`. Framework evidence: `033ae4a570686cd885ca14c6595997d9498d5287`, supplied snapshot `/tmp/neohaskell-sidebar-2026-11-13/source`. Reviewed PRODUCT.md, GLOSSARY.md, astro.config.mjs, all four English tutorial briefs and the 12 November documentation research. Applied Unslop's concrete copy, quiet navigation and one useful content example per page. No site UI or runtime changes were made.

## Ordered tree and handoffs

| Order | Sidebar title | Route | Prerequisite | Exact future reader outcome |
| --- | --- | --- | --- | --- |
| 1 | Plan the mug shop | `/tutorial/` retained | Core concepts; setup needed before implementation | Specify one-mug acceptance, sold-out rejection and the corresponding stock answers. |
| 2 | Create the shop feature | `/tutorial/first-feature/` retained | Working starter from setup; shop specification | Identify the real starter files, add shop entity/event structure, and account explicitly for opening stock. |
| 3 | Accept or reject an order | `/tutorial/decide-orders/` new | Shop state and event types | Trace a proposed order through state lookup, decision and either an event or rejection. |
| 4 | Query available stock | `/tutorial/stock-query/` new | Accepted order event and entity update | Read a projection showing three mugs becoming two while history retains the accepted order. |
| 5 | Place an order over HTTP | `/tutorial/http-orders/` new | Command, query and local Feature declarations | Connect the shop Feature to the named Event Model and inspect an accepted and rejected HTTP order plus the resulting query. |
| 6 | Test shop behavior | `/tutorial/test-behavior/` retained | Callable shop backend | Check acceptance, rejection, replay and eventual query result against the original table. |
| 7 | Keep one mug in reserve | `/tutorial/change-safely/` retained | Passing baseline checks | Add an owner-chosen stock reserve threshold through a bounded agent change, inspect its diff and verify old and new cases. |

The last chapter changes the minimum stock that must remain. This deliberately avoids adding quantity to the original one-mug command or expanding into payments and cancellation. Do not add chapters for each file, each event payload, each keyword, or each testing library. Use article headings within these seven pages.

## Proposed page briefs

### Plan the mug shop

This page will specify a shop that starts with three ceramic mugs and accepts an order for one mug only while stock remains. Readers will predict the command, decision, recorded event, and stock query for accepted and sold-out cases. A small behavior table will become the acceptance criteria handed to the agent. The page will also distinguish the illustration's supplied opening stock from the initialization the implemented application must perform.

Ownership: concrete domain agreement. General terminology stays in Core concepts; competing model boundaries stay in Event Modeling explanation. Evidence: GLOSSARY.md defines the one-mug story; Stock evidence below supports stock validation as a real mechanism, not the proposed shop API.

### Create the shop feature

This page will continue from the working project produced by setup, inspect the generated Counter files, and give an agent the bounded task of introducing the shop's state and events. An annotated file tree will explain Entity, Event, Core, and Feature without teaching every import. Readers will establish opening stock explicitly and inspect how an accepted order changes it. The proposed shop identifiers will be verified before any runnable source is published.

Ownership: first project-specific edit, not installation or a second `neo new` walkthrough. Evidence: [Core re-exports](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Core.hs#L1-L9), [entity state and update](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Entity.hs#L17-L105), and [event sum](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Event.hs#L13-L30). `Core.hs` is a convenience import, not automatically the file containing all domain logic.

### Accept or reject an order

This page will implement the shop's one-mug decision using the current command shape, entity lookup, and explicit accept or reject result. Readers will follow an available-stock case and a sold-out case through the same function, then connect only accepted orders to recorded events. Short source excerpts beside the two outcomes will explain the syntax needed at that point. Missing shop state will receive its own rejection case, without introducing transport or payment behavior.

Ownership: the pure decision and its immediate checks. Evidence: [IncrementCounter command, getEntityId, decide, EntityOf and command derivation](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Commands/IncrementCounter.hs#L17-L52) and [ReserveStock stock checks](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Stock/Commands/ReserveStock.hs#L16-L56). The latter is internal-only and emits StockReserved, not OrderPlaced. It informs the decision but cannot be relabeled as the completed shop tutorial.

### Query available stock

This page will turn the shop's current state into a stock query and show why its answer is separate from the event history. Readers will follow one accepted order from three mugs to two, then verify that a rejected order changes neither history nor stock. A compact history-and-answer figure will accompany the projection code and its declared event inputs. The lesson will explain that the HTTP query may need time to reflect an accepted command.

Ownership: this app's one projection, not a general query API catalog. Evidence: [CounterView deriveQuery, QueryOf, queryId and combine](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Queries/CounterView.hs#L14-L43), [StockLevel projection](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Stock/Queries/StockLevel.hs#L15-L48), and [Feature query event inputs](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Feature.hs#L33-L38).

### Place an order over HTTP

This page will register the shop's command and query through its Feature and compose that Feature into the application's named Event Model. Readers will send one accepted order and one rejected order, then inspect the stock query through the running HTTP service. A focused wiring excerpt and adjacent request-and-response pairs will connect source to observable behavior. The tutorial will use verified shop routes and payloads, with broader HTTP and MCP choices linked to their task guide.

Ownership: first shop HTTP result. Evidence: [counterFlow FeatureAction and command/query slices](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Feature.hs#L15-L38), [appEventModel and WebTransport.server](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/App.hs#L17-L38), [EventModel.run launcher](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/launcher/Launcher.hs#L10-L15), and [maintained Counter HTTP scenario](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/tests/scenarios/counter-flow.hurl#L4-L72). Domain steps should add only implemented slices as their components become available; this chapter completes their assembly, rather than promising placeholder slices compile.

### Test shop behavior

This page will turn the original shop table into repeatable checks for an accepted order, sold-out rejection, missing shop state, and the resulting stock query. Readers will distinguish a decision test from an event replay check and an HTTP scenario, then inspect one intentional failure and its repair. Expected and observed results will appear together. The agent's evidence must include the actual checks run and account for delayed query updates rather than assuming immediate consistency.

Ownership: complete tutorial verification; small local checks still belong beside earlier edits. Evidence: [decision tests and runTestDecision](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/tests/Decider/Counter/IncrementCounterSpec.hs#L22-L59), [replay property](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/tests/Property/CounterReplaySpec.hs#L21-L33), [query retries and $.items envelope](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/tests/scenarios/counter-flow.hurl#L51-L62). Current decision acceptance test checks insertion type and event count, not the full event payload; the shop lesson should assert its relevant payload and stock effect too.

### Keep one mug in reserve

This page will ask the agent to change the shop so that one mug remains available for in-person sales. Readers will update the behavior table first, inspect the decision diff, and check the new boundary alongside existing accepted and rejected orders. A before-and-after comparison will show which outcome intentionally changes and which must remain stable. The lesson will finish with reviewed source and check results, then link to the reusable agent workflow guide.

Ownership: one deliberate behavior change, not a general migration or production rollback course. Evidence: existing stock comparison in ReserveStock and decision tests establish the mechanism. The reserve policy is a proposed teaching requirement, not a current upstream feature or verified implementation. Previously accepted recorded orders must not be rewritten to enforce a new decision policy retroactively.

## What the actual source permits

| Question | Confirmed evidence | Editorial consequence |
| --- | --- | --- |
| Does the CLI generate individual shop features? | [Commands enum](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L20-L124) exposes new, build, run, test, lock, ide, inspect, validate, skills and guidance. There is no generate-feature command. | Setup owns `neo new`; the agent authors tutorial domain files. Do not invent `neo generate feature`. |
| Which source does project generation use? | [do_scaffold](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/commands/new.rs#L309-L362) pins the untouched default framework selection to the embedded starter revision and writes the embedded starter. | Pin CLI and effective generated framework revision separately. A main-branch source inspection is not proof a published binary generates these exact files. |
| Is the newer Feature only descriptive? | [Changelog](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/CHANGELOG.md#L66-L75) records executable Event Model assembly; App and launcher use it. | Teach current Feature registration and EventModel.run, not the earlier interim instruction to keep a second registration list. |
| Is testbed Stock the shop tutorial? | Stock has available/reserved fields, initialization and reservation events, plus an internal-only ReserveStock command. | It is supporting evidence. A public one-mug order command, initialization flow and query contract must still be authored and checked. |
| Is restart recovery part of this beginner result? | [App.hs](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/App.hs#L17-L38) uses SimpleEventStore with persistent False. | Keep durability in its task guide. Replay checks are not evidence that this running starter survives restart. |

## Reference lessons worth borrowing

[Django's first tutorial](https://docs.djangoproject.com/en/5.2/intro/tutorial01/) states the polling application's scope, verifies the installed version, explains generated project files, and connects a view to an observable HTTP result. Borrow a named application and checkable chapter exits. NeoHaskell setup already owns initial project generation, so its tutorial should start from that handoff rather than repeat it.

[The Rust guessing-game chapter](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html) introduces syntax while making successive changes to one program and running each iteration. Borrow local explanation at the moment a reader needs it, rather than requiring a language-reference course before the first domain change. Keep local checks in each lesson even though a later chapter consolidates test layers.

[FastAPI First Steps](https://fastapi.tiangolo.com/tutorial/first-steps/) connects source, a running endpoint, interactive API documentation and OpenAPI. Borrow adjacent request/response evidence in the HTTP chapter. Generated API documentation could be inspected there once the actual NeoHaskell route and schema endpoint are verified; do not infer FastAPI's `/docs` path for NeoHaskell.

## Boundaries and publication blockers

Setup owns toolchain installation, agent installation, project generation, initial Counter launch and the first checked response. The continuous tutorial owns the shop specification, source edits and checks. Reusable guides own transport alternatives, persistence, authorization, integration and deployment. Concepts own general reasoning about boundaries, history and purity. Reference owns complete signatures, CLI arguments and configuration values. Link out at the point of need without turning those pages into required tutorial chapters.

The existing four briefs are too broad particularly at `/tutorial/first-feature/`, which combines domain definition, decisions, projection and callable interface in one paragraph. The seven-page proposal splits by reader-visible result and makes the last change specific. It preserves every existing deep link, avoids nested chapter groups, and remains compatible with one short Page plan paragraph per destination, pagefind false and noindex while unfinished.

Current evidence differs materially from the site's prior cacc806 baseline: the starter uses source-local Feature declarations and one executable named Event Model; entity/event modules are split behind Core; the current command uses entityId; the query scenario addresses an items envelope with retries. The old revision was not available as a Git object in the supplied source archive, so this report does not claim a line-by-line old/new diff. Compare against its pinned files before presenting any migration instructions.

No blocker prevents implementing these planning pages. Finished runnable lessons require a version-coherent generated project and an implemented shop example. Verify initialization, event payload relationships, public command transport, Feature event inputs, startup, actual HTTP response shapes, rejection behavior, eventual query visibility and test invocation before publishing executable code. Use let statements inside do blocks in newly authored examples. Keep source inspection, inferred adaptation and executed results explicitly distinct. No NeoHaskell runtime was executed for this report.
