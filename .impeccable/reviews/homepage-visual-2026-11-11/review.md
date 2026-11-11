# Homepage visual refinement — 11 November 2026

Final fresh-review disposition: **ship**. Learning-example verdict: **keep**. This is a visual and implementation review, separate from owner acceptance and unmeasured learning outcomes.

## Scope and checkpoint

Checkpoint: `784ffa55fd4db79d7783ebbef9a1fe4e12ff28ba`, clean `main` in the same checkout. The owner's corrected scope is homepage visual design. Resources, setup guidance, AI-first positioning, actual source evidence, and all other content additions remain. No documentation, runtime, deployment, or external service changes were made.

Compared the live local homepage and https://www.ruby-lang.org/en/ in Orca's browser and captured both at 1440px and 390px. NeoHaskell was inspected in both themes. Ruby's useful design lessons were the shared composition of its opening visual and source, varied section rhythm, and clear grouping. Its illustrations, typography, palette, and content structure were not adopted.

## Unslop direction and implementation

Product: an AI-first language for people building applications with agents. Character: precise and approachable. World: an open developer workshop. Moments: the explicit event model and genuine Counter source. Signature: meaningful command/decision/event/query shapes and the established pixel display accent.

The baseline already had a distinct identity, with no gradient, glow, invented metric, generic illustration, or decorative animation problem. The material issues were uneven alignment, repeated equal-column layouts, unused space beside stacked tools, and oversized hero support. The authorized refinement addresses those observations:

- Spacing and layout: the hero description and action group share a desktop row; the full model fits within the 900px desktop viewport. Model edges align with the page. Section rhythm uses 80px/56px transitions, and tools use two open columns beneath their heading and introduction.
- Color and details: preserve every accepted palette role; quiet page separators and the light model frame using the existing line token. Semantic model outlines remain distinct and legible.
- Typography: preserve Sansation, Manrope, Pixelify, 18px prose, and 16px code. Reduce hero support/action scale, strengthen community links with the display face, and retain essential model text above 16px across checked widths.
- Integration: use a 5:7 introduction/source split, stack the source at 1100px, group expected outcomes with quiet rules, and retain the full pinned excerpt and visible horizontal-scroll cue on phones.
- Copy, icons, visual, and motion: no factual copy or example changes. Keep original logo, existing SVG arrows, domain geometry, and the single 3800ms opening sequence.

## Verification

`npm run build` succeeds with zero Astro errors, warnings, or hints. All 12 existing tests pass. The layout detector and `git diff --check` are clean.

Browser checks cover 32 combinations: widths 320, 360, 390, 768, 1024, 1200, 1440, 1600; dark/light themes; normal/reduced motion. No page overflow or JavaScript errors; source matches the original excerpt exactly; code remains 16px; the model settles to its completed state with two mugs. A narrow-desktop label measurement prompted the sole visual correction. An additional 22 checks at breakpoint edges verify readable labels and code-scroll cues between the sampled sizes.

The code anchor lands with 24px clearance. Native keyboard code scrolling, saved theme, no-JavaScript completed model/source, and all four local route destinations pass. Checked primary/navigation/theme targets are at least 44px. Minimum checked text contrast is 5.04:1 in light and 5.99:1 in dark.

Fresh reviewer `/root/homepage_visual_review` inspected raw desktop/phone, both themes, model, source, and before/after captures. It requested refreshed top captures to resolve an apparent font/navigation mismatch; the refreshed evidence received **ship**, with **keep** for both examples and no requested content cuts. Animation code was unchanged; normal/reduced completed states were checked, while these still-image verdicts do not establish timing quality or reader comprehension.

## Evidence

Live preview: http://127.0.0.1:4321/ ; source section: http://127.0.0.1:4321/#see-the-code . The existing user-owned server remains running.

Raw baseline, reference, final screenshots, scripts, logs, and measurements are in `/tmp/neohaskell-home-design/`. Final captures use `after/neo-{dark,light}-{1440,390}` with `.png`, `-top.png`, `-model.png`, and `-code.png` variants. `after/checks.json`, `after/boundaries.json`, and `after/interactions.json` contain the browser results. A local copy accompanies this review under `artifacts/`, excluded from Git by the existing artifact policy.
