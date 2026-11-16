# Homepage feature highlights

## Current implementation: native continuity diagram

Checkpoint: `457f618c5661545e2f23313754c6d626eadde678`. The owner instructed the agent to implement and present the reassessed direction. The new homepage uses a wide authentic IDE view, the complete two-slice source example, and a compact native diagram showing existing and updated checkouts connected independently to their command contracts. The phone IDE view supports native horizontal scrolling and keyboard inspection of the connected query. Existing sections from history onward retain their source and styling. The ice/star images and sidecars are removed from shipping assets.

The active design-feedback skill and repository instructions now require consuming review findings, choosing and building the supported direction, and presenting the verified result. The preceding report-only handoff is superseded. Product and surface records separate rejected attempts from the current direction.

Verification: the 586-page build and copy check pass; Astro check reports zero errors, warnings, and hints; all 20 tests pass. Eight responsive/theme checks at 320, 390, 820, and 1440px verify no page or diagram overflow, at least 16px diagram text, preserved section order, and the two specification slices. All four links and their anchors work. Phone keyboard scrolling exposes the query. The detector reports no findings. Final evidence uses `continuity-*.png` and `continuity-checks.json`; an initial light screenshot had a paint artifact and was replaced after decoding and painting the image. The [fresh review](continuity-reviewer.md) records the bounded verdict. No publication is requested.

## Rejected integrated artwork attempt

The final homepage leads with developer gains. The specification paragraph addresses stale Markdown files and separate documents without naming the DSL or IDE. Its eleven-line example includes a command, its produced event, and a separate query slice consuming that event.

The freezing section now gives two actual illustrative datatype definitions their own artwork: `PlaceOrder` inside ice and `PlaceOrderWithContact`, adding `email`, inside a shiny star. Both are selectable native HTML code. Generated images provide the surrounding material; a solid CSS face keeps ice text contrast consistent. The spec uses a wide copy/code row, and the two datatype illustrations sit side by side on desktop and stack on phones.

The final build passes copy validation, Astro checking with no errors, warnings or hints, and 586-page generation. All 20 tests pass. Eight initial responsive/theme cases passed; targeted final tablet captures verify both definitions fit at 820px after adopting 16px text at widths up to 1100px. Wide desktops retain 18px datatype text. Phone checks confirm selectable code and keyboard scrolling at 320px. All four new links, documentation anchors and theme switching pass. Two shipping WebP assets have saved prompt provenance. The detector reports only the local illustration colors as advisories.

Current evidence is in `integrated-*.png`, `integrated-checks.json`, and the final `tablet-contracts.json`; the latter supersedes the earlier tablet font measurement. The [integrated review](integrated-reviewer.md) covers this composition. The [retrospective](../../retrospectives/homepage-highlights-2026-11-16.md) records the failure analysis and four improved active skills. The older review sections below describe the rejected first pass and remain historical evidence. No publication was requested.

The fresh integrated review returned **ship** with learning verdict **keep**. Its tablet clipping finding was corrected and visually verified in both themes. User acceptance and runtime freezing enforcement remain separate from that verdict.

## Rejected first pass

Checkpoint: `dea24c3e25831fb1fe98a76e565dfae3561b8a22`. The tree was clean before implementation.

## Scope and direction

The owner requested the visual IDE, specification as code with an extremely minimal Event Model DSL example, and code freezing illustrated with ice before the existing homepage sections. These now sit immediately after the unchanged hero. The current request supersedes the earlier homepage prohibition on code excerpts within this narrow scope.

Product: an AI-first language for people building understandable applications with agents. Character: direct, precise, approachable. World: the established violet developer workshop. Moments: the actual IDE interface and an ice-framed deployed contract. Signature: existing pixel headline and meaningful domain shapes.

The initial Unslop inspection found an established identity rather than a redesign need. The relevant gap was that these three requested capabilities were absent from the homepage. The extension uses a wide IDE row followed by two related benefits, with ordinary scrolling and no new scripting.

## Implementation and evidence

`HomepageHighlights.astro` owns the new presentation. Only the English message catalog gains copy. Existing translations are preserved; the new section uses the existing English fallback and declares its English language. Its documentation destinations remain locale-aware and base-path-aware.

The six-line example retains the complete feature, chapter, slice, entity, command and produced event hierarchy. It is an illustrative excerpt using previously defined domain types, not a standalone program. The structure was inspected against `/Users/nick/Work/NeoHaskell/core/service/Service/EventModel.hs` and `testbed/src/Testbed/Stock/Feature.hs`. No NeoHaskell runtime or compiler execution is claimed.

The existing `public/images/docs/mug-shop-ide.png` is reused without modification and opens at full size. Its provenance and disconnected backend are recorded in [the source evidence](../model-evolution-2026-11-13/source-evidence.md). It demonstrates the actual interface with illustrative shop data, not an executed deployment workflow.

Code freezing follows the owner-approved intended deployment model. Source inspection does not establish deployed-contract enforcement. The graphic keeps `PlaceOrder` frozen alongside `PlaceOrderWithContact`; it does not imply that deployment freezes every future feature or makes consumers migrate together.

## Unslop passes

1. Spacing uses the existing rhythm: 64px desktop section padding, 80px column separation, 24px copy gaps, and a single-column phone layout. Existing brand colors, neutral separators, and SVG action arrows remain.
2. Copy leads with the three requested benefits. No badges, captions, repeated reassurance, or explanatory footer rows were added. The two state labels distinguish deployed and new behavior in the freezing example.
3. Typography retains Sansation and Manrope, with a plain system monospace stack for code. The example stays at 16px; frozen identifiers are 18px on desktop and 16px on phones. Narrow snippets use native horizontal scrolling with keyboard focus.
4. The layout varies a substantial screenshot row with two related benefits. The screenshot links to its full-size asset; each benefit links to the relevant existing documentation anchor.
5. Native SVG facets and icicles surround the frozen contract. The requested ice material is confined to this graphic. No new animation, image generation, runtime dependency, or interaction was introduced.

## Validation

`npm test`: 20 tests passed. `npm run build`: copy check, Astro check with zero errors/warnings/hints, and 586 generated pages passed. `git diff --check` passed.

Browser checks on the restarted `http://127.0.0.1:4323/` cover 320, 390, 820 and 1440px in dark and light themes. All eight cases have no page overflow, the expected section order, six code lines, and at least 16px code/diagram type. The theme control works; all four feature links return HTTP 200 and documentation anchors exist. Spanish navigation retains its locale while new copy falls back to English. The saved `checks.json` records computed sizes and snippet overflow.

Four current element captures show all new content and surrounding explanation at desktop and phone sizes in both themes. They were opened at native size before fresh independent review. Screenshot files and the local check script remain ignored artifacts.

The detector's two font warnings were resolved by using `ui-monospace, monospace`. Its remaining advisory colors belong to the explicit ice material; they do not replace the page palette or domain colors. Independent review and owner acceptance are separate.

The fresh combined reviewer returned **ship**, with learning verdict **keep** and no material corrections. The owner subsequently rejected the descriptive copy and crude ice treatment, and requested a second query slice. That feedback supersedes the review verdict. The [independent report](reviewer.md) remains evidence of the earlier review's scope and missed quality bar, not approval of the rejected design. A focused browser check confirmed keyboard scrolling at 320px. Publication was not requested.
