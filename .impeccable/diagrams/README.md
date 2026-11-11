# Diagram language studies

**Scope correction:** this artifact is a visual and motion reference only. The owner selected Event ledger and the component names, not an explainer widget. The homepage gets one initial animation. Concept explanations belong in documentation; documentation interactions have not been specified. The controls, teaching sequence, and learning-path section below are exploratory review material and must not be copied into the homepage.

Open `diagram-language.html` directly, or serve this directory. It is a self-contained planning artifact with three interactive visual languages and both selected NeoHaskell themes. The homepage is not implemented.

The user selected **Violet + electric cyan** for dark mode, **Daylight + violet ink** for light mode, and **Event ledger** for the diagram language. Event ledger opens by default; the other two studies remain available for reference. `diagram-language.template.html` is the editable source; the completed HTML inlines the original logo and the Manrope variable font. An identical copy is stored in this chat's scratch folder for the inline preview.

The three studies use the canonical vocabulary in `../../GLOSSARY.md`: **command → decision → event → query**. The teaching example is an online shop: order one mug, check stock, record `OrderPlaced`, then query the stock remaining (three mugs become two). A sold-out decision records no order event and leaves stock at zero. The ledger shows events from this order, starting from the shop's supplied opening stock.

The exploratory artifact includes Next concept, play/pause, restart, reduced motion, theme switching, keyboard tabs, and responsive layouts. These controls allow inspection of component shapes, naming, colors, and motion. They do not define the homepage experience or commit the documentation to an interactive widget. The confirmed journey is **homepage → documentation concepts → installation and AI-agent setup**.

Motion is one bounded sequence. It stops when the page is hidden or the preview leaves the viewport. Switching language or scenario resets the illustration and waits for the reader. These are conceptual diagrams, not a running NeoHaskell app or online code playground.

Validation: `review/verification.json` records the original 20 passing checks. Desktop and mobile screenshots were reviewed; one correction batch fixed keyboard focus indexing, text contrast, connection routing, and label overlaps. `review/terminology-verification.json` records the focused verification after selecting Event ledger and updating terminology.

`review/ecommerce-verification.json` records the exploratory ecommerce prototype's verification. Those checks establish that the study works, not approval of its feature scope. The current homepage brief governs what belongs on the website; earlier screenshots and reports remain historical study evidence.

Sources: the original logo comes from https://neohaskell.org/img/logo.svg; Manrope is served by Google Fonts at https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&display=swap and embedded for a self-contained preview. Diagram geometry and motion are authored for this study.
