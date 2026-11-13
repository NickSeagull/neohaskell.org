# Reference and help sidebar proposal

20 pages in five subgroups. Preserve all seven existing routes.

## Scope and evidence

Proposed scope: 20 pages in five subgroups. Existing routes remain useful first topics: language, core, framework, cli, configuration, errors, and resources. All other entries are bounded topic pages with anchored symbols, not generated per-symbol stubs.

Exact source: upstream main 033ae4a570686cd885ca14c6595997d9498d5287, supplied snapshot checked 2026-11-13. Site checkpoint dfc5554cdd2c9411430dd4e1fdb4c173cd188ef5. This is read-only source and test inspection, not runtime execution or confirmation of release availability.

Public boundary: Core, Config, Json, Service.EventModel, Service.Application and named framework contracts are exposed library modules. Service.EventModel.Types is an internal other-module and is not proposed as an application-facing page. Rust parser, config, diagnostics and reconciliation internals provide evidence for public command/file behavior, not a Rust API reference.

TypeScript separates a readable handbook from deeper topic reference. Borrow stable focused topics and cross-links: https://www.typescriptlang.org/docs/handbook/. MDN groups language reference by constructs and built-ins; borrow lookup groups, not one sidebar item per symbol: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference. Elixir Kernel combines module context, grouped standard library links, signatures, source and examples; borrow source-linked entries without exposing the entire module tree: https://elixir.hexdocs.pm/Kernel.html. Official pages inspected 2026-11-13; these are structural references, not a popularity ranking.

Existing resources.mdx substantive copy must remain. It currently cites cacc806 and neo-v0.17.1; those are historical, not evidence that new main commands shipped in that release. Preserve its version distinctions and revise individual links only when their replacement claim is verified.

Apply restrained article layout and conventional tables. These briefs propose future examples only; no example was authored or executed, no teaching widget or interaction is necessary, and no application or sidebar implementation belongs to this report.

## Language

### Syntax and expressions

Route: `/reference/language/` (existing)

What does this expression mean?

This page will make everyday source readable through modules and imports, function application, signatures, pipelines, record access, conditionals, case expressions, and do blocks. Each construct will get one compact source and result pair, with stable anchors for tutorial links. It will explain qualified operations and generated language extensions, using let statements inside do blocks for local bindings and linking type definitions to the next page.

Evidence: [Maintained syntax guidance (docs/agent/syntax-and-core.md:3-32)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/syntax-and-core.md#L3-L32); [Public Core re-exports (core/core/Core.hs:4-60)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Core.hs#L4-L60).

### Types and records

Route: `/reference/language/types/`

How do I read or define the shapes in a feature?

This page will cover type parameters, records, constructors, sum types, type aliases, class constraints, associated types, visible type application, and deriving notation as they appear in application code. A compact annotated command record and event sum will connect source spelling to possible values. It will distinguish handwritten definitions from derive helpers, with links to framework contracts instead of teaching metaprogramming or reproducing a Haskell language manual.

Evidence: [IncrementCounter, EntityOf, TransportsOf, command (neo/starter/src/Starter/Counter/Commands/IncrementCounter.hs:18-52)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Commands/IncrementCounter.hs#L18-L52); [QueryOf and EntitiesOf (core/service/Service/Query/Core.hs:126-156)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Query/Core.hs#L126-L156).

## Core library

### Values and common types

Route: `/reference/core/` (existing)

Which types and operations are already available through Core?

This page will serve as the Core entry point and scalar lookup: Text, numeric types, Bool, Unit, Uuid, and the difference between a re-exported type and qualified module operations. A short type-to-module table will route readers to containers, optional results, tasks, and JSON. Selected signatures will show text conversion and arithmetic conventions; advanced concurrency and implementation modules will remain linked source rather than fill the sidebar.

Evidence: [Core public facade (core/core/Core.hs:9-60)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Core.hs#L9-L60); [Basics numeric, Boolean and comparison exports (core/core/Basics.hs:6-67)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Basics.hs#L6-L67); [Text, split, joinWith (core/core/Text.hs:130-210)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Text.hs#L130-L210).

### Arrays and maps

Route: `/reference/core/containers/`

How do I transform a collection or look up an item?

This page will group Array and Map operations by constructing, finding, transforming, combining, and reducing data. Signature tables will make pipeline argument order explicit, while small examples will show an absent index or key, empty collections, and a simple total. Related operations will have anchors on one page, with linked canonical definitions and edge cases, rather than a separate route for every exported function.

Evidence: [Array.get, reduce, takeIf, map (core/core/Array.hs:258-383)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Array.hs#L258-L383); [Map.fromArray, get, reduce, mapValues (core/core/Map.hs:74-135)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Map.hs#L74-L135).

### Maybe and Result

Route: `/reference/core/results/`

How do I represent absence or a recoverable failure?

This page will compare Nothing and Just with Err and Ok, showing when absence carries no explanation and when a typed error is needed. Compact signatures and paired cases will cover map, andThen, withDefault, mapError, and conversions between the two containers. A parsing or lookup example will retain the error until the caller deliberately handles it, and link effectful failure handling to Task.

Evidence: [Maybe public exports and transformations (core/core/Maybe.hs:2-91)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Maybe.hs#L2-L91); [Result, map, andThen, mapError, conversions (core/core/Result.hs:34-168)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Result.hs#L34-L168).

### Tasks and effects

Route: `/reference/core/tasks/`

How do I sequence work that can fail?

This page will document Task error value, successful construction, typed failure, chaining, do notation, recovery, and conversion to Result. One short sequence will show which step runs and what happens after failure; a signature table will separate constructing a task from executing it at the program boundary. Cleanup and cancellation will be linked advanced entries, with Decision explicitly cross-linked as the separate contract for business acceptance and rejection.

Evidence: [Task, yield, throw, recover, asResult (core/core/Task.hs:71-129)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Task.hs#L71-L129); [andThen and run functions (core/core/Task.hs:181-232)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Task.hs#L181-L232); [CommandResult and Decision (core/service/Decider.hs:49-74)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Decider.hs#L49-L74).

### JSON and schemas

Route: `/reference/core/json/`

How do typed values become JSON and API schemas?

This page will cover Json encoding and decoding, FromJSON and ToJSON instances, malformed input as Result, and the separate Schema contract used to describe API data. A small record will be paired with its JSON shape and one invalid input. It will distinguish serialization from validation and generated API descriptions, keeping parser helpers in anchored tables and linking command payload details to the transport reference.

Evidence: [Json exports, decodeText, encodeText (core/json/Json.hs:1-80)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/json/Json.hs#L1-L80); [Result and Schema re-exports (core/core/Core.hs:33-34)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Core.hs#L33-L34); [EndpointSchema (core/service/Service/Transport.hs:56-73)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Transport.hs#L56-L73).

## Framework contracts

### Event models and features

Route: `/reference/framework/` (existing)

How do the declared features become a running application?

This page will map EventModel, FeatureAction, chapter, slice, entity, command, produces, query, and readsFrom to the source-local Counter feature. A compact relationship figure will show declaration, validation, and runtime assembly without mixing event history with query rows. Builder signatures and ordering constraints will sit beside the model. Direct Service.Application assembly will be a linked advanced section, preserving its public status while leading with the current starter architecture.

Evidence: [Public EventModel DSL (core/service/Service/EventModel.hs:4-98)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/EventModel.hs#L4-L98); [counterFlow consumer (neo/starter/src/Starter/Counter/Feature.hs:15-38)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Feature.hs#L15-L38); [appEventModel consumer (neo/starter/src/App.hs:17-38)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/App.hs#L17-L38); [Public lower-level Application exports (core/service/Service/Application.hs:1-86)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Application.hs#L1-L86).

### Commands and decisions

Route: `/reference/framework/commands/`

What must a command define, and what can a decision return?

This page will specify the command record, EntityOf, getEntityId, decide, RequestContext, transport permissions, and derivation helpers, mapping authored functions to public Command methods. It will compare acceptNew, acceptExisting, acceptAny, acceptAfter, and reject through a compact outcome table. Counter decision cases will ground accepted and rejected behavior. Multi-tenant signatures and authorization hooks will have anchors, with task guides owning the longer implementation and access-policy walkthroughs.

Evidence: [Command and DecideFunction public contracts (core/service/Service/Command/Core.hs:115-171)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Command/Core.hs#L115-L171); [Decider public constructors and outcomes (core/service/Decider.hs:1-74)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Decider.hs#L1-L74); [Authored command consumer (neo/starter/src/Starter/Counter/Commands/IncrementCounter.hs:18-52)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Commands/IncrementCounter.hs#L18-L52); [Source-inspected decision tests (neo/starter/tests/Decider/Counter/IncrementCounterSpec.hs:29-59)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/tests/Decider/Counter/IncrementCounterSpec.hs#L29-L59).

### Entities and events

Route: `/reference/framework/entities/`

How is an entity identified and rebuilt from its events?

This page will specify EntityOf, EventOf, EntityIdType, initialState, update, event routing, and the relevant derive helpers. A short event sequence and successive entity states will show the pure fold, while signatures make argument order and stream identity explicit. It will explain the distinction between a single event payload and the entity event sum, linking persistence settings and compatibility changes to their task guides.

Evidence: [Entity, Event, EntityOf, EventOf (core/service/Service/Entity/Core.hs:14-65)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Entity/Core.hs#L14-L65); [Entity and event derive exports (core/core/Core.hs:38-44)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/core/Core.hs#L38-L44); [Source-inspected Counter replay property (neo/starter/tests/Property/CounterReplaySpec.hs:21-33)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/tests/Property/CounterReplaySpec.hs#L21-L33).

### Queries and projections

Route: `/reference/framework/queries/`

What updates a query row, and what may a caller read?

This page will define Query, QueryOf, EntitiesOf, queryId, combine, and the Update, Delete, and NoOp outcomes. A small entity-to-query example will show row identity separately from event stream identity. Signature tables will cover pre-fetch access, per-row visibility, and result limits. The Counter query will supply the concrete consumer, with links to filtering, pagination, storage, and authorization guides instead of repeating their complete procedures.

Evidence: [QueryAction, Query, QueryOf, EntitiesOf (core/service/Service/Query/Core.hs:44-156)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Query/Core.hs#L44-L156); [CounterView consumer (neo/starter/src/Starter/Counter/Queries/CounterView.hs:14-43)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Queries/CounterView.hs#L14-L43).

### Transport and response contracts

Route: `/reference/framework/transports/`

What interface does a registered command or query expose?

This page will compare Web, application CLI, and MCP registration, showing that a command must allow its transport and the model must install it. It will record route naming, command responses, query handler inputs, and schema registration with one request and response shape. An advanced anchored section will describe the public Transport interface. The application CLI will be clearly distinguished from the neo development command reference.

Evidence: [Maintained Web, CLI and MCP contracts (docs/agent/transports.md:3-35)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/transports.md#L3-L35); [Public handler aliases and Transport (core/service/Service/Transport.hs:28-109)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Transport.hs#L28-L109); [Public CommandResponse (core/service/Service/Response.hs:14-57)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Response.hs#L14-L57).

## Tooling and configuration

### Neo commands

Route: `/reference/cli/` (existing)

Which command and flags do I need for local development?

This page will document neo new, build, run, test, and lock, with invocation, working directory, inputs, flags, and source-defined outcomes in a compact command table. Global verbose and CI options, watch behavior, library creation, and the build lock check will have anchors. It will link model tools and agent setup commands to their own bounded pages, while installation and the complete first launch remain in getting started.

Evidence: [Cli and Commands (neo/src/cli.rs:4-63)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L4-L63); [LockArgs and LockSubcommand (neo/src/cli.rs:183-202)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L183-L202); [CLI parser test definitions (neo/src/cli.rs:209-281)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L209-L281).

### IDE, inspect, and validate

Route: `/reference/cli/model-tools/`

How do I inspect or validate the model from the command line?

This page will list neo ide host and port settings, inspect filters, inspect sync, and validate path and JSON options. A compact table will distinguish read-only inspection from source-to-model synchronization and IDE edits. It will record validation exit codes and show the structure of a future captured result, linking model-authoring tasks elsewhere. Command contracts will be tied to the documented revision rather than assumed present in older binaries.

Evidence: [Ide, Inspect, Validate command contracts (neo/src/cli.rs:64-106)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L64-L106); [InspectSubcommand including mutating Sync (neo/src/cli.rs:133-152)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L133-L152).

### Skills and agent guidance

Route: `/reference/cli/agent-commands/`

How do I select installed skills and refresh matching API guidance?

This page will document neo skills setup tool selection, skill filtering, all-tools, force, dry-run, and refresh options, plus neo guidance retry. It will distinguish shared workflow skills from source-matched framework guidance synchronized by build, run, and test. A concise destination and option table will explain what is written and preserved. Longer agent onboarding stays in its guide, and no generic feature-generation command will be implied.

Evidence: [Skills and Guidance commands (neo/src/cli.rs:107-131)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L107-L131); [SkillsSubcommand::Setup public options (neo/src/cli.rs:155-180)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L155-L180).

### Runtime configuration

Route: `/reference/configuration/` (existing)

Which value wins when defaults, environment, and arguments disagree?

This page will define Config fields, required documentation, defaults, required values, environment names, command flags, nested records, and secret redaction. A single precedence table will show command line, process environment, dotenv, then default, with a small hypothetical port example. It will explain startup loading, configuration factories, registration order, and separate store choices, linking provider-specific settings to task guides and keeping neo.json build configuration on its own page.

Evidence: [Public Config exports (core/config/Config.hs:88-131)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/config/Config.hs#L88-L131); [Maintained precedence and registration contract (docs/agent/configuration-and-wiring.md:3-39)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/configuration-and-wiring.md#L3-L39); [Internal startup dotenv loading implementation (core/service/Service/Application.hs:839-844)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Application.hs#L839-L844).

### neo.json and dependencies

Route: `/reference/configuration/project/`

Which project settings control generated build files and framework versions?

This page will describe neo.json name, version, neo-version, project type, metadata, license default, and dependency entries, separating these from runtime environment settings. A small complete manifest and field table will explain generated Cabal and Nix ownership and link supported dependency forms. A source-selection section will identify the local framework override as an advanced development setting, while release compatibility remains explicit rather than equating main with a published version.

Evidence: [Internal Rust implementation of public NeoConfig file contract (neo/src/config.rs:7-80)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/config.rs#L7-L80); [Source-inspected config tests (neo/src/config.rs:89-145)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/config.rs#L89-L145); [Dependency syntax diagnostic (neo/src/errors.rs:123-129)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/errors.rs#L123-L129); [Internal local framework source override validation (neo/src/reconcile/source.rs:154-170)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/reconcile/source.rs#L154-L170).

## Errors and help

### Setup and build errors

Route: `/reference/errors/` (existing)

Why did the development command fail, and what should I check next?

This page will index observable failures such as a missing workspace, invalid neo.json, missing prerequisites, invalid dependencies, unavailable framework guidance, and failed child processes. Entries will pair the diagnostic code and location with the smallest correction and a recovery check. One annotated diagnostic will explain source spans and retained child output. Source-defined messages will stay distinct from executed transcripts, with links to CLI options and community reporting when correction needs more evidence.

Evidence: [NeoError workspace, config and prerequisite diagnostics (neo/src/errors.rs:5-51)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/errors.rs#L5-L51); [Subprocess and dependency diagnostics (neo/src/errors.rs:98-129)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/errors.rs#L98-L129); [Guidance retry recovery contract (neo/src/cli.rs:126-130)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L126-L130).

### Startup and request errors

Route: `/reference/errors/runtime/`

Was the failure configuration, access, a business rejection, or infrastructure?

This page will separate startup configuration failures, invalid bind settings, occupied listeners, command rejection, authorization denial, and execution failure. A compact symptom table will connect each category to the responsible configuration or public response type and one recovery check. It will show why a rejected command is a valid business outcome, not automatically a server defect, and route store or provider failures to their maintained task guidance.

Evidence: [Listener validation and bind diagnostics (docs/agent/transports.md:7-15)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/transports.md#L7-L15); [CommandResponse categories (core/service/Service/Response.hs:14-57)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Response.hs#L14-L57); [QueryEndpointError mapping (core/service/Service/Transport.hs:38-53)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Transport.hs#L38-L53); [Decision rejection cases inspected, not run (neo/starter/tests/Decider/Counter/IncrementCounterSpec.hs:29-59)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/tests/Decider/Counter/IncrementCounterSpec.hs#L29-L59).

### Resources and project status

Route: `/resources/` (existing)

Where do I find maintained instructions, version history, and help?

This page will retain its existing substantive setup, source, storage, authorization, license, release, and community guidance while linking the more precise reference destinations. Its upstream links will remain tied to the revision they describe, with current-main research kept separate from published releases and agent-skills versions. A compact compatibility table may be added once versions are verified; no new support commitment or runtime verification claim will be invented.

Evidence: [Current-main starter persistence behavior (neo/starter/src/App.hs:17-38)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/App.hs#L17-L38); [Current-main application guidance (docs/agent/configuration-and-wiring.md:3-39)](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/configuration-and-wiring.md#L3-L39).
