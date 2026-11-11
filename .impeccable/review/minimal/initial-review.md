# Initial visual simplification review

**Verdict: simplify.** The immediate goal is to understand command → decision → event → query by following one mug order, then compare an accepted order with an unavailable order.

I opened all four baseline captures before reading the implementation. The captures show the approved dark violet/cyan identity at 1440×1000 and 390×844. `before.json` reports 20px desktop and 18px mobile reading text; it does not identify the measured element, zoom, or theme explicitly. The text is readable at the provided capture sizes. Density and sequence are the problem; reducing type is not an appropriate fix. No light-theme, changed scenario, or motion capture is included, so this initial verdict does not validate those states.

## Four material findings

1. **Each beat explains the same thing four times before the illustration can teach it.** In `before-desktop.png`, Commands has a title, lead, long body, takeaway, and inspection prompt; the diagram then repeats the lead. In the initial phone capture, the example is entirely below the viewport. In the section phone capture, it only begins around y=695. Keep a short concept heading and one short paragraph per beat. Move the longer technical explanation into a closed disclosure. Remove the separate takeaway and arrow prompt. The artifact should be visible beside or immediately below that single paragraph.

2. **The introduction spends attention on page framing rather than the model.** “Core concepts,” “No installation needed,” “Four ideas. One model you can explore,” and the desktop “Show examples inline” sit between the main title and the first concept. Cut the metadata row and layout selector, shorten the introduction to one sentence, and provide one responsive presentation. Preserve normal section anchors and the existing navigation; the learner should not have to choose how the page is laid out.

3. **The diagram is surrounded by a second layer of explanatory UI.** The visible example contains a toolbar, default caption, main action, and “Illustrative shop · one order” footer in addition to its already labeled nodes. Remove the outer tool-panel treatment, default explanatory caption, and simulation footer. Keep starting stock as a small scenario fact, the four essential node labels, values, and a single main scenario action. Show an explanation only when a node is actually inspected; put code and its secondary actions in the optional detail path. Preserve “Try ordering 4 mugs” and “Return to lesson” as the purposeful comparison, without adding a general experiment form.

4. **Section advancement currently comes from prose length, so deleting prose alone will make the pace faster.** The desktop section capture shows Decisions and the start of Events within one screen. `guided-lesson.ts` advances when the next section top crosses `min(innerHeight × .35, 280)`; `.lesson-step` has content-dependent height, and the phone uses static inline cards. Give each beat an explicit native scroll interval independent of its paragraph length, and pin the compact scene within that interval. The same model state must remain visible while the reader continues to scroll. Do not simulate resistance by cancelling wheel/touch events, applying an input threshold, or forcing scroll snapping.

## Deliberate scroll dwelling requirements

- At a normal unzoomed desktop/phone viewport, give each compact beat approximately 1.6–1.8 viewport heights of document space, with at least roughly half a viewport of visible, stable scene travel before the next beat takes over. Use the actual rendered scene height to avoid clipping at short viewports or enlarged text. The exact distance is a reviewable starting point, not proof of learner comprehension.
- Anchor each title to the beginning of its own beat. Trackpad, mouse wheel, touch, Page Down, Space, arrow keys, browser Back, and direct hash links must remain ordinary browser navigation. A fast scroll may intentionally skip ahead; it must cancel old cues and show the state at the reached section.
- Keep the active concept visible through its localized accent. On advancement, draw attention only to the changed node/value, then leave a clear current state. Reduced motion retains that immediate accent and value change without movement or flashing. Avoid adding a new “keep scrolling” sentence or progress panel to compensate for the dwell.
- If the scene and its expanded details cannot fit, allow normal document flow rather than clipping or trapping content. An open detail or inspected node must remain reachable. Verify at 390×844 and a short desktop viewport; large text needs its own reachable-content check.

## Behavior that must survive

Commands remain pending intentions until evaluated; accepted decisions produce `OrderPlaced`; rejected decisions produce no accepted-order event; queries show the stock for the reached phase. Opening stock remains distinguishable from the event ledger, and the stage before query refresh must not silently present its previous answer as current. Keep the vocabulary from `GLOSSARY.md`.

Node inspection must work with pointer, keyboard focus, and touch without changing the order. The comparison must remain stable while the page moves to another beat, with one explicit return to the authored lesson. Preserve visible focus, accessible names, usable targets, and readable essential text of at least 16px. Continue the approved dark violet/cyan and light daylight/violet identity.

The correction packet should include the same viewports, initial and changed comparison states, a before/during/after dwell sequence with scroll positions, the final transition implementation, and behavior evidence for keyboard, touch, reduced motion, and comparison continuity. Score findings 1–4 individually as resolved, partial, or unresolved. Appearance evidence alone cannot establish scroll behavior or improved learning outcomes.
