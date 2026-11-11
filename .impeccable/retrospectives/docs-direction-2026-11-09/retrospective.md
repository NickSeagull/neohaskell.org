# Documentation direction retrospective — 2026-11-09

Preserve the accepted Stripe Docs **guide-page** direction for both `/learn/` and `/getting-started/`, with NeoHaskell's own identity. The user approved the replacement with “yes, this is much better” and then the setup guide with “looks good”. Later explicit direction may replace this baseline. The [source feedback](source-feedback.md#rejection-and-replacement) is the approval evidence; a technical pass is a different kind of evidence.

## What the evidence establishes

1. **The guided design was requested.** The user asked for guided docs throughout, alive examples, snapping sections, one changing widget, then vertical centering. Implementing those directions was not inherently a mistake. The eventual rejection superseded them; it does not prove they were unreasonable to explore. [Feedback sequence](source-feedback.md#documentation-exploration).
2. **Feedback sometimes applied to different objects.** “Too many letters” was clarified as widget density, with long prose explicitly acceptable; “sticky” was clarified as section snapping. The [early capture](../../review/learning/desktop.png) visibly combines article prose with a model, tabs, instructions, form fields, and actions. The [later capture](../../review/vertical-center/desktop.png) visibly removes much of that furniture but retains a large companion diagram and presentation-like spacing. These show successive implementations, not measured learning effectiveness. [Clarifications](source-feedback.md#documentation-exploration).
3. **The accepted replacement changed the reading structure.** The [raw Stripe guide reference](../../review/stripe-docs/stripe-guide.png) and [current concepts capture](../../review/stripe-docs/desktop.png) show topic navigation, a continuous central article, and local contents. The [setup phone capture](../../review/stripe-docs/setup-mobile-install.png) places a copyable command inside flowing explanation. The reference's structure was adopted while NeoHaskell's identity remained. This is distinct from the earlier Stripe.dev identity exploration. [Reference and identity scopes](source-feedback.md#product-and-identity).
4. **Review passes did not establish owner acceptance.** The [earlier correction verdict](../../review/learning/finish-verdict.md) explicitly limited “ship” to scored fixes, before the later rejection. The replacement's [initial review](../../review/stripe-docs/initial-review.md) assessed the guide and found a Copy affordance issue; its [final review](../../review/stripe-docs/final-review.md) resolved that finding. The [39 passing checks](../../review/stripe-docs/checks.json) support checked behavior. Owner approval comes from the subsequent user statements.

## Likely process lessons, with limits

**Inference:** some rework likely came from applying feedback before its object or interaction was precise. One short distinction—widget versus prose, snapping versus fixed positioning—could have prevented specific wrong turns. The record does not establish that a larger upfront interview would have predicted the user's eventual preference.

**Inference:** polishing each local symptom can prolong a direction that no longer fits. After a whole-direction rejection, reevaluate the page structure before another local refinement. A representative implementation can expose the disputed choice quickly without adding an approval gate to already authorized work.

**Retention risk:** old source components, historical reviewer passes, and a contract filename naming a retired widget can be mistaken for current intent. The existing [brief](../../questions/learning-experience-brief.md), [state](../../questions/learning-state.json), and [contract](../../surfaces/src-components-learn-guidedlesson-astro.md) already identify the replacement. Future work should resolve those records and their targets rather than revive historical artifacts. The parent synchronized the existing state after review to explicitly record approval of both routes, including the setup feedback “looks good”.

## Installed guidance

| Skill | Trigger and purpose | Evidence for the change |
| --- | --- | --- |
| [neohaskell-docs](</Users/nick/Library/Application Support/orca/codex-accounts/6e173aa1-76cb-4a1c-8352-f802b5389349/home/skills/neohaskell-docs/SKILL.md>) — new | NeoHaskell documentation work: look up current project truth, extend its accepted guide format, and preserve scope. No duplicated token catalog. | Accepted replacement on both routes; superseded artifacts remain present. |
| [design-feedback](</Users/nick/Library/Application Support/orca/codex-accounts/6e173aa1-76cb-4a1c-8352-f802b5389349/home/skills/design-feedback/SKILL.md>) — new | Rejections, corrected scope, conflicts, or ambiguous references: resolve the affected object, implement the correction, and record what supersedes what. | Widget/prose and sticky/snap clarifications; final guide/API distinction. |
| [learning-example-review](</Users/nick/Library/Application Support/orca/codex-accounts/6e173aa1-76cb-4a1c-8352-f802b5389349/home/skills/learning-example-review/SKILL.md>) — narrow update | New or materially changed teaching examples, including static code/tables: retain the fresh-subagent review, separate prose from artifact density, and scope verdicts accurately. | Explicit user requirement for fresh visual review; accepted inline examples; correction-only verdicts. |

[AGENTS.md](../../../AGENTS.md) routes future documentation and feedback work to these skills. Normal automatic discovery remains enabled. These skills do not impose NeoHaskell's layout on unrelated projects, change the homepage contract, or override later explicit user choices.

## Validation and invocation checks

All three skills pass Skill Creator's `quick_validate.py`; local skill and evidence links were checked for existence. The system Python lacked PyYAML, so validation ran through `uv run --with pyyaml python` without modifying the project. This validates packaging, not decision quality.

The author walked through the following cases, and the parent independently inspected the resulting instructions against them. These are behavioral scenario reviews, not claims of end-to-end agent execution:

| Request | Expected and inspected behavior |
| --- | --- |
| “Add a rejected-command guide.” | Load NeoHaskell docs guidance, extend the current article format, and freshly review the new teaching example. |
| “Less text in the widget; the prose is fine.” | Load feedback reconciliation; simplify the artifact while preserving needed prose. |
| “Replace guides with API-reference pages.” | Honor the explicit replacement and update its scoped records; the current guide baseline cannot veto it. |
| “Polish the homepage animation.” | Skip the docs skill; use the homepage's own direction. |
| “Fix this typo.” | Make the bounded edit within the existing direction; no new feedback interview or example-review gate. |

Independent inspection found that older example-review wording still implied interactive controls for static examples. It was qualified before completion, including its UI prompt. No website files, design tokens, or historical reviews were changed. Actual future agent runs and reader learning outcomes remain untested.
