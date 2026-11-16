# Specification document refinement

Checkpoint: `f9cd95997f54a03238ead4c70ea0f82bd46621bc`. The pre-existing untracked `brag-output/` directory is unrelated generated work and is excluded.

The owner asked to move the specification section directly before the included capabilities and make its empty-looking snippet feel like a specification. The section now has its own `HomepageSpecification.astro` component and occupies that position in `Home.astro`.

The chosen document treatment adds a thin outlined sheet, restrained surface and folded corner. Its domain title and ordinary-language requirement explain the order-to-stock relationship before the unchanged eleven-line source. These are substantive example content rather than a widget identity or caption. The source remains optional technical evidence; the benefit paragraph stands without understanding its vocabulary. No source behavior, documentation lessons or translated prose were changed.

## Verification

- Normal build passed the copy check and Astro checks with zero errors or warnings; 586 pages built. All 20 existing tests passed.
- The single preview was restarted at `http://127.0.0.1:4323`. Twelve viewport/theme checks cover 320, 390, 760, 820, 1100 and 1440 pixels in dark and light themes.
- The section appears exactly once, after pure logic/transports and immediately before essentials. Source text matches the previous rendered example. Code is 16px, the requirement is 18px, and there is no page overflow.
- Source fits at 390px and scrolls with the keyboard at 320px. The documentation action returns 200. The direct preview is `http://127.0.0.1:4323/#specification`.

An initial verification script assumed source would overflow at 390px and timed out waiting for scrolling. Inspection showed it fits at that width. The corrected check tests scrolling only when source exceeds its container; it passes without a product change.

Raw captures and checks are under `/private/tmp/neohaskell-spec-document/`, including desktop/phone examples and adjacent accepted sections. Logs are `/private/tmp/neohaskell-spec-build.log` and `/private/tmp/neohaskell-spec-tests.log`. A fresh independent reviewer applied the learning-example and reader-prerequisite skills; its verdict is keep, with no material simplification required. Its report is `review.md` beside the captures. The document treatment is an implementation choice awaiting owner inspection, not recorded owner acceptance or proof of runtime enforcement.
