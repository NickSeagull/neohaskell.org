# NeoHaskell homepage research

Checked 2026-11-11. Read-only inspection of clean local checkouts, with current remote main verified by `git ls-remote`.

Framework revision: `cacc8069070721539ae0aac53286ce9492e906a5`.
Skills revision: `0ff0872d554e79d955f4c92f9b905056b908e9ae`.

This is a future-publication sales homepage. The owner's latest direction supersedes the old homepage's source excerpts, teaching-first structure and development-status emphasis. Keep evidence and implementation limits in the product record, not as auxiliary captions on the homepage. No upstream runtime suite was executed for this research.

## Proposed copy and hierarchy

### 1. Build with AI. Keep control.

NeoHaskell is an AI-first language and framework for building applications you can understand, change, and trust. Describe what your app should do. Give your agent a clear structure, and let the framework handle the plumbing.

Primary action: Explore the docs. Secondary action: See what is included, linking down the page.

The hero visual should show a real application's meaningful parts, not syntax: a person's intent, an app with named business capabilities, and framework services supporting it. An AI agent helps build the app; it is not the runtime decision maker.

### 2. Your app has a memory.

Every accepted change becomes part of a recorded history. See how your data got here, rebuild the data your app reads, and add new ways to use the same history.

Three concise benefits for the illustrated ledger:

- Trace a change back to its event.
- Rebuild query data after a fix.
- Create new queries from existing history.

Optional stronger subheading: Fix the logic. Replay the history.

Avoid making the visual look like a shipped NeoHaskell admin console. Use an explanatory ledger with domain labels rather than fabricated product chrome. A query rebuilt after a calculation fix is concrete and truthful. Deleting a bad event, rewinding all state, and undoing a payment are different operations.

### 3. Fewer places for mistakes to hide.

Your business decisions stay separate from databases, network calls, and other side effects. The type system checks the boundaries, and pure logic is easier to test before a change reaches your users.

Parallel transport panel:

One application. More ways to use it.

Expose the same business capabilities through HTTP, MCP, or a command line. Change the transport in your application setup. Keep your business logic.

If the owner wants the one-line formulation in the final design, use: Switch HTTP for MCP with one line of configuration. This is the owner-authorized final product direction. The inspected source supports reuse and a one-line transport registration, but also requires commands to allow the selected transport. Do not illustrate a universal literal one-line conversion of an arbitrary existing app.

### 4. The framework comes with it.

Spend your time on what makes your app useful. NeoHaskell brings the common pieces together, with conventions that keep you and your agent working in the same direction.

Suggested concise feature entries:

| Label | Benefit copy |
| --- | --- |
| Convention over configuration | A shared structure for features, data, and tests. Fewer setup decisions before useful work begins. |
| OpenAPI, generated | API descriptions come from your application's schemas, so your API and its documentation share a source. |
| PostgreSQL | Keep your event history and query data in PostgreSQL, with storage handled by the framework. |
| Authentication | Connect an identity provider and define who can run each command or read each query. |
| OAuth connections | Let users connect their accounts to external services, with authorization and callback flows built in. |
| Files and uploads | Accept uploads and retain generated documents with ownership checks and file references. |

Use four to six compact, visually differentiated entries. A separate large illustration already carries the transport story; no need to repeat it as another feature card.

### 5. Give your agent a way of working.

NeoHaskell's agent skills take a feature from business intent through implementation and verification. The language, framework, and workflow share the same structure, so your next change starts from a system your agent can follow.

Three plain visual steps: Describe the behavior. Build the feature. Check the result.

Closing: Start with what you want to build.

Supporting sentence: See how NeoHaskell turns an idea into an application with clear behavior and a history you can inspect.

Action: Explore the docs.

## Evidence matrix

| Capability | Source evidence | Homepage scope |
| --- | --- | --- |
| Pure decisions | [Decision algebra](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/core/service/Decider.hs#L57) supplies a closed decision vocabulary; [side-effect guide](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/advanced-side-effects.md) places network work in outbound integrations after an accepted event. | Strong claim: business decisions stay separate from side effects. Do not claim 99% without measurement or that the type system knows the correct business policy. |
| Type-checked application model | [Event Model guide](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/event-model.md) documents compiler checks for entity ownership, commands, event variants and query sources, plus executable given/when/therefore rules. | Catch incompatible wiring before running the app; check business behavior with explicit scenarios. No all-bugs-prevented promise. |
| Recorded state and replay | [Entity reconstruction](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/events-and-entities.md), [query replay implementation](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/core/service/Service/Query/Subscriber.hs#L353) and [starter replay property](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/neo/starter/tests/Property/CounterReplaySpec.hs) support reconstruction from stored facts. Query replay supports checkpoints and rebuilding changed projections. | History, investigation, reconstruction and new read models. This is not universal rollback. A bad external effect remains external; corrections should preserve the historical fact. |
| Conventions | [CLI reconciliation](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/project-and-cli.md) discovers modules and generates Cabal/Nix files; [command markers](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/commands.md) derive schema/serialization; the Event Model registers declared behavior. | Fewer setup choices and shared patterns for humans and agents. No need to introduce these implementation names on the homepage. |
| HTTP, MCP, CLI | [Transport guide](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/transports.md) and [MCP implementation](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/core/service/Service/Transport/Mcp.hs) show reused registered commands with selected transports. Both `TransportsOf` and application `withTransport` participate. MCP is JSON-RPC over standard input/output. | Same business logic across interfaces. One line can select a transport for an already-compatible command set. Exact arbitrary-app one-line conversion is not demonstrated. |
| Generated OpenAPI | [Web transport routes](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/core/service/Service/Transport/Web.hs#L1218) generate `/openapi.json`, `/openapi.yaml` from endpoint schemas; [API UI](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/core/service/Service/Transport/Web/SwaggerUI.hs) serves the generated description. | API documentation from the same schemas as your app. Useful for generated clients, without promising a complete frontend is generated automatically. |
| PostgreSQL | [Storage guide](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/storage.md) documents separate PostgreSQL event and query stores. | Built-in PostgreSQL support. Both stores require configuration; persistence is not the starter default. No need for that configuration detail on the sales homepage. |
| Authentication and OAuth | [Inbound authorization](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/authorization.md) uses OIDC/JWKS and command/query policies. [External OAuth](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/advanced-oauth2.md) supplies connect/callback/disconnect routes, PKCE, signed state and secret-store integration. | Keep sign-in identity distinct from connecting external provider accounts. OAuth flows built in is accurate. No generic claim that all identity providers connect without configuration; no implied shipped durable secret-store adapter. |
| Files and uploads | [Upload handlers](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/core/service/Service/FileUpload/Routes.hs), [upload tests](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/core/test/Service/FileUpload/RoutesSpec.hs), and [generated-document guide](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/advanced-file-storage.md) show file references, limits, ownership and retained generated files. | User uploads and generated documents, with file ownership. Do not invent a specific cloud storage integration. |
| Agent workflow | [Feature pipeline](https://github.com/neohaskell/skills/blob/0ff0872d554e79d955f4c92f9b905056b908e9ae/skills/neohaskell-feature-pipeline/SKILL.md) covers context, business behavior, backend/API/frontend and result verification. [Skills README](https://github.com/neohaskell/skills/blob/0ff0872d554e79d955f4c92f9b905056b908e9ae/README.md) names Claude Code and Codex and explains stack-preserving setup. | A structured workflow for agents. Do not turn instructions into a claim of measured autonomous success or error-free implementation. |

## Review criteria

1. Opening identifies an AI-first language and framework and sells a concrete outcome without code.
2. History/replay, pure logic and transport benefits are understandable without prior event-sourcing knowledge.
3. Framework breadth covers OpenAPI, OAuth connections, authentication, PostgreSQL and files without merging their meanings.
4. The page motivates docs as the next step; it does not become a tutorial, status report, or source-code tour.
5. All diagrams preserve domain truth: events are history, queries are derived state, the agent is a builder, and external effects are separate.
