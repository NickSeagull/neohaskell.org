# Selected diagram language: Event ledger

Visual direction and component naming are the scope of this study. The selected themes are Violet + electric cyan for dark mode and Daylight + violet ink for light mode. Use commands, decisions, events, and queries from `GLOSSARY.md`.

- **Visual grammar:** a command expresses intent, a decision accepts or rejects it, an event stays in the ledger, and a query returns current state. Maintain distinct component shapes, stable labels, and consistent color roles.
- **Example:** one ecommerce order for a mug. The accepted sequence records `OrderPlaced` and changes stock from three to two. Opening stock is supplied initial state; the ledger shows the order's event.
- **Homepage:** one short initial animation, playing once and settling into a readable composition. Reduced motion shows the completed composition. No interactive explainer, concept stepping, scenario switches, lesson narration, or learning-path module.
- **Documentation:** explanations and ecommerce examples live on documentation pages, before installation and AI-agent setup. This study does not specify or authorize a documentation widget, exercise sequence, or interaction model.
- **Artifact boundary:** Signal paths, Assembly sequence, and Event ledger controls are tools for inspecting appearance and motion. Only Event ledger's visual direction and the canonical vocabulary are selected; the study's controls and teaching flow are not homepage requirements. Keep implementation lightweight with native SVG/DOM and a bounded animation.
