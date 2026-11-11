# Benefits-led homepage

Checkpoint: `801f592ba063bab31de01f5fdc75da5383632815`.
Preview: `http://127.0.0.1:4321/`.
Scope: homepage implementation, metadata and its product/design records. No deployment.

## Direction and reference comparison

The owner's 11 November request replaces the source-first homepage with a sales page for NeoHaskell as an AI-first language and framework. The existing violet/cyan palette, typography and logo remain. The supplied Ruby screenshot contributes a memorable product illustration, Laravel contributes substantial illustrated benefit panels and varied composition, and Phoenix contributes compact coverage of integrated capabilities.

The baseline placed two long code sections after its diagram, followed by sparse text grids. The new page has a split introduction and application cutaway, a wide event-history scene, separate pure-logic and transport benefits, six concise capabilities, an agent workflow and a direct documentation close. No source syntax appears on the homepage. Diagrams use native HTML and SVG so their labels stay readable and they adapt to both themes.

Research, source revisions and final-state distinctions are in [research.md](research.md). The three initial agents contributed graphical direction, responsive composition and product research. Implementation follows the owner's final-state brief without adding readiness caveats, unsupported percentages or error-free guarantees.

## Review iterations

| Review | Initial material findings | Resolution | Verdict |
| --- | --- | --- | --- |
| Graphic design | Hero had loading-like capsules; pure logic had a generic circle and detached footer; both transports appeared equally active. | Named event slips and layered construction; canonical decision diamond inside a real boundary with services outside; active HTTP and dashed alternate MCP. | Satisfied after second review. |
| Layout | Two mobile heading phrases ran together when a line break was hidden. | Added the missing whitespace and verified at 320px and 390px. | Satisfied. |
| Content | Same mobile heading defect; no remaining content concerns. | Corrected the heading. OAuth storage/refresh confirmed in source. | Satisfied. |
| Independent finish and example review | Closing paragraph repeated the docs destination and agent story. | Removed the paragraph and unused spacing rule, rebuilt and recaptured all viewports. | Ship. Learning-example verdict: keep. See [finish-review.md](finish-review.md). |

The example review uses the learning-example-review skill. Its central goals are recognizing lasting event history and the pure/effect boundary without requiring a lesson or syntax. All three shop events remain visible; the derived stock is separate. Static figures need no controls or animation to communicate their meaning. Reviewer satisfaction is distinct from owner acceptance.

## Verification

| Check | Result |
| --- | --- |
| `npm run build` | Copy check passed; Astro reports 0 errors, 0 warnings and 0 hints; 5 routes built. Existing Starlight build notices concern absent optional i18n/404 content. |
| `npm test` | All 12 existing attribution and order-model tests passed. |
| Rendered widths | 320px light, 390px dark, 820px dark, 1440px dark and light. No page errors or horizontal overflow; no source-code blocks. |
| Text and keyboard | Essential diagram labels at least 16px. Main prose 18px. Measured rendered text contrast passes both themes; the skip link bypasses navigation and the next Tab reaches the main docs action. |
| Navigation | Every local route and fragment resolved. Main docs CTA reaches `/learn/`; the framework link reaches `#framework`; saved theme survives reload. |

The design detector ran once. Its 23 findings were advisory differences from the old design scale, with no hard violation. The former `#d5a8ef` capsule color was removed in the graphic correction; the resulting type, field and radius choices belong in the updated design record. No runtime or deployment verification of NeoHaskell itself was claimed.

Raw current screenshots, browser measurements and capture commands are retained locally in `artifacts/`. Generated captures and build output are not source assets and are excluded from the Git change. The homepage ships no new raster artwork and no added dependencies.
