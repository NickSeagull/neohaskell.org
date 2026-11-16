# NeoHaskell launch video feature research

Researched 16 November 2026 against local NeoHaskell revision `033ae4a570686cd885ca14c6595997d9498d5287`. This is source inspection, not execution of the language, its test suite, or deployed services. The website's accepted final-product positioning is authoritative for the intended film. Its future-product claims remain distinguished below from implemented source evidence.

The film should sell an AI-first language that lets a developer build quickly while retaining control. The previous feature selection omitted the most concrete breadth: database, identity, OAuth connections, files, API documentation, executable rules, a source-derived visual IDE, and frozen deployed behavior. A fast sequence can show all of these without replacing product evidence with generic speed claims.

## Priority feature selection

Paths under `NeoHaskell/` refer to `/Users/nick/Work/NeoHaskell`. Paths under `website/` refer to `/Users/nick/Work/neohaskell.org`. Line references identify the inspected checkout. Headlines are proposed film copy, not exact source quotations.

| Priority | Headline | Accurate supporting language | Evidence and boundary |
| --- | --- | --- | --- |
| 1 | Compiler-enforced contracts | Missing implementations and mismatched command, event, and query ownership fail compilation. | `NeoHaskell/docs/agent/event-model.md:71`. This proves typed wiring constraints, not arbitrary business correctness. |
| 2 | Pure business logic | Change a decision without hidden database writes, network calls, or file changes. | `NeoHaskell/core/service/Service/Command/Core.hs:129` and `:165`; `NeoHaskell/core/service/Decider.hs:58` and `:67`; `website/PRODUCT.md:133`. The controlled decision interpreter handles identifiers and protected values. Do not turn this into a claim that the entire application has no effects. |
| 3 | Code frozen | Keep deployed inputs and behavior stable. Add changed behavior alongside them. | Owner-authorized target: `website/PRODUCT.md:137`, with explicit evidence boundary at `:139`; accepted homepage `website/src/i18n/en/site.json:11`. `NeoHaskell/docs/executable-slices-and-local-generation.md:930` still lists deployed-slice identity/versioning as open. Do not present a filmed lock indicator as proof of enforcement in this checkout. |
| 4 | Spec as code | Keep the application model in executable source. | `NeoHaskell/docs/agent/event-model.md:61`, `:71`, `:73`. Model declarations require real implementations and register their handlers. The broader headline promise that an outdated spec prevents startup is an owner-authorized target requirement in `website/PRODUCT.md:23`, distinct from the currently implemented checks. |
| 5 | Rules you run | Check Given/When/Then behavior against actual decisions and query updates. | `NeoHaskell/docs/agent/event-model.md:63`, `:65`, `:67`; runner entry point `NeoHaskell/core/service/Service/EventModel/RuleRunner.hs`. `specFor` creates named Hspec cases, with fresh event stores and query projections. Execution is separate from compilation. |
| 6 | Visual IDE | See how the whole application fits together as source changes. | `NeoHaskell/neo/assets/ide/src/App.tsx:295` to `:321` reads the model and reloads on source-change notifications; source-owned fields are read-only at `:301`. Do not imply arbitrary diagram edits generate verified code. |
| 7 | PostgreSQL built in | Persist events and query data through the language's storage interfaces. | `NeoHaskell/core/service/Service/EventStore/Postgres.hs:13`; `NeoHaskell/core/service/Service/QueryObjectStore/Postgres.hs:90` and `:96`. The query table initialization preserves stored state at `:178`. No benchmark or zero-configuration deployment claim. |
| 8 | Identity and access | Connect an identity provider and control who can do what. | `NeoHaskell/core/auth/Auth.hs:1` and `:19`; `NeoHaskell/core/service/Service/Auth.hs:64` and `:68`; `NeoHaskell/core/service/Service/EventModel.hs:468`; accepted benefits at `website/src/i18n/en/site.json:62`. Authentication supplies validated identity; application policies still matter. |
| 9 | OAuth connections | Connect users' external accounts, store tokens, and refresh them. | `NeoHaskell/core/auth/Auth/OAuth2/Routes.hs:3` and `:13`; `NeoHaskell/core/auth/Auth/OAuth2/TokenRefresh.hs:36` to `:46`, implementation at `:78`. Includes per-key locking and one retry after refresh, not a guarantee every provider behaves identically. |
| 10 | Files handled | Accept uploads and retain generated documents with ownership and access checks. | `NeoHaskell/core/service/Service/FileUpload/Create.hs:3`, `:37`; `NeoHaskell/core/service/Service/FileUpload/Download.hs:57`, `:107`, `:127`, `:133`; accepted scope `website/src/i18n/en/site.json:60`. The caller must establish an authorized owner for generated documents. |
| 11 | OpenAPI automatically | Generate API documentation from command and query schemas. | `NeoHaskell/core/service/Service/Transport/Web.hs:1218` to `:1235` serves OpenAPI and includes enabled OAuth and file endpoints. This is generated contract documentation, not a separate hand-maintained API specification. |
| 12 | HTTP. MCP. Same logic. | Expose the same application to web clients and AI tools. | `NeoHaskell/core/service/Service/Transport/Mcp.hs:44` to `:64`, `:91` to `:102`; web implementation above; configurable transport in `NeoHaskell/core/service/Service/EventModel.hs:441`. The accepted one-line switch pitch is at `website/src/i18n/en/site.json:21`. Do not imply identical security environments or every transport feature is identical. |
| 13 | History you replay | Trace changes and rebuild the information your application shows. | `NeoHaskell/core/service/Service/Query/Subscriber.hs:152` implements `rebuildAll`; `:101` describes persisted checkpoint resume; `NeoHaskell/core/service/Service/EntityFetcher/Core.hs:139` and `:188` load state after snapshots. Replaying queries does not mean reissuing external integration actions. |
| 14 | Agent skills included | Give Claude Code and Codex a shared workflow from intent through verification. | `website/PRODUCT.md:85` records the inspected published skills v1.1.0 and pinned feature pipeline revision `0ff0872d554e79d955f4c92f9b905056b908e9ae`; `website/src/content/docs/getting-started/index.mdx:23`. This research reused the website's dated primary-source record rather than independently rerunning the agent workflow. No measured productivity claim. |
| 15 | Build. Run. Test. | One project structure and CLI for scaffolding, building, running, and testing. | `NeoHaskell/docs/agent/project-and-cli.md:3`, `:10`, `:22`, `:28`, `:37`. `neo.json` drives project reconciliation; source modules and Cabal/Nix files are discovered or generated. Watch mode exists. Avoid showing fabricated command output as actual verification. |

## The requested compiler payoff

The user's phrase "if it compiles it works" expresses the right emotional payoff: the language and conventions remove failure modes before an agent's changes reach users. It is not a literal guarantee supported by these sources. In addition to unchecked business intent, `Decider.runDecision` explicitly handles invalid decision termination at runtime (`NeoHaskell/core/service/Decider.hs:98`). Successful typechecking cannot establish that every authored rule matches the business requirement.

The strongest short on-screen replacement is **Compiler-enforced contracts**. Pair it immediately with **Rules you run** and **Pure business logic**. These are three separate, concrete defenses, and the sequence conveys the requested confidence without claiming a theorem about the entire application. A compact alternate sequence is **Contracts checked. Rules tested.** Do not show a green test result as a captured run unless that run really occurred.

**Code frozen. Keep building.** is strong supplementary copy for the frozen-contract section. Animate existing callers continuing to use the original contract while a new behavior branches alongside it. This demonstrates the approved benefit better than a generic ice cube or a lock over the entire application.

## Proposed 24-second feature montage

| Time | Message and visuals | Reading budget |
| --- | --- | --- |
| 0.0-4.0 s | Build with AI. Keep control. Smash into compiler-enforced contracts, then pure business logic. | One dominant phrase at a time. Use recognizable code structures as motion texture without asking viewers to read a paragraph. |
| 4.0-8.0 s | Code frozen. Keep building. Original contract stays connected while a new contract takes a separate path. Cut into the real visual IDE and spec-as-code. | Preserve the old caller's connection long enough to make the promise visually legible. |
| 8.0-12.0 s | Spec as code -> Rules you run -> Visual IDE. Source and model remain related through the cuts. | The IDE should be a full-size shot with a strong crop, not a small card inside another card. |
| 12.0-18.0 s | Six built-in hits: PostgreSQL, authentication, OAuth, file storage, OpenAPI, HTTP/MCP. | Approximately one second per capability. Keep a persistent "Built in" anchor so each label needs only one or two words. |
| 18.0-24.0 s | History and replay -> agent skills -> NeoHaskell / Build with AI. Keep control. | Reserve about two seconds for the final brand and URL. CLI can be a brief transitional motif instead of another full scene. |

This is a capacity proposal, not a requirement to cram every table row into spoken copy. The top fourteen capabilities fit if some are delivered through the visible transformation and persistent labels. The fifteenth is useful supporting footage. Do not add a narrated explanatory sentence for every hit.

## Visual evidence available now

The website already has a real IDE frontend capture at `public/images/docs/mug-shop-ide.png`. Its provenance is recorded in `.impeccable/reviews/model-evolution-2026-11-13/source-evidence.md`: it uses the real frontend with an illustrative localStorage model and a disconnected backend. It demonstrates the interface, not a live connected deployment.

The existing homepage has accepted API, event-history, transport, and capability compositions. The film can extract recognizable model nodes and source fragments from these while increasing scale, speed, contrast, hard cuts, displacement, and impact synchronization according to the user's new direction. The aggressive electronic soundtrack and terminal-launch reference are being handled separately by the parent agent.

For code texture, use actual declarations from `NeoHaskell/testbed/src/Testbed/Stock/Feature.hs` or the supported forms in `NeoHaskell/core/test/Service/EventModel/Compile/ValidRuleForms.hs`. Keep the source model's command and query declarations distinct. Decorative source footage should not pretend to be an independently verified run.

## Release evidence boundary

The film is authorized to pitch the accepted future product; it should not interrupt the montage with readiness badges. Internally, frozen deployed contracts and the broad stale-spec startup guarantee remain target requirements, while typed declarations, model validation, rules, IDE projection, database adapters, auth, OAuth, file storage, OpenAPI, transports, and replay have inspected implementation evidence. No tests were run for this research, and no newly observed compiler, server, or performance result is claimed.
