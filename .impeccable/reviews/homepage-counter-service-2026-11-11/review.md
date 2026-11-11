# Counter HTTP service examples

Checkpoint: `47f35b3a26cfccf23367b1374e002b72b2b8fad6` on `main` in the existing checkout.

## Scope and direction

The owner requested six minimal Counter definitions in two homepage sections: command, decision, event payload, entity, update and query. Boilerplate, deriving clauses, type instances and the event sum are omitted. The approved decision stays unchanged, including `cmd.counterId`, ignored entity/context arguments and the `else do` local binding.

Product: an AI-first language for people building applications with agents. Character: direct, precise, approachable. World: a developer's working page. Detailed moments: the accepted event model and real Counter code. Signature: existing domain shapes and pixel display emphasis. This is an extension within the accepted design, not a new visual direction.

The previous one-excerpt section was captured before implementation. The new scope replaces the old outcome and benefit rows with two focused sections. The homepage's other sections and model behavior remain intact.

## Implementation

The first section pairs the command and event payload with the decision. The second pairs the entity and increment update with the query projection. Headings and main prose establish the existing-counter precondition, actual HTTP routes and inline evidence. Snippets contain only code and accessible names.

The reusable `CounterCode.astro` component renders six raw source files with Astro's static syntax highlighting. Adaptation details and omitted wiring are recorded in `src/examples/README.md`. The inspected upstream starter revision is `cacc8069070721539ae0aac53286ce9492e906a5`. These are simplified excerpts within the starter's service, not a complete standalone program. The NeoHaskell application and upstream tests were not executed during this website task.

## Unslop passes

| Pass | Result |
| --- | --- |
| Spacing | Use the existing 4px scale, 40px introduction-to-code gap and 32px snippet gap. Phone sections retain readable separation without panels. |
| Color | Preserve the accepted violet/cyan and light themes. Source highlighting uses existing tokens. |
| Icons | No snippet icons or new decorative marks. |
| Copy | Replace repeated benefits with the Counter flow, actual routes and inline source links. Clarify that definitions are simplified and tests belong to the starter. |
| Type | Preserve the established families, 18px main prose, 16px code and 25.6px code line height. |
| Layout | Two 5:7 desktop code grids; snippets stack below 1101px, introductions below 761px. |
| Details | One quiet desktop code separator, named keyboard-focusable regions, native overflow and themed 8px Chromium/WebKit scrollbars. |
| Visuals | The code itself supplies the new detail. No generated illustration or enclosing widget chrome. |
| Motion | Static snippets. The existing finite opening model sequence remains unchanged. |

## Review

A fresh reviewer inspected normal-scale desktop and phone captures in both themes before source. Initial verdict: simplify. One material finding: the main prose needed to distinguish the adapted definitions from the upstream implementation and attribute the linked tests to the starter. No correctness blocker was found within the scoped increment flow.

Correction: the main paragraph now says “These simplified definitions”; the linked sentence names “the starter’s tests.” No caption, helper row or scroll instruction was added. The same reviewer inspected the updated captures at 390 and 1440px in both themes and returned **keep**, with the finding resolved. Its verdict covers the six static snippets, surrounding prose, reviewed visual presentation and saved browser checks. It does not establish runtime compilation or measured learning outcomes. Reviewer approval and owner acceptance remain separate.

## Verification

The production preview remains at `http://127.0.0.1:4321/#see-the-code`; the existing server was preserved. `npm test` passes all 12 tests. `npm run build` passes the copy guard, Astro checking and static generation. Astro checking reports zero errors and warnings; static generation retains the existing empty i18n collection and missing docs/404 notices.

The browser batch covers 320, 390, 768, 1000, 1100, 1101, 1440 and 1600px in both themes. It checks exact rendered text for all six snippets, no page overflow, 18px prose, 16px code, accessible region names, keyboard focusability, keyboard horizontal scrolling, theme persistence and no page errors. All six snippets render with JavaScript disabled. Captures at 390 and 1440px include full-page context and each section at native scale.

Local captures, browser results and the independent report are retained beside this review under `artifacts/`. They are generated local evidence and are ignored by Git.
