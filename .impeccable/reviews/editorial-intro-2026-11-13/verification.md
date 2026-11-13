# Editorial introduction verification

Pre-change checkpoint: `836b11dcba0b4683420b4e1d87158ccfb150228a`. Verified 13 November 2026.

## Implemented scope

Rewrote the four Start here pages around declared purposes, developer judgment, enjoyment, one-person comprehension, connected examples, semantic emphasis, and substantive endings. Moved the opening stock diagram to the history page. The owner's subsequent correction presents NeoHaskell as a language; the four pages, English homepage prose/metadata, product records, glossary, and reusable instructions follow it. Actual framework component names and historical records retain their technical meaning. No saved translation or locale manifest was changed.

Four global skills were updated and passed their bundled quick_validate checks: neohaskell-progressive-explanations, neohaskell-docs, neohaskell-positioning, and nick-plain-copy. Existing skill metadata and the positioning reference were synchronized. These live in the active Codex skills directory; repository AGENTS.md points to them and records the editorial authority. They are outside this repository's Git tree.

## Technical checks

- `npm run build`: copy check passes; Astro reports zero errors, warnings, or hints; 586 pages built.
- `npm test`: all 19 tests pass. The existing localized-heading test now targets the changed English heading. It uses test fixtures and a fake client; no translation service was invoked.
- Documentation browser checks: 155 pass, zero failures. Covered all 576 documentation locale routes, 64 sidebar links, 16 initially expanded groups, reading sequences, article links/fragments, search, no-JavaScript reading, and native keyboard scrolling in the phone Event Model.
- Layout checked at 320, 390, 768, 1024, 1440, and 1600 CSS pixels in both themes. Prose remains 18px and essential examples at least 16px, with no document overflow or clipped diagram nodes. These are viewport checks, not a comprehensive accessibility audit.
- Four supplemental homepage checks pass at 390/1440px in light/dark themes: language-first identity in visible prose and metadata, with no page overflow. Captures also cover the updated capability heading and complete phone command block.

Saved machine evidence is verification.json and identity-verification.json alongside the rendered captures. Generated captures and JSON remain local under the repository's existing ignore rules. Verification scripts and build/test logs remain in `/tmp/neohaskell-editorial-2026-11-13/`.

## Editorial and visual review

Fresh Astra [review](astra-review.md): editorial ready; visual keep. One finding was resolved: the cancellation narrative had supplied an order identity absent from the diagram. The model is now introduced as a first sketch and its missing identity is used to motivate the concrete design question. The reviewer inspected the corrected source, language-first captures, and complete phone command. No remaining material findings. The owner accepted the stronger prose before requesting the language identity correction.

NeoHaskell capability claims rely on source inspection at revision `033ae4a570686cd885ca14c6595997d9498d5287`. No NeoHaskell runtime or performance benchmark was run.

## Delivery

Live development preview: http://127.0.0.1:4324/introduction/. Production-build verification: http://127.0.0.1:4325/introduction/. The four live routes were checked after edits, including their native next links.

The user-provided task-completion instruction requires pushing the completed commit, while the documentation authoring preference defers deployment. The commit uses `[skip ci]` to satisfy both: the only configured workflow is a push-triggered Pages deployment, which GitHub supports skipping through the commit message. See [GitHub's documented behavior](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs). All applicable checks were executed locally before committing. Push verification is recorded in the task response; no manual deployment is authorized or invoked.
