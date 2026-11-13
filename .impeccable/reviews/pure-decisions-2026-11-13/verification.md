# Verification

The production build passed with 586 pages and zero Astro errors, warnings, or hints. The repository copy check passed. The new neohaskell-code-examples skill and its updated neohaskell-docs caller passed the skill validator.

Nineteen browser checks passed against the single development server at http://127.0.0.1:4323/learn/, restarted after the change batch. Layout and code were checked at 320, 390, 768, and 1440 CSS pixels in both themes. Prose remains 18px and actual code glyphs 16px. The 320px code block retains native horizontal scrolling; wider views fit the record. The page itself does not overflow. All 64 sidebar destinations and 16 expanded groups remain present.

The record's rendered and copied value preserves the constructor, same-line opening brace, field-end comma, quotes, and closing brace exactly. The integration guide link resolves. No browser runtime errors were observed. Native captures cover the code example, purity introduction, benefits, and worker explanation at 390px and 1440px in both themes. Generated captures and verification.json remain local artifacts excluded from Git.

The first harness iteration measured the pre container's inherited font size rather than the code glyphs. Inspecting computed child styles established the actual 16px size; the corrected check measures the code element and permits its intentional native scroll at 320px. No styling change was needed.

The illustrative record assumes its type exists, as requested; it was not compiled as a standalone program. Product capability evidence comes from the pinned source inspection in authoring.md. No NeoHaskell runtime, benchmark, translation service, or deployment was run. Astro reports no separate production-preview server.
