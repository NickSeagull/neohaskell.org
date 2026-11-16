# What to take from edu-hosq

Inspected 16 November 2026. edu-hosq HEAD was `55e05fa6be1e4be63ba229349958233cd3e821ba`; NeoHaskell's starting HEAD was `6fb2befd4de27cee53a322225ebcd92d3fff3259`. This is source inspection of instructions and design records, not execution or validation of edu-hosq's review pipeline. Paths below are relative to the named repository.

## Structure

edu-hosq keeps discoverable skills flat under `.agents/skills/`. Each `SKILL.md` has a name and invocation description, then a short procedure or review contract. Detailed references, examples, assets, instruments and instrument tests live beside their owning skill. `.claude/skills` points to the canonical skills rather than carrying a second copy. Source: edu-hosq `AGENTS.md`.

Its design work has four responsibilities:

| Responsibility | Owner in edu-hosq | What it provides |
| --- | --- | --- |
| Brand intent | `.agents/skills/brand-identity/SKILL.md` | Principles, typography, source assets, reference compositions and recipes for six page archetypes. |
| Implemented contracts | `.agents/skills/maintain-moodle-design/SKILL.md` | SCSS authority, an annotated generated token reference, component rules, contextual deviations and ownership of recurring defect classes. |
| Review coordination | `.agents/skills/design-council-loop/SKILL.md` | Selects applicable critiques, gathers matched base/candidate evidence, merges findings by cause and returns one verdict. |
| Evidence and delivery | `.agents/skills/theme-browser/SKILL.md`, `.agents/skills/deliver-task/SKILL.md` | Browser fixtures and capture machinery, revision-bound checks, final independent review and separately controlled publication. |

The council is a logical group of review capabilities. It explicitly says the lenses are not independent votes and delegation needs task authority. Fifteen skill files do not imply fifteen agents per change.

## What the critiques look for

Each name below resolves to edu-hosq `.agents/skills/<name>/SKILL.md`.

| Critiques | Actual questions |
| --- | --- |
| `criticize-art-direction`, `criticize-visual-composition`, `criticize-typography` | What receives attention first? Does the whole page have hierarchy and rhythm? Do edges, widths, spacing and type roles agree? Is long Cyrillic content readable on phones? |
| `criticize-colour-science`, `criticize-iconography`, `criticize-imagery` | Do actual painted colors and contrast fit the brand? Do glyphs retain consistent meaning and geometry? Do image crops preserve their subject and support the heading? |
| `criticize-motion`, `criticize-accessibility`, `criticize-usability` | Are states distinguishable, controls reachable and feedback understandable? Can someone complete the task? Does reduced motion preserve meaning? Keyboard findings are advisory under hosq's specific acceptance policy. |
| `criticize-learning-ux`, `criticize-russian-ux-writing`, `criticize-data-visualization` | Can a student find work, understand progress and interpret labels? Do errors suggest a useful action? Can numbers be compared without mental reconstruction? |
| `criticize-design-system`, `criticize-css-architecture`, `criticize-design-qa` | Who owns each rule? Which declaration actually wins? Is a repeated patch really a component defect? Can the measurement detect a deliberately introduced failure? |

Most critique files follow the same compact contract: shared context, review criteria, numbered observations, rejection conditions, and a specified return format. Their methods include both visual judgment and measurements. A numerical pass cannot overrule a visible defect.

The shared findings register records the component, screen, width, engine, state, revision, observation, user impact, cause or hypothesis, other occurrences, correction and status. Reviewers merge duplicate causes while retaining every affected screen. Sources: edu-hosq `.agents/skills/design-council-loop/references/review-context.md` and `references/acceptance.md`.

## Transfer the method, derive the rules here

Keep one owner for each decision, small discoverable entry points, references loaded by task, repeatable comparison states, and findings tied to reader impact. Particularly useful: a rule can itself be wrong. The art-direction skill explicitly allows rejecting a compliant change that looks worse, with a proposed amendment to the rule.

hosq's cream ground, Cera Pro, coral signal, pill controls, warm-gray restrictions, Moodle cascade remedies, Russian wording and student journeys belong to its product. Its numeric scoring thresholds and keyboard-advisory policy are also project decisions, not universal design principles. Sources: edu-hosq `.agents/skills/brand-identity/references/principles.md`, `.agents/skills/maintain-moodle-design/references/current-implementation.md`, and `.agents/skills/design-council-loop/references/acceptance.md`.

For NeoHaskell, begin with one local visual-language entry point and a few task-selected reference sections. Split a critique into its own skill when it has an independently useful invocation or substantial specialist tooling. Copying all fifteen entries now would add process before we have calibrated our own visual judgments.

## What NeoHaskell still needs

NeoHaskell already records identity, surface composition and domain meaning in `DESIGN.md`, `.impeccable/surfaces/src-pages-index-astro.md`, `.impeccable/surfaces/src-components-learn-guidedlesson-astro.md`, `PRODUCT.md`, `GLOSSARY.md` and `src/styles/diagram-colors.css`. The missing connection is a repeatable way to develop and evaluate the visual grammar across both surfaces.

Use three explicit statuses: owner-accepted intent, observed implementation, and proposed direction. A CSS value is evidence of implementation; it does not establish that the owner wants every future component to copy it. A favorable reviewer verdict is also distinct from owner acceptance.

Calibrate the next direction on a homepage benefit section and a documentation explanation. Give them the same semantic objects but judge different jobs: the homepage makes the developer's gain apparent; the article makes a relationship or behavior understandable. Evaluate readable domain content, connector meaning, boundaries, hierarchy, density, mobile behavior and both themes together. Preserve variation in composition while making repeated meanings recognizable.

The records themselves need precedence checks. At the inspected revision, `DESIGN.md`'s Colors and Theme Pair sections still prescribe violet event records; the homepage surface's 13 November correction explicitly supersedes that with orange through `src/styles/diagram-colors.css`. `DESIGN.md` also describes a 16rem topic rail while the documentation surface and `src/styles/docs.css` specify 18rem. These are documentation conflicts to reconcile, not competing aesthetic options to encode as simultaneous rules.

The first review should therefore assess positive identity as well as defects: which arrangement makes NeoHaskell's control, explicit behavior and recorded history recognizable? Preserve successful treatments as scoped examples with the reason they work. Promote a proposed rule after it survives use on both surfaces, and record owner acceptance only when the owner actually gives it.
