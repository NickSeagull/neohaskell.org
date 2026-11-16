# Homepage highlights retrospective

The owner's 16 November feedback rejected the descriptive copy and crude ice frame, requested a query slice, and asked for the skills to improve. This retrospective concerns that failure, not a redesign of the accepted homepage identity. The rejected implementation is preserved at `30291a76d4190882173e2b5686d3a3177f6bf02e`; the original clean checkpoint is `dea24c3e25831fb1fe98a76e565dfae3561b8a22`.

## What failed and what changed

1. **Feature presence substituted for persuasion.** I made the three requested capabilities visible, but wrote the IDE heading as an invitation to inspect a tool and opened the other sections by describing mechanisms. The positioning skill already said benefits first. Its completion criterion was too easy to satisfy by naming a feature that might imply a benefit. The updated `neohaskell-positioning` requires the developer's gain in the heading or first sentence, followed by the mechanism as evidence. A fresh reviewer must check those openings in isolation.

2. **Line count substituted for completeness.** I interpreted extreme minimality as six lines and kept the declaration hierarchy, while omitting the event-to-query relationship. The owner asked for that second slice. The updated `minimal-teaching-visuals` and `learning-example-review` judge the whole promised relationship rather than the number of elements. The revised example connects `PlaceOrder`, `OrderPlaced`, and a separate `AvailableMugs` query slice, without adding type declarations or a full lesson.

3. **Convenient geometry substituted for illustration craft.** I used a jagged SVG frame and then added facets and icicles. It was legible, but the silhouette and finish did not meet the owner's expected quality. The owner supplied Duolingo's frozen-streak crystal as the reference. The revised positioning guidance distinguishes semantic diagrams from material illustrations and requires reference-informed asset production for the latter. The replacement uses generated ice and star artwork with real, selectable datatype definitions inside. The owner acknowledged improved crystal quality but corrected its detached placement; visual finish and subject integration are separate criteria.

4. **The review packet constrained the reviewer incorrectly.** I described native geometric ice as explicitly requested, although the owner had requested ice around a graphic without choosing the medium. The reviewer then treated that implementation choice as a preservation requirement and approved readability without challenging the artwork's quality. The updated `design-feedback` and `learning-example-review` require raw feedback and references, distinguish owner constraints from agent choices, and assess silhouette, material and finish separately from accessibility. The owner's rejection supersedes the earlier ship verdict.

5. **Required skills were missing from active discovery.** They existed only in a previous Orca account directory. I restored the four changed skills and their four existing dependencies into `~/.codex/skills`, including their resources. Future repository instructions now resolve their documented fallback paths directly. The old account copies were preserved rather than silently overwritten.

## Durable changes

Updated active skills: `neohaskell-positioning`, `minimal-teaching-visuals`, `learning-example-review`, and `design-feedback`. The positioning skill's homepage reference also records the new scope. Restored dependencies are `neohaskell-terminology`, `neohaskell-diagram-colors`, `neohaskell-code-examples`, and `nick-plain-copy`.

The maintained skill validator passes all eight folders. Its missing PyYAML dependency was supplied through an isolated `uv` environment. No application dependency was added. The subsequent fresh review uses the updated criteria on the corrected homepage, providing a behavioral exercise in addition to frontmatter validation.

These are judgment failures. The existing build, copy checks and browser assertions correctly verified technical properties but could not decide whether the copy sells a meaningful gain or the illustration meets the reference's craft. Adding a word-matching linter would measure a proxy and repeat the mistake.

## Reference and asset evidence

Inspected the [official Duolingo Streak Freeze illustration](https://x.com/duolingo/status/1250815925030457345), downloaded from its public image URL. Its bold silhouette, rounded facets and restrained highlights inform the replacement. The owl, flame, background and branding are not shipped. The reference remains a local review input, not a website asset.

The built-in image generator produced the ice frame and golden star under `public/images/home/`. The original transparent PNGs remain in the generator's output directory; Sharp resizes and encodes the selected artwork as transparent WebP. Maintained provenance commands save exact prompts in adjacent JSON sidecars. Earlier detached-crystal assets were removed from the shipping directory. No claim about NeoHaskell implementation is inferred from the illustrations. The datatype definitions are native HTML, with contrasting text and keyboard scrolling at narrow widths.

The latest spec-copy correction also narrows the message to preventing stale Markdown specifications and separate documents. Tool names were removed from that paragraph, and the active positioning skill records this scope.

The owner subsequently rejected the integrated result as out of place and explicitly praised the older sections. The prior review verdict is superseded for visual direction.

## Follow-up: failure to transfer the accepted design

The requested Astra reassessment starts from clean checkpoint `86e450e74301b278b61621f601cda7dda24fe5ef` and compares the rejected highlights with the accepted history and pure/transport sections plus the current Laravel homepage. The [review](../reviews/homepage-highlights-2026-11-16/astra-reassessment.md) owns its findings and alternatives. Three unsuccessful treatments trigger the owner's stopping rule: stop incremental repairs and question whether large literal ice/star containers are the right visual argument.

The earlier skill discovery problem was real and had been repaired before this rejection. It does not explain why the restored guidance still produced a poor composition. Existing instructions already required preserving identity, showing meaningful relationships, and following the accepted page. I optimized the individual asset and literal feedback compliance without testing the section against the strongest neighboring examples. Technical passes and narrow review verdicts could not establish that fit.

The previous skill update also overfit the repair. Positioning prescribed datatype definitions inside ice and a star, while its approved-direction reference incorporated an unaccepted extension. The project surface correctly left acceptance open, but this conflicting durable guidance could bias subsequent work. The correction removes that literal requirement, separates the accepted baseline from pending additions, and requires comparing new work with accepted neighboring sections at the same scale. The learning-example reviewer now checks page fit and the demonstrated relationship before material finish. No new design skill is required.

Active files corrected: `neohaskell-positioning/SKILL.md`, its `references/homepage-direction.md`, and `learning-example-review/SKILL.md`. The skill-creator and writing-for-agents guidance governs these focused changes. The website remains at the reviewed checkpoint during this reassessment; the alternatives are proposals rather than another claimed fix.

## Follow-through correction

The owner rejected the review-only handoff and instructed the agent to build and present the chosen recommendation. The existing compare-and-build workflow already required this. I interpreted stopping an unsuccessful repair loop as stopping the task, then assigned the owner the work of reading composition alternatives. That was an execution error.

`AGENTS.md` now makes the completion criterion explicit: the agent consumes recommendations, chooses a supported direction, implements it, and presents a verified surface. The active `design-feedback` skill distinguishes stopping a failed approach from cancelling an authorized task. A premise reassessment feeds the replacement implementation rather than an automatic permission or reading gate. Its maintained validator passes.

The implementation begun at `457f618c5661545e2f23313754c6d626eadde678` follows the independent recommendation: a wide authentic IDE view, the complete specification excerpt, and a compact caller/contract figure in the established homepage vocabulary. The superseded generated artwork and its shipped sidecars are removed. The previous report remains historical analysis, not the deliverable handed back to the owner.
