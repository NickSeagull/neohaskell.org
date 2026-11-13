# Visual tour verification

The checkpoint before inspecting the published reference and changing the introduction is `7d2a55d313a4fd68694143610917890daa2b2396`. The owner corrected the earlier table-and-exercise introduction. This report covers the replacement article, four static diagrams, and revised navigation label. It does not claim that the earlier 2915-assertion navigation suite was rerun.

## Implemented scope

The page is titled Design an application you understand and its sidebar entry is Design your application. One ceramic-mug story teaches intention, decision, accepted fact, and query answers. The growth figure makes order identity and status explicit across placing, cancelling, and dispatching. Linear growth remains a design aim dependent on stable shared meaning. Public author mentions and the paper exercise are removed. The ordinary guide layout, 62 destinations, expanded navigation, and translation pause remain.

The [research note](../../../docs/research/event-modeling-tour-2026-11-13.md) records the actual homepage reference and claim boundaries. The [fresh Astra review](teaching-review.md) records a keep verdict after one correction round, with all three findings resolved. A review verdict does not establish owner acceptance or measured learning outcomes.

## Checks

- `npm test`: all 19 tests pass. Translation tests use their existing fake CLI fixtures; no translation service or model was called.
- `npm run build`: copy check passes, zero Astro errors, warnings, or hints, and 568 static pages generated. The build includes 558 documentation locale routes through native English fallback.
- 24 targeted browser checks pass. Twelve layout cases cover 320, 390, 768, 1024, 1440, and 1600px in light and dark themes at normal zoom. All four figures render with at least 16px essential text, no page or component overflow, zero inherited sibling margins, aligned phone query outputs, and aligned desktop story cards. All 15 sidebar groups start open and all 62 links remain.
- The nine introduction locale routes return 200 with the new title, entry label, four figures, and correct localized next link. The documentation map label, Pagefind discovery, and no-JavaScript rendering pass. Saved translated source files and catalogs were not changed.
- The scoped Impeccable detector returns no findings. Root inspected the actual desktop and phone captures, including dark query output, and checked for redundant captions, widget labels, and auxiliary rows. The figures retain only domain labels and their accessible descriptions.

The first correction capture identified a 320px cascade conflict after the margin reset: the desktop slice selector overrode its mobile rule. The mobile selector now has matching specificity, and the repeated full 24-check matrix passes. No text size was reduced.

## Visual craft

Spacing uses the accepted guide rhythm and component-owned grid gaps. Color and type reuse the existing tokens, 18px prose, 16px domain labels, and larger numeric answers. Icons are limited to geometric flow arrows; no new icon family or image asset is added. Copy moves from a concrete customer story into terminology. Desktop flows reflow vertically on phones, while slice stages use two columns. Native navigation, focus, theme, and search remain. The four figures are semantic HTML with SVG geometry; they have no motion, controls, runtime, or installation dependency.

Raw captures and verification.json are local review artifacts in this directory. Browser assertions establish rendered properties, not execution of NeoHaskell. The source-backed visual IDE statement retains the revision and limits documented by the earlier research.
