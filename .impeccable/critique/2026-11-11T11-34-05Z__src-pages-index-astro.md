---
target: "Homepage and guides: baseline 68a9493 plus bounded improvements"
total_score: 22
max_score: 36
na_heuristics: 9
p0_count: 0
p1_count: 2
target_identity: "file:/Users/nick/Work/neohaskell.org/src/pages/index.astro"
target_fingerprint: "sha256:08a2153bc392d00c788b463576ff74802cd461a331e9475eaef60fc8aa533347"
target_path: /Users/nick/Work/neohaskell.org/src/pages/index.astro
timestamp: 2026-11-11T11-34-05Z
slug: src-pages-index-astro
---
# Ruby comparison and bounded improvements

Method: dual-agent (A: `/root/ruby_gap_critical` · B: `/root/ruby_gap_browser`). Both assessed checkpoint `68a9493` independently. Assessment A finished before the parent read B's detector findings. Date: 11 November 2026. Target: `src/pages/index.astro`, the concepts/setup journey, and current Ruby language pages.

## Verdict

NeoHaskell has a distinct identity, real source evidence, tests, dated releases, and community links. Its largest deficit is the practical journey after the introduction. Ruby supplies clear routes to installation, an executable first success, language explanation, reference, ecosystem tools, and ongoing support. NeoHaskell's visitor still has to assemble parts of that journey from source repositories.

The independent baseline score is **22/36**. This is a reviewer judgment about the pre-change website journey, not an accessibility certification or a post-change score. Runtime error recovery was not applicable. No framework application was executed in this pass.

## Five priorities and their disposition

1. **P1 — Incomplete first run.** The setup guide called the upstream root README “environment instructions,” but that README has no setup steps. It then assumed an application repository existed. Ruby's installation guide and twenty-minute introduction give a concrete starting point and observable result. **Corrected:** the misleading handoff, named prerequisites, separate toolchain/agent-skills roles, and links to actual project creation and starter instructions. **Still open:** a verified complete route from an empty machine/directory to a running application and passing check. The starter README's clone placeholder is a real reason not to paste its instructions as a finished local tutorial.
2. **P1 — No newcomer bridge from concepts to language.** Two local guides taught the model and agent setup, but did not explain the actual decision excerpt. Ruby separates a language introduction from versioned reference. Upstream NeoHaskell syntax, project, testing, storage, and authorization guidance exists; it was hidden from local navigation. **Corrected:** added `/resources/`, source-specific descriptions, native sidebar/search access, and links from the homepage. **Still open:** a local “Read a decision” explanation and a cohesive, verified intent → agent change → test → observed result example. A browser playground requires a real runtime, not a simulated button.
3. **P2 — Unclear application boundaries.** The illustrative shop, real Counter starter, and agent instructions could be mistaken for equivalent demonstrations. **Corrected:** resource copy anchors the implemented example in Counter, explains its in-memory default, distinguishes event/query persistence, and points to authorization guidance. These statements were checked against source. **Still open:** demonstrated supported application/deployment scope, compatibility assurances, and a first-hand worked application. Ruby's package ecosystem, testimonials, and adoption cannot be supplied by inventing homepage claims.
4. **P2 — Useful destinations are buried.** The baseline mobile homepage put the code at y=1807px, the starter link at y=3741px, and Discord at y=4298px. The existing code anchor had no incoming navigation link, and setup had no direct homepage link. Ruby exposes task routes near the entrance. **Corrected:** “See the code” beside the primary learning action, a direct setup action in the evidence section, Resources in the wide masthead/footer and native docs menu. The concepts-first primary action, opening composition, palette, and source excerpt remain intact.
5. **P2 — Activity lacks interpretation and help routing.** Dated releases and Discord were already present. Missing were a useful release index, what the release meant, and paths for reference, help, issues, contributions, and license. **Corrected:** resource directory, distinct framework/skills release histories, scoped summary of framework 0.17.1, community and public-issue routes, contribution guidance, and source license. **Still open:** product-owned maintenance/support/security policies and commitments. No such policy was invented.

## Evidence and judgment

The biggest source defect was the missing information behind a working URL, which a link-status checker cannot detect. Both independent assessments found the incomplete first-run path, missing reference navigation, buried destinations, and weak practical-help routing. B additionally identified the unconnected shop/Counter/agent examples as a credibility gap. A distinguished application suitability from website presentation. These converge on a connected practical journey rather than a visual redesign.

Strengths to preserve: the meaningful command/decision/event/query illustration; specific source and test evidence; conventional, readable mobile guides. The novice loses confidence at setup, the experienced evaluator lacks fast reference/scope answers, and the mobile visitor pays extra scrolling/navigation cost. Cognitive load is low within concepts and moderate across setup because connecting steps are missing.

| Heuristic | Baseline score |
| --- | ---: |
| Status visibility | 3/4 |
| Real-world match | 2/4 |
| Control and freedom | 3/4 |
| Consistency | 3/4 |
| Error prevention | 2/4 |
| Recognition over recall | 2/4 |
| Efficiency | 2/4 |
| Aesthetic/minimal design | 3/4 |
| Runtime error recovery | n/a |
| Help and documentation | 2/4 |

Ruby is not a perfect visual template: the assessments observed loading/animation limitations, dense navigation, small homepage code, and a narrow-screen downloads overflow in A's broader page sample. Initial Ruby hero screenshots were not treated as proof of missing content; settled captures are available. Different sampled routes explain the agents' differing overflow observations.

Primary reference pages: [Ruby homepage](https://www.ruby-lang.org/en/), [installation](https://www.ruby-lang.org/en/documentation/installation/), [quickstart](https://www.ruby-lang.org/en/documentation/quickstart/), [documentation](https://www.ruby-lang.org/en/documentation/), [libraries](https://www.ruby-lang.org/en/libraries/), [community](https://www.ruby-lang.org/en/community/), [maintenance](https://www.ruby-lang.org/en/downloads/branches/), and [security](https://www.ruby-lang.org/en/security/).

NeoHaskell source destinations are pinned to `cacc8069070721539ae0aac53286ce9492e906a5`. Actual files and the 0.17.1 GitHub release API were inspected. `PRODUCT.md` records the newly used facts and their limits. Full independent assessments are archived beside this report.

## Implementation direction and verification

Unslop mode: preserve and refine. Product: an AI-first language for understandable applications. Character: explicit, practical, playful. World: the accepted developer workshop. Moments: opening event model and real decision source. Signature: the existing model vocabulary and shapes. Spacing/type/icons reuse existing tokens, with a 44px code anchor and 20px arrow; copy/navigation changes do the work. Color, visuals, motion, and example implementations remain unchanged.

Baseline CLI detector: zero findings. Browser detector: 20 instances of `ai-color-palette` on the homepage (approved brand and syntax colors, not 20 independent defects), zero on concepts, one setup paragraph line-length signal. No palette rewrite was warranted. After changes, the required scan of changed markup also returned zero findings.

Build and all 12 existing tests passed. Browser checks covered home, concepts, setup, and resources at 320, 390, 1024, and 1440px in both themes: 32 passing visits, no document overflow or page errors, and preserved theme choice. Code-anchor navigation, the direct setup route, and the resources route passed. A fresh finish reviewer returned **keep**, with no material corrections. This is review, not new user acceptance.

Raw captures, checks, and source retrievals remain local under `/tmp/neohaskell-ruby-gap-review/`. Desktop and mobile screenshots support visual review; they do not prove a NeoHaskell runtime or learning outcome. Existing i18n/404 content notices remain in the successful static build.

Questions skipped: the user's standing checkpoint → compare → build → show instruction authorizes choosing and implementing sensible changes. The first-run/runtime and deeper teaching gaps are recorded explicitly rather than declared resolved.
