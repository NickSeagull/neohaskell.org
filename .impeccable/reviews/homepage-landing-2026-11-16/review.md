# Homepage landing refinement

Date: 16 November 2026. Starting checkpoint: `90af0f12a4231766e2fceebbc50c3cff794ef699`.

## Scope and decisions

The owner restricted implementation to the homepage, retaining the earlier documentation work. The visual-language skill now records that scope boundary and rejects repetitive possessive heading openings without banning ordinary direct address.

The IDE composition crops the authentic screenshot around its connected model, preserves the opaque overlapping panel and full-image link, and keeps native phone inspection. The specification source moves left into a quieter treatment. Independent checkout paths use equal-height contracts and aligned repeated fields. Existing hero and lower illustrations remain the baseline.

After approving the improved review section, the owner requested abstract prose and subsequently a heading emphasizing the included visual IDE. The selected wording is "A visual IDE, built in." The body explains reviewing AI-generated applications as they grow, without requiring diagram terminology. This is the selected implementation, not an assertion of final owner acceptance.

## Reader prerequisite review

The new repository-local `neohaskell-content-review` skill checks what a reader must already understand against actual preceding explanations, beginning at the homepage and following the introductory documentation. It preserves optional technical evidence and requires context for direct entry. An independent forward test identified three issues, all corrected within homepage scope:

1. Query rebuilding now describes recalculating information from the same history.
2. Frozen behavior now explains the existing and updated checkout instead of relying on unexplained contracts and callers.
3. IDE and specification actions open the model lesson's contextual beginning instead of bypassing it. The frozen-behavior action retains its self-contained target.

The reviewer confirmed these corrections resolve all three findings. Its ambiguity report also improved the skill's handling of out-of-scope link destinations. Documentation prose and translations were not edited.

## Verification

- `npm run build`: copy check passed, zero Astro errors or warnings, 586 pages built.
- `npm test`: 20 passed.
- Both local skills passed the maintained skill validator. Reference paths and whitespace were checked.
- Restarted the single development preview at `http://127.0.0.1:4323`. Final browser checks covered widths 320, 390, 760, 761, 820, 1100, 1101 and 1440 in both themes: no page overflow, equal contract heights, 16px source and fields. All highlight destinations returned 200; the remaining fragment and preview fragment resolve.
- Desktop and phone crops and full-page screenshots were inspected. Earlier checks of the unchanged phone scrolling behavior confirmed keyboard access to both the IDE image and source. Source content is unchanged.

Temporary evidence is under `/private/tmp/neohaskell-landing-only/`: `before-*` captures, `verified-*` final captures, `verified.json`, build and test logs, independent `direction-review.md` and `content-review.md`. Intermediate `after-*`, `final-*` and `candidate2-*` captures predate the final copy; use `verified-*` for the delivered candidate.

These checks establish site rendering, navigation and editorial review. They do not establish reader comprehension or execution of the language's planned capabilities.

The independent visual reviewer confirmed all three composition priorities resolved and kept the teaching examples. It found one phone-heading spacing regression caused by a hidden line break. A literal space fixed that regression; the build and full viewport check were repeated and the refreshed phone image shows "From an idea to a working app" correctly. Its correction review is saved as `final-visual-review.md` beside the temporary evidence.
