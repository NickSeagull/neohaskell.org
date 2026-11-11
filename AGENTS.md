# Compare and build workflow

When the user asks to compare this site with a reference, requests a design critique, or suggests a possible improvement (such as “perhaps missing some code snippets”), carry the work through implementation and presentation. Treat the request as authorization to choose sensible changes within that scope, including when the comparison is delegated to a subagent. An explicit request for review only overrides this default.

1. **Checkpoint first.** Review the working tree and create a local Git commit preserving the current project state, including relevant untracked source and assets. Exclude secrets, generated output, and unrelated files. Verify and record the commit SHA before comparing or dispatching reviewers. If the tree is already clean, record the current HEAD as the checkpoint.
2. **Compare.** Inspect the current implementation and the actual reference, using desktop and mobile views where relevant. Identify concrete improvements against the user's focus and the accepted product and design direction.
3. **Build.** Choose and implement the useful recommendations in the same task, preserving accepted choices outside the requested scope. Complete the applicable skill reviews and checks. Continue from findings into implementation without asking the user to reauthorize that work.
4. **Show.** Verify the result in the browser and present a working preview URL or screenshots, the visible improvements, relevant check results, and the checkpoint SHA. Finish with something the user can inspect, rather than ending at recommendations or asking them to investigate candidate source code.

# Product positioning

For NeoHaskell homepage copy, product explanations, metadata, or capability evidence, load `$neohaskell-positioning`. It owns the AI-first language positioning principles. If discovery has not refreshed, read `${CODEX_HOME:-$HOME/.codex}/skills/neohaskell-positioning/SKILL.md`; use `PRODUCT.md` for repository-specific facts and `GLOSSARY.md` for terminology.

# Documentation direction

For NeoHaskell documentation pages, examples, navigation, or styling, load `$neohaskell-docs`. For a rejected direction, corrected feedback scope, conflicting constraints, or ambiguous design reference, load `$design-feedback`. Both use the existing repository records; later explicit user direction can supersede the baseline within its stated scope. If discovery has not refreshed, read `${CODEX_HOME:-$HOME/.codex}/skills/<skill-name>/SKILL.md`.

# Teaching examples

Whenever creating or materially changing a teaching example, use `$learning-example-review` from the active Codex skills directory. Read its `SKILL.md` and complete its fresh-subagent visual review and simplification loop before finishing. If discovery has not refreshed, resolve it at `${CODEX_HOME:-$HOME/.codex}/skills/learning-example-review/SKILL.md`.

Keep examples focused on the concept being taught, with readable text and a visible cue when scrolling changes their state. Preserve the approved NeoHaskell identity and the terminology in `GLOSSARY.md`.
