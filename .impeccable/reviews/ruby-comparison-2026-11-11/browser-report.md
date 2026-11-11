# Assessment B: detector and fresh-browser evidence

Target: `/Users/nick/Work/neohaskell.org/src/pages/index.astro`; preview `http://127.0.0.1:4321/`; comparison `https://www.ruby-lang.org/en/`. Date: 2026-11-11. Assessment B was independent: no Assessment A output or earlier critique was read. No repository files were changed. No agents were spawned.

## Deterministic scan

Command: `/Users/nick/.agents/skills/impeccable/scripts/impeccable detect --json src/pages/index.astro`.

Exit code **0**, result **[]**, **0 CLI findings**, thus no CLI rule names or line locations. Exact output is `detector.json`. Scope is the one Astro entry file; this clean result is not a complete CSS/component/accessibility audit. In particular, the rendered-page detector observes computed colors that the markup-only scan does not report.

Rendered-browser detector: **9 findings, all `ai-color-palette`**: one “Purple/violet neon text on dark background”; eight “Cyan neon text on dark background.” Full console output plus overlay coordinates are in `detector-browser.json`. Overlay coordinates and source inspection map these to:

| Finding | DOM location | Source location |
|---|---|---|
| Purple/violet | `h1 .pixel-word`, “build.” | `src/pages/index.astro:50` |
| Cyan | `.model-heading > span:first-child`, “An order, made explicit” | `src/components/EventLedger.astro:5` |
| Cyan | Acceptance/rejection test link | `src/pages/index.astro:58` |
| Cyan | History replay test link | `src/pages/index.astro:59` |
| Cyan | Secondary “Learn the concepts” | `src/pages/index.astro:61` |
| Cyan | Agent workflow link | `src/pages/index.astro:72` |
| Cyan | Application starter link | `src/pages/index.astro:78` |
| Cyan | GitHub community link strong label | `src/pages/index.astro:89` |
| Cyan | Discord community link strong label | `src/pages/index.astro:90` |

These are **heuristic false positives for a redesign decision**, not evidence that the site's palette should change. The detector correctly detects cyan/purple against dark backgrounds, but cannot distinguish NeoHaskell's existing identity from a generic generated palette. It does not demonstrate a usability defect, contrast failure, or mismatch with this product. No other browser rules fired.

## Observable homepage comparison

| Evidence | NeoHaskell | Ruby |
|---|---|---|
| Native source examples | **Zero `pre` or `code` nodes** on homepage. Hero includes an SVG model, not language syntax. | **Three examples**, each a native `pre > code`; six matched nodes total must not be mistaken for six examples. |
| Example placement | SVG model begins below the primary CTA. No source syntax anywhere on the page. | Three columns immediately below the illustrated hero; code begins at y≈725px on 1440px desktop. Stacks on mobile; first code begins at y≈601px on 390px viewport. |
| Primary action | “Learn the concepts” → local `/learn/`. At y≈449 desktop, y≈390 mobile. | “DOWNLOAD” → local `/en/downloads/`, at y≈482 desktop and ≈423 mobile. Header also has local Install/Docs destinations. |
| Try path | None on homepage: no installation command, copy action, local runnable example, or “try” CTA. | Each example has a “TRY!” link to `https://try.ruby-lang.org/playground/#code=…` carrying that example in the URL. General “Try Ruby” link below them. These are sibling-subdomain destinations, **not inline execution**. |
| Proof presentation | Explains commands/decisions/events/queries locally; implementation proof goes to exact GitHub commits. | Actual strings, arrays and class syntax visible before the “Why Ruby?” benefit section; quotes from named people and community imagery provide additional proof. |
| Local versus outbound proof | Four substantive artifact links go offsite: acceptance test, replay test, agent workflow, application starter. Releases and community also go offsite. | Source examples are already readable on the page; Docs, Install, Downloads, news and most navigation remain on ruby-lang.org; examples' Try actions go to its playground subdomain. |

NeoHaskell's exact source links are useful verifiable evidence. They are not broken-looking placeholders or generic “learn more” buttons. However, readers must leave the homepage and parse GitHub files to inspect language or workflow details. The site presents an **application model and tooling proposition** much more concretely than it presents **what writing the language feels like**. Ruby answers the latter without a navigation step.

NeoHaskell has 18 anchors in rendered markup: 6 root-relative, 11 external URLs, 1 hash skip link. The six root-relative links lead only to `/` or `/learn/`; the four documentation/concepts anchors all lead to `/learn/`. Counts include footer repeats and are not distinct decisions. Ruby's raw DOM includes hidden mobile navigation/language choices, so its raw anchor total is unsuitable for a visible cognitive-load comparison.

## CTA destination check

Followed NeoHaskell `/learn/` in a fresh browser page: HTTP **200**, title **“Core concepts | NeoHaskell”**, H1 **“Core concepts.”** Intro says NeoHaskell combines a Haskell-based programming language with an event-sourcing framework centered on Event Modeling. It follows a small shop with three ceramic mugs and states that the model can be understood before installing NeoHaskell or using an agent. This matches “Learn the concepts” and “No installation needed.” The primary CTA is functioning and accurately labeled.

Other destinations were inspected as href values, not followed. This run therefore establishes path design, **not** the current response status or correctness of every GitHub or Ruby download destination.

## Actual readability and responsive evidence

Both sites were inspected at **1440×1000** and **390×844**, dark color preference, in separate newly created contexts/pages.

NeoHaskell is not suffering from inherently tiny body text: desktop body examples measured **18px / 29.7px** Manrope, with paragraph widths around **527px**. Product intro is **21px / 34.65px** and ≈589px wide. Hero description is **28px / 42px**. At 390px mobile, hero description and normal paragraphs are **18px / 29.7px**, product intro **19px / 31.35px**, and text column **354px**. Source links are **16px / 24px**; routine links have 44px minimum interaction height. The primary CTA is 62px tall desktop and 56px mobile. Readability is supported by real text metrics, not just screenshot impression.

NeoHaskell H1 is **91px / 93.7px** desktop and **40px / 43.2px** mobile. Mobile headline reads across three lines (“Build with AI.” / “Know what you” / “build.”). The event diagram changes to its own vertical mobile SVG; it does not simply shrink the four-column desktop diagram. At mobile the conceptual illustration consumes a large section before the product explanation (next section H2 around y1253px), but it remains readable. Captured full-page screenshots can show its pre-event state (empty ledger, stock 3); this is an animation-state capture, not proof that an event is never shown. Full interaction timing was outside this bounded evidence pass.

Ruby code is **14px / 23.8px** monospace on both sizes, with 361px-wide code area desktop and 276px mobile. Preformatted blocks' scrollWidth matched clientWidth in these captures; no code clipping/horizontal scrollbar was observed. Code is materially smaller than NeoHaskell body copy, but short lines, syntax highlighting, clear spacing and explicit output comments make it legible. Three code blocks stack to roughly 1,500px of content on mobile; this provides concrete syntax at the cost of a much longer introductory sequence. It is not a reason to copy all three examples.

Neither homepage showed horizontal page overflow at 390px. NeoHaskell full page was around 2760px desktop and 3850px mobile. Do not use the initial Ruby page-height or below-hero top coordinates as stable values: an entrance animation changes those positions.

## Browser timing and evidence reliability

Initial Ruby screenshot after `networkidle` caught an incomplete entrance animation: the center diamond was visible while hero text, figures and code had not appeared. That image would create a false impression of a blank hero. I explicitly waited another **3.5 seconds** in a fresh page and captured `ruby-desktop-settled.png` and `ruby-mobile-settled.png`; these are the authoritative comparison screenshots for the hero and code placement. They visibly show the illustrations, version, Download CTA and code examples. Initial full-page Ruby screenshots are retained only as timing evidence, not the basis of the design conclusion.

NeoHaskell full screenshots: `neo-desktop.png`, `neo-mobile.png`. Detector artifact: `neo-overlay.png`. Browser dimensions, computed styles, hrefs and initial positional data: `browser.json`. Settled Ruby hero details and successful local CTA navigation: `overlay.json`.

## Exact execution, fallback and cleanup status

1. **Native-tool discovery:** searched enabled tool metadata for browser/Playwright/computer capability. No native browser automation tool was exposed; an unrelated artifact image uploader was the only name/description match. Used supplied local Playwright and Chromium executable as fallback. Every assessment page/context was freshly created. No existing user tab was reused.
2. **Mutable preflight:** succeeded. Set `document.title` to `[Human] …`, appended an inline script and read back its executed window flag. Confirmed again before overlay injection. Injected `http://localhost:8473/detect.js`, waited **2.5 seconds**, observed 9 console findings and 9 actual overlay elements. The script did run in the page.
3. **Visibility:** headless automation; no native visibility/presentation API existed. **No user-visible persistent [Human] tab is available.** Only the generated screenshot demonstrates overlays. Do not tell the user that overlays are currently visible in their browser. Browser sessions closed normally.
4. **Server cleanup:** started only the dedicated detector server PID **55599**, port **8473**, from the evidence temp directory. Stopped it with `impeccable live-server stop --keep-inject`; command reported successful stop and subsequent process check found PID absent. The existing preview was left running and returned HTTP **200** afterward. No repository injection occurred; script injection was DOM-only.
5. **Other accounting:** slug **`src-pages-index-astro`**. `.impeccable/critique/ignore.md` absent. Source scan not skipped. No prior critique read. Only one target view, so multi-page detector injection not applicable; `/learn/` was checked solely to validate the CTA. Temp automation scripts removed after report; bounded JSON/screenshot/report artifacts intentionally retained under this directory for parent review. No final snapshot/trend write performed by Assessment B; parent owns synthesis and archival. Questions skipped: Assessment B supplies evidence only; parent owns user-facing questions.
