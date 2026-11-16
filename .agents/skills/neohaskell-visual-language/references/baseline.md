# Authority and baseline

## Sources and responsibilities

Resolve repository paths from the checkout root. This is a source map, not a second token catalogue.

| Question | Owner |
| --- | --- |
| What has the owner asked for, and what does the language promise? | Latest task direction, `AGENTS.md`, `PRODUCT.md`, and the positioning skill it names |
| What visual intent applies here? | `DESIGN.md` and `.impeccable/surfaces/src-pages-index-astro.md` or `.impeccable/surfaces/src-components-learn-guidedlesson-astro.md` |
| What does each domain object mean? | `GLOSSARY.md`, terminology and diagram skills named by `AGENTS.md` |
| What actually renders? | `src/components/Home.astro`, `src/components/HomepageVisual.astro`, `src/components/HomepageHighlights.astro`, `src/components/learn/`, `src/styles/home.css`, `src/styles/docs.css`, `src/styles/diagram-colors.css`, and `astro.config.mjs` |
| How is it verified and served? | `README.md`, `package.json`, current tests, and the applicable review skills in `AGENTS.md` |

Later explicit owner decisions take precedence within their scope. Current source proves implementation; it cannot silently supersede accepted intent. Historical passages and generated design previews are supporting records. When they disagree with an active decision, name the discrepancy rather than averaging the rules.

## Starting identity

The existing records preserve the original logo, violet/cyan brand identity, geometric homepage headings, Manrope reading text, and a limited pixel accent. Native diagrams make application relationships visible. Documentation uses a quieter reading surface and native navigation. Preserve these accepted foundations unless the task changes them.

Semantic diagram colors have their own purpose: command blue, event orange, query cyan-leaning green, integration neutral. Reuse `src/styles/diagram-colors.css`; exact shades belong there. Brand accent limits do not limit the number of necessary semantic roles in a diagram. Labels and geometry carry meaning alongside color.

The same vocabulary need not produce identical page layouts. Homepage illustrations explain a developer benefit at a glance. Documentation figures support a nearby argument, maintain context on direct entry, and allow sustained inspection. Real IDE captures provide product evidence; diagrams explain selected relationships; source excerpts expose actual structure. Choose the medium for the question.

## Calibration set

Use these existing implementations as comparison candidates, not as blanket owner approval of every pixel:

| Candidate | Question it can test |
| --- | --- |
| Homepage history section in `src/components/HomepageVisual.astro` | Does retained history remain distinct from the current answer, and does the arrangement explain the gain? |
| Documentation history lesson and `src/components/learn/EventHistoryReplay.astro` | Can a reader follow the same relationship step by step, including its static result? |
| `src/components/learn/ShopEventModel.astro` or `src/components/learn/EventModelTour.astro` beside its article | Do connected domain objects retain their meaning, hierarchy, and readable phone geometry? |

For a language-wide experiment, use the first two as a pair and the connected model as a stress case. Record the exact revision, route, theme, viewport and selected state when capturing them. Add a source or screenshot composition only when the proposed rule affects that medium.

## Questions still to earn a rule

Which shapes distinguish a request, retained fact, current answer, and boundary without relying on hue? Which connections communicate causality versus grouping? How does density change between a sales illustration, an article figure, and a real IDE capture? Which movement explains a change better than two static states?

Answer through representative rendered examples before prescribing universal radii, type counts, or animation timings. The current implementation is a starting point for these questions, not proof that the language is complete.

## Inspection findings, 16 November 2026

At checkpoint `6fb2befd4de27cee53a322225ebcd92d3fff3259`, `DESIGN.md`'s canonical color prose still describes violet recorded events. The homepage surface record's 13 November semantic-color correction and current `src/styles/diagram-colors.css` use orange events. Follow the later semantic decision. The current documentation surface record also specifies an 18rem sidebar, while older design prose describes 16rem. Inspect the current styles and applicable owner decision before changing that layout.

These are record discrepancies found through source inspection, not a rendered audit. This initial skill does not certify the current pages or declare the unresolved visual questions settled.

The subsequent history calibration reconciles the canonical color and sidebar prose in `DESIGN.md` and records the first scoped history pattern there. Older swatches and specimens remain historical. Consult the current design section and `.impeccable/reviews/visual-language-history-2026-11-16/review.md` for the tested scope; the initial inspection above is provenance.
