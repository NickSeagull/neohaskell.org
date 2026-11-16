# Homepage translation verification

Scope: homepage prose, actions, diagram labels, accessible names and metadata in Spanish, Simplified Chinese, Russian, Armenian, Japanese, German, French and Portuguese. Documentation pages are unchanged. The accepted hero and section order are preserved.

Checkpoint: `9dc81ef`.

The homepage's 90 referenced catalog keys are present in all nine catalogs. Newer IDE, frozen-behavior and specification sections now have translations; outdated hero, history and agent copy matches the English intent. Previously hardcoded accessible names and diagram labels now use the catalogs. English language tags apply only to source code and field identifiers. The authentic IDE screenshot retains its original text, as required by the repository translation policy.

The fresh teaching-example review found overlapping Armenian and Russian labels and ambiguous Spanish and Portuguese form labels. Both findings were corrected and independently marked resolved. Translated diagrams retain horizontal connections on desktop and stack each form above its contract on narrow phones, keeping 16px labels.

Final verification:

- Normal build, including copy validation and Astro checks, passed for 586 pages.
- Translation coverage and all 20 existing tests passed. `git diff --check` passed.
- Browser checks passed for all nine locales at 320px, 390px and 1440px in light and dark themes: 54 cases, no page or inspected-text overflow. Example labels, fields and code retain computed 16px text.
- All 162 local homepage navigation destinations, including fragment anchors, passed browser verification.
- Final Portuguese screenshots were refreshed after the formal-address correction. The implementing agent inspected the updated Portuguese and Armenian mobile contract examples. The independent review's earlier screenshot-freshness note is resolved.

Temporary browser evidence is in `/private/tmp/neohaskell-home-translations/verified-checks.json` and the matching `verified-*.png` captures. The review establishes layout and editorial consistency, not native-speaker certification of every language.
