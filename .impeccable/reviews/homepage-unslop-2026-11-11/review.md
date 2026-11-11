# Explicit homepage Unslop pass — 11 November 2026

Request: “please $unslop the homepage”. Checkpoint: `b0a168263ed6bf913d427d76bcaa72b3df71bf80`. The previous homepage refinement was committed locally before this pass. Final fresh-review disposition: **ship**, no material findings. Owner acceptance remains separate.

## Direction

Product: an AI-first language for people building understandable applications with agents.
Character: precise, calm, approachable.
World: the established NeoHaskell developer workshop.
Moments: the event model and real source code carry the detail and color.
Signature: meaningful domain shapes and the established pixel lettering.

## Audit

Light slop; polish mode. Live desktop/phone captures in both themes showed repeated accent-colored links competing with main actions, a decorative documentation square, inconsistent/redundant action arrows, trailing punctuation on short supporting headings, and unequal padding in the two community rows. The phone headline isolated “build”; grouping “you build” provides a more deliberate ending without changing its wording.

The accepted violet/cyan palette, original logo, full-width model, geometric display type, pixel accent, and semantic uppercase diagram labels remain explicit project choices. They are not generic prescriptions to remove. No filler image, unverified metric, emoji icon, gradient, glow, or looping decorative motion required replacement.

## Nine passes

| Pass | Result |
| --- | --- |
| Spacing | Equal 24px community-row padding; consistent 8/12px icon gaps; normalize logo and skip-link spacing while preserving established page composition. |
| Color | Dark primary action uses existing off-white ink and dark ground. Light action remains violet. Secondary links use supporting ink; major onward links retain the accent. All palette values remain. |
| Icons | Remove the decorative nav square and redundant source-link arrows. Retained action arrows use 18px dimensions and a 1.5-unit stroke; external/theme icons keep appropriate optical sizes in the same line style. |
| Copy | Remove trailing periods from short supporting headings and captions. Preserve factual wording, the accepted hero promise, prose, exact source, and provenance. |
| Type | Supporting headings use 24px/500 desktop and 22px/500 phone; onward links use weight 500. Keep the approved type families, 18px body copy, and 16px code. |
| Layout | Preserve section order and composition. Keep “you build” together on narrow screens. |
| Details | Underlined secondary links retain obvious affordance and accent hover feedback; community rows use quiet rules and page-ink titles. Focus treatment stays visible. |
| Visuals | Preserve the actual model and source. No generated image or prompt: the established product visual already communicates application behavior. |
| Motion | Remove decorative arrow translation. Primary action receives a short background-color transition. Preserve the existing single model sequence and reduced-motion completed state. |

Unslop by Damir Sokolovsky (@heydamir), CC BY 4.0; the repository skill retains its original credit and license.

## Checks

Build passes with zero Astro diagnostic errors, warnings, or hints; all 12 existing tests pass. No new tests were added for static visual declarations.

32 viewport/theme/motion cases and 22 breakpoint-edge cases pass, with no page overflow or JavaScript errors. Code remains 16px and matches the pinned source exactly. Normal/reduced motion reaches the expected completed state; no-JavaScript output retains the model and source. Keyboard code scrolling, the code anchor, theme persistence, and local routes pass. Minimum checked control height is 44px. Checked text contrast minima are 5.04:1 light and 6.00:1 dark. The bounded layout detector and `git diff --check` return no findings.

Fresh reviewer `/root/unslop_finish_review` inspected before/after screenshots in both themes at 1440px and 390px. Verdict: **ship**, no material findings. It confirmed identity, hierarchy, mobile headline grouping, and obvious link affordance. Source/model teaching content was not materially changed; this pass does not claim measured comprehension improvement.

## Evidence and preview

Preview: http://127.0.0.1:4321/ . The existing user-owned server remains running.

Raw evidence: `/tmp/neohaskell-unslop/`, copied locally under this review's `artifacts/` and excluded from Git by the existing artifact policy. Before/after files use `neo-{dark,light}-{1440,390}.png` and `-top.png`; after also includes code/model crops. Measurements are `after/checks.json`, `after/boundaries.json`, and `after/interactions.json`.
