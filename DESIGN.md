---
name: "NeoHaskell"
description: "An open developer workshop with explicit behavior, lasting event history, and clear current answers."
colors:
  record: "#7816a9"
  record-ink: "#fff"
  record-muted: "#e9d1f6"
  record-accent: "#7df9ff"
  dark-ground: "#1c062d"
  dark-ink: "#fcf9ff"
  dark-muted: "#d9bce9"
  dark-line: "#80648d"
  dark-accent: "#7df9ff"
  dark-accent-ink: "#1c062d"
  dark-violet: "#c989e7"
  dark-model-active: "#7df9ff"
  dark-hover: "#2c173c"
  light-ground: "#fafafc"
  light-ink: "#20132b"
  light-muted: "#5c416f"
  light-line: "#c1a8cf"
  light-accent: "#8a16ba"
  light-accent-ink: "#fff"
  light-violet: "#9723c9"
  light-model-active: "#007580"
  light-hover: "#f0e4f7"
  docs-dark-accent-low: "#30203f"
  docs-dark-accent: "#7df9ff"
  docs-dark-accent-high: "#a7faff"
  docs-dark-white: "#fcf9ff"
  docs-dark-gray-1: "#eee6f4"
  docs-dark-gray-2: "#d0c4dc"
  docs-dark-gray-3: "#ad9bbd"
  docs-dark-gray-4: "#786488"
  docs-dark-gray-5: "#3c2b4b"
  docs-dark-gray-6: "#261933"
  docs-dark-black: "#1c1027"
  docs-dark-bg-nav: "#20132c"
  docs-dark-bg-sidebar: "#1c1027"
  docs-dark-hairline: "#3c2b4b"
  docs-dark-line: "#3c2b4b"
  docs-dark-surface: "#261933"
  docs-light-accent-low: "#f0e6f8"
  docs-light-accent: "#7814a0"
  docs-light-accent-high: "#581071"
  docs-light-white: "#271735"
  docs-light-gray-1: "#382647"
  docs-light-gray-2: "#554362"
  docs-light-gray-3: "#715d7e"
  docs-light-gray-4: "#a391af"
  docs-light-gray-5: "#d6cadf"
  docs-light-gray-6: "#eee8f4"
  docs-light-gray-7: "#f6f2fa"
  docs-light-black: "#fdfcfe"
  docs-light-bg-nav: "#f8f5fb"
  docs-light-bg-sidebar: "#fdfcfe"
  docs-light-hairline: "#e3dbe9"
  docs-light-line: "#e3dbe9"
  docs-light-surface: "#f6f2fa"
typography:
  display:
    fontFamily: "Sansation, Manrope, sans-serif"
    fontSize: "clamp(60px, 6.8vw, 96px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Sansation, Manrope, sans-serif"
    fontSize: "clamp(36px, 3.4vw, 48px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-.03em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-.015em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "Manrope, sans-serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.5
  diagram-label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    letterSpacing: "0"
  event-name:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "26px"
    fontWeight: 400
    letterSpacing: "0"
  query-value:
    fontFamily: "Manrope, sans-serif"
    fontSize: "55px"
    fontWeight: 500
  pixel-accent:
    fontFamily: "Pixelify, monospace"
    fontWeight: 400
    letterSpacing: "-.035em"
  docs-title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    letterSpacing: "-.03em"
  docs-heading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 650
    letterSpacing: "-.02em"
  docs-subheading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 650
    letterSpacing: "-.02em"
  docs-body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.125rem"
    lineHeight: 1.8
  docs-lead:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.25rem"
    lineHeight: 1.6
  docs-code:
    fontSize: "1rem"
    lineHeight: 1.7
  docs-table:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.6
  docs-navigation:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.5
rounded:
  focus: "2px"
  control: "6px"
  action: "8px"
  docs-inline-code: "4px"
  docs-code-frame: ".65rem"
spacing:
  page-gutter: "clamp(20px, 4.5vw, 70px)"
  page-gutter-mobile: "24px"
  page-gutter-small: "20px"
  inline-small: "12px"
  section-start: "64px"
  column-gap: "64px"
  section-space: "96px"
  section-space-mobile: "64px"
  docs-page-gutter: "clamp(1.25rem, 4vw, 4rem)"
  docs-table-cell: ".9rem .75rem"
components:
  button-primary:
    backgroundColor: "{colors.dark-ink}"
    textColor: "{colors.dark-ground}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "12px 20px"
  button-primary-light:
    backgroundColor: "{colors.light-accent}"
    textColor: "{colors.light-accent-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "12px 20px"
  button-text:
    textColor: "{colors.dark-accent}"
  button-text-light:
    textColor: "{colors.light-accent}"
  button-theme:
    backgroundColor: "transparent"
    textColor: "{colors.dark-muted}"
    rounded: "{rounded.control}"
    height: "44px"
    width: "44px"
  button-theme-hover:
    backgroundColor: "{colors.dark-hover}"
    textColor: "{colors.dark-ink}"
  navigation:
    textColor: "{colors.dark-ink}"
  event-model:
    backgroundColor: "transparent"
    textColor: "{colors.dark-ink}"
    padding: "16px 0"
  event-model-light:
    backgroundColor: "transparent"
    textColor: "{colors.light-ink}"
    padding: "16px 0"
  recorded-event:
    backgroundColor: "{colors.record}"
    textColor: "{colors.record-ink}"
  query:
    backgroundColor: "{colors.dark-hover}"
    textColor: "{colors.dark-ink}"
  query-light:
    backgroundColor: "{colors.light-hover}"
    textColor: "{colors.light-ink}"
  docs-table:
    typography: "{typography.docs-table}"
    width: "100%"
  docs-table-heading:
    backgroundColor: "{colors.docs-dark-surface}"
    textColor: "{colors.docs-dark-white}"
    padding: "{spacing.docs-table-cell}"
  docs-inline-code:
    rounded: "{rounded.docs-inline-code}"
    padding: ".15em .35em"
  docs-code-frame:
    typography: "{typography.docs-code}"
    rounded: "{rounded.docs-code-frame}"
---

# Design System: NeoHaskell

## Overview

**Creative North Star: "The Developer Workshop"**

NeoHaskell makes application behavior visible through open geometric lettering, precise construction lines, and distinct model shapes. The original name and logo anchor the identity. Deep violet with electric cyan gives the dark theme its energy; the light theme uses a cool daylight ground and violet ink.

The system is spacious and direct. Large headings establish intent; Manrope carries the explanatory work; pixel lettering supplies a small expressive accent. Tonal fields and ruled boundaries organize information. The same identity becomes quieter in documentation: a conventional guide pairs topic navigation, a wide article, and a local contents outline. Manrope prose, restrained code frames, and comparison tables carry the explanation. Starlight supplies the title, navigation, search, theme control, and mobile menu.

**Key Characteristics:**

- Original NeoHaskell identity within a fresh workshop palette.
- Open display typography with a focused pixel accent.
- Fine construction lines and separate command, decision, event-history, and query shapes.
- Flat tonal fields, readable themes, and motion that reaches a stable result.
- Continuous reading with native navigation, inline examples, and comparison tables.

This record describes the implemented homepage and conventional MDX documentation. Source authority is `src/styles/home.css`, `src/components/EventLedger.astro`, `src/styles/docs.css`, the two articles in `src/content/docs/`, and `astro.config.mjs`. The documentation contract remains at `.impeccable/surfaces/src-components-learn-guidedlesson-astro.md`; its stable filename now targets the MDX article. The homepage composition and one-time sequence belong to `.impeccable/surfaces/src-pages-index-astro.md`, not every surface. Earlier lesson components are no longer imported by these routes and are not current documentation canon.

## Colors

The palette is violet throughout, with different action and reading emphasis in each theme. Frontmatter names pair the source CSS variable with its theme: `dark-ground` maps to `--ground` in the dark root; `light-ground` maps to the light override. `docs-*` keys map to Starlight’s `--sl-color-*` overrides.

### Primary

Use **Action accent** for the light-theme primary action, main onward text actions, focus, and selected text. The dark-theme primary action uses page ink on page ground; secondary source links use supporting ink with persistent underlines and reveal the accent on hover. Its paired **Action ink** supplies the foreground. Documentation uses its own **accent-low**, **accent**, and **accent-high** roles so links and selected navigation remain part of Starlight’s reading hierarchy.

### Secondary

Use **Pixel violet** for the display accent. The model sits directly on the page. **Recorded event** violet and its white ink identify the lasting fact; the query uses the existing hover ground and **Model active accent** for its value and outline. This accent has its own light-theme teal. Connectors use supporting ink.

### Neutral

Use **Page ink**, **Supporting ink**, **Construction line**, and **Control hover** on the page ground. The model shares these page roles. Only the recorded event has a separate violet surface, white ink, pale supporting ink, and cyan check mark. Starlight’s gray roles handle reading text, borders, and nested surfaces; its `white` and `black` names are semantic aliases and reverse visually in light mode.

Documentation has its own paired reading grounds and gray ramp. Dark articles use violet ground with cyan links; light articles use a near-white ground with violet links. The docs surface fills table headings, and the docs line supplies table and pagination separators. These roles preserve the homepage palette without reusing its stronger model field.

**The Theme Pair Rule.** Apply dark and light roles as matched sets. The page action and the model active accent are separate roles: the light model uses readable teal while the light page action remains violet.

The sidecar’s eight-step tonal ramps are generated swatch previews. They are not additional implementation colors; the frontmatter records the actual source values.

## Typography

**Display Font:** Sansation, with Manrope and sans-serif fallbacks. **Body Font:** Manrope, with sans-serif fallback. **Accent Font:** Pixelify, with monospace fallback. **Event Font:** the native monospace stack recorded in `event-name`.

All three authored families are self-hosted WOFF2 files with `font-display: swap`. Sansation’s light visual weight gives broad headings space; Manrope handles body copy and navigation. Pixelify appears on the hero’s “build” word, while event identifiers retain code-like clarity.

### Hierarchy

| Role | Use and responsive behavior |
| --- | --- |
| Display | Homepage title; `clamp(40px, 11.5vw, 64px)` with line height `1.08` below 760px. The final phrase “you build” stays together on mobile rather than leaving “build” isolated. |
| Headline | Product heading; `clamp(34px, 6vw, 42px)` below 760px and 32px below 390px. Tools use a 40px heading, 34px on phones; the community heading uses 48px, 34px on phones. |
| Title / body | Supporting headings use 24px desktop / 22px mobile at weight 500; reading text remains 18px in both layouts. |
| Lead / action | Mobile lead and primary action use 18px. Lead line height is `1.65`. |
| Diagram label / event / query | Semantic labels, recorded event identifiers, and the numeric answer. SVG values are viewBox units: desktop query value is 55, compact 50; event identifier is 26, rising to 28 in the compact desktop strip. |

The hero explanation has a 46ch maximum, reduced to 40ch on mobile. Supporting product copy uses 43–48ch measures. Documentation uses the `docs-title`, `docs-heading`, `docs-subheading`, `docs-body`, and `docs-lead` roles. Prose and list text use 18px type with 1.8 line height; code and tables use 16px. The native code font remains Starlight/Expressive Code’s monospace font. Below 49.99rem, page titles become 2rem, second-level headings 1.5rem, and lead copy 1.125rem. Topic links use 16px text; the local contents outline uses .9375rem. Keep essential article and example text readable rather than reducing it to fit.

**The Geometric Voice Rule.** Use Sansation for expansive homepage headings, Manrope for explanation and controls, Pixelify for the selected display accent, and monospace for event identifiers.

## Layout

The homepage’s centered shell stops at 1536px and uses the fluid gutter token. The masthead has an 80px minimum height, a quiet bottom rule, and navigation aligned to the right; mobile retains 72px. The opening starts 72px below it (40px on mobile). A supporting row follows the title after 32px: the explanation on the left, a content-width primary action on the right. At 760px the support row stacks with a 24px gap. The full-width model aligns with the shell edges in both themes.

Major sections use 96px of closing space, reducing to 64px on mobile. The model-to-code separation is 96px without an extra rule. Two Counter sections show the write and read flows. Each introduction pairs a heading and main prose in a 5:7 grid with a 48px gap. Code follows after 40px: short definitions on the left and the decision or query on the wider right. At 1100px the snippets stack in source order; the introduction stacks at 760px. On phones, code follows the introduction after 32px. The read section begins after a quiet rule with 64px of top space, reduced to 32px on phones.

The evidence section pairs a compact introduction with two stacked tool articles in a 4:7 proportion and a 96px gap. The second article has a separating rule with 32px space on each side. Community links use 32px Sansation (28px on mobile) in page ink, distinct from the 18px reading copy. Their rows share 24px vertical padding and quiet rules. Supporting grids stack at 760px. Page rules mix the existing construction-line color at 55% opacity; semantic diagram lines retain their own stronger contrast.

The Counter examples show six developer definitions without setup boilerplate: command, decision, event payload, entity, update and query. The source sits directly on the page, with a quiet left separator and 32px inset on the wider desktop code column. At 1100px the separator and inset disappear. Build-time Astro highlighting follows the active theme through CSS variables. Code remains 16px with 25.6px line height. Native horizontal scrolling and an inset keyboard focus ring preserve inspection on phones. Each source region has an accessible name and contains only code. Main prose carries the HTTP routes, existing-counter context and inline source links.

| Breakpoint | Implemented adaptation |
| --- | --- |
| At most 1200px | Shared column gap becomes 40px. Diagram role/detail labels increase to 26 viewBox units below 1280px to compensate for scaling. |
| At most 1000px | Diagram switches to the compact SVG, capped at 380px wide and centered. The model uses the available content width without side insets or overhang. |
| At most 760px | Page gutters become 24px, content columns stack and headline phrases occupy separate lines. Navigation uses the familiar Docs label; GitHub remains in the community section and footer. |
| At most 390px | Page gutters become 20px; the model has no additional inset. Theme and navigation controls retain 44px hit areas. |

Spacing follows a 4px base with 16, 24, 32, 48, 64, 72 and 96px grouping intervals. The diagram uses authored geometry; its compact text remains at least 16px rendered at the supported 320px minimum width. Do not restore tiny text to fit a shape.

Documentation uses Starlight’s native topic sidebar, page title, article, and right-hand local contents outline. The topic rail is 16rem, the header 4.5rem, and the article width 48rem; at 100rem viewport width, the article expands to 50rem. Content gutters use the recorded fluid docs token. The title starts with 3rem top padding, reducing to 1.75rem below 49.99rem. Article headings use content-driven spacing rather than full-screen sections.

The two routes use ordinary browser scrolling. There is no snapping, persistent teaching widget, section-height reservation, or scroll-driven example state. On phones, native Starlight navigation and contents controls frame a full-width article. Tables scroll horizontally within their own content when needed. The installer and example task wrap visually while preserving the exact copied text. Print removes panel padding and uses black article text.

## Elevation & Depth

The homepage is flat: the recorded event carries the violet surface, the query has a quiet fill, and fine construction lines separate the model parts. Page dividers use a 1px stroke. SVG model boundaries use 1.6 units; internal ledger rules use 0.7 units; connectors use 1.5 units. These values scale with the SVG.

**The Flat Field Rule.** Use tonal contrast and fine strokes to establish homepage depth. The implemented homepage adds no box shadows to its controls, model field, or product sections.

Documentation uses subtle tonal table headings, fine separators, and restrained code frames. Expressive Code frames and pagination links have no box shadow. Starlight retains its surrounding search and navigation behavior.

## Shapes

Controls use gently rounded corners with separate action and theme-control radius tokens. The model and source have no outer rounded containers. Straight page rules supply crisp structure; navigation has no decorative square.

The model’s shapes carry meaning: a slanted command parallelogram, a decision diamond, a nearly square ledger frame, and a rounded query result. Ledger frame and event row corners use SVG radii of 4 and 2 units; the query uses 14 units on desktop and 12 on mobile. Preserve these distinctions when reusing the model vocabulary. The original logo keeps its outline and geometry.

Documentation uses the inline-code radius for short identifiers and the code-frame radius for fenced examples. Tables use simple horizontal separators and tonal headings. The homepage model shapes remain specific to its illustration.

## Components

### Actions and theme control

Primary actions are solid, high-contrast links with the action radius and recorded padding. Their minimum height is 52px, with 20px horizontal padding and a 24px label/arrow gap. They fit their content at every viewport. The dark primary action uses the existing off-white ink with dark text; light mode keeps the violet action. Hover mixes the face with 8% of its ink over 160ms. Arrows remain still, at 18px with a 1.5-unit stroke. Primary onward text links use the accent and an underline on hover. Source links sit inline in the main prose, with a persistent underline and accent on hover. Standalone actions retain a 44px minimum height.

The theme control is transparent at rest and gains the hover field on pointer hover. It is 44px square at every viewport. Its SVG icon and accessible label announce the target theme. The homepage and Starlight share the saved `starlight-theme` preference.

Homepage keyboard focus is a 3px accent outline with 6px offset; documentation uses a 2px Starlight-accent outline with 4px offset. The homepage skip link becomes visible on focus. Preserve these treatments alongside pointer states.

### Navigation

The ruled masthead pairs the original logo and NeoHaskell name with simple text destinations. Documentation uses a plain text label; GitHub uses an authored external-link SVG. The footer names Documentation, GitHub, and Discord directly, with 44px-tall links. The mobile masthead uses Docs and keeps theme access; GitHub is available in the community section and footer. Documentation uses native Starlight topic links with a filled accent-low field for the current page, plus a right-hand contents outline for second-level headings. Search, mobile navigation, and pagination remain native components.

### Evidence, community, and next steps

The hero and metadata introduce NeoHaskell as an AI-first language. “Build with AI. Know what you build.” preserves the display treatment while connecting building with understandable behavior. The lower learning link repeats “Learn the concepts” and reaches the same `/learn/` introduction. The primary action stands alone, without a supporting reassurance row.

Benefit paragraphs link directly to acceptance/rejection and history-replay tests at an inspected source revision. Source links inherit the paragraph size and color, with a persistent underline. Major onward actions retain an 18px arrow. The evidence section presents the agent workflow and application starter with 18px body text and named destinations. A verified release change appears in ordinary prose with an inline artifact link. `PRODUCT.md` records source evidence and verification limits.

A compact community section states that NeoHaskell is under active development, links its dated CLI/framework release, and offers the public repository and verified Discord invite. This status and the release were verified on 10 November 2026. Product principles live in `$neohaskell-positioning`; this design record governs their presentation.

### Event ledger

The signature model is native SVG inside a semantic figure, with a title and description for each responsive drawing. Its violet recorded row, ordered index, `OrderPlaced` identifier, and check mark remain separate from the query’s numeric stock result. Repeated definitions and ledger metadata have been removed so larger role names and content carry the example. The query says “mugs in stock” in every stage; it does not describe the initial stock as an after-order result. The figure has an accessible name and each SVG describes an example. Visible labels name the model parts; the field has no caption or surrounding explanatory bars. The model shapes retain their distinct outlines and sit directly on the page in both themes. Sentence-case model labels identify semantic roles.

The homepage plays one 3800ms opening sequence: command, decision, recorded event, then the current query answer. Stage boundaries are 500, 1450, 2350, and 3200ms. Stock starts at three during animation and settles at two. The source HTML already contains the completed state. Reduced motion starts there, and enabling reduced motion or hiding the page settles an active sequence immediately. There are no scenario, step, or replay controls. This timing belongs to the homepage component, not every future diagram.

### Documentation

The Core concepts and Set up your agent articles are ordinary MDX prose with inline examples and tables. Their heading hierarchy drives native contents navigation. Concepts use explicitly illustrative plain-text command, event, and query examples; setup provides a source-verified install command and a copyable agent task. These examples do not claim live execution.

Comparison tables use the recorded table type, full article width, tonal headings, and 1px docs-line separators. Cells use .9rem × .75rem padding on wide screens, changing to .75rem × .6rem below 49.99rem. Narrow table cells retain a 6.5rem minimum width inside a horizontally scrollable table.

Inline code has a small rounded background and may wrap long identifiers. Fenced examples use Expressive Code’s native titled frame and Copy action, with 16px text, 1.7 line height, and the recorded frame radius. On narrow screens and devices without hover, Copy is visible before interaction. Narrow code lines reserve 3.5rem of end padding to keep text clear of the action. Wrapped install-command presentation preserves the exact clipboard string.

The documentation relies on native links, search, contents navigation, and copying. It adds no simulation controls, editable task field, code-inspection hotspots, or instructional animation. Reduced motion uses immediate browser scrolling.

## Do's and Don'ts

### Do:

- Do preserve the original NeoHaskell logo and name.
- Do apply each theme’s semantic roles together, including the model’s separate active accent.
- Do keep commands, decisions, recorded events, and query results visually distinguishable and use GLOSSARY.md for their meaning.
- Do retain keyboard focus, descriptive SVG text, and the completed composition for reduced motion or unavailable JavaScript.
- Do keep documentation prose and inline examples in normal article flow, with visible Copy controls on narrow or hoverless devices.

### Don't:

- Don't replace the original logo with a generated interpretation.
- Don't use color as the only distinction between the event record and the query result; keep their separate shapes and labels.
- Don't promote diagram role labels into decorative marketing eyebrows; their uppercase treatment identifies model parts.
- Don't extend the pixel accent into body copy or event identifiers; retain the established type roles.
- Don't bring retired teaching widgets, scroll snapping, or full-screen lesson spacing into the article layout.

## Homepage finish review: 10 November 2026

Fresh learning-example and homepage review: **keep**, after one correction pass. Compact shape/text collisions, connector/label clearance and opening-stock wording were resolved. Both themes were checked at 320, 390, 768, 1024, 1440 and 1600px; essential diagram text was at least 16.62px in those captures. Build, 12 existing tests, normal/reduced/no-JavaScript animation states, theme persistence and the main documentation path passed. Evidence and the exact review scope are stored in `.impeccable/reviews/homepage-2026-11-10/review.md`. This records the review verdict separately from user acceptance.

The subsequent AI-first positioning and concrete-evidence pass also received **keep** from two independent reviewers, with no corrections requested. It preserves the accepted visual identity and diagram, adds direct artifact evidence, and updates product copy and metadata. Build, responsive browser checks, navigation, theme persistence, animation states, and all new GitHub destinations passed. The scope, screenshots, measurements, and source-verification limits are recorded in `.impeccable/reviews/homepage-positioning-2026-11-10/review.md`.

On 11 November, one real decision excerpt was added after checkpoint `52614df`, resolving the next Ruby comparison's missing-source finding. A fresh combined visual and learning-example reviewer returned **keep**. Both themes, 320–1600px layouts, exact rendered source, no-JavaScript output, keyboard scrolling, and token contrast passed. The code remains 16px, with a visible sideways-scroll cue on phones. See `.impeccable/reviews/homepage-code-2026-11-11/review.md` for the checked scope and provenance.

## Resource discovery: 11 November 2026

The subsequent Ruby gap review preserves the accepted visual world and section order. The original pass added an auxiliary code link and reassurance below the concepts action. The later content-restraint correction removes both; the code section keeps its fragment ID. Resources joins the wide masthead above 1000px and the footer at all widths; the native docs menu exposes the same destination on phones. The evidence section links directly to agent setup, with its published workflow source linked inline in the main paragraph. The dated framework release gains a short, verified description and a release-history link.

The new `/resources/` article extends the existing guide format, typography, themes, sidebar, search, and contents outline. Four sections organize starting, reference, application constraints, and releases/help. It links to verified material instead of presenting an untested first-run sequence. Existing illustrative examples, actual source, and the initial animation remain unchanged. See `.impeccable/reviews/ruby-gaps-2026-11-11/` for the independent baseline assessments and implementation limits.

## Homepage visual review: 11 November 2026

The visual-only refinement after checkpoint `784ffa55` received **ship** from a fresh combined homepage and learning-example reviewer; both examples received **keep**. It updates the opening support row, page alignment, code proportions, section density, and quiet rules while preserving the brand, actual source, copy, and model behavior. The model's narrower desktop labels increase through 1280px to keep them readable at breakpoint edges. Tests, build, 32 viewport/theme/motion cases, 22 breakpoint-edge checks, and focused interactions pass. See `.impeccable/reviews/homepage-visual-2026-11-11/review.md` for scope and evidence. Owner acceptance remains separate.

## Explicit Unslop finish: 11 November 2026

After checkpoint `b0a1682`, the owner's explicit Unslop request received **ship** from a fresh visual reviewer, with no material findings. The pass quiets secondary links and the dark primary action, removes decorative marking and redundant arrows, simplifies short-heading punctuation, balances the phone headline, and normalizes community rows. It preserves the accepted palette, composition, factual content, source, and model. Build, 12 tests, 54 responsive checks, and focused interactions pass. See `.impeccable/reviews/homepage-unslop-2026-11-11/review.md` for the nine-pass audit and inspected scope; this is review evidence, not owner acceptance.


## Content restraint: 11 November 2026

The owner rejected auxiliary explanatory text after the previous finish review. Follow the copy rule in `AGENTS.md`: primary content, meaningful domain labels, and direct actions. Remove button reassurance, code and model captions, language badges, metadata bars, and repeated link descriptions. Keep evidence links in the main prose. A native scrollbar supplies the code overflow affordance. This correction supersedes older descriptions of widget labels and supporting rows, regardless of prior reviewer verdicts.

The homepage retains its original palette, source excerpt, model geometry, and one-time sequence. The code frame now contains only code, the model field contains only the model, and community links contain only their destinations. Verification is recorded in `.impeccable/reviews/homepage-content-restraint-2026-11-11/review.md`.


## Stronger Unslop pass: 11 November 2026

The owner accepted the auxiliary-text removal and requested a stronger Unslop pass. Checkpoint `9e5be672627c55c0a1cb2e0c2dc777105161861d` preserves that accepted state. The new pass removes outer model and source containers, puts vivid violet inside the recorded event, uses content-width actions and sentence-case model labels, collapses repeated two-tone headings, and changes the tools section to an introduction beside stacked articles. The brand, section order, exact source, inline evidence, and finite model sequence remain.

The Unslop direction remains an AI-first language for understandable applications: direct, precise, approachable; a developer’s working page; the event model and real source as its detailed moments; the existing pixel lettering and distinct domain shapes as its signature. No generated illustration is needed because the authored model is the product visual. Verification and the nine-pass account live in `.impeccable/reviews/homepage-unslop-harder-2026-11-11/review.md`.

## Counter service examples: 11 November 2026

After checkpoint `47f35b3`, the owner's request for six minimal Counter definitions extends the single-excerpt scope into two static sections. A fresh learning-example reviewer returned **keep** after one prose correction identifying the excerpts as simplified and the linked tests as the starter's. Build, all 12 existing tests and 16 viewport/theme checks pass. The snippets retain keyboard scrolling, 16px code and no-JavaScript rendering. The existing model and brand remain unchanged. See `.impeccable/reviews/homepage-counter-service-2026-11-11/review.md` for the source adaptation, nine-pass review and verification scope. Owner acceptance remains separate.
