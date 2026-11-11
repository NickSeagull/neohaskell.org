# Homepage content restraint

Checkpoint: `e727d07e01f26e0966ad069060b17c5003f9d007`. Same checkout, local preview at `http://127.0.0.1:4321/`.

The owner rejected auxiliary explanatory text after the previous Unslop review. The correction governs this pass; previous reviewer approval is not owner acceptance.

## Changes

Removed the hero helper row, code caption and metadata footer, code scrolling instruction, model heading and caption, artifact version/date rows, repeated community descriptions, and footer tagline. Code and supporting evidence links now live in the main paragraphs. The exact Counter source, original brand, four model roles, distinct geometry, and animation behavior remain intact. The native code scrollbar follows browser and operating-system visibility preferences.

`AGENTS.md` now explicitly prohibits auxiliary captions and footnotes, middle dots, em dashes, and emojis. Active design and product records follow the correction. `npm run check:copy`, included in the build, rejects forbidden characters in authored source and footnote markup in markup files. Temporary fixtures confirmed rejection of the two punctuation characters, emoji, flag, and Markdown footnote, while ordinary text passes. The fixtures were removed.

## Verification

Build and all 12 existing tests pass. Astro check reports no errors, warnings, or hints. Static generation retains the existing empty-i18n and missing-custom-404 content notices. The preview server remains running.

32 viewport/theme/motion cases and 22 breakpoint-edge cases pass: no page overflow, code unchanged, code at 16px, model text at least 16px, completed stock value 2, accessible label targets present, and no forbidden text or removed auxiliary elements in the homepage. Focused checks cover keyboard code scrolling, theme persistence, 44px controls, no-JavaScript output, source and prose-link contrast, and HTTP 200 for the homepage, concepts, setup, and resources.

Screenshots cover desktop 1440px and phone 390px in both themes, with separate code and model captures. Generated evidence is in `artifacts/after/`, with verification scripts alongside it.

## Fresh review

The independent reviewer inspected the before and after screenshots plus behavior checks. Baseline verdict was simplify. Final verdict: keep the code example, keep the model, and ship the auxiliary-text removal. All three baseline findings were resolved, with no remaining finding within this correction. The verdict covers this scope and does not imply owner acceptance.
