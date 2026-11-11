# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro with Starlight is the website framework. The repository now contains a custom homepage and static documentation entry pages. GitHub Pages is the configured hosting target; deployment has not been run from this checkout.

## Users

The primary user is a person using AI agents to create an application. They want to build quickly and avoid accidental technical errors. They should not need senior-level knowledge of software architecture or infrastructure to succeed with NeoHaskell.

Prior Haskell expertise is not an established audience requirement. Do not assume that visitors already understand event sourcing or Event Modeling.

## Product Purpose

neohaskell.org introduces NeoHaskell as an **AI-first programming language**. It should help people build applications with AI agents while keeping the intended behavior understandable, changes traceable, and technical checks available. The language's framework and tooling supply a common technical structure.

The homepage introduces NeoHaskell and leads visitors into documentation. It has one initial animation using the selected Event ledger visual language and an ecommerce example, followed by one short source excerpt that makes the language inspectable. Full concept explanations and learning material belong on documentation pages; the homepage does not contain an interactive explainer or step-by-step lesson.

In the documentation, visitors learn commands, decisions, events, and queries before proceeding to installation, agent setup, and building with an AI agent. Keep the introduction approachable and grounded in a small online shop; do not require installation, agent access, or prior Haskell knowledge to begin learning. The eventual outcome remains building an application with an AI agent, guided by a model the visitor understands.

Documentation follows conventional guide pages inspired by Stripe Docs: topic navigation, a continuous article, inline code and comparison tables, and an on-page contents outline. The owner rejected the previous guided content and widget on 2026-11-09. That decision supersedes section snapping, viewport-height sections, vertical centering, scroll-linked examples, and persistent teaching companions. Keep the established NeoHaskell identity, 18px reading text, and at least 16px essential example text. Examples support the article and must not turn into a separate tool the reader has to operate. Native scrolling, deep links, search, code copying, and keyboard/mobile navigation support reading.

## Positioning

The owner confirmed on 2026-11-10: “I do not want to sell NeoHaskell as a dialect of Haskell, but rather to be an AI-first language.” This supersedes Haskell-first product framing. The reusable principles live in `$neohaskell-positioning`, referenced by `AGENTS.md`.

Lead with building applications with an AI agent and understanding the result. Explain the supporting mechanisms: explicit application behavior, pure decision logic, recorded history, bounded changes, and checks against intended behavior. Haskell remains accurate technical context where relevant, rather than the opening identity or implied prerequisite.

Ease of use, fast application development, and preventing accidental technical errors are the owner-confirmed product priorities. Explain those priorities through the language and framework's mechanisms. Any absolute guarantee of error-free software or quantified productivity improvement requires separate evidence.

## Operating Context

Users work with AI agents to create applications. NeoHaskell is intended to let them concentrate on what an application should do while the language and framework supply technical structure. Event Modeling is central to expressing that behavior; event sourcing supplies its recorded history.

Use **commands, decisions, events, and queries** to explain application behavior, following [GLOSSARY.md](GLOSSARY.md). The owner confirmed this vocabulary on 2026-11-06: command replaces request, decision replaces rule, and query replaces view. The selected Event ledger diagram keeps recorded events separate from query results.

The existing public site offers paths to the GitHub organization and Discord community. The local onboarding flow teaches the core concepts first, then introduces environment preparation, agent-skills installation, a copyable first task, and checking expected behavior. The skills command and supported agents were checked against the upstream skills repository on 2026-11-09; the guide links to its source. Framework environment instructions remain at the upstream project. Recheck version-dependent setup details before publication.

## Capabilities and Constraints

- Introduce NeoHaskell as an AI-first language; describe its Event Modeling-centered framework and tooling as supporting mechanisms.
- Treat pure application logic and preselected technical decisions as central to the product's intended ease of use.
- Describe implemented capabilities using verified examples or documentation; the owner's product direction alone does not establish release readiness.
- The current site distinguishes technical checks from determining whether application behavior matches the business's intent. Preserve that distinction when explaining error prevention.
- No website scaffold, deployment configuration, or local asset library existed when this product record was initialized. Inspect any subsequently supplied implementation before making design or migration decisions.

## Brand Commitments

Preserve the name **NeoHaskell**, the domain **neohaskell.org**, and the existing [NeoHaskell logo](https://neohaskell.org/img/logo.svg). Preserve the accepted workshop palette, typography, spacing, and single opening diagram. Write approachable, specific product copy that connects AI-assisted building with understandable behavior and inspectable evidence.

## Evidence on Hand

- Owner interview, 2026-11-06: confirms the primary AI-agent user, Haskell foundation, Event Modeling focus, pure application logic, and the aim of removing technical decisions and accidental errors.
- [Existing public website](https://neohaskell.org/), reviewed 2026-11-06: provides conceptual explanations and illustrative account-history examples. It is supporting evidence, not a replacement for the owner's confirmed audience and purpose.
- [NeoHaskell GitHub organization](https://github.com/neohaskell), reviewed 2026-11-06: provides technical heritage and repository links. Its dialect framing is not the marketing authority after the owner's 2026-11-10 correction. The specific artifacts below were subsequently inspected.
- No customer testimonials, production case studies, comparative benchmarks, or measured error-reduction claims were verified during init. Obtain evidence before using them.

## Product Principles

1. Help the person understand and model application behavior before building with AI agents.
2. Make useful application development accessible without requiring senior architectural or infrastructure expertise.
3. Keep Event Modeling and pure domain behavior central to explaining the product.
4. Reduce avoidable technical decisions and opportunities for accidental mistakes.
5. Make claims concrete and distinguish intended benefits from demonstrated capabilities.

## Homepage evidence and positioning update : 10 November 2026

The owner authorized implementing the Ruby comparison's spacing, content, and readability recommendations. The homepage keeps the existing concepts-first journey and one ecommerce animation, with clearer prerequisite text and a compact development/community section. The current upstream README explicitly states that NeoHaskell is under active development; the public GitHub repository is not archived. The existing public site's Discord invite `wDj3UYzec8` was checked through Discord's invite endpoint and resolves to the NeoHaskell community. These support the homepage's status and contact routes, not production-readiness claims.

The owner accepted the visual refinement (“much better now”) and requested the missing evidence and AI-first language positioning. Copy now connects AI-assisted building to the public site's emphasis on understandable behavior, recorded history, and reviewing changes. The existing illustration remains conceptual, not a product execution recording.

Primary sources checked on 2026-11-10:

- [Agent skills v1.1.0](https://github.com/neohaskell/skills/releases/tag/v1.1.0), published 2026-11-06; the [feature workflow at revision 0ff0872](https://github.com/neohaskell/skills/blob/0ff0872d554e79d955f4c92f9b905056b908e9ae/skills/neohaskell-feature-pipeline/SKILL.md) guides backend, API/client, frontend, and verification work. The repository README names Claude Code and Codex. These establish published instructions, not measured delivery performance.
- [Counter application starter at revision cacc806](https://github.com/neohaskell/NeoHaskell/tree/cacc8069070721539ae0aac53286ce9492e906a5/neo/starter) contains commands, events, a query, and an HTTP workflow. Its README provides execution instructions. We inspected the source; we did not execute the NeoHaskell application during this homepage change.
- [Increment decision tests](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/neo/starter/tests/Decider/Counter/IncrementCounterSpec.hs) specify a missing counter, a non-positive amount (with a zero input), and an accepted positive amount. The [replay property](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/neo/starter/tests/Property/CounterReplaySpec.hs) checks that the value equals the total of replayed increments. These are inspectable test definitions; their upstream suite was not run here.
- [Neo CLI and framework 0.17.1](https://github.com/neohaskell/NeoHaskell/releases/tag/neo-v0.17.1), published 2026-11-06, confirms a dated release and links its change. GitHub's release API reports it as published, non-draft, and not a prerelease. It is distinct from the agent-skills version and is not a production-readiness assertion.

No testimonials, adoption counts, or productivity benchmarks have been verified. Keep proof specific to the capability and artifact it supports.

## Homepage source evidence : 11 November 2026

Following the Ruby comparison, the owner requested a checkpoint commit and implementation. The homepage now displays the unchanged 14-line Counter decision body from the inspected `cacc806` revision, with its rule and accepted/rejected outcomes in plain language. The adjacent paragraph identifies and links the Counter starter. The code frame has no caption or language badge. The shop diagram remains an illustrative example. Imports, types, and registration remain in the linked full source. The example is static source evidence; it is not a live execution or a claim that its upstream tests ran here. Source provenance and the distributed Apache 2.0 license are recorded in `src/examples/README.md`.

## Resource discovery : 11 November 2026

A fresh Ruby comparison at checkpoint `68a9493` found an incomplete first-run journey and useful resources missing from local navigation. `/resources/` now links to the actual CLI prerequisites, project creation guidance, syntax, application topics, testing, storage, authorization, releases, license, and contribution guidance. These destinations were read at the same `cacc806` source revision. The general upstream README contains no setup instructions, so the setup guide now links to the specific CLI and starter instructions and distinguishes agent skills from the application toolchain.

The pinned starter's `src/App.hs` configures `SimpleEventStore` with `persistent = False`; its storage guide confirms events disappear at process exit and distinguishes event and query persistence. The resources page explains these actual defaults. The GitHub release API for `neo-v0.17.1` confirms the 6 November release adds owned file storage for generated documents. The new homepage summary describes that scoped change without claiming a production guarantee.

The homepage retains the source section fragment ID, a direct agent-setup link, and resource discovery. The owner’s later content-restraint correction removed the auxiliary hero link to the source section. The docs introduction and metadata use AI-first positioning. A verified empty-machine-to-running-app walkthrough, newcomer explanation of the decision syntax, and executed intent-to-agent-to-result demonstration remain gaps. No runtime installation, generated application, adoption claim, or support commitment was verified in this website pass.
