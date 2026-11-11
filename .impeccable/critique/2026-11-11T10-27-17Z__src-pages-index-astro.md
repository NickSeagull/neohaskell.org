---
target: Current NeoHaskell homepage versus Ruby, especially code snippets
total_score: 22
max_score: 28
na_heuristics: 5,7,9
p0_count: 0
p1_count: 0
target_identity: "file:/Users/nick/Work/neohaskell.org/src/pages/index.astro"
target_fingerprint: "sha256:938a22ffeb487c525e65317635002174b08f19c506b720f7876b998960bd2d17"
target_path: /Users/nick/Work/neohaskell.org/src/pages/index.astro
timestamp: 2026-11-11T10-27-17Z
slug: src-pages-index-astro
closed: true
---
Method: dual-agent (A: ruby_comparison_fresh · B: ruby_comparison_evidence)

# NeoHaskell compared with Ruby — 11 November 2026

**Add one real decision excerpt after the opening diagram.** The accepted visual direction works. The remaining gap is that visitors cannot see the language on a homepage promising software they can understand.

Scope: compare current `src/pages/index.astro` at http://127.0.0.1:4321/ with https://www.ruby-lang.org/en/, focusing on code snippets and preserving AI-first positioning. Review only; no homepage or example changes.

## Design specificity and strengths

The event-ledger composition and workshop typography are specific to NeoHaskell. Its primary concepts action, installation reassurance, and responsive diagram give a clear starting point. Body copy remains readable on mobile. The independent design review did not recommend changing the accepted layout, colors, or hierarchy.

Ruby shows three real source examples before its benefits. Each links to a playground with that example populated; execution happens on the playground, not within the homepage. NeoHaskell contains zero native code blocks. Its exact source links are credible evidence, but inspecting the implementation requires leaving the page. [Ruby reference](https://www.ruby-lang.org/en/)

## Priority issue

**P2 — Implementation is invisible at the point of the promise.** “Your intent. Visible in the software.” currently leads into explanatory prose. Showing one real decision would let a reader inspect what “Know what you build” means before following documentation or GitHub links.

Use the existing two-column section directly below the diagram: plain-language intent on one side, a source excerpt on the other; stack on mobile. A useful frame is what the builder can recognize and review in agent-assisted code. This supports AI-first positioning without turning Haskell heritage into the product pitch.

The inspected candidate is the Counter starter’s decision body: it rejects a missing counter or a non-positive amount, otherwise accepts a CounterIncremented event. Label the source explicitly as the Counter starter so it is not mistaken for the shop diagram’s implementation. Show approximately 14 lines at 16px monospace / 24px line height, with one sentence explaining the rule and a compact expected-behavior caption. Link the complete file and matching tests. Imports, registration, and the long signature stay in the full source. This is a proposed excerpt, not a newly authored or executed teaching example.

[Verified implementation](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/neo/starter/src/Starter/Counter/Commands/IncrementCounter.hs#L28) · [Matching tests](https://github.com/neohaskell/NeoHaskell/blob/cacc8069070721539ae0aac53286ce9492e906a5/neo/starter/tests/Decider/Counter/IncrementCounterSpec.hs)

Suggested implementation route: clarify the single example’s job, build it within the existing layout, complete the required fresh learning-example review, then polish once. Ruby’s three-example gallery is unnecessary here: its mobile examples occupy roughly 1,500px before the benefits.

## Reader experience

A first-time AI builder needs a plain-language cue about what to recognize in the code. A skeptical developer needs exact source and test links. A phone visitor benefits from one static sample without tabs, a carousel, or another tutorial to operate. NeoHaskell’s opening creates curiosity; the next section should satisfy it with inspectable software. No main-content decision point exceeded four competing visible options in the independent design review.

## Heuristic scores

| Heuristic | Score / 4 | Finding |
| --- | ---: | --- |
| Visibility of status | 3 | Clear primary action and completed model state |
| Match with real world | 3 | Familiar shop model, new domain vocabulary |
| User control and freedom | 3 | Native links and browser navigation |
| Consistency and standards | 4 | Consistent language, layout and actions |
| Error prevention | n/a | No submission flow |
| Recognition over recall | 2 | Implementation remains external |
| Flexibility and efficiency | n/a | Persuasion surface |
| Aesthetic and minimalist design | 4 | Clear hierarchy and readable density |
| Error recovery | n/a | No error flow |
| Help and documentation | 3 | Working concepts destination |
| **Total** | **22/28** | **Good; one concrete opportunity** |

## Independent evidence

Both assessments used fresh browser contexts and inspected desktop 1440×1000 and mobile 390×844. Settled Ruby screenshots avoid mistaking its entrance animation for missing content. Ruby code begins around y725 desktop / y601 mobile; NeoHaskell’s artifact section begins around y1616 / y2178. These are captured layout observations, not performance measurements. Neither tested mobile page overflowed horizontally.

The CLI detector returned zero findings on the Astro entry. The rendered detector found nine ai-color-palette flags, all the accepted violet/cyan identity, not demonstrated usability defects. They do not warrant changing the palette. It found no other rule violations; this narrow scan is not a complete accessibility audit. The concepts CTA returned HTTP 200 and the expected Core concepts page. No upstream NeoHaskell tests were run.

Screenshots, measurements, and the detailed browser report are stored at `.impeccable/reviews/ruby-comparison-2026-11-11/`.

Questions skipped: one priority issue; the user already identified the comparison focus. The recommended next decision is the single business-rule excerpt described above.
