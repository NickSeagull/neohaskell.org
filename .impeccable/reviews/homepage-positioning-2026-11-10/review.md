# Homepage positioning and evidence — 10 November 2026

Verdict: **keep**. Two independent reviewers found no material issues. The owner’s accepted layout, palette, fonts, and initial animation remain intact.

## Scope

The owner requested AI-first language positioning, the missing concrete evidence from the earlier critique, and a reusable principle skill. The homepage hero and metadata now establish that identity. Product benefits connect to pinned decision/replay tests; a new evidence section presents the published agent workflow and Counter starter. The community section adds a dated CLI/framework release. The installed `neohaskell-positioning` skill owns reusable product-copy principles, with a discovery pointer in `AGENTS.md`. `PRODUCT.md` records the checked primary sources and their limits.

## Independent reviews

- Content and principle review, `/root/ai_positioning_review`: **keep**. The identity is explicit, claims match inspected artifacts, versions are scoped correctly, and the skill preserves builder agency without coupling positioning to a fixed layout. No changes requested.
- Visual review, `/root/ai_homepage_visual_review`: **keep**. Reviewed desktop and mobile screenshots in both themes before source. The primary action remains clear; evidence is adjacent to the relevant claims; layout and secondary release metadata remain readable. No changes requested.

## Verification

- `npm run build`: passed; Astro check reported 0 errors, 0 warnings, and 0 hints. The static build retains pre-existing empty-i18n and missing-custom-404 notices.
- Browser checks: both themes at 320, 390, 768, 1024, 1440, and 1600px. No horizontal overflow or browser errors. Essential diagram text remains at least 16.62px in the checked viewports.
- Main CTA reaches `/learn/` and its “Core concepts” heading. Theme changes persist after reload. Keyboard navigation starts at the skip link. Normal motion completes; reduced-motion and no-JavaScript states show the completed illustration.
- All seven unique GitHub destinations return HTTP 200. New source links use inspected commit revisions; release links identify the artifact and publication date. Existing Discord route was verified in the preceding homepage pass.
- Skill validation passed using the skill-creator validator with PyYAML supplied through an isolated `uv run --with pyyaml` invocation. Font declarations and palette tokens are unchanged. No new automated tests were added for copy and layout changes.

## Evidence limits and artifacts

This work inspected upstream source, instructions, tests, and published releases. It did not execute the upstream NeoHaskell application or its test suite. Test links demonstrate specified behavior, not a fresh runtime result. There are no customer, adoption, productivity, or production-readiness claims.

`evidence.json` stores browser measurements and navigation results; `links.json` stores URL status checks. Desktop and mobile full-page captures for both themes are stored beside this record. This is a local preview verification, not a deployment signoff.
