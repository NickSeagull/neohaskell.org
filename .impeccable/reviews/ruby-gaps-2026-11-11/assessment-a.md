Method: independent Assessment A by /root/ruby_gap_critical; fresh browser contexts, no detector output or previous review files consulted.

# What Ruby gives its visitors that NeoHaskell still does not

Reviewed 11 November 2026 against checkpoint `68a9493`. Target: local homepage, `/learn/`, and `/getting-started/`; reference: the current Ruby homepage, documentation, installation, quickstart, libraries, community, downloads, and maintenance branches. Browser inspection used 1440×1000 and 390×844 light-theme viewports. Source was read alongside the rendered pages. This is a review artifact; no repository files were edited.

**Verdict: NeoHaskell now explains and substantiates an idea, but does not yet provide a dependable path to using the language.** Ruby lets a visitor choose an installation route, execute a small example, look up a language construct, find supporting tools, and assess project maintenance. NeoHaskell's visible source, tests, dated release and community links are real improvements, but they remain separate pieces. The visitor has to assemble the missing practical journey.

The biggest concrete defect is in setup: the link labeled as environment instructions points to an upstream README that currently contains only introductory product paragraphs and an active-development statement. This is a broken information promise even though the URL itself loads successfully.

## Design specificity

**Authored and recognizably NeoHaskell, with a practical-information deficit.** The command → decision → event ledger → query model is specific to this product. Its ceramic-mug example, shapes, recorded fact, and separate stock result communicate a coherent idea. Violet/cyan, the retained logo, display typography, and pixel accent form a consistent identity in both the homepage and conventional documentation. There is no reason to replace these with Ruby's visual language.

The headline in isolation could advertise an AI app builder. The model and actual Counter source make the page distinctive. The remaining opportunity is to make that same specificity useful after persuasion: explain exactly what the visitor can build, where their code lives, and what they can execute and inspect. Another attractive homepage section cannot substitute for this.

Ruby is not an unqualified visual standard. Its homepage has an initial animated/loading state; captures taken immediately after network idle showed the central shape before its content. Settled captures show the intended composition. Its installation page is very long, and its downloads page overflowed to 700 CSS pixels at a 390-pixel viewport. NeoHaskell's three inspected pages did not overflow their viewport. Borrow Ruby's task completeness, not all its density or animation.

## Exactly five priority findings

### 1. [P1] The first-run journey skips the step where an application actually comes into existence

**State: missing local guidance, plus an incorrect external handoff. Website defect first; runtime verification is separate work.**

Ruby's [installation guide](https://www.ruby-lang.org/en/documentation/installation/) begins with a version check, differentiates platform/install options, and supplies commands. Its [twenty-minute introduction](https://www.ruby-lang.org/en/documentation/quickstart/) shows a terminal interaction and the result the learner should see. The reader receives an observable success condition.

At [local setup](http://127.0.0.1:4321/getting-started/), `src/content/docs/getting-started/index.mdx:15` says to follow the project's environment instructions at `https://github.com/neohaskell/NeoHaskell#readme`. The [current upstream README](https://github.com/neohaskell/NeoHaskell#readme), independently fetched as raw source, provides no environment instructions. Line 17 then assumes an application repository already exists. Lines 21–29 install agent guidance; they do not create the app or install its toolchain. Lines 49–60 describe intended behavior but provide no invocation or observable runtime output.

**Visitor cost:** A newcomer cannot tell whether installing the skills installs NeoHaskell. They have no authoritative route from an empty machine or directory to the repository the page assumes. The final instruction to ask the agent to demonstrate success leaves the agent to invent missing setup knowledge. That undermines the promise of reducing accidental technical decisions.

**Concrete correction:** Repair the false destination immediately. Link explicitly to the [pinned starter README's requirements and quickstart](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/neo/starter/README.md), with an accurate label such as “Starter prerequisites and run instructions.” Explain that agent skills are a separate installation. State the exact prerequisite for the current guide: an existing NeoHaskell application repository. Do not pretend this is already a complete zero-to-app tutorial.

**Implementation-ready now:** Accurate labeling, a source-specific handoff, the distinction between framework/toolchain and agent skills, and explicit prerequisites.

**Requires verification:** A complete first-run guide must verify a real way to obtain/create the starter, supported operating systems, build/run commands, elapsed time, success output, and a failed-input check. The pinned starter itself contains a `<your-fork-url>` clone placeholder and links back to a separate installation URL; simply pasting its quickstart would preserve a missing step. Do not invent a `neo new` command, promise a five-minute setup, or add a fake Run button.

### 2. [P1] The documentation teaches the domain model, but never teaches the visitor to read the language they are asked to trust

**State: conceptual documentation and source exist; a syntax bridge and working reference are absent from this website navigation. Upstream consumer guidance exists and is buried, not nonexistent.**

Ruby offers [a syntax introduction with expression/result pairs](https://www.ruby-lang.org/en/documentation/quickstart/) and a [documentation index](https://www.ruby-lang.org/en/documentation/) that distinguishes introductory learning, versioned official reference, tools, and further study. The homepage's examples link to a playground. These are separate levels of support for different questions.

NeoHaskell has two documentation content files, and `astro.config.mjs:17–20` exposes exactly two pages. The [concept lesson](http://127.0.0.1:4321/learn/) explicitly labels its examples as non-executable at `src/content/docs/learn/index.mdx:34`, correctly. The homepage then shows a real 14-line function body through `src/components/DecisionExample.astro:9–13`. But neither doc page explains `case`, `Nothing`, `Just existing`, `cmd.amount`, the event construction, or where that decision is registered. “View full source” sends the reader directly into GitHub rather than into an explanation.

**Visitor cost:** The primary audience is supposed to understand what an agent builds without already knowing Haskell. They can explain a stock rule but cannot yet evaluate the displayed implementation. The statement “review the code against that intent” asks for a skill the site has not taught. The search box and roomy sidebar look ready for documentation depth that does not exist yet.

**Concrete correction:** Add one conventional guide, “Read a decision,” based on the unchanged verified Counter excerpt. Explain the missing/existing state branches, the rejected amount, and the accepted event in three short sections. Connect the command, existing state, decision, and event to the exact names in the source. Link to the complete module and the relevant tests. Keep the homepage excerpt and opening model intact. Then add a small reference index linking only to verified upstream documentation for actual language/framework APIs and tools.

**Implementation-ready now:** The narrow reading guide can use the existing pinned source, plain-language outcomes, and tests already linked on the homepage. It requires the repository's fresh teaching-example review. A small source-backed reference index is possible after verifying each destination. After this visual assessment was complete, the parent identified existing consumer guidance at pinned revision `cacc806`: [agent documentation index](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/index.md), [project and CLI](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/project-and-cli.md), and [syntax and core](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/docs/agent/syntax-and-core.md), plus testing, storage, and authorization topics. Those source discoveries change the cheapest correction: surface and contextualize existing guidance first, then write only the missing newcomer bridge. This is a navigation/discoverability gap; it is not evidence that the project has no reference documentation.

**Requires verification/product work:** Completeness and suitability of upstream reference coverage, compatibility claims, editor support claims, generated API coverage, or a browser runtime. Ruby's playground is a genuine product capability; a visual simulation would not close the execution gap. Keep runnable-example work tied to finding 1.

### 3. [P2] Visitors cannot tell whether their intended application fits what is available today

**State: audience intent is clear; application scope and practical boundaries are not. Part website explanation, part evidence gap.**

Ruby's [libraries page](https://www.ruby-lang.org/en/libraries/) connects practical development needs to package discovery, installation, dependency management, and named tools. Its [about page](https://www.ruby-lang.org/en/about/) gives a broader account of the language. The visitor can investigate what comes with the ecosystem instead of inferring it from a toy example.

NeoHaskell's hero says “applications,” `src/pages/index.astro:52`. The opening shop model is clearly illustrative. The real evidence is a Counter starter and an agent workflow (`index.astro:81–91`), not a demonstrated ecommerce system. The concept guide explicitly excludes payments, shipping, and concurrency (`learn/index.mdx:87`). That honesty is good, but no page answers whether NeoHaskell supplies an HTTP backend, a frontend, a database, deployment tooling, or a finished application interface, nor what the builder must choose or provide.

**Visitor cost:** A person building with an AI agent cannot decide whether to invest in NeoHaskell for their actual project. They may mistake the shop example for ecommerce support, the skills workflow for shipped full-stack functionality, or recorded history for durable storage in every configuration. A sophisticated evaluator sees an unresolved product boundary; a beginner may discover that boundary only after setup.

**Concrete correction:** Add a compact “What you can inspect today” or “What is included” guide using verified artifacts. Name the Counter starter as the implemented example, list the specific layers its source demonstrates, and distinguish those from the illustrative shop and agent instructions. Explain which questions remain the builder's responsibility. Link this guide from the evidence section. Do not replace the opening model or scatter speculative use-case cards across the homepage.

**Implementation-ready now:** Clarify the difference among the illustrative shop, source-backed starter, and instructions for an AI agent. The pinned starter README identifies an HTTP workflow and an in-memory default; any such detail should retain its revision scope and be checked against implementation before publication.

**Requires upstream/product evidence:** Supported deployment targets, database guarantees, production suitability, “best for” industry lists, compatibility matrices, benchmarks, customer stories, and claims of app categories fully supported. The absence of Ruby-sized libraries and adoption is ecosystem maturity, not a missing marketing block.

### 4. [P2] Navigation exposes the learning path but hides the paths for visitors who are ready to act or evaluate

**State: setup, source, releases, and community are largely present but buried; a direct setup destination is absent from homepage navigation. Website-only correction.**

Ruby's [site navigation](https://www.ruby-lang.org/en/) identifies Install, Docs, Libraries, Contribution, Community, and News. Its mobile header supplies a menu. The useful principle is explicit visitor intent, not copying six top-level categories.

NeoHaskell's homepage masthead contains Documentation and GitHub (`src/pages/index.astro:40–43`), and its main CTA and later text CTA both return to Core concepts (`index.astro:53,73`). There is no homepage link to `/getting-started/`. A person must enter the guide and discover the second page. On mobile GitHub is removed from the header by `src/styles/home.css:168`. At 390×844, the first full-source link is around document y=2253, starter link y=3741, release link y=4075, and Discord y=4298. The mobile homepage is 4647 pixels tall. These are available resources, but a returning user must remember where they live or scroll several screens.

**Visitor cost:** Everyone is sent through the same conceptual doorway. A convinced builder, skeptical evaluator, and returning contributor want different next actions. The clean header helps the first read, but repeated navigation costs increase precisely when users become more engaged.

**Concrete correction:** Keep “Learn the concepts” primary. Add a secondary, plainly named “Set up your agent” route once its prerequisite wording is repaired. Supply a compact “Explore” menu or footer/resource area with Source & starter, Releases, and Community destinations. On mobile expose the same destinations through a small menu instead of making them dependent on a long scroll. A direct `#see-the-code` link is already supported by the homepage's existing section ID.

**Implementation-ready now:** Navigation to existing, verified pages/anchors/artifacts. Preserve the accepted visual hierarchy and avoid duplicating Ruby's entire IA before NeoHaskell has the corresponding content.

**Requires upstream evidence:** Nothing for exposing current destinations. Do not create empty Docs, Ecosystem, or Showcase pages merely to fill a larger menu.

### 5. [P2] Project activity is visible, but the site does not yet explain stewardship, change, or how to get the right kind of help

**State: releases and community are present, not absent. Missing is interpretation and routing. Mature support policies cannot be manufactured through copy.**

Ruby's [downloads page](https://www.ruby-lang.org/en/downloads/) distinguishes release categories, its [maintenance page](https://www.ruby-lang.org/en/downloads/branches/) describes support states, and its [community page](https://www.ruby-lang.org/en/community/) routes learning, discussion, contribution, and events. It also exposes licensing. Together they answer practical questions about an ongoing dependency.

NeoHaskell already states active development, links a dated CLI/framework release, identifies a separate agent-skills release, links source tests, and supplies Discord (`src/pages/index.astro:70–102`). Calling it devoid of trust signals would be inaccurate. The remaining gaps: no local explanation of what a release changes, no guide-linked help section, no license route in the footer, no distinction between a usage question and a reproducible bug, and no indication of what release/support assurances have actually been established. The setup guide ends with “describe the difference to the agent” (`getting-started/index.mdx:60`), which is insufficient when the issue is the toolchain or framework rather than generated business logic.

**Visitor cost:** Visitors must inspect GitHub to determine whether a dated artifact is relevant to them. Beginners are left with the same agent that may have produced the problem. Evaluators cannot distinguish “published release” from “supported for my application.” The project is candid about being in development but gives little help in interpreting that fact.

**Concrete correction:** Add a short “Development and help” destination or guide section. Surface current release notes as a destination, explain that framework and agent-skills versions are separate, link the verified project license, and direct usage questions to the existing community. Add a bug-report route only after verifying the project's preferred tracker and reporting instructions. Describe what evidence to bring—version, command, observed result—without inventing a response-time promise. Keep the existing homepage status concise.

**Implementation-ready now:** Better placement and explanation of existing release/community links, source license, and verified contribution guidance. A short release summary is appropriate only after reading its actual change.

**Requires upstream/product decisions:** Support windows, compatibility guarantees, security reporting policy, roadmap dates, response commitments, production endorsements, and organizational governance claims. Ruby's community size and testimonials are not copy opportunities for a younger project.

## Nielsen assessment of the NeoHaskell journey

Scores describe the combined marketing → concept → setup journey, not an unexecuted NeoHaskell runtime.

| # | Heuristic | Score / 4 | Evidence and consequence |
|---|---|---:|---|
| 1 | Visibility of system status | 3 | Current doc page and on-page location are visible; illustration is labeled; development status is disclosed. A learner's first executable success condition is absent. |
| 2 | Match with the real world | 2 | Mug order and plain-language decisions work. Setup abruptly assumes repositories, runtime preparation, and agent readiness. |
| 3 | User control and freedom | 3 | Native links, document scrolling, menu close, and Search Escape support ordinary navigation. No forced wizard. |
| 4 | Consistency and standards | 3 | The visual identity and conventional docs are cohesive. Hero AI-first framing shifts to Haskell/event-sourcing-first explanation on entering the concepts guide. |
| 5 | Error prevention | 2 | Illustrative examples and real source are correctly distinguished. The mislabeled setup destination and omitted project-creation prerequisite invite wrong assumptions. |
| 6 | Recognition rather than recall | 2 | The model, tables, and labeled sidebar aid recognition. Existing starter, release, and help routes require scrolling or remembering an external destination. |
| 7 | Flexibility and efficiency | 2 | Docs provide search, headings, deep links, and code-copy controls. The homepage gives no direct setup or returning-user route. Search result coverage was not evaluated. |
| 8 | Aesthetic and minimalist design | 3 | Calm layout, readable text, distinctive model, and restrained evidence sections. The page earns its visual structure; content gaps matter more than cosmetic changes. |
| 9 | Error diagnosis and recovery | n/a | No runtime or installation was executed and no relevant website error state was triggered. Missing troubleshooting belongs to the documentation finding, not an invented error-message audit. |
| 10 | Help and documentation | 2 | Two clear guides exist, but the available help stops before complete first run, syntax literacy, reference lookup, and troubleshooting. |
| **Total** | | **22/36 (61%)** | **Acceptable visual/usability base; significant journey gaps.** |

## Cognitive load

**Within the concept lesson: low. Across the setup journey: moderate, with three checklist failures.** The interface does not overwhelm through lots of visible controls. It burdens working memory by omitting connective information.

| Checklist item | Result | Specific observation |
|---|---|---|
| Single focus | Pass | Homepage has one primary action; concept article has one reading path. |
| Chunking | Pass | Four canonical concepts and short supporting examples give a useful structure. |
| Grouping | Pass | Code, outcomes, source links, and table rows are sensibly grouped. |
| Visual hierarchy | Pass | Headline, primary CTA, guide title, and current page are clear. |
| One thing at a time | Fail across setup | The reader must resolve toolchain, app repository, skills, agent, and version compatibility without an ordered complete route. |
| Minimal choices | Pass at the primary decision | Homepage choices are restrained. The desktop local outline has seven entries; this is reference navigation rather than seven competing primary actions. |
| Working memory | Fail | Concepts, Counter source, shop task, upstream environment, and expected checks live in separate contexts. |
| Progressive disclosure | Fail across journey | Complexity is postponed, but the missing prerequisites are not subsequently explained where needed. |

The significant transition is shop model → Counter source → shop prompt → unspecified application. That is manageable for a maintainer and expensive for the stated newcomer audience. Do not solve it with more interactive panels. Supply the missing explanatory bridge in ordinary guide prose.

## Emotional journey

The opening produces curiosity and a sense that the model is understandable. The explicit order and visible stock result are the first positive peak. The real source then adds credibility, but unfamiliar syntax introduces doubt for a non-Haskell reader. Core concepts restore confidence. Setup creates the deepest valley: the supposedly instructional README does not instruct, and an existing application is assumed. The journey ends with expected outcomes rather than a personally observed success, so the visitor has not earned the reassurance implied by the opening promise.

Ruby's practical advantage is closure: it makes it possible to type a small expression and compare the answer. NeoHaskell needs its own honest, reproducible success moment; it does not need to imitate a Ruby REPL.

## Three strengths to preserve

1. **The opening example explains the actual model.** Separate event history and current query state communicate a real distinction; the “illustrative” label prevents a demonstration claim.
2. **Evidence is specific and appropriately scoped.** The decision body, accepted/rejected cases, source tests, artifact names, dates, and pinned links are stronger than generic claims or invented social proof.
3. **The reading surface works on phones.** All three NeoHaskell pages stayed within the 390-pixel viewport. The code preserves readable type with an explicit sideways-scroll cue. The conventional menu and current-page state work.

## Three persona walkthroughs

**Jordan, new AI-assisted builder:** Clicks “Learn the concepts,” understands the mug story, reaches setup, follows the environment link, finds no instructions, then returns to a page that assumes a repository. Jordan does not know which missing step is their responsibility. Finding 1 is the critical failure; decorative polish does not affect it.

**Alex, experienced evaluator:** Wants a quick view of language semantics, installation prerequisites, supported application shape, and reference material. The real decision/source/tests are useful, but the two-page documentation stops before the questions Alex needs to answer. A source link is evidence; it is not an efficient substitute for a reference guide. Findings 2–4 drive abandonment or a premature GitHub deep dive.

**Casey, distracted mobile visitor:** Can read the opening and use the Docs route comfortably. Cannot reach setup directly from the homepage. The source and community destinations sit several viewports below the fold; the mobile masthead removes GitHub. Code scrolls internally with a visible cue, so this is mainly navigation cost, not broken responsive layout. Finding 4 improves the return visit without shrinking content.

## Minor observations

1. `src/content/docs/learn/index.mdx:11` leads with “Haskell-based” plus “event-sourcing framework centered on Event Modeling.” This technical context is accurate, but three unfamiliar labels arrive before the four concepts. Lead that paragraph with the AI-assisted builder's task; retain heritage later as context.
2. Documentation metadata in `astro.config.mjs:11` still uses Haskell-based framing. Align it with the accepted AI-first identity when touching metadata.
3. The homepage source pane has no Copy button. Because it is a non-standalone function body, adding Copy is lower value than an explanation and complete-source link; avoid implying it can be pasted and run alone.
4. Ruby's richer navigation is useful, but its six homepage categories and enormous installation page would be excessive for NeoHaskell's current corpus. Add destinations only when they contain real useful content.
5. A local license link and verified help destinations are inexpensive trust improvements. A carousel of unverified users, adoption numbers, industry use cases, or generic testimonials would weaken the current honesty.

## Evidence and boundaries

Captures and browser extracts are in `/tmp/neohaskell-ruby-gap-review/`. Use `ruby-home-desktop-settled.png` and `ruby-home-mobile-settled.png` for the intended Ruby hero. Initial `ruby-home-*-top.png` captures record the animation/loading phase, not the finished composition. NeoHaskell captures include `neo-home-desktop-top.png`, `neo-home-mobile-top.png`, `neo-code-desktop.png`, `neo-code-mobile.png`, `neo-learn-desktop-top.png`, `neo-setup-mobile-top.png`, and `neo-mobile-menu.png`. Full-page captures and heading/link JSON exist for the nine main compared pages at both sizes.

The raw upstream README and pinned starter README are saved beside the report. The former confirms the incorrect setup handoff; the latter establishes that a more relevant source exists, but does not establish that its end-to-end setup currently succeeds.

No framework installation, example execution, screen-reader audit, slow-network benchmark, or adoption verification was performed. Search opened and dismissed; result quality was not assessed. One attempted Ruby mobile-menu click used a hidden search button due to an overly broad selector and timed out; it does not indicate a Ruby UI defect. The header's real mobile-menu control was subsequently identified from the DOM, but its open interaction was not needed for the findings. No prior review artifact or detector result was consulted; required product/design records contained historical approval metadata, which was not used as evidence of current quality.

**First bounded implementation:** Fix `src/content/docs/getting-started/index.mdx:15` so its destination and label describe the verified starter instructions, and state that this guide starts from an existing application repository. Then verify a complete first-run path before claiming one.
