---
name: "NeoHaskell"
description: "An open developer workshop with explicit behavior, lasting event history, and clear current answers."
colors:
  dark-ground: "#1c062d"
  dark-ink: "#fcf9ff"
  dark-muted: "#d9bce9"
  dark-line: "#80648d"
  dark-accent: "#7df9ff"
  dark-accent-ink: "#1c062d"
  dark-violet: "#c989e7"
  dark-model: "#7816a9"
  dark-model-ink: "#fff"
  dark-model-muted: "#e9d1f6"
  dark-model-line: "#c6a0dc"
  dark-model-active: "#7df9ff"
  dark-entry: "#5c1380"
  dark-query: "#8623b5"
  dark-hover: "#2c173c"
  light-ground: "#fafafc"
  light-ink: "#20132b"
  light-muted: "#5c416f"
  light-line: "#c1a8cf"
  light-accent: "#8a16ba"
  light-accent-ink: "#fff"
  light-violet: "#9723c9"
  light-model: "#f4ebfa"
  light-model-ink: "#281039"
  light-model-muted: "#634078"
  light-model-line: "#ac7fc1"
  light-model-active: "#007580"
  light-entry: "#e8d2f2"
  light-query: "#eeddF7"
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
    fontSize: "clamp(60px, 6.32vw, 96px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Sansation, Manrope, sans-serif"
    fontSize: "clamp(38px, 3.85vw, 58px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-.03em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(22px, 1.95vw, 28px)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-.02em"
  action:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(20px, 1.7vw, 24px)"
    fontWeight: 700
    lineHeight: 1.3
  diagram-label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    letterSpacing: ".025em"
  event-name:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "26px"
    fontWeight: 400
    letterSpacing: "-.025em"
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
  action: "9px"
  model-mobile: "12px"
  model: "16px"
  docs-inline-code: "4px"
  docs-code-frame: ".65rem"
spacing:
  page-gutter: "clamp(20px, 4.5vw, 70px)"
  page-gutter-mobile: "24px"
  page-gutter-small: "18px"
  inline-small: "12px"
  section-start: "48px"
  column-gap: "64px"
  section-space: "96px"
  section-space-mobile: "56px"
  docs-page-gutter: "clamp(1.25rem, 4vw, 4rem)"
  docs-table-cell: ".9rem .75rem"
components:
  button-primary:
    backgroundColor: "{colors.dark-accent}"
    textColor: "{colors.dark-accent-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "12px 24px"
  button-primary-light:
    backgroundColor: "{colors.light-accent}"
    textColor: "{colors.light-accent-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.action}"
    padding: "12px 24px"
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
    backgroundColor: "{colors.dark-model}"
    textColor: "{colors.dark-model-ink}"
    rounded: "{rounded.model}"
    padding: "24px 28px 0"
  event-model-light:
    backgroundColor: "{colors.light-model}"
    textColor: "{colors.light-model-ink}"
    rounded: "{rounded.model}"
    padding: "24px 28px 0"
  query:
    backgroundColor: "{colors.dark-query}"
    textColor: "{colors.dark-model-ink}"
  query-light:
    backgroundColor: "{colors.light-query}"
    textColor: "{colors.light-model-ink}"
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

Use **Action accent** for the primary action, text actions, focus, and selected text. Its paired **Action ink** supplies the foreground. Documentation uses its own **accent-low**, **accent**, and **accent-high** roles so links and selected navigation remain part of Starlight’s reading hierarchy.

### Secondary

Use **Pixel violet** for the display accent. **Model field**, **Recorded event field**, and **Query field** separate the diagram’s container, history, and current answer. **Model active accent** identifies connectors, the accepted record, and the stock value; it has its own light-theme teal.

### Neutral

Use **Page ink**, **Supporting ink**, **Construction line**, and **Control hover** on the page ground. The model has a separate ink, muted ink, and line set so its content remains legible on the stronger field. Starlight’s gray roles handle reading text, borders, and nested surfaces; its `white` and `black` names are semantic aliases and reverse visually in light mode.

Documentation has its own paired reading grounds and gray ramp. Dark articles use violet ground with cyan links; light articles use a near-white ground with violet links. The docs surface fills table headings, and the docs line supplies table and pagination separators. These roles preserve the homepage palette without reusing its stronger model field.

**The Theme Pair Rule.** Apply dark and light roles as matched sets. The page action and the model active accent are separate roles: the light model uses readable teal while the light page action remains violet.

The sidecar’s eight-step tonal ramps are generated swatch previews. They are not additional implementation colors; the frontmatter records the actual source values.

## Typography

**Display Font:** Sansation, with Manrope and sans-serif fallbacks. **Body Font:** Manrope, with sans-serif fallback. **Accent Font:** Pixelify, with monospace fallback. **Event Font:** the native monospace stack recorded in `event-name`.

All three authored families are self-hosted WOFF2 files with `font-display: swap`. Sansation’s light visual weight gives broad headings space; Manrope handles body copy and navigation. Pixelify appears on the hero’s “build” word, while event identifiers retain code-like clarity.

### Hierarchy

| Role | Use and responsive behavior |
| --- | --- |
| Display | Homepage title; `clamp(40px, 8vw, 58px)` with line height `1.08` below 760px. Each opening phrase occupies its own line on mobile. |
| Headline | Product heading; `clamp(34px, 6vw, 42px)` below 760px and 32px below 390px. Community heading is a smaller supporting display role. |
| Title / body | Supporting headings use 23px desktop / 22px mobile; reading text remains 18px in both layouts. |
| Lead / action | Mobile lead is 19px at line height `1.65`, becoming 18px below 390px. Mobile primary action is 20px; its supporting prerequisite text remains 16px. |
| Diagram label / event / query | Semantic labels, recorded event identifiers, and the numeric answer. SVG values are viewBox units: desktop query value is 55, compact 50; event identifier is 26, rising to 28 in the compact desktop strip. |

The hero explanation has a 65ch maximum, reduced to 43ch on mobile. Supporting product copy uses 43–48ch measures. Documentation uses the `docs-title`, `docs-heading`, `docs-subheading`, `docs-body`, and `docs-lead` roles. Prose and list text use 18px type with 1.8 line height; code and tables use 16px. The native code font remains Starlight/Expressive Code’s monospace font. Below 49.99rem, page titles become 2rem, second-level headings 1.5rem, and lead copy 1.125rem. Topic links use 16px text; the local contents outline uses .9375rem. Keep essential article and example text readable rather than reducing it to fit.

**The Geometric Voice Rule.** Use Sansation for expansive homepage headings, Manrope for explanation and controls, Pixelify for the selected display accent, and monospace for event identifiers.

## Layout

The homepage’s centered shell stops at 1536px and uses the fluid gutter token. The masthead has a 72px minimum height and a bottom rule. The opening starts 48px below it, with 24px between title and description and 32px before the action. The model begins 48px after that action. The full-width model overhangs content by 20px above 1000px.

The product introduction, benefit pair, evidence section, and community section share equal columns and a 64px gap, reducing to 40px below 1200px. The model-to-next-heading separation is 96px (48px margin, rule, 48px padding). Major sections close with 96px of space, reducing to 56px on mobile. Related blocks use 16–32px gaps; the product intro and benefits are separated by 48px on desktop and 32px on mobile. Evidence uses plain entries separated by a rule, keeping sources readable without introducing a card grid.

| Breakpoint | Implemented adaptation |
| --- | --- |
| At most 1200px | Shared column gap becomes 40px; diagram role/detail labels become 24 viewBox units to compensate for scaling. |
| At most 1000px | Diagram switches to the compact SVG, capped at 380px wide and centered. The field retains full content width with 24px side insets and no overhang. |
| At most 760px | Page gutters become 24px, content columns stack, headline phrases occupy separate lines, and action reassurance moves below the button. Navigation uses the familiar Docs label; GitHub remains in the community section and footer. |
| At most 390px | Page gutters become 18px and diagram insets 12px. Theme and navigation controls retain 44px hit areas. |

The spacing scale uses 8, 16, 24, 32, 48 and 96px. The diagram uses authored geometry; its compact text remains at least 16px rendered at the supported 320px minimum width. Do not restore tiny text to fit a shape.

Documentation uses Starlight’s native topic sidebar, page title, article, and right-hand local contents outline. The topic rail is 16rem, the header 4.5rem, and the article width 48rem; at 100rem viewport width, the article expands to 50rem. Content gutters use the recorded fluid docs token. The title starts with 3rem top padding, reducing to 1.75rem below 49.99rem. Article headings use content-driven spacing rather than full-screen sections.

The two routes use ordinary browser scrolling. There is no snapping, persistent teaching widget, section-height reservation, or scroll-driven example state. On phones, native Starlight navigation and contents controls frame a full-width article. Tables scroll horizontally within their own content when needed. The installer and example task wrap visually while preserving the exact copied text. Print removes panel padding and uses black article text.

## Elevation & Depth

The homepage is flat: depth comes from the violet model field, darker event entry, separate query fill, and thin construction lines. Page dividers use a 1px stroke. SVG model boundaries use 1.6 units; internal ledger rules use 0.7 units; connectors use 1.5 units. These values scale with the SVG.

**The Flat Field Rule.** Use tonal contrast and fine strokes to establish homepage depth. The implemented homepage adds no box shadows to its controls, model field, or product sections.

Documentation uses subtle tonal table headings, fine separators, and restrained code frames. Expressive Code frames and pagination links have no box shadow. Starlight retains its surrounding search and navigation behavior.

## Shapes

Controls use gently rounded corners: the action, theme control, and model container have separate radius tokens. On mobile the model takes its smaller recorded radius. Straight page rules and an eight-pixel navigation square supply crisp structure.

The model’s shapes carry meaning: a slanted command parallelogram, a decision diamond, a nearly square ledger frame, and a rounded query result. Ledger frame and event row corners use SVG radii of 4 and 2 units; the query uses 14 units on desktop and 12 on mobile. Preserve these distinctions when reusing the model vocabulary. The original logo keeps its outline and geometry.

Documentation uses the inline-code radius for short identifiers and the code-frame radius for fenced examples. Tables use simple horizontal separators and tonal headings. The homepage model shapes remain specific to its illustration.

## Components

### Actions and theme control

Primary actions are solid, high-contrast links with the action radius and recorded padding. Their minimum height is 62px, reducing to 56px on mobile with 20px horizontal padding. Hover brightens the primary action by `1.06` and moves the arrow 4px right over 180ms. Text actions use the accent, a 44px minimum height, an underline on hover, and the same arrow movement.

The theme control is transparent at rest and gains the hover field on pointer hover. It is 44px square on desktop, 34×40px on mobile, and 30×40px at the smallest breakpoint. Its SVG icon and accessible label announce the target theme. The homepage and Starlight share the saved `starlight-theme` preference.

Homepage keyboard focus is a 3px accent outline with 6px offset; documentation uses a 2px Starlight-accent outline with 4px offset. The homepage skip link becomes visible on focus. Preserve these treatments alongside pointer states.

### Navigation

The ruled masthead pairs the original logo and NeoHaskell name with simple text destinations. Documentation has a small accent square on desktop; GitHub uses an authored external-link SVG. The footer names Documentation, GitHub, and Discord directly, with 44px-tall links. The mobile masthead uses Docs and keeps theme access; GitHub is available in the community section and footer. Documentation uses native Starlight topic links with a filled accent-low field for the current page, plus a right-hand contents outline for second-level headings. Search, mobile navigation, and pagination remain native components.

### Evidence, community, and next steps

The hero and metadata introduce NeoHaskell as an AI-first language. “Build with AI. Know what you build.” preserves the display treatment while connecting building with understandable behavior. The lower learning link repeats “Learn the concepts” and reaches the same `/learn/` introduction. The primary action explains that no installation is required to begin.

Benefit paragraphs link directly to acceptance/rejection and history-replay tests at an inspected source revision. Source links use 16px text, an underline, and a 44px minimum target height. The evidence section presents the agent workflow and application starter with 18px body text and named destinations. Version/date details use quieter 16px text and name the artifact explicitly. These are dated published releases, not automatically maintained “latest” badges. `PRODUCT.md` records source evidence and verification limits.

A compact community section states that NeoHaskell is under active development, links its dated CLI/framework release, and offers the public repository and verified Discord invite. This status and the release were verified on 10 November 2026. Product principles live in `$neohaskell-positioning`; this design record governs their presentation.

### Event ledger

The signature model is native SVG inside a semantic figure, with a title and description for each responsive drawing. Its darker recorded row, ordered index, `OrderPlaced` identifier, and check mark remain separate from the query’s numeric stock result. Repeated definitions and ledger metadata have been removed so larger role names and content carry the example. The query says “mugs in stock” in every stage; it does not describe the initial stock as an after-order result. The figure includes an illustrative-model label and a ruled product statement. Uppercase model labels identify semantic roles; they are not decorative page labels.

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

## Homepage finish review — 10 November 2026

Fresh learning-example and homepage review: **keep**, after one correction pass. Compact shape/text collisions, connector/label clearance and opening-stock wording were resolved. Both themes were checked at 320, 390, 768, 1024, 1440 and 1600px; essential diagram text was at least 16.62px in those captures. Build, 12 existing tests, normal/reduced/no-JavaScript animation states, theme persistence and the main documentation path passed. Evidence and the exact review scope are stored in `.impeccable/reviews/homepage-2026-11-10/review.md`. This records the review verdict separately from user acceptance.

The subsequent AI-first positioning and concrete-evidence pass also received **keep** from two independent reviewers, with no corrections requested. It preserves the accepted visual identity and diagram, adds direct artifact evidence, and updates product copy and metadata. Build, responsive browser checks, navigation, theme persistence, animation states, and all new GitHub destinations passed. The scope, screenshots, measurements, and source-verification limits are recorded in `.impeccable/reviews/homepage-positioning-2026-11-10/review.md`.
