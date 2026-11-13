# Start here: a checked first project

Research date: 13 November 2026. Website checkpoint: `dfc5554cdd2c9411430dd4e1fdb4c173cd188ef5`. Framework source inspected: `033ae4a570686cd885ca14c6595997d9498d5287`, downloaded from upstream main on the research date. No NeoHaskell command, build, or test was executed. This report proposes editorial destinations and page briefs, not completed lessons or a release certification.

## Recommendation

Expand Start here from three broad destinations to nine concrete destinations in three small groups. Preserve the working conceptual introduction and agent setup article. A reader should understand one shop transaction, produce a running Counter starter, check a response, and know where their agent will work before entering the shop-feature tutorial. Counter is the supplied installation check; the shop remains the coherent learning domain. Explain that handoff in the main prose rather than inventing a shop starter.

```text
Start here
  Understand the model
    Documentation map              /docs/
    Commands, decisions, events     /learn/
  Run your first project
    Install NeoHaskell              /getting-started/installation/
    Create a project               /getting-started/create-project/
    Run the application            /getting-started/run/
    Check your first response      /getting-started/first-response/
  Work in your project
    Find your project files        /getting-started/project-files/
    Set up your agent              /getting-started/
    Fix setup problems             /getting-started/troubleshooting/
```

The shorter conceptual sidebar label may omit queries, but the article title and opening must explicitly name all four concepts. Keeping the existing label `Core concepts` is also reasonable if truncation or translation makes the proposed label awkward. Do not split each concept into another introductory page: the accepted shop explanation gains its meaning from the complete chain. The map is a routing destination, not a chapter prerequisite. Recovery should be linked beside failure-prone steps as well as in the sidebar. Group headings need no empty overview pages.

## What the references contribute

[Astro installation](https://docs.astro.build/en/install-and-setup/) groups Installation, Project structure, and Develop and build beneath a concrete starting task. Its article separates prerequisites, project generation, changing directories, and starting the server. Borrow identifiable destinations and explicit working directories, while keeping NeoHaskell's concept-first requirement. Do not import Astro's entire category tree.

[Phoenix Up and Running](https://phoenix.hexdocs.pm/up_and_running.html) distinguishes installation from creation, displays commands and their expected results, provides a visible success endpoint, and links application structure after the first run. Borrow the checked completion criterion and nearby recovery. NeoHaskell's starter success is a Counter HTTP response rather than a fabricated welcome screen.

[The Rust Book's first chapter](https://doc.rust-lang.org/book/ch01-00-getting-started.html) scopes getting started to installation, a first program, and the build tool. Borrow a bounded beginning with a concrete result. NeoHaskell readers need enough tooling knowledge to review an agent's work, without a prerequisite language course. These are selected official documentation examples, not an objective popularity ranking.

## Page specifications

Each brief below is intended as the page's single planning paragraph. Preserve existing substantive content on the two current guides; append or replace only their planning section. No new teaching example is implemented by these briefs.

### Documentation map

Route: `/docs/`. Reader question: Where should I start, and which page answers the task I have now? Outcome: select a first path or a specific guide without reading an abstract taxonomy.

Brief: This page will map the path from understanding one shop order to running a checked NeoHaskell project and building a feature with an agent. It will link directly to installation, project creation, the first response, and setup recovery, alongside the tutorial and concrete task guides. Short descriptions will distinguish existing articles from planned coverage and help returning readers find the appropriate reference without repeating the entire sidebar.

Evidence: website `astro.config.mjs` sidebar and `src/content/docs/docs/index.mdx`; `PRODUCT.md` Product Purpose and documentation constraints. These are editorial/site evidence, not upstream API claims. No figure needed.

### Commands, decisions, events

Route: `/learn/`. Keep article title `Core concepts` unless the parent chooses the full `Commands, decisions, events, and queries`. Reader question: What does an application do when an order is accepted or rejected? Outcome: explain intention, decision, recorded fact, and current answer before installing anything.

Brief: This page will continue to introduce commands, decisions, events, and queries through a shop selling ceramic mugs. Readers will follow one accepted order and one rejected order, predict remaining stock, and distinguish the event history from the query result. The existing tables and plain-text examples will remain. A compact static figure may connect the four concepts before readers continue to installation or model their own first feature.

Evidence: website `GLOSSARY.md` and `src/content/docs/learn/index.mdx` own the illustrative shop. The real executable counterpart is `Starter.Counter.Feature.counterFlow`, [Feature.hs lines 15-38](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Feature.hs#L15-L38). Never present the shop pseudocode as the Counter API.

### Install NeoHaskell

Route: `/getting-started/installation/`. Reader question: What must be installed, and how can I tell the toolchain is available? Outcome: a version-identified Neo CLI, Nix, and Git available in the intended shell.

Brief: This page will identify the supported environment and install the Neo CLI with its required Nix and Git tools. It will distinguish installing the CLI from obtaining the project-managed compiler and libraries, explain the optional editor environment, and show checks for the installed tools. Instructions will be tied to a verified release and platform, with binary-cache choices explained where they affect the first build and direct links to setup recovery.

Evidence: [neo/README.md lines 14-26](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/README.md#L14-L26) documents Nix, Git, optional direnv, and source installation through Cargo. `require_nix`, `require_git`, and `warn_direnv` are in [prereqs.rs lines 5-43](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/prereqs.rs#L5-L43). [Starter flake lines 6-19 and 41-50](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/flake.nix#L6-L50) identifies framework pin, Linux/macOS architectures, and caches. Planned artifact: verified shell command/output pairs, no simulated terminal.

### Create a project

Route: `/getting-started/create-project/`. Reader question: Where do I run project creation, and what will it produce? Outcome: a named application directory with an initial Git commit and known framework version.

Brief: This page will create a named application with the Neo CLI, explain where to run the command, and identify the Counter starter that appears in the new directory. It will show the ordinary interactive route and a reproducible command for an agent, explain the initial Git commit and framework pin, and confirm the generated project before continuing. Library creation and the full set of CLI options will remain reference topics.

Evidence: [project-and-cli.md lines 5-31](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/project-and-cli.md#L5-L31); `do_scaffold` embeds starter and selects its framework revision in [new.rs lines 309-362](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/commands/new.rs#L309-L362), then reconciles and initializes Git in [lines 416-446](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/commands/new.rs#L416-L446). Test definitions `test_neo_new_ci` and `test_neo_new_offline_scaffolds_full_starter`: [integration_tests.rs lines 41-164](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/tests/integration_tests.rs#L41-L164). Planned artifact: one generated-tree excerpt, restricted to files needed next.

### Run the application

Route: `/getting-started/run/`. Reader question: How do I start and stop the starter, and which terminal must remain open? Outcome: a running local HTTP application ready for a separate client terminal.

Brief: This page will build and run the generated Counter application from its project root, identify the local HTTP address, and explain which process must remain running while requests are sent from another terminal. It will distinguish an initial dependency download from application startup, show how to stop and restart the process, and explain that the default in-memory event history disappears when the process ends. Watch mode will be introduced only after the first successful launch.

Evidence: [project-and-cli.md lines 19-43](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/project-and-cli.md#L19-L43); `App.appEventModel` configures HTTP and `persistent = False` in [App.hs lines 17-38](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/App.hs#L17-L38); [Launcher.main lines 10-15](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/launcher/Launcher.hs#L10-L15) calls `EventModel.run`. Planned artifact: actual startup output after runtime verification, with no invented welcome page.

### Check your first response

Route: `/getting-started/first-response/`. Reader question: Is the application actually processing commands and answering queries? Outcome: create a Counter, change its value, and find that value in the query response.

Brief: This page will verify the running starter by creating a Counter, using the returned entity identifier in a change command, and reading the resulting value through its query. It will explain the request payload, response envelope, and possible delay before the projection reflects the change. A rejected input will distinguish a working validation response from a setup failure. The maintained Counter scenario will provide a repeatable check before readers begin the shop tutorial.

Evidence: [counter-flow.hurl lines 5-72](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/tests/scenarios/counter-flow.hurl#L5-L72) captures `$.entityId`, sends `entityId`, retries the eventually consistent query, reads `$.items`, and expects HTTP 400 for an empty label. Planned artifact: static request/response pairs tied to this scenario. Preserve current `entityId` payload naming; older site excerpts use different fields.

### Find your project files

Route: `/getting-started/project-files/`. Reader question: Which file owns the behavior, wiring, configuration, and evidence I am reviewing? Outcome: locate the relevant source without editing generated tooling files.

Brief: This page will map the generated project to the decisions a reader and their agent need to make. It will locate the application Event Model, the Counter feature, command decisions, events, entity updates, queries, and tests, then distinguish those authored files from build files regenerated from neo.json. A compact directory map will connect each location to its purpose. Readers will learn where to inspect a proposed change without studying every framework module.

Evidence: [starter README directory map lines 89-114](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/README.md#L89-L114), [project-and-cli.md lines 1-3 and 33-45](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/agent/project-and-cli.md#L1-L45), and `counterFlow` evidence above. Correct the upstream README's invitation to edit Cabal files when describing CLI-generated projects: reconciliation owns those outputs. Planned artifact: focused directory map and ownership table.

### Set up your agent

Route: `/getting-started/`, retained. Reader question: How does my coding agent get the project conventions, and what should I ask it to do first? Outcome: installed skills plus a bounded behavior request and clear acceptance evidence.

Brief: This page will retain its existing agent installation guidance, shop task, and accepted-versus-rejected checks while linking environment preparation and first-run work to dedicated pages. It will distinguish shared workflow skills from guidance matched to the application's framework revision, explain the supported agent choices for the documented CLI version, and verify the installed instructions in the project. The first request will remain small enough for the reader to judge before entering the application tutorial.

Evidence: existing `src/content/docs/getting-started/index.mdx` contains useful commands, task text, and outcome table. Current `Commands::Skills` and `SkillsSubcommand::Setup` are defined in [cli.rs lines 107-130 and 155-180](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L107-L180), naming Claude Code, Codex, Kiro, Cursor, tool selection, dry run, shared library, and `.neo/agent-guidance/active.md`. Do not silently replace the existing npx command with current-main CLI behavior without selecting and verifying the intended release. No additional diagram needed.

### Fix setup problems

Route: `/getting-started/troubleshooting/`. Reader question: Which setup step failed, and what is the smallest safe correction? Outcome: recover from the common first-run failures or collect a precise support report.

Brief: This page will connect common first-run symptoms to the failed step and its smallest corrective action: missing tools, the wrong working directory, an existing project name, invalid project configuration, unavailable dependencies, or missing agent guidance. Each case will show a verified diagnostic and the check that confirms recovery. It will preserve the reader's files, explain how to identify their CLI and framework versions, and link deeper compiler or runtime errors to the reference.

Evidence: `NeoError::{NoWorkspace,InvalidConfig,DirectoryExists,NixNotFound,GitNotFound}` in [errors.rs lines 7-51](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/errors.rs#L7-L51); `SubprocessRaw` exposes saved diagnostics in [lines 110-120](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/errors.rs#L110-L120); `GuidanceSubcommand::Retry` in [cli.rs lines 126-130](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/cli.rs#L126-L130). The upstream directory-exists help suggests deletion; the beginner guide should prefer choosing a different name and preserve existing files. Planned artifact: symptom, cause, correction, verification rows with captured diagnostics.

## Boundaries and migration

| Adjacent section | Start here owns | Leave to the adjacent section |
| --- | --- | --- |
| Build an application | An unchanged, checked Counter starter and agent setup | Specifying and implementing the shop behavior, domain tests, review, and changing requirements |
| Solve a task | Initial agent installation, basic shell/editor availability | Repeated agent collaboration, persistence, transports, authorization, integration, file handling, deployment, advanced editor/IDE workflows |
| Understand the design | Predicting one accepted and rejected order | General Event Modeling tradeoffs, pure decision semantics, replay, projections, consistency, and side effects |
| Reference and help | First-run diagnostics and enough commands to complete onboarding | Every CLI flag, full configuration schema, syntax, API modules, error catalogue, release notes, support resources |

Retain `/docs/`, `/learn/`, and `/getting-started/` without redirects. Preserve the latter two articles and all useful existing anchors. The setup article's current environment section should remain usable, with new destination links added and its final plan updated to reflect divided ownership. Do not strip useful existing instructions merely because a planned destination exists. The older plan said setup would own the complete first run; this expansion deliberately distributes that responsibility into named pages while keeping setup as the stable agent destination. Update the documentation contract and planning map accordingly.

A sensible planned reading sequence is Core concepts, Installation, Create a project, Run, First response, Project files, Agent setup, then the tutorial's model page. Keep the map and troubleshooting out of sequential pagination. Avoid making a brief displace the existing working concepts-to-setup continuation until the reader can still reach the substantive setup article directly. New standalone briefs retain `pagefind: false`, `noindex`, and one planning paragraph, following the existing editorial scaffold contract.

## Evidence limits and blockers for writing full instructions

| Finding | Consequence |
| --- | --- |
| Source snapshot is upstream main, not an installed or selected CLI release | Current CLI definitions are source evidence. Published CLI behavior has not been verified here; future command transcripts require a chosen release. |
| Starter pins framework revision `ea75873fbd0da7da39124c82f328c2e70bdca629` in its flake, while inspected repository main is `033ae4a` | State CLI, template, and framework identities separately. Do not imply the generated app automatically uses inspected main. |
| CLI README documents source installation with Cargo; no clean-machine walkthrough was executed | Installation page is a concrete brief, not a verified universal installer. Native Windows support is not established by the Linux/macOS flake systems. |
| Starter README and generated-project reconciliation describe different levels of build-file ownership | Use `neo.json` as the authored configuration for CLI projects. Link raw starter instructions as a separate route only if needed, not as interchangeable commands. |
| Shared skills can be installed by current source through `neo skills setup`; existing article records an earlier external installer and two supported agents | Preserve the useful old article and plan the version-aware update. Do not claim four-agent released support solely from main. |

The default event store loses history at process exit, and the query test explicitly permits projection delay. Both matter to first-run expectations. The starter is embedded for scaffolding, but reconciliation, framework retrieval, and initial builds can still need network access. Do not claim the complete onboarding works offline based on the embedded template test.

Unslop review: specific action labels replace generic groupings; every destination answers an observable reader question; no module dump, decorative card index, empty overview layer, auxiliary labels, or new interaction is needed. Retain the accepted brand, Starlight sidebar and article shell, 18px prose, 16px examples, and normal scrolling. This report makes no rendered-page or runtime verification claim.
