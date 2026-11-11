# Copy and auxiliary text

Write primary content, necessary labels, and direct actions. Keep substantive explanations in the main prose and place source links inline where they support a claim.

Do not add footnotes, caption bars, widget identity labels, language badges, or explanatory rows around examples and actions. Remove redundant reassurance beneath buttons and text that merely describes the component beside it. Use standard visual affordances for scrolling instead of instruction sentences. Keep accessible control names and meaningful domain labels.

Middle dots (U+00B7), em dashes (U+2014), and emojis are forbidden in authored interface text, metadata, documentation, and agent responses. Use ordinary sentence punctuation. An ASCII hyphen is sufficient when a separator is necessary.

Before delivery, inspect the rendered page for auxiliary text and remove anything that does not help the visitor understand the main content or take a necessary action. A passing design review does not override this rule. Run the repository copy check with the normal build; it rejects forbidden characters and explicit footnote markup in authored source.

# Unslop quality standard

Apply `$unslop` to every task in this repository. Read `.agents/skills/unslop/SKILL.md` at the start of each task, reusing it when already loaded, and check the result against its relevant guidance before delivery. Use its visual workflow for interface work and its clarity, restraint, and consistency principles for code, documentation, copy, and responses.

Explicit user direction and the accepted NeoHaskell product and design records take precedence over generic style prescriptions. Continue already-authorized work through the workflow below; Unslop's direction step does not require another approval when the user has authorized implementation.

# Compare and build workflow

When the user asks to compare this site with a reference, requests a design critique, or suggests a possible improvement (such as “perhaps missing some code snippets”), carry the work through implementation and presentation. Treat the request as authorization to choose sensible changes within that scope, including when the comparison is delegated to a subagent. An explicit request for review only overrides this default.

1. **Checkpoint first.** Review the working tree and create a local Git commit preserving the current project state, including relevant untracked source and assets. Exclude secrets, generated output, and unrelated files. Verify and record the commit SHA before comparing or dispatching reviewers. If the tree is already clean, record the current HEAD as the checkpoint.
2. **Compare.** Inspect the current implementation and the actual reference, using desktop and mobile views where relevant. Identify concrete improvements against the user's focus and the accepted product and design direction.
3. **Build.** Choose and implement the useful recommendations in the same task, preserving accepted choices outside the requested scope. Complete the applicable skill reviews and checks. Continue from findings into implementation without asking the user to reauthorize that work.
4. **Show.** Verify the result in the browser and present a working preview URL or screenshots, the visible improvements, relevant check results, and the checkpoint SHA. Finish with something the user can inspect, rather than ending at recommendations or asking them to investigate candidate source code.

# Product positioning

For NeoHaskell homepage work, product explanations, metadata, or capability evidence, load `$neohaskell-positioning`. It owns the approved benefits-first pitch for NeoHaskell as an AI-first language and framework, including the accepted homepage direction. If discovery has not refreshed, read `${CODEX_HOME:-$HOME/.codex}/skills/neohaskell-positioning/SKILL.md`; use `PRODUCT.md` for repository-specific facts and `GLOSSARY.md` for terminology.

# Documentation direction

For NeoHaskell documentation pages, examples, navigation, or styling, load `$neohaskell-docs`. For a rejected direction, corrected feedback scope, conflicting constraints, or ambiguous design reference, load `$design-feedback`. Both use the existing repository records; later explicit user direction can supersede the baseline within its stated scope. If discovery has not refreshed, read `${CODEX_HOME:-$HOME/.codex}/skills/<skill-name>/SKILL.md`.

# Teaching examples

In NeoHaskell examples, bind local values with `let` statements inside `do` blocks. Do not use `let ... in` expressions. Use `else do` when an else branch needs a local binding.

Whenever creating or materially changing a teaching example, use `$learning-example-review` from the active Codex skills directory. Read its `SKILL.md` and complete its fresh-subagent visual review and simplification loop before finishing. If discovery has not refreshed, resolve it at `${CODEX_HOME:-$HOME/.codex}/skills/learning-example-review/SKILL.md`.

Keep examples focused on the concept being taught, with readable text and a visible cue when scrolling changes their state. Preserve the approved NeoHaskell identity and the terminology in `GLOSSARY.md`.
