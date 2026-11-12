# Documentation people want to return to

Research date: 12 November 2026. Checkpoint: `67cc7d513f77feac182c2304a163a93616a8ab27`.

## Recommendation

Make NeoHaskell documentation a dependable working book: a short first path, task-oriented guides, explanations of the model, and a precise reference. Keep the accepted continuous article layout and NeoHaskell identity. Make the relationship between intended behavior, source code, recorded events, and observable results the distinctive teaching device. Add interaction only when changing an input teaches more than a static example.

This change implements the information architecture and page briefs, not a finished curriculum or an in-browser NeoHaskell runtime. Existing substantive guides remain available. Each planned page describes its scope, examples, and visual treatment in a short paragraph. Future widgets are specifications, not simulated product capabilities.

## What "most loved" can mean here

There is no verified, representative league table comparing affection for all these documentation sites. Technology satisfaction, use of documentation, and this audit's assessment of a page are three different kinds of evidence. They must not be collapsed into a fabricated ranking.

The latest available [Stack Overflow language data for 2026](https://survey.stackoverflow.co/2026/technology/data/da-language) reports admiration of 67.4% for Rust and 62.1% for Elixir. Its [framework data](https://survey.stackoverflow.co/2026/technology/data/da-webframe) reports Phoenix at 69.5%, SvelteKit at 64.4%, Svelte at 59.4%, and Astro at 58.8%. These percentages describe respondents who want to continue using a technology, not how they rate its documentation. Small populations can produce misleadingly high percentages. This is selection evidence, not a documentation score. Source: Stack Exchange Inc., 2026 Developer Survey, ODbL 1.0.

[State of JavaScript 2025](https://2025.stateofjs.com/en-US/libraries/) supplies another ecosystem sentiment signal. Its 2026 edition is still collecting responses, from 5 November to 5 December, according to [Devographics](https://devographics.com/). A purported completed State of JS 2026 ranking would be premature. The [Rust team's 2025 survey report, published in March 2026](https://blog.rust-lang.org/2026/03/02/2025-State-Of-Rust-Survey-results/), gives a more direct documentation signal: online documentation remains its community's preferred canonical reference. That establishes use and trust within Rust, not superiority over other sites.

The comparison therefore includes highly admired ecosystems and complementary documentation exemplars. React and MDN contribute teaching and reference patterns; Django and Laravel contribute mature application guidance; TypeScript and Go contribute language examples; Vue contributes reader adaptation; FastAPI contributes immediate verification. Their inclusion does not assert that they won a popularity contest. MDN is a web-platform reference, included as an adjacent benchmark.

## Method and limits

Inspect official articles, their source-visible structure, and rendered desktop and phone pages. The sample covers 12 documentation families, with Elixir and Phoenix inspected separately. Desktop captures use 1440px; fresh phone loads use 390px. Representative page and example captures are recorded separately. A resized desktop session can preserve a desktop sidebar, so mobile conclusions use fresh contexts. Versions are recorded where visible; Django's stable link resolves to 6.1 and Laravel's current routing guide is 13.x. Initial captures of Django 5.2 and Laravel 12 were replaced for the current comparison.

The audit evaluates entry paths, information architecture, prerequisites, prose, examples, graphics, controls, navigation, discovery, mobile behavior, accessibility affordances, versioning, and maintenance. It is a qualitative sample, not a complete accessibility certification, performance benchmark, user study, or proof that every embedded runtime works. A visible control is reported as an affordance unless exercised separately. Sponsor banners and temporary announcements are incidental and are not proposed for NeoHaskell. A durable [observation record](documentation-observations-2026-11-12.md) identifies the inspected routes and limitations without requiring temporary screenshots to survive.

## What each reference teaches us

### Rust: confidence through a coherent book

The [guessing-game chapter](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html) builds a recognizable program incrementally. Commands, filenames, source, compiler messages, and explanations stay in sequence. Numbered chapters and a restrained reading surface make progress understandable; theme, search, copy, and selected run controls support the text. Errors become part of learning rather than embarrassing interruptions.

Underlying principle: reduce uncertainty about what changed and what should happen next. Borrow the continuous project, explicit expected results, and explainable failures. Avoid copying its long prerequisite journey wholesale. NeoHaskell readers should understand one behavior and give an agent a bounded task before studying every language feature. The dense book tree is useful for orientation but requires a dependable collapsed state on phones.

### Go: one concept, one experiment

[A Tour of Go](https://go.dev/tour/basics/1) places a short explanation beside an editable program and output. Run, Format, and Reset make experimentation reversible. Numbered pages constrain scope. On a phone the explanation and editor stack, retaining readable code instead of shrinking the desktop workspace.

Underlying principle: make the causal loop short enough to hold in memory. Borrow small inputs, visible results, and an explicit reset when interaction is warranted. Do not import the full-screen lesson shell or make an editor the only way to read a concept. NeoHaskell has no verified browser runtime in this task, so a Run button would be unjustified. Static input/output pairs can provide much of the same clarity.

### TypeScript: explain the compiler where the question occurs

The [Everyday Types chapter](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) links small examples to the Playground and displays type errors beside the relevant code. Its handbook and reference serve different reading modes. Familiar syntax, inferred types, and counterexamples explain what the compiler knows. Blue navigation and quiet source surfaces keep the technical artifact central.

Underlying principle: attach evidence to the exact expression that needs explanation. Borrow compact diagnostic examples and source-linked reference entries. Any future type inspector needs keyboard and touch access to the same information; hover alone is insufficient. Avoid the long mobile contents list that can displace the article opening. Do not build a fake type checker: use verified compiler output until a real integration exists.

### Elixir and Phoenix: guides and API share a home

[Elixir's introduction](https://hexdocs.pm/elixir/introduction.html) and [Phoenix's first application](https://hexdocs.pm/phoenix/up_and_running.html) place guides, modules, versions, search, and source access in one consistent documentation system. Interactive-shell transcripts show expressions and results. Phoenix includes concrete setup output and application structure. The page chrome is compact; code and prose remain in ordinary flow. Copy Markdown and source controls support moving from reading to development.

Underlying principle: preserve context when moving from explanation to implementation detail. Borrow links from a concept to the exact framework definition, explicit runtime versions, and text that agents can consume without screenshots. Keep a human explanation as the authority. A unified search must identify the language, framework, and skills collection when their versions differ. Avoid exposing a huge module tree to every beginner.

### React: teach a mental model, then challenge it

[State: A Component's Memory](https://react.dev/learn/state-a-components-memory) starts with an everyday problem, demonstrates a failed approach, introduces the mechanism, and offers challenges. Embedded examples pair source with rendered output. Optional deep dives defer advanced detail. Large type and generous spacing support sustained reading; selected navigation is conspicuous without dominating the page.

Underlying principle: a reader should be able to predict an outcome, observe it, and explain the difference. Borrow misconception-first examples, optional depth, and focused exercises with solutions. Keep NeoHaskell's essential explanation visible without opening anything. Multiple sandbox frames add loading and visual cost, and the sampled preview did not establish runtime reliability. Do not reproduce every widget or repeated recap panel.

### Vue: adapt to a real reader choice

The [introduction](https://vuejs.org/guide/introduction.html) offers a guide, tutorial, examples, and API reference. The [reactivity chapter](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) adapts examples to an API preference. Three-column navigation separates global location, reading, and local outline. Green identifies active concepts against quiet surfaces; source blocks carry the detail.

Underlying principle: ask the reader to choose only when the answer genuinely changes the instructions. Borrow operating-system or agent tabs where setup differs, preserving the selected value across related steps. Avoid inventing two NeoHaskell learning tracks that duplicate the same content. The preference announcement in the sampled viewport also shows the cost of persistent helper UI: essential context can become a competing panel.

### Svelte: edit one thing and see its consequence

The [state tutorial](https://svelte.dev/tutorial/svelte/state) combines concise prose, an editable file, a running result, and a solution action. File changes are highlighted in the explanation. The typography distinguishes reading from code; the orange identity mostly lives in navigation and accents. On phones the reader switches between text and editor.

Underlying principle: carefully constrain the experiment rather than merely embedding a general IDE. Borrow a single meaningful variation and a recoverable initial state. The text/editor switch imposes a working-memory cost on phones; NeoHaskell should keep the explanation and expected outcome in document flow. The previously rejected persistent teaching companion must not return under a new name. Optional inline interaction belongs to a future, separately verified lesson.

### Astro: route people by intent

[Astro's documentation](https://docs.astro.build/en/getting-started/) separates tutorial, guide, reference, and ecosystem. Its [installation page](https://docs.astro.build/en/install-and-setup/) combines prerequisites, task steps, alternative package-manager commands, and a local outline. Native topic navigation, language selection, search, and phone menus form a reusable reading shell.

Underlying principle: explain what kind of help a destination provides before asking the reader to commit to it. Borrow the information architecture and Starlight's existing behavior instead of replacing the framework. Let the page introduction state the outcome. Avoid importing every callout, sponsor slot, or exhaustive topic group into NeoHaskell's first screen. A good index routes people; it does not advertise documentation with a grid of feature cards.

### Django: document the complete path, including failure

The current [first-application tutorial](https://docs.djangoproject.com/en/stable/intro/tutorial01/) makes prerequisites and versions explicit, builds one application, and shows how to verify that setup succeeded. Operating-system alternatives sit beside commands. Links connect the tutorial, deeper topics, reference, and troubleshooting. Version and language controls recognize that correct instructions depend on context.

Underlying principle: completion means reaching a checked result, not copying the last command. Borrow verification after each meaningful step and exact recovery advice. Keep release-specific instructions tied to a tested revision. Do not copy the sampled page's large promotional region or smaller reading text; NeoHaskell's accepted 18px prose and 16px examples provide a stronger reading baseline.

### Laravel: organize around application work

The current [routing guide](https://laravel.com/docs/routing) sits among concrete application topics: requests, validation, authentication, storage, testing, and deployment. Small examples answer practical questions in place. Version selection, local anchors, search, source copying, and Markdown copying support returning users. The restrained page leaves substantial space for source and explanation.

Underlying principle: a framework's documentation should resemble the work people need to do. Borrow task names and a route from the common case to exceptions. Avoid a sidebar that opens every capability simultaneously. Keep any full application example separate from API lookups so a reader fixing one route does not have to re-enter a tutorial. Old-version warnings should reflect real compatibility differences, not become permanent decorative badges.

### FastAPI: make the result inspectable immediately

[First Steps](https://fastapi.tiangolo.com/tutorial/first-steps/) connects a minimal source file to a running endpoint and generated OpenAPI documentation. The same definition is visible as code, HTTP behavior, and an inspectable schema. Sections explain the parts after establishing the outcome.

Underlying principle: demonstrate the whole causal chain with the smallest working artifact. Borrow request/response pairs and generated-contract inspection for NeoHaskell's HTTP and MCP guidance. Clearly distinguish an illustrative response from a request that has actually run. Avoid auto-typing terminal animations, oversized side navigation, repeated tips, and a floating assistant that competes with the article. The reference's full collection of controls is not a prerequisite for a useful first lesson.

### MDN: make reference predictable

[Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) uses a repeatable reference sequence: definition, runnable example, syntax, parameters, return value, detailed behavior, examples, and compatibility. The contents outline mirrors that sequence. Its Run and Reset controls make the example a bounded experiment, while specification links establish authority.

Underlying principle: returning readers should know where the answer will be before scrolling. Borrow consistent API entries, explicit return values, edge cases, and links to canonical definitions. For NeoHaskell, compatibility means supported framework/compiler versions, not browser logos. Keep examples readable as static text if the enhanced widget fails. Do not copy advertising or status panels that add no decision-relevant information.

## Principles across the whole experience

| Dimension | NeoHaskell decision | Reason and tradeoff |
| --- | --- | --- |
| Reader intent | Separate first steps, tutorial, task guides, explanation, and reference | Learning order and lookup order are different. The distinction follows [Diataxis](https://diataxis.fr/), with plain navigation labels. |
| Audience | Assume no Haskell or event-sourcing expertise | Explain the application model before the vocabulary of its implementation. Experienced readers can jump to reference. |
| Narrative | Keep one small shop through the first journey | A stable domain reduces incidental learning. Later guides can use other domains when the task requires it. |
| First success | Show one accepted command, one rejected command, and the resulting query | A successful command alone does not demonstrate that the intended rule is enforced. |
| Prose | Outcome first, prerequisites where needed, explanation beside evidence | Reduce scanning without turning every thought into a callout or a checklist. |
| Layout | Existing article, left topics, right outline on wide screens | Preserve the accepted guide and ordinary scrolling. Short briefs need no empty outline. |
| Typography | Manrope, 18px prose, 16px essential source/table text, approximately 65-75 characters per line | Readability survives long explanations and narrow screens. No reduced-size desktop workspace on phones. |
| Color | Existing daylight/violet and dark violet/cyan themes | Identity remains recognizable. Color marks active location, syntax, or a meaningful result, never ornamental urgency. |
| Spacing | 4px rhythm; approximately 32px desktop article padding and 20px phone edges | Related text and examples remain grouped. Navigation is denser than prose. |
| Navigation | Five collapsible topic groups; current group expands; stable deep links | Expose the map without showing an intimidating wall of links. Native Starlight behavior remains authoritative. |
| Example frames | Copyable source, actual filenames when needed, expected output adjacent | Readers can reproduce what they see. No fake terminal chrome, language badges, or explanatory footer bars. |
| Figures | Use diagrams only for relationships, ordering, or separation of responsibilities | Event history and query state must be visually distinct. No decorative architecture drawing on every page. |
| Interaction | Start with static examples; add controls only for a causal question | A widget has a learning job, a useful default, keyboard/touch support, reset, and a static equivalent. |
| Motion | No entrance dependency, auto-play, scroll-linked state, or forced paging | Reading position must not change the lesson's meaning. Reduced motion preserves all information. |
| Accessibility | Semantic headings, labeled controls, visible focus, sufficient contrast, code-region scrolling | Color and hover never carry the only explanation. Test at 320px and 200% zoom, not only wide screenshots. |
| Search | Working static search over useful content; clear titles and stable anchors | In this scaffold, page briefs are planning content and should not displace real answers in search. |
| Localization | English source with all eight existing translations, stable fragments | Preserve language switching and shared structure. Freshness checks do not replace native editorial review. |
| Agent use | Same canonical content and source links for humans and agents | Copyable bounded tasks and review criteria are useful; a second contradictory agent-only curriculum is not. |
| Versioning | Keep framework, CLI, and skills versions distinct | Add version selection only when maintained versioned documentation exists. Never show a decorative selector. |
| Recovery | Symptom, location, cause, minimal fix, verification | Error guidance helps a reader recover without reading an entire architecture chapter. |
| Trust | Distinguish conceptual examples, checked source, executed results, and future work | Do not present a planned widget or a placeholder page as a completed lesson. |
| Maintenance | One canonical page per answer; cross-link instead of duplicating | Test executable snippets against a pinned version when authored. Review links and translations with source changes. |

## The proposed documentation map

This is a 24-page editorial scaffold, not 24 new finished tutorials. Preserve the existing three substantive pages and give each page a specific brief. A central `/docs/` index explains how to use the map, while `/learn/`, `/getting-started/`, and `/resources/` retain their existing URLs and examples.

| Group | Page and path | Scope and example treatment |
| --- | --- | --- |
| Start here | Documentation plan `/docs/` | An indexed reading map; distinguish the three existing guides from planned pages, explain entry points, and link to usable upstream answers through Resources. Plain linked rows, no hero or feature grid. |
| Start here | Core concepts `/learn/` | Preserve the shop explanation. Brief future improvements to accepted/rejected comparison and a static command, decision, event, query figure. |
| Start here | Set up your agent `/getting-started/` | Preserve verified material. Own the complete future first-run journey: toolchain prerequisites, runtime versus skills installation, project creation, initial app launch, a checked first response, and recovery. The outcome is a working project ready for the tutorial. |
| Build an application | Model your first feature `/tutorial/` | Apply the definitions from Core concepts to produce this tutorial's shop specification, conditions, and observable outcomes. A small behavior table and static model; hand the specification to the next chapter. |
| Build an application | Implement the feature `/tutorial/first-feature/` | Begin with the checked project from setup and supplied specification. Produce one backend behavior with a callable interface. Focused source excerpts, an annotated file tree, and direct links to the minimum language syntax needed. |
| Build an application | Test the behavior `/tutorial/test-behavior/` | Check acceptance, rejection, and query results. Input/expected/actual comparison; failures explained in place. |
| Build an application | Change it safely `/tutorial/change-safely/` | Add one requirement and review its consequences. A small diff and before/after behavior cases. |
| Solve a task | Work with an AI agent `/guides/ai-workflow/` | Bound tasks, provide context, review evidence, recover from mistaken changes. Copyable prompts and review examples. |
| Solve a task | Expose HTTP and MCP interfaces `/guides/transports/` | Reuse application behavior across transports. Request/response and tool-call examples; a small boundary diagram. |
| Solve a task | Keep data across restarts `/guides/storage/` | Distinguish event and query storage. Configuration and restart checks; a persistence diagram. |
| Solve a task | Control access `/guides/authorization/` | Separate identity from permission for a command/query. Allowed/rejected cases and a decision table. |
| Solve a task | Connect external services `/guides/integrations/` | Locate effects and credentials outside pure decisions. Provider flow and success/failure traces. |
| Solve a task | Store and retrieve files `/guides/files/` | Follow ownership and file access. Upload/download sequence and failure cases. |
| Solve a task | Deploy and operate `/guides/deployment/` | Pin environment, configure persistent dependencies, inspect failures, and recover. Deployment diagram and reproducible checks after upstream verification. |
| Understand the design | Model application behavior `/concepts/event-modeling/` | Explain general modeling tradeoffs, boundaries, and competing interpretations across a multi-step workflow. One evolving static diagram; link to the tutorial for a worked specification instead of repeating it. |
| Understand the design | History and current state `/concepts/history-and-state/` | Separate recorded facts, reconstructed state, and query answers. Aligned history/state examples; optional future comparison control. |
| Understand the design | Pure decisions and effects `/concepts/pure-decisions/` | Explain determinism, typed inputs, rejection, and external effects. A minimal boundary figure and contrasting examples. |
| Reference and help | Language essentials `/reference/language/` | Syntax for reading application code: modules, values, functions, types, pattern matching, and do blocks. Tiny source/output examples. |
| Reference and help | Core library `/reference/core/` | Common types and operations. Signature, input, output, edge cases, and canonical source links. |
| Reference and help | Framework building blocks `/reference/framework/` | Entity, command, decision, event, query, and application composition. Definitions and minimal complete source examples. |
| Reference and help | Neo CLI `/reference/cli/` | Commands, arguments, working directory, exit outcomes, and recovery. Copyable invocations with checked outputs. |
| Reference and help | Configuration `/reference/configuration/` | Defaults, required values, secrets, transports, storage, and environment overrides. A searchable-in-page table and small configurations. |
| Reference and help | Errors and troubleshooting `/reference/errors/` | Find the symptom, its cause, minimal repair, and a verification step. Diagnostic excerpts, no interactive console needed. |
| Reference and help | Resources and project status `/resources/` | Preserve source, releases, help, and contribution links. Brief the future compatibility and upgrade pointers. |

The tutorial is the only mandatory sequence. Task guides link to prerequisites but remain independently addressable. Explanation is optional depth. Reference entries link back to a relevant guide rather than extending a long next-page chain across unrelated tasks. Each overview reference can later split when real content requires it; empty per-symbol stubs are not created now.

### Page ownership and handoffs

| Page | Reader question | Deliverable and next destination |
| --- | --- | --- |
| Core concepts | What do these four terms mean? | Recognize an intention, a decision, a recorded fact, and a query answer. Continue to setup; skip directly to reference when already familiar. |
| Setup | How do I get from this machine to a checked project? | A created application, a first response, and an agent with the right skills. The brief explicitly owns this missing end-to-end walkthrough; present content still links to inspected upstream instructions. Continue to the tutorial. |
| Tutorial model | What exactly should this feature do? | A concrete specification for one shop behavior, including rejection. Continue to implementation. |
| Tutorial implementation | How does this specification become working source? | One implemented backend behavior and callable interface in the setup project. Link to Language essentials for syntax in context, then to Test the behavior. This is not a full frontend or production application course. |
| Event Modeling explanation | How do I choose a useful model when the story is ambiguous? | General reasoning about boundaries and tradeoffs. Link to the tutorial's specification as an application of the ideas. |
| AI workflow guide | How do I repeat this collaboration and recover when it goes wrong? | A reusable context, change, review, and correction procedure. Link to the tutorial for the first worked change and setup for installation; duplicate neither. |

## Widget and figure specifications

| Artifact | When it earns its place | Behavior and fallback |
| --- | --- | --- |
| Source and output pair | Reading one function or command | Copy only source; keep expected output visible. Use actual compiler/runtime evidence when authored. No runtime control in this scaffold. |
| Behavior comparison | Comparing acceptance with rejection | Static rows are the default. An optional future control varies one input, with labeled outcome and reset. Never encode the outcome by color alone. |
| Event history and query figure | Explaining facts versus current answers | Separate ledger from query result; show ordering with labels and geometry. A text/table equivalent carries the same information. |
| Focused diff | Reviewing an AI-generated change | Context lines, additions/removals distinguished by signs and text, full-file link. Keep essential code at 16px. |
| Configuration alternatives | Instructions actually differ by environment | At most one choice axis at a time; preserve selection and readable no-JavaScript content. No tabs for cosmetic language labels. |
| Diagnostic example | Explaining a real failure | Original error, location, cause, corrected source, successful check. Avoid hover-only messages and fabricated compiler output. |
| Request/response inspector | Explaining an interface contract | Static request and response first. Any future live request needs an isolated supported endpoint and honest loading/error states. |

Widgets are not a goal by themselves. An example is successful when a reader can answer the question without learning how to operate the documentation. This implements the owner's accepted guide experience rather than bringing back the rejected scroll-linked companion.

## Delivery and publication boundaries

The owner explicitly requested page planning paragraphs. Those are primary content in this iteration. Use a single `Page plan` heading on a new brief, followed by its specific paragraph, rather than an array of fake sections or disabled controls. Existing articles receive a clearly separated final planning paragraph inside a `data-pagefind-ignore` region so their working instruction remains intact and search cannot mistake future coverage for an existing answer. No invented release claims, placeholders masquerading as APIs, or executable NeoHaskell examples are added.

New briefs are excluded from Pagefind and carry `noindex` while they remain briefs. `/docs/` is the exception for internal search: index this explicitly titled Documentation plan so a topic query can discover the map without representing it as an answer. It also carries `noindex` for external search. Its opening identifies Core concepts, Set up your agent, and Resources as the existing substantive guides; the other destinations contain page plans. Its topic descriptions support browsing and discovery. `/resources/` remains indexed and links to current usable syntax, CLI, storage, testing, and authorization material at the inspected upstream revision. Representative searches for storage, syntax, and CLI must find useful existing material or the honestly titled map, never standalone brief pages. These are publication-quality navigation mechanics around editorial work in progress, not a declaration that the documentation itself is ready for learners.

Preserve the existing build, copy check, translations, and hosting configuration. Verify the page map, internal links, native sidebar, current location, previous/next within the tutorial, language switching, dark/light rendering, phone navigation, search, and existing Copy behavior. Do not replace an established component library or add a documentation runtime for a scaffold.

## How to test whether the finished docs deserve affection

These are proposed validation tasks, not measured outcomes. Recruit five people resembling the intended audience and observe where they need help. First, ask each to find the starting point and explain an accepted and rejected command within five minutes. Next, have them locate storage guidance, a CLI option, and an error remedy without hints; aim for under one minute per lookup. Finally, ask them to review an agent's change and identify whether its behavior matches the request.

Record task completion, incorrect predictions, time to the relevant answer, points of abandonment, and the reader's own explanation of the problem. Small samples reveal usability problems, not population-level popularity. Prioritize repeated failure over decorative requests. Once real content ships, review search queries with no useful result and source/version drift. A satisfaction score can complement this evidence; it cannot replace it.

## Review status

Round 1: Astra requested explicit ownership of the first runnable result, boundaries between overlapping pages, and a concrete scaffold discovery policy. All three revisions are incorporated above. The [first critique](../../.impeccable/reviews/docs-research-2026-11-12/astra-round-1.md) records the independent evidence check. In [round 2](../../.impeccable/reviews/docs-research-2026-11-12/astra-round-2.md), Astra approved the revised proposal with no remaining proposal blockers before implementation. Reviewer approval remains separate from owner acceptance and technical validation.

The implemented scaffold subsequently passed the build, copy check, 19 tests, strict translation freshness, and 944 browser assertions across 216 localized routes. The [verification record](../../.impeccable/reviews/docs-research-2026-11-12/verification.md) describes the exercised behavior and limits. After inspecting the final captures and saved results, the independent [final reviewer](../../.impeccable/reviews/docs-research-2026-11-12/final-review.md) approved delivery with no remaining implementation blockers.
