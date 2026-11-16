---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components/Home.astro","src/components/HomepageHighlights.astro","src/components/HomepageVisual.astro","src/components/FeatureIcon.astro","src/styles/home.css"]
---

# Homepage

Mode: Persuade. Target: `src/pages/index.astro`.

Owner accepted this homepage and its general pitch on 11 November 2026, at implementation commit `49d3206a6cd21d0057e1da34899d42308b4a0f55`, and requested that the direction be retained as a skill. Continue from this approved baseline. `$neohaskell-positioning` owns the reusable pitch and homepage principles.

The owner's 11 November 2026 request replaces the former code-led homepage with a benefits-led sales page for NeoHaskell as an AI-first language and framework. Preserve the existing palette, type and logo. The supplied Ruby, Phoenix and Laravel screenshots govern the requested craft, visual variety and feature coverage. Documentation remains unchanged. That redesign supersedes earlier homepage composition and source-example requirements below. The scoped 16 November extension and correction are recorded next and take precedence for the new highlights.

## Direction contract

THESIS: Build with AI. Keep control. Show the advantages of recorded history, pure business logic, interchangeable transports and an integrated framework before asking visitors to learn syntax.

OWN-WORLD: The accepted violet workshop, with Sansation, Manrope, one Pixelify emphasis and the original logo. Crisp native geometry, permanent records and cyan connections carry meaning. Both themes remain supported.

STORY: Understand the language promise, see how to review an agent's work, share one specification, and grow the app while preserving deployed behavior. Follow with recovery and safeguards, included infrastructure, and documentation to learn and build.

FIRST VIEWPORT: Left-aligned two-line promise with language-and-framework description and documentation action. A large application cutaway on the right connects web and agents to pure business rules, recorded history and infrastructure. The visual IDE benefit follows the hero, then specification and code freezing, before the existing wide history panel.

FORM: User-directed continuation of the accepted workshop identity. Retain native SVG and HTML for responsive, accessible product diagrams. The requested IDE screenshot, source excerpt, and datatype definitions inside generated ice and star artwork extend that vocabulary within the new highlights. The supplied references and explicit instruction to implement supersede the former comp layout and extra direction approval. Wide history scene, unequal benefit panels, compact capability field, agent workflow and large documentation close create the scroll rhythm.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Current extension and correction, 16 November 2026

`HomepageHighlights.astro`, inserted by `Home.astro`, follows the unchanged hero with a wide visual IDE row, a wide specification row, and a full-width freezing section. IDE prose and specification prose occupy the left column of their respective rows; the actual screenshot and eleven-line source excerpt occupy the right. The freezing heading and prose share a row above two illustrated datatype definitions. Below 760px, the additions and both datatype artworks stack in reading order. The existing history, pure-boundary/transport pair, capabilities, agent workflow, and closing action follow in their previous order. The IDE image opens at full size, and each benefit links to the relevant Event Modeling documentation anchor.

The owner rejected the first feature-descriptive copy, command-only excerpt, and crude SVG ice frame. Later feedback acknowledged the crystal's improved quality but required code inside the artwork rather than a detached icon and labels. The current copy leads with understanding the agent's work, preventing a specification from falling behind, and continuing to build while deployed behavior stays stable. Keep "Your app spec is code" and its concrete opening about stale Markdown files or separate documents. Its visible prose does not name the DSL or IDE. The eleven-line source excerpt preserves the feature/chapter/slice hierarchy and connects `PlaceOrder` to `OrderPlaced`, then a separate `AvailableMugs` query slice to that same event. It assumes existing domain types; it is not a complete program. Source remains 16px with native horizontal scrolling and keyboard access.

The freezing artwork contains two native HTML datatype definitions. `PlaceOrder`, with `product` and `quantity`, sits inside generated ice. `PlaceOrderWithContact` retains those fields and adds `email` inside a shiny gold star. The code is part of each composition, not a label beneath an icon. Text is selectable and keyboard-accessible, using 18px type on wide desktops and 16px at 1100px and below with contained scrolling when necessary. A solid pale-cyan CSS face keeps the ice's code background consistent. Do not restore the detached symbol, state labels, captions, or explanatory rows. The star's small static glints are part of the explicitly requested illustration, not a new page decoration or motion treatment.

The generated assets are `public/images/home/frozen-code-frame.webp` and `public/images/home/new-code-star.webp`, each with an adjacent prompt JSON sidecar. The [retrospective](../retrospectives/homepage-highlights-2026-11-16.md) records the inspected Duolingo Streak Freeze reference and production history; its artwork and branding are not shipped. The reused IDE screenshot's provenance remains in [source evidence](../reviews/model-evolution-2026-11-13/source-evidence.md). The original hero, global tokens, type families, logo, existing diagrams, and later sections remain. Artwork and source examples are local exceptions to the earlier source-free and native-only direction. Ice, gold, and composited code colors are illustration materials, not new page or semantic diagram tokens. The [integrated review](../reviews/homepage-highlights-2026-11-16/integrated-reviewer.md) applies to this current composition; earlier review verdicts do not establish acceptance of the later corrections. Owner acceptance and runtime deployment enforcement remain unestablished by these design records.

## Accepted baseline, 11 November 2026

The completed redesign uses a split hero and layered application illustration, one wide history panel, paired pure-boundary and transport benefits, six compact framework capabilities, a three-step agent workflow, and a closing documentation action. The headline is "Build with AI. Keep control." Pixelify emphasizes "control." The hero and close both link "Explore the docs" to `/learn/`; the hero also offers a quiet anchor to the framework section. The close contains only its headline, action, and original logo.

`HomepageVisual.astro` provides four static figures with accessible descriptions. The application uses overlapping outlines and staggered event slips. The history retains stock added, order placed, and order cancelled while showing the resulting stock outside the ledger. Pure decisions stay inside a boundary with database, network, and file effects outside. The transport scene uses a solid active HTTP route and dashed alternate MCP route to express a configuration choice. `FeatureIcon.astro` supplies the shared SVG icon vocabulary. At this baseline there were no homepage source examples, raster illustrations, or opening animation. The 16 November extension above supersedes the source and raster restrictions for its requested examples.

The 1536px shell and 1:1.08 hero preserve roomy desktop proportions. At 760px major sections stack; the capability grid shifts from three columns to two at 1000px and one at 480px. History and closing panels use the new paired `--field` colors, while application and pure-boundary illustrations use `--scene`. Type, radii, spacing, and theme values are recorded from the implementation in `DESIGN.md`. The new 12px and 16px radii and varied section-heading scales are intentional additions, not a change of identity.

Graphic, layout, and content reviewers were satisfied after corrections. The independent finish review returned **ship**, and the learning examples received **keep**, after the redundant closing paragraph was removed and visually checked. The build and copy check passed with zero diagnostics; all 12 existing tests passed. Dark and light views were reviewed at 320, 390, 820, and 1440px. Evidence belongs in `.impeccable/reviews/homepage-sales-2026-11-11/`. Owner acceptance of this reviewed implementation is recorded above.

## Historical direction and decisions

The records below preserve prior decisions and their context. The full redesign above supersedes their active homepage full-width model, Counter/source-example, and single-animation requirements. Documentation decisions and reusable copy, accessibility, identity, and terminology constraints remain in force.

## Explicit authority corrections

The owner clarified: “I was just deciding the visual direction and naming of the components, these things will go into the documentation pages, the homepage will have an initial animation and thats it”. This makes the selected image comps authority for composition, palette, typography, and finish, while the corrected brief governs content and scope. Requests/rules/views become commands/decisions/queries; reservations become ecommerce; the interactive study becomes a single initial animation; installation-first CTA and lower learning-path strip become a documentation entry and concise product content. Do not restore obsolete comp text or produce a raster diagram to satisfy similarity metrics. The selected functional diagram uses native SVG/DOM and readable text.

## Delivery boundary

Astro Starlight, static GitHub Pages. Both themes, keyboard navigation, reduced-motion completed state, responsive 320–1600px layout. Documentation gets a minimal static concept introduction and verified external next steps; no new interactive documentation feature. Preserve the five standard bounded, screened UTM fields per tab for internal navigation, with provenance and observation time; no backend or analytics calls. No remote or deployment currently exists in this repository.

## Homepage refinement, 10 November 2026

The owner authorized implementing the Ruby comparison recommendations and choosing the details autonomously. Keep the established identity and one opening model. The homepage now proceeds from the primary concepts action and diagram to two concrete benefits, then a compact active-development/community section. Repeated learning actions use the same label and destination. Product columns share one grid; reading copy is 18px, and essential diagram text renders at least 16px across supported widths. The compact diagram begins below 1000px, with larger shapes and connector clearance. Maintain verified GitHub/Discord destinations and the active-development statement sourced from the current upstream README. No release-readiness or adoption claim is implied.

## Positioning correction, 10 November 2026

The owner accepted the layout (“much better now”) but requested the missing evidence and said: “I do not want to sell NeoHaskell as a dialect of Haskell, but rather to be an AI-first language.” Preserve the accepted design while making that identity explicit in the hero and metadata. The opening promise is “Build with AI. Know what you build.” Product benefits carry direct links to decision and replay tests. A separate evidence section presents the published agent workflow and application starter; dated, artifact-specific releases support the development section. Source inspection supports available artifacts, not executed benchmarks or production claims. `PRODUCT.md` records the checked sources and limits; `$neohaskell-positioning` owns the reusable principles.

## Source excerpt, 11 November 2026

The owner identified missing code snippets, accepted the checkpoint → compare → build → show workflow, and requested implementation after committing the current project. This extends the earlier animation-only homepage scope with one static source excerpt. Keep the opening unchanged. In “Your intent,” pair a plain-language Counter rule and two outcomes with the exact decision body from the published source revision. Identify and link the Counter source in the main paragraph, and preserve 16px code in both themes. The code frame scrolls horizontally on narrow phones with a visible cue and keyboard access. This is source evidence within the existing product section, not an interactive lesson or another animation.

## Scope correction and handoff, 11 November 2026

The owner clarified: “i actually meant the design of the homepage, not all of that, but okay, leave it there. I want u to check the homepages and improve the design, applying unslop too. Actually start a new agent tab in orca and we will continue there”.

Keep the resource, setup, and navigation additions committed in `62acd43`. The next task compares the rendered NeoHaskell and Ruby homepages and implements visual design improvements with Unslop: spacing, hierarchy, typography, proportions, alignment, content density, and desktop/mobile composition. Preserve the established color identity, original logo, AI-first positioning, and factual source evidence. This correction supersedes the previous comparison's emphasis on documentation coverage, onboarding completeness, ecosystem maturity, and support policies; those gaps do not define this visual task. Continue in the new Orca agent tab under the existing checkpoint → compare → build → show workflow.

## Visual implementation, 11 November 2026

Checkpoint `784ffa55fd4db79d7783ebbef9a1fe4e12ff28ba`; same checkout. Live desktop and phone comparisons with Ruby informed composition and density, not a change of brand or content scope. Unslop direction: an AI-first language for people building with agents; precise and approachable; an open developer workshop; the model and real source are the two detailed visual moments; distinct domain shapes and pixel display emphasis retain the signature.

The headline stays above the full-width model. Its explanation and action group now share a desktop row, bringing the model higher. Navigation aligns right; model and page content share edges. The real-code section uses a wider source column, quieter framing, and ruled outcome rows. The tools section uses the full width beneath its introduction instead of leaving the left column empty. Community actions use the established display face. Phone layouts keep 18px prose, 16px code, a visible code-scroll cue, and 44px controls.

This supersedes earlier homepage measurements for model overhang, equal product columns, stacked evidence items, and primary-action scale. It preserves section order, factual copy, source excerpts, domain distinctions, and animation behavior. `DESIGN.md` records the resulting measurements. Review and check evidence belongs in `.impeccable/reviews/homepage-visual-2026-11-11/`; the implementation and reviewer verdict are separate from owner acceptance.

## Explicit Unslop pass, 11 November 2026

The owner's next request was “please $unslop the homepage”. Checkpoint `b0a168263ed6bf913d427d76bcaa72b3df71bf80` preserves the preceding implementation. This is polish within the same world: an AI-first language for building understandable applications; precise, calm, approachable; a developer workshop; model and source as the detailed moments; existing domain shapes and pixel lettering as the signature.

The audit found light visual clutter in repeated accent links, a decorative navigation marker, inconsistent and redundant action arrows, supporting-heading punctuation, and uneven community-row padding. The implementation quiets these elements, keeps “you build” together on phones, and uses the existing off-white ink for the dark primary button. Light mode retains its violet action. Secondary links remain underlined, while main onward links keep the accent. This supersedes earlier documentation of a cyan dark primary action, navigation square, and moving hover arrows. Source, model geometry, animation, section order, factual content, and the accepted palette remain intact.


## Auxiliary text correction, 11 November 2026

The owner rejected the remaining supporting text: “We don't write footnotes, ever.” This includes reassurance under actions, captions around the code and model, language labels, metadata bars, and descriptions that repeat a link’s destination. Middle dots (U+00B7), em dashes (U+2014), and emojis are forbidden. `AGENTS.md` holds the repository-wide rule.

Checkpoint `e727d07e01f26e0966ad069060b17c5003f9d007` preserves the previous pass. Remove auxiliary text while retaining main prose, meaningful domain labels, direct actions, accessible names, and exact source. Evidence links belong inline in the paragraphs they support. The code has native horizontal scrolling instead of an instruction sentence. This correction supersedes earlier instructions for visible provenance labels, illustrative captions, action helpers, and version/date rows. Previous reviewer approval is not owner acceptance.


## Stronger Unslop pass, 11 November 2026

The owner accepted the auxiliary-text correction with “good” and requested “now $unslop harder”. Checkpoint `9e5be672627c55c0a1cb2e0c2dc777105161861d` records the accepted baseline. Preserve the strict copy rule and the established brand while removing repeated visual scaffolding.

The model now sits directly on the page, with vivid violet inside the recorded event. Domain labels use sentence case. The source loses its rounded frame and uses a quiet desktop separator, which disappears on phones. The hero action fits its label. Single coherent headings replace the repeated two-tone pairs. The tools section pairs its introduction with stacked articles, and community actions name their destinations directly. All substantive claims, source evidence, section order, domain distinctions, and animation behavior remain. This supersedes the previous enclosing violet field, fixed-width action, rounded source frame, and repeated equal-column tools layout.


## Decision example correction, 11 November 2026

The owner supplied a replacement `decide cmd _ _` example and requested the event be extracted into a `let` binding inside `else`. Use `cmd.counterId`, reject non-positive amounts, and pass the bound event to `Decider.acceptExisting`. The displayed example and outcomes no longer test whether the counter exists.

This supersedes the earlier exact-upstream-excerpt requirement for this example. Describe it as a simplified Counter decision in the main prose and retain the upstream basis as an inline link. Record adaptation details in `src/examples/README.md`; do not add captions or footnotes. Keep the existing composition, highlighting, readable type, and keyboard scrolling.

The owner clarified the binding syntax: always use a `do` block with a `let` statement, never a `let ... in` expression. The homepage uses `else do`, followed by the event binding and `Decider.acceptExisting [event]`. This reusable convention is recorded in `AGENTS.md`.

## Counter HTTP service examples, 11 November 2026

The owner requested the minimum developer-defined code for the Counter HTTP service in a couple of sections: command datatype, decision, event payload datatype, entity, update and query. Omit deriving, type instances, the event sum and other boilerplate. This supersedes the earlier single-excerpt scope while preserving the accepted decision and the restriction on auxiliary text.

Checkpoint `47f35b3a26cfccf23367b1374e002b72b2b8fad6` preserves the approved decision syntax. The first section pairs the command and event payload with `decide`; the second pairs the entity and increment update with the query projection. Both start with a heading and main prose, including actual HTTP routes and inline source links. The examples cover incrementing an existing counter in the starter, with omitted wiring and adaptations recorded in `src/examples/README.md`. Code retains 16px type, native scrolling and keyboard access. There are no snippet captions, language badges, setup instructions or extra interactions. The hero and model retain their accepted design.

The owner subsequently requested a single `CounterIncremented` datatype and constructor instead of the outer constructor and qualified `CounterIncremented.Event` payload. The decision constructs the record directly; `update event counter` consumes it without an outer pattern. Keep the `else do` binding and existing field names. This supersedes the earlier nested event representation in the homepage examples.

## Semantic diagram colors, 13 November 2026

The owner's diagram-color instruction applies to this surface as well as documentation. Event slips and ledger entries now use orange, the stock answer uses cyan-leaning green, and external API/network integration labels use neutral slate. These roles come from src/styles/diagram-colors.css. The previous violet event fill is superseded; composition, source examples, copy, the original logo, and overall brand accents remain. The shared verification is under `.impeccable/reviews/diagram-language-2026-11-13/`.
