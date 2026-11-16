# Homepage feature highlights

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
