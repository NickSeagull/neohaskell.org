# Adversarial documentation review, round 1

Verdict: revise before implementation. The direction is sound; three editorial decisions remain insufficiently specified. These require changes to the research and briefs, not completed tutorials or new widgets.

Reviewed on 12 November 2026 against checkpoint `67cc7d513f77feac182c2304a163a93616a8ab27`.

## Evidence and scope

I read the proposal, PRODUCT.md, GLOSSARY.md, the accepted documentation brief and state, relevant DESIGN.md sections, the current Starlight configuration, and the fresh capture manifest. I inspected the NeoHaskell desktop, Svelte phone, and React example captures. I applied the repository's Unslop and documentation continuity guidance.

I independently opened the linked [2026 language survey data](https://survey.stackoverflow.co/2026/technology/data/da-language), [2026 framework survey data](https://survey.stackoverflow.co/2026/technology/data/da-webframe), and [Rust survey report](https://blog.rust-lang.org/2026/03/02/2025-State-Of-Rust-Survey-results/). The quoted admiration figures match the primary tables. The proposal correctly avoids turning technology sentiment into documentation popularity. This is a defensible qualitative comparison, not evidence that these are objectively the most loved documentation sites. Do not strengthen that claim in the presentation.

The visual direction respects the accepted guide format. The Svelte phone capture supports the stated switching cost, and the React example capture supports caution about assuming embedded runtime reliability. Static-first examples, ordinary scrolling, existing type sizes, and no browser runtime are appropriate for this task. I did not perform a complete accessibility audit or execute reference-site widgets.

## Required revisions

1. **Assign ownership of the first runnable result.** The setup page remains named "Set up your agent" and its brief only adds environment diagnostics and alternatives. The next tutorial page models behavior, and the implementation page jumps to a reviewed change. PRODUCT.md explicitly records the unfilled empty-machine-to-running-app walkthrough. This map risks preserving that gap indefinitely while looking complete. Specify that `/getting-started/` owns toolchain prerequisites, skills versus runtime installation, project creation, running the initial app, a checked first response, and recovery. Keep its current verified content now and describe this future coverage in its planning paragraph. The implementation chapter should explicitly start from that checked project. No installation work or invented commands are required in this iteration.

2. **Resolve page overlap and name each handoff.** `/learn/`, `/tutorial/`, and `/concepts/event-modeling/` currently all explain modeling the same shop behavior. Setup, the implementation chapter, and `/guides/ai-workflow/` all potentially own the first agent task. Define the unique reader question and deliverable of each in the research and then preserve those boundaries in the short briefs. A workable distinction is recognition of the four concepts, producing this tutorial's concrete specification, general modeling tradeoffs, environment readiness, implementing the supplied specification, and a reusable agent review/recovery procedure. Name the links between these pages. Also locate the novice's minimum syntax help: link directly from the implementation brief to the relevant language reference instead of implying a prerequisite Haskell course. This is information architecture, not a demand for more pages.

3. **Make the scaffold's discovery policy concrete.** Excluding new briefs from search is sensible, but the map currently promises working discovery while most topic destinations will intentionally have no search results. State that `/docs/` is the browseable planning map, that its labels distinguish existing guides from plans in ordinary prose, and how a search user can reach existing upstream answers through `/resources/`. Exclude the final planning paragraphs on the three substantive pages from Pagefind as well, so search does not advertise future coverage as an answer. Decide whether the planning map itself is indexed and explain why. Verify these choices with representative topic searches after implementation. Do not add badges, an assistant, a second search system, or fake result content.

## Future content requirements, not blockers for this scaffold

The tutorial should ultimately state the size of its outcome: a backend behavior, an API, or an end-user application. The current four chapters do not establish a frontend journey, so avoid presenting them as a complete production application course. Deployment, migrations, concurrent commands, identity, external effects, and version compatibility need source-backed treatment when those pages are authored. They do not justify expanding today's 24-page map into speculative stubs.

The localization requirement is appropriate, but language parity is not evidence of translation quality. Keep the existing eight locales and automated freshness checks, and record native editorial review as future work. Maintain one canonical answer with links, rather than translating duplicated explanations across overlapping pages.

Preserve a small durable audit manifest or observation record beside the research. The `/tmp` captures are useful review evidence but will not reliably survive checkout or cleanup. This is an evidence-maintenance recommendation; committing all screenshots is unnecessary.

## Approval condition

Revise the three decisions above and request a second review of the proposal before implementation. I will evaluate the actual revision, not infer that the intended fixes happened. The current research does not need a broader popularity survey, more frameworks, a different visual identity, or functioning widgets to satisfy this request.
