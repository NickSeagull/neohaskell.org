# Fresh review: shared documentation widget

The learner follows one mug order from command to decision to event to query, before setting up an AI agent.

The owner's exact current feedback: “section snapping is okay, but the widget should change, not be duplicated … left column is docs, with long prose. Right column is just the widget that shows what the current section is, we have space between sections so that they are not shown on screen and make the user to scroll.” Earlier: minimalism applies to the widget, not the prose; text must be readable; changes must pop. Command, decision, event, query are canonical.

Read the rendered evidence first. Required captures in this directory: `desktop.png`, `mobile.png`, `desktop-event.png`, `mobile-event.png`, `mobile-command.png`, `desktop-light.png`, `mobile-light-command.png`, `user-2589.png`, `mobile-code.png`, `mobile-anchor.png`, `motion-before.png`, `motion-during.png`, `motion-after.png`, `setup-desktop.png`, `setup-mobile.png`, `setup-mobile-skills.png`. Normal browser zoom. Desktop 1440×1000, phone 390×844, wide 2589×1298. Dark except names containing light. Use original detail for wide if needed. Browser-checks.json contains computed font sizes, 72 behavior checks and motion timing. Other available captures can clarify a finding.

Code-first Read refinement, no new comp or concept-roll requirement. Existing visual-identity seed 17e1b5de remains. No QUALITY BAR card for this Read extension. Homepage comps and graphics are outside scope. PRODUCT.md and surface contract reflect this request. DESIGN.md and its JSON sidecar will be reconciled by the documenter after your review; do not mistake the old section-owned prose there for desired behavior.

Source: src/components/learn/GuidedLesson.astro, GuidedSetup.astro, OrderExample.astro, SetupExample.astro; src/scripts/guided-lesson.ts, scroll-sections.ts; src/styles/docs.css; GLOSSARY.md.
Contract: .impeccable/surfaces/src-components-learn-guidedlesson-astro.md.

Parent detector ran once with --scope layout on the target and returned []. Build succeeds; 12 unit tests pass; 72 browser checks pass with no runtime errors. Checks verify one model DOM identity across stages, pinned position, next heading offscreen, direct anchors, stable comparisons and Return to current stage, inspection, reduced motion, native wheel snapping, setup editing, no-JS reading, responsive fit and UTM links. These are behavioral evidence, not proof of improved learning.

Review the actual visuals and implementation independently. Especially assess one-widget continuity, full prose, native section separation, phone reflow/readability, and localized state changes. Report at most five material simplifications, or keep if none. Do not reduce text size or prose to satisfy widget minimalism. Keep user-requested viewport separation. Apply learning-example-review rubric plus Impeccable finish checks where applicable. You may write only your report to this directory. Do not render, start a browser, change code, or touch design documentation. No inherited history.
