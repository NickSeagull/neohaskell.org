# Documentation experience

Status: approved by the owner on 2026-11-09 (“yes, this is much better”) as the documentation baseline. Rebuilt and reviewed locally in the Stripe Docs guide-page direction. Build and 39 browser checks pass. Fresh review: ship / keep after exposing Copy on narrow screens and wrapping the installation command. Evidence: `.impeccable/review/stripe-docs/`. The owner's 2026-11-09 rejection supersedes the former content, snapping, persistent widget, and vertically centered lesson layout. Historical captures under `shared-widget/` and `vertical-center/` describe superseded work.

## Current direction

Use ordinary documentation: native topic navigation, search, readable continuous prose, inline examples, comparison tables, and an on-page contents outline. The user explicitly confirmed “Guide pages: flowing prose, inline code and examples” on 2026-11-09. This matches the current implementation. Retain NeoHaskell's logo, Manrope, dark violet/cyan and daylight/violet identity, Astro Starlight, and GitHub Pages. Keep the homepage unchanged.

## Content

`/learn/` explains commands, decisions, events, queries, and rejected commands through a ceramic-mug order. The overview links into the article. Plain-text examples describe the model and are explicitly not executable NeoHaskell or API payloads. `/getting-started/` links the upstream environment instructions, provides the verified skills command, gives a copyable first task, and lists expected accepted/rejected outcomes. Concepts still precede agents.

## Reading and examples

Native scrolling replaces snapping and viewport-height sections. Examples live next to their explanations in document flow; there is no teaching widget or scroll-linked state. Prose is 18px, essential code and tables 16px. Responsive navigation and the contents outline use Starlight's native controls. Tables and code can scroll internally at narrow widths without shrinking text. Search, deep links, code copying, keyboard access, no-JavaScript reading, and reduced-motion behavior are included in validation.

Every new or materially changed teaching example still requires `learning-example-review` under `AGENTS.md`. A fresh combined finish and example reviewer judges current desktop/phone/theme captures; earlier review approvals do not override the owner's rejection.

## Homepage content below the opening

The editorial outline remains proposed, not implemented: explain what the builder decides using concrete behavior; explain what the language/framework supplies using verified capabilities; explain how AI implements a model the builder understands. The homepage retains one opening animation and a direct documentation action.
