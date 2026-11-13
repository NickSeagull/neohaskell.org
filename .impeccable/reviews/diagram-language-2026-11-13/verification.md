# Diagram semantics and introductory explanations

The owner requested direct documentation prose, stable diagram colors, NeoHaskell terminology, and two separate sections for linear growth and a connected Event Model. The clean pre-change checkpoint is `d525fe216dd45f91d8c1f69812958a4e13a15779`.

## Implemented result

The introduction starts with the mug shop's stock policy. Its comparison adapts the supplied A-through-G/rework chart, with effort per change on the vertical axis and a qualified explanation of roughly linear total effort. A separate native Event Model connects two screens, commands, recorded events, and stock query answers through the sequence three, two, three.

Shared tokens assign blue to commands, orange to events, cyan-leaning green to queries, and neutral slate to integrations across current docs and homepage figures. The glossary distinguishes public vocabulary from exact internal API names and avoids presenting the entire journey as a single DSL slice. No NeoHaskell runtime execution is claimed.

Three local skills now own the reusable diagram, color, and terminology instructions. The existing plain-copy, documentation, and positioning skills route and preserve those choices. AGENTS.md records direct prose, skill routing, and the owner's local-preview delivery preference.

## Checks

- `npm run build` passed after the final authored content edits: copy check passed; Astro reported zero errors, warnings, or hints; 568 pages built. The final build log is `/tmp/neohaskell-sidebar-2026-11-13/build-diagram-language-final.log`.
- `npm test` passed all 19 tests. The log is `/tmp/neohaskell-sidebar-2026-11-13/test-colors.log`. Subsequent changes were documentation openings and evidence records.
- The saved browser verification passed all 27 checks across 320, 390, 768, 1024, 1440, and 1600px in both themes. It checks diagram bounds, page overflow, five figures, 15 expanded groups and 62 links, role contrast, at least 16px figure text at normal scale, phone keyboard scrolling, and static rendering without JavaScript. Semantic text/surface contrast is at least 5.96:1; boundary/surface contrast is at least 3.34:1.
- The bundled skill validator passed the three new and three updated skills, using `uv run --with pyyaml python` to supply its missing PyYAML dependency. Manual Impeccable detection returned no primary findings. Four advisories cover the two intentional dark rework colors and existing navigation type exceptions; DESIGN.md records those choices. No detector ignores were added.
- Final live-browser checks returned HTTP 200 at `/introduction/`, `/docs/`, `/learn/`, and `/resources/` on port 4324. The new openings render, both section anchors exist, and the removed slogan is absent. The fresh [Astra review](teaching-review.md) returns keep, with no material corrections. This is reviewer approval, not owner acceptance or a measured learning outcome.

Raw captures and JSON results are local generated evidence in this directory. The browser harness is `/tmp/neohaskell-sidebar-2026-11-13/verify-diagram-language.mjs`; final live-route results are `live-verification.json`.

## Visual review

The existing article rhythm, Manrope, violet/cyan chrome, and quiet surfaces are preserved. Repeated nodes share dimensions and spacing. Domain color has a stable purpose; labels and dashed command borders preserve distinctions beyond hue. Generic introductory slogans were deleted. Diagram text remains readable; phone geometry scrolls instead of shrinking. Connectors have visible endpoints. No decorative captions, control rows, new icon family, motion, or raster assets were introduced.

An initial screen label wrapped into the pictured action; shortening it to the concrete stock value resolved the bounds check. Final desktop/phone captures in both themes were inspected before the independent review.

## Local delivery

The development preview is <http://127.0.0.1:4324/introduction/>. Astro runs from `/Users/nick/egregoreOS/repos/neohaskell.org`, the canonical checkout, because starting through the Work-directory symlink prevented MDX watcher updates. A content touch produced a reload notification, and the final browser checks confirm current content.

Translation remains paused. This iteration is committed locally, with no push or deployment; pushing the current branch would trigger publication. The earlier deployment belongs to the checkpoint, not this revision.
