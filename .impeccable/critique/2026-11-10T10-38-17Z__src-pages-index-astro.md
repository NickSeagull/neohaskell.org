---
target: "NeoHaskell homepage compared with Ruby: spacing and content; colors excluded"
total_score: 22
max_score: 28
na_heuristics: 5,7,9
p0_count: 0
p1_count: 1
target_identity: "file:/Users/nick/Work/neohaskell.org/src/pages/index.astro"
target_fingerprint: "sha256:86a4af77296b95a5e9a3792c45830fd063cdc9cafa36f4734988ec8853653f5e"
target_path: /Users/nick/Work/neohaskell.org/src/pages/index.astro
timestamp: 2026-11-10T10-38-17Z
slug: src-pages-index-astro
closed: true
---
Method: dual-agent (A: /root/design_comparison · B: /root/browser_evidence)

# NeoHaskell compared with Ruby: spacing, content, and clarity

Reviewed 10 November 2026. Target: `src/pages/index.astro`, its EventLedger component and homepage CSS, rendered by the existing local preview at http://127.0.0.1:4321/. Reference: https://www.ruby-lang.org/en/. The public neohaskell.org page is older than the local design and was excluded from the main comparison. Both reviewers inspected 1440×1000 desktop and 390×844 mobile. Colors are outside scope. No implementation changes were made.

## Overall judgment

Keep the current identity, concise homepage, full-width ecommerce animation and documentation-first action. Improve spacing hierarchy, alignment and reading comfort, then make the lower content answer concrete visitor questions. Ruby's useful precedent is the sequence from product identity through demonstration and reasons to believe to community and current activity. Its much greater length, animated decoration, installation-first priority and multiple examples are not requirements for NeoHaskell.

## Design specificity and strengths

The event ledger, separate command/decision/event/query forms, construction lines and restrained pixel accent are authored for NeoHaskell. The lower copy is less specific than the visual design. Three strengths are the tangible shop example, one clear primary learning action, and deliberate mobile rearrangement of the diagram. Neither requested local viewport showed clipping or document-level horizontal overflow. Reduced motion settles to the completed model. The primary CTA successfully opens Core concepts.

## Priority recommendations

1. **P2 — Establish a clearer spacing hierarchy and one lower-section grid.** The desktop CTA-to-model gap is 30px; model-to-section-rule is 34px plus 30px padding before the heading, giving roughly 65px total separation. The lower intro paragraph begins at x828 while the second benefit begins at x645, a 183px shift from mismatched grids. Align the intro and benefits on the same columns. As proposed starting values, increase header-to-headline space from 24px toward 40–48px, use roughly 80–96px total model-to-next-heading separation, and keep related content groups at 24–32px. Mobile major transitions can remain around 40–56px; avoid uniformly inflating a page that already has a 564px-tall model. These are design recommendations, not measurements copied from Ruby. Suggested command: `$impeccable layout`.

2. **P2 — Give the lower content distinct, concrete purposes.** The caption's technical structure, the intro's structure to grow into, and the foundation already in place repeat the same promise. Use the lower introduction to explain what the builder specifies, what NeoHaskell supplies and what the builder checks. Then give each benefit one mechanism and one understandable consequence. Possible heading directions are “Make behavior explicit” and “Start with architectural decisions made.” Preserve the Haskell-based language and framework identity, the AI-builder audience and canonical vocabulary. Keep teaching detail and code lessons in documentation. Suggested command: `$impeccable clarify`.

3. **P2 — Raise small text and mobile control sizes.** Essential diagram annotations are roughly 12–15px rendered on desktop and 13px on mobile, although main names are readable. Mobile benefits are 15px and navigation is 12px. Aim for 16px rendered essential diagram text, 17–18px supporting prose and 14–16px navigation; simplify redundant annotations if needed to preserve space. Increase the 30×40px mobile theme target toward 44×44px and enlarge the footer link hit areas. Give the mobile headline phrase-aware breaks so “Clear intent” stays together. These are readability and comfort findings, not assertions of WCAG failure. Suggested command: `$impeccable adapt`.

4. **P1 — Add compact, factual reassurance.** Ruby's release information, attributed people and community provide evidence that the project exists beyond its headline. NeoHaskell currently ends with only a GitHub link labeled “Built in the open.” Add a compact statement of current project stage, one dated development source and a clearly labeled community route after verifying their facts and destinations. A small maintained area is sufficient; a news feed or testimonial wall is unnecessary. Do not infer release readiness from owner positioning or invent adoption metrics. Suggested command: `$impeccable clarify`.

5. **P2 — Make the next step and its prerequisites explicit.** “Documentation,” “Learn the concepts” and “Get to know NeoHaskell” all lead to `/learn/`. Keep the conventional navigation label and use “Learn the concepts” for both learning CTAs. Replace the adjacent abstract reassurance with a concrete description such as “No installation or Haskell experience needed to begin,” supported by the approved intro flow. Keep the primary action into concepts before setup. Suggested command: `$impeccable clarify`.

## Cognitive load and emotional journey

Choice overload is low; no group presents more than four meaningful alternatives. The difficulty is inference: visitors translate abstract promises into benefits and infer prerequisites and present capabilities. The opening and shop model are the emotional peak; repeated lower copy adds little new confidence and the footer closes without a clear source of help. Better evidence and concrete reassurance improve the ending while retaining a short page.

## Persona observations

- First-time AI builder: “pure application logic” and architectural language assume expertise; prerequisites and present capabilities are unclear.
- Mobile or low-vision reader: navigation and secondary diagram annotations require more effort than the main content.
- Returning evaluator: mobile GitHub access is only in the footer, where “Built in the open” hides the destination's familiar name.

## Heuristic assessment

| Heuristic | Score | Evidence |
| --- | --- | --- |
| Visibility of system status | 3/4 | Clear completed model; theme action is labeled. |
| Match with real world | 3/4 | Familiar shop example; some technical benefit language. |
| User control and freedom | 4/4 | Native navigation, skip link and theme choice; no blocking flow. |
| Consistency and standards | 3/4 | Cohesive design; lower grids and CTA labels vary. |
| Error prevention | n/a | No input or consequential submission. |
| Recognition rather than recall | 3/4 | Model sequence clear; prerequisites and footer destination require inference. |
| Flexibility and efficiency | n/a | No repeated operational task. |
| Aesthetic and minimalist design | 3/4 | Focused opening; repetitive copy and uneven rhythm. |
| Error recovery | n/a | No error-producing workflow on this surface. |
| Help and documentation | 3/4 | Working learning entry; community help absent. |
| Total | 22/28 | Seven applicable heuristics; qualitative review, not a benchmark. |

## Deterministic and browser evidence

The CLI detector found zero issues in each of the two markup targets. Browser injection produced three `ai-color-palette` warnings (one violet, two cyan). They are intentional-brand false positives: the palette is approved and explicitly outside this review's scope. No detector spacing/content rule fired. The absence of detector findings does not invalidate the visual/measurement findings above.

Local preview HTML matches dist exactly and rendered copy/styles match scoped source. Local page height is 1,352px desktop and 1,722px mobile. Ruby is 5,025px and 8,778px respectively; that length should not be copied. Ruby benefits have 96px desktop/64px mobile section padding compared with NeoHaskell's 30px/26px top padding, but the pages have different content volumes. Ruby's delayed scroll reveals required settled captures; transitional blank areas were not treated as missing content.

## Decisions for a first implementation pass

First scope: spacing and reading comfort, or spacing plus copy and navigation? Additional evidence: a compact status/community area, or retain the current section count until those facts are ready? The recommended first implementation pass is spacing plus reading comfort, followed by concrete copy, then verified status/community content. Finish any chosen implementation with `$impeccable polish`.

## References and artifacts

- Ruby homepage: https://www.ruby-lang.org/en/
- Current source: `src/pages/index.astro`, `src/styles/home.css`, `src/components/EventLedger.astro`.
- Assessment A captures: `/tmp/neohaskell-ruby-review-a/`.
- Assessment B report and measurement evidence: `/tmp/neohaskell-ruby-review-b/report.md`.
- Chat comparison: `ruby-neohaskell-comparison-20261110.html` in this chat's scratch directory.
