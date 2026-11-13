# Translation and publication, 13 November 2026

The owner authorized translation of the current documentation followed by deployment. The English checkpoint is `82b66f72f9db6e7628543ac5193efa15c0bb614f`.

## Scope

Translate the 64 documentation pages, the site catalog, and the documentation controls into Spanish, Simplified Chinese, Russian, Armenian, Japanese, German, French, and Portuguese. Preserve executable examples, source identifiers, links, component structure, semantic diagram colors, and the accepted English lessons. Translate lesson diagram labels through the same catalog as the site.

Restore the translated content loader and make translation freshness a required deployment check. Keep the single local development server at `http://127.0.0.1:4323`. Publish the current branch through the existing GitHub Pages workflow at `https://nickseagull.dev/neohaskell.org/`.

## Translation evidence

The maintained workflow uses one sequential `gpt-6-luna` call at maximum reasoning effort per language. Saved responses and invocation metadata remain in the ignored `.i18n/runs/` directory. Format corrections are revalidated with the maintained `apply` command, without another model call. The manifest records source and translated-file hashes.

Validation preserves executable code and inline identifiers, localized routes, frontmatter configuration, Markdown structure, catalog placeholders, and the repository's punctuation rules. Diagram names in explanatory prose match the translated labels. English labels describing the actual IDE screenshot and code remain English.

Structural validation and visual review do not constitute native-speaker editorial certification.

## Rendering corrections

Translated Event Model columns allow longer labels while preserving 16px text and keeping connectors, vertical slice boundaries, and chapter arrows aligned. Portuguese needs slightly wider columns for the shop action. Armenian needs wider columns and taller replay rows; the replay cursor derives its movement from the row height. Growth-chart axes size themselves to the translated label. Japanese and Chinese retain upright vertical glyphs. The English dimensions and accepted interaction remain intact.

The homepage event-sourcing link now opens the history lesson in the selected language. On the 404 page, the language menu opens each language’s home instead of constructing unavailable localized 404 routes. The IDE screenshot respects the GitHub Pages base path.

## Release verification

Final build, route, interaction, and deployment results will be recorded after all language batches finish. The adjacent teaching review reports record visual findings and their resolutions.
