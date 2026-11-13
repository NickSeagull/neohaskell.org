# Task guide sidebar research

Research only. Source snapshot 033ae4a570686cd885ca14c6595997d9498d5287 inspected on 2026-11-13. Site checkpoint dfc5554cdd2c9411430dd4e1fdb4c173cd188ef5. No framework runtime, tests, or deployments were executed.
All seven old routes are retained as focused tasks. Seventeen pages across five subgroups, each with one 50-80 word future-content paragraph, avoid both seven overloaded umbrellas and a module-by-module sidebar.

## Reference taxonomy

Laravel separates routing, authentication, authorization, storage, and HTTP clients into practical destinations. Borrow that distinction, especially identity versus permission, without importing Laravel APIs or its full sidebar. Sources: [routing](https://laravel.com/framework/docs/12.x/routing), [authentication](https://laravel.com/framework/docs/12.x/authentication), and [authorization](https://laravel.com/framework/docs/12.x/authorization).

Phoenix keeps application responsibilities distinct from the web interface. That supports preserving one application model while teaching HTTP, MCP, and terminal exposure separately. Source: [Phoenix contexts](https://phoenix.hexdocs.pm/contexts.html).

FastAPI separates security work from deployment concerns, and its deployment chapter distinguishes process startup, restarts, replication, memory, and preparatory steps. Borrow independently addressable operating tasks rather than a single vague production chapter. Sources: [security](https://fastapi.tiangolo.com/tutorial/security/) and [deployment concepts](https://fastapi.tiangolo.com/deployment/concepts/).

These are information-architecture observations from official documentation, not evidence that NeoHaskell implements those frameworks' capabilities.

## Change and expose behavior

### Work with an AI agent

Route: `/guides/ai-workflow/`

How do I request and verify a bounded application change?

This page will turn a behavior request into a bounded agent task with the project revision, relevant source, acceptance cases, and permitted changes. It will show a reusable prompt and a focused diff, then compare the requested outcome with decision tests and interface evidence. A correction example will distinguish a compiler success from correct behavior and direct the agent to the maintained guidance for the pinned framework.

Source: [docs/agent/index.md:1-28](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/index.md#L1-L28), `consumer task map`.

Boundary: Setup owns installation; tutorial owns the first worked change; this guide owns repeating and correcting the process.

### Expose an HTTP API

Route: `/guides/transports/`

How do I call my commands and queries over HTTP?

This page will expose an existing feature through the Web transport and inspect its generated routes and OpenAPI contract. A command request, rejected input, and query response will connect the application definition to observable HTTP behavior. It will include the command transport declaration, application registration, and a browser-origin configuration example, then link to authentication before the interface is opened to untrusted callers.

Source: [core/service/Service/Transport/Web.hs:1218-1327](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Transport/Web.hs#L1218-L1327), `OpenAPI routes and WAI application assembly`.

Boundary: Keep the existing route as the first focused transport task. Reference owns every field and status mapping; tutorial owns building the feature.

### Expose MCP tools and resources

Route: `/guides/transports/mcp/`

How can an agent call this application through MCP?

This page will register the stdio MCP transport for an existing feature and show initialization, tool discovery, a command call, and reading a query resource. A compact protocol transcript will distinguish commands as tools from queries as resources. The example will explain process ownership and the trusted execution context so readers do not mistake this local protocol for an authenticated remote HTTP service.

Source: [core/service/Service/Transport/Mcp/Protocol.hs:125-245](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Transport/Mcp/Protocol.hs#L125-L245), `handleRequest, tools and resources handlers`.

Boundary: Reference owns protocol structures. This page owns wiring and exercising the local process, not remote MCP hosting.

### Expose application commands in a CLI

Route: `/guides/transports/cli/`

How do I invoke my application behavior from a terminal?

This page will register the application CLI transport and invoke a command using the generated entity and command grouping. It will pair terminal inputs with successful and rejected outcomes and explain how output mode affects scripting. The example will identify the local operator trust boundary and distinguish this application interface from the neo development CLI used to create and manage a project.

Source: [core/service/Service/Transport/Cli.hs:113-178](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Transport/Cli.hs#L113-L178), `assembleTransport and trustedContext`.

Boundary: The neo CLI reference owns development commands. This guide owns the application executable interface.

## Persist data and files

### Keep events across restarts

Route: `/guides/storage/`

How do I keep recorded application history when the process stops?

This page will replace the starter memory configuration with a persistent event store and verify the same recorded behavior before and after a restart. A comparison will distinguish SimpleEventStore disk persistence from PostgreSQL configuration, while a diagram separates event history from derived query state. The example will use a complete configuration for the selected framework revision and explain which storage paths or database volumes must survive.

Source: [testbed/src/Testbed/Infrastructure.hs:13-30](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Infrastructure.hs#L13-L30), `makePostgresConfig`.

Boundary: Concepts explains history versus state; reference lists settings; this page owns an event persistence change and restart check.

### Persist and rebuild queries

Route: `/guides/storage/query-rebuilds/`

How do query results recover after a restart or projection change?

This page will configure persistent query storage separately from event history and follow a query through checkpoint resume, a changed query hash, and replay. A timeline will show live events arriving while historical events are processed and when readiness becomes available. The example will include a rebuild failure and its diagnostic evidence, making clear that query recovery depends on usable history and does not reverse external effects.

Source: [core/service/Service/Query/Subscriber.hs:233-257](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Query/Subscriber.hs#L233-L257), `start and coordinated replay`.

Boundary: Concepts owns why derived state exists; this guide owns configuration and recovery. Link checkpoint reference rather than reproduce its API.

### Upload and retrieve owned files

Route: `/guides/files/`

How do I attach a user file and restrict its retrieval?

This page will configure file metadata and blob storage, upload a document, attach its file reference to a command, and retrieve it as its owner. A sequence will distinguish pending uploads, confirmed attachments, expiration, and missing blobs. Paired requests will demonstrate permitted and denied retrieval, while the persistence discussion will keep the file bytes, ownership metadata, and application events separate.

Source: [core/service/Service/FileUpload/Resolver.hs:118-203](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/FileUpload/Resolver.hs#L118-L203), `resolveFromState`.

Boundary: Access guides own general identity and policies; storage owns events; this page owns the uploaded-file lifecycle.

### Generate and retain a document

Route: `/guides/files/generated-documents/`

How do I keep a server-generated file for its owner?

This page will follow a document request through an outbound handler that generates bytes, stores an owned retained file, and emits a command recording its reference. A retry example will reuse a stable creation key and compare matching content with a conflicting attempt. The figure will distinguish retained documents from pending uploads and show why both the blob directory and file metadata need durable storage.

Source: [testbed/src/Testbed/GeneratedPdf/Outbound.hs:28-52](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/GeneratedPdf/Outbound.hs#L28-L52), `handleEvent and createFile`.

Boundary: Integrations owns generic outbound effects; this page owns retained file creation and its idempotency boundary. Adapt upstream let-in syntax to approved do blocks when teaching code is authored.

### Erase a protected value

Route: `/guides/storage/erase-protected-values/`

How do I make an owned protected value unreadable without deleting history?

This page will introduce a narrowly scoped erasure task using the PostgreSQL-backed protected-value mechanism. It will follow an authorized owner request, deletion of one protected reference, the resulting command, and an explicit retry. A before-and-after figure will distinguish the retained event record from the unavailable protected content, and explain how queries and external copies must be considered separately when checking the intended outcome.

Source: [core/service/Integration/Erasable.hs:1-41](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Integration/Erasable.hs#L1-L41), `Erase and ToAction`.

Boundary: This is a specific task, not a claim of regulatory compliance or arbitrary event deletion. Concepts owns the historical model.

## Identity and access

### Verify caller identity

Route: `/guides/authentication/`

How does my HTTP application recognize a caller?

This page will connect an application to an OIDC issuer, configure the expected token audience where required, and inspect the user claims available to a command. A request comparison will cover a valid token, an invalid token, and an anonymous caller. A small boundary figure will separate identity verification from command permission and from connecting the caller to an external OAuth provider.

Source: [core/auth/Auth/Discovery.hs:59-125](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/auth/Auth/Discovery.hs#L59-L125), `discoverConfig`.

Boundary: This guide owns inbound JWT identity configuration. Authorization owns permission and resource ownership; external connections own provider tokens.

### Authorize a command

Route: `/guides/authorization/`

Who may run this command against this entity?

This page will protect one command with a declared access policy and a decision that checks the relevant entity ownership. A table will compare anonymous callers, authenticated owners, other users, and a trusted local invocation. The accompanying tests will verify that denied commands do not reach the decision or append events, and show why enabling authentication is necessary for the HTTP policy gate to apply.

Source: [core/service/Service/Command/Core.hs:130-147](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Command/Core.hs#L130-L147), `canExecuteImpl`.

Boundary: Retain the old route as the first permission task. Identity setup remains separate; reference owns policy helper signatures.

### Restrict query results

Route: `/guides/authorization/query-access/`

Who may read a query and its individual results?

This page will apply a query-level access check before fetching data and an ownership check for individual results. It will compare the same query for an owner, another authenticated user, and an anonymous caller, including a paginated result. A short decision table will show where each check runs so a reader can protect returned data without assuming that command permissions automatically protect query endpoints.

Source: [core/service/Service/Query/Core.hs:51-94](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Query/Core.hs#L51-L94), `Query.canAccessImpl and canViewImpl`.

Boundary: Reference owns query and pagination APIs; this guide owns the access scenario and verification.

## Connect other systems

### Call an external service

Route: `/guides/integrations/`

How do I perform an external effect after a decision?

This page will connect an accepted event to a typed outbound handler, perform an HTTP call, and turn the provider response into a follow-up command. Success and failure traces will show the boundary between a pure decision and an external effect. The example will use an idempotency key and explain the separate HTTP and dispatcher retry settings, without promising durable delivery or exactly-once execution.

Source: [testbed/src/Testbed/ExternalEffect/Outbound.hs:51-95](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/ExternalEffect/Outbound.hs#L51-L95), `handleEvent and deliverEffect`.

Boundary: Retain the old route as first outbound task. Concepts owns purity; reference owns typed action and retry options.

### Emit commands from an inbound worker

Route: `/guides/integrations/inbound-workers/`

How can a background source send typed application commands?

This page will register a typed inbound worker that emits commands to declared entity targets. A small timer-driven example will show the worker configuration, supported command set, and application wiring, followed by a rejected target at compilation. A lifecycle figure will identify startup and stopping responsibilities, while the prose distinguishes a long-running inbound source from an outbound reaction to an accepted event.

Source: [testbed/src/Testbed/Integrations/TypedInboundExample.hs:18-36](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/testbed/src/Testbed/Integrations/TypedInboundExample.hs#L18-L36), `TypedInboundExample.workerImpl`.

Boundary: Reference owns type machinery. This guide owns connecting a bounded background source, not a generic job queue guarantee.

### Connect an external account

Route: `/guides/integrations/oauth-connections/`

How does a user authorize access to a provider account?

This page will register an OAuth provider and follow an authenticated user through connect, callback, token use, refresh, and disconnect. A sequence diagram will separate the application identity from provider credentials and temporary connection state. It will explain the consumer-supplied persistent secret store and the current in-memory callback transaction store, including what happens to an unfinished connection after a restart or a request reaches another instance.

Source: [core/auth/Auth/OAuth2/Routes.hs:140-345](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/auth/Auth/OAuth2/Routes.hs#L140-L345), `createRoutes and token storage`.

Boundary: Authentication owns application identity; this page owns provider consent and credentials. Configuration reference owns provider fields.

## Run and recover

### Configure and run a deployment

Route: `/guides/deployment/`

What must be configured and persisted to run this application elsewhere?

This page will assemble a reproducible deployment example for a pinned application and framework revision, naming the executable, runtime configuration, database, and file paths. A deployment figure will distinguish persistent services from the application process and show the public HTTP boundary. Verification will cover startup, an accepted command, a query, and a restart, while identifying environment-specific hosting and process supervision that the repository does not supply.

Source: [neo/starter/flake.nix:1-41](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/flake.nix#L1-L41), `pinned framework input and project flake`.

Boundary: Reference owns all configuration values; setup owns local installation. The compose file provisions PostgreSQL, not a complete hosted application deployment.

### Check readiness and diagnose failures

Route: `/guides/deployment/readiness-and-failures/`

How do I tell whether the application is ready and locate a failed operation?

This page will compare the health endpoint with query readiness and follow a failed operation using its request identifier and structured logs. A small state diagram will show rebuilding, ready, and failed query states alongside their HTTP results. Worked diagnostics will distinguish a storage failure from an unavailable integration, and connect recovery steps to evidence rather than treating a running process as proof that every query is usable.

Source: [core/service/Service/Transport/Web.hs:1545-1587](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Transport/Web.hs#L1545-L1587), `handleReadiness and renderReadiness`.

Boundary: Errors reference owns a searchable symptom catalog; this guide owns the operating procedure and readiness interpretation.

## Implementation and validation evidence

[core/test/Integration/DispatcherSpec.hs:1763-1935](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/test/Integration/DispatcherSpec.hs#L1763-L1935). Tests define IO retry, retry exhaustion, and no retry for Task errors. Lines 1119 onward also exercise queue-timeout drops. These rule out claiming a durable outbox from worker retries.

[core/test/Service/Transport/Web/CommandAuthSpec.hs:104-226](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/test/Service/Transport/Web/CommandAuthSpec.hs#L104-L226). Tests cover policy wiring, HTTP 401/403 rendering, and the shared dispatcher gate before decisions.

[core/test/Service/Transport/Web/ReadinessRouteSpec.hs:39-62](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/test/Service/Transport/Web/ReadinessRouteSpec.hs#L39-L62). Tests define 200 ready and 503 rebuilding/failed responses. Web.hs owns real route rendering; Readiness.hs contains a placeholder handler and should not be cited alone as implementation.

[core/service/Service/Query/Subscriber.hs:395-470](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/Query/Subscriber.hs#L395-L470). Rebuild implementation resumes through checkpoint/hash logic and records failures. Readiness is more than a planned ADR.

[core/service/Service/FileUpload/Create.hs:37-62](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/FileUpload/Create.hs#L37-L62). Retained-file creation derives ownership and a stable creation claim before publication; inspect CreateSpec and DownloadSpec when authoring executable examples.

[docs/agent/advanced-oauth2.md:77-95](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/advanced-oauth2.md#L77-L95). Maintained consumer guidance explicitly documents the persistent SecretStore requirement and non-durable in-memory pending transactions.

## Publication boundaries

Current starter uses EventModel.eventModel and Feature composition. Its flake pins ea75873fbd0da7da39124c82f328c2e70bdca629; do not mix starter dependency revision with current-main API fields. Use the current testbed Infrastructure factory to inspect current-main PostgreSQL configuration.

No outbox implementation was found in core/service. Dispatcher queues are in-process and may drop after queue timeout or shutdown. IO exceptions retry; Task errors do not. Never title a page Durable outbox or promise exactly-once effects from this evidence.

Command policy defaults to authenticated access but no-auth Web and local MCP/CLI use trusted context. Query identity behavior must be checked per transport before claiming equivalent security across interfaces.

PostgreSQL event persistence, query persistence/checkpoints, blob persistence, file metadata, provider credentials, and pending OAuth transactions are different storage responsibilities. The OAuth transaction store is currently in-memory even with a persistent consumer SecretStore.

Apply existing scaffold publication rules: briefs remain noindex and excluded from Pagefind, the map remains discoverable, no fabricated outputs or live widgets. New teaching code is deferred and will require the learning-example review workflow.

Unslop review: outcome-based titles, no ornamental taxonomy labels in page prose, one useful example/figure per brief, no decorative controls. Preserve existing documentation identity and native navigation.
