# Design artifacts in Git

The website builds from `src/` and `public/`. Nothing in `.impeccable/` is a runtime dependency. Root `PRODUCT.md`, `DESIGN.md`, and `GLOSSARY.md` remain the primary product, visual-system, and vocabulary records.

## Keep

| Files | Why they belong in the repository |
| --- | --- |
| `config.json`, `design.json`, `surfaces/` | Shared tool configuration, design tokens/specimens, and accepted surface contracts. |
| `questions/*.md`, `questions/*direction*.json`, `retrospectives/` | Briefs, design choices, and the reasons earlier directions were replaced. Current surface contracts take precedence. |
| `critique/`, Markdown under `review/` and `reviews/` | Review findings and verdicts that explain subsequent changes. |
| `diagrams/README.md`, the two diagram-study HTML files, and their Manrope font | The original editable diagram study and its usage notes; the font uses the license in `public/fonts/manrope-OFL.txt`. |
| `mocks/decision/r2-violet-workshop.*` and `r2-daylight-workshop.*` | The two selected visual references, their prompts, and generation provenance. Current source and surface contracts govern later refinements. |

## Keep locally, ignore in Git

Generated screenshots, browser measurements, detector output, review scripts, logs, build maps, temporary state, downloaded inspiration galleries, and unselected mockups are ignored. These files are not deleted. Review notes may refer to local captures that a fresh checkout will not contain; reproduce them against the current preview when needed. The notes record what was checked, not a portable archive of every capture.

The root `.gitignore` explicitly allows the durable files above and ignores other top-level Impeccable output by default. Add a narrow exception when a new artifact becomes an accepted design authority. Production images and their licenses belong in `public/`, where they are always versioned with the site.
