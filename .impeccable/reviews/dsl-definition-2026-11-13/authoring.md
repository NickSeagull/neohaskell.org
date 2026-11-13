# Event Model DSL definition example

Checkpoint: `32cb7b2d11feb8dc148ea1c55872cf3a8941e735`, clean before changes. The owner requested a code example defining the Event Model, missing from the completed lesson.

Immediate learning goal: recognize the diagram's feature/chapter/slice hierarchy in a real DSL declaration and see one Given/When/Then rule beside its command. The example focuses on the Cancel order chapter and its two slices. The shop's domain types are illustrative and assumed defined, as the main prose states. It is an excerpt, not a standalone application. The other chapter, imports, type declarations, decision implementation, query implementation, and application configuration are outside this example's task.

Preserve the current guide, native syntax highlighting and Copy affordance, 16px code, records with constructor-line opening braces and field-end commas, and native horizontal code scrolling. The accepted diagrams, IDE screenshot, contract-evolution argument, target-design boundary, and navigation remain unchanged. This narrow addition requires no new diagram or interaction.

Source inspected at NeoHaskell revision `033ae4a570686cd885ca14c6595997d9498d5287`: `core/service/Service/EventModel.hs:506-626` defines feature/chapter/slice hierarchy, a single primary per slice, command/event association, and query subscriptions; lines 828-990 define rule, requestValue, given, when, therefore, and event builders. Rules sit at slice level, beside entity/command, not inside the produces builder. `core/test/Service/EventModel/Compile/WrongRuleCommand.hs` confirms that placement while intentionally supplying an invalid command type. `Compile/ValidRuleForms.hs` confirms when/therefore forms. `neo/starter/src/Starter/Counter/Feature.hs` demonstrates the production hierarchy and query subscriptions. Source inspection establishes API syntax and placement; the invented shop excerpt is not compiled in this website repository.

The accepted-order fixture supplies an order ID and quantity; no dispatch event has occurred. The expected cancellation event keeps that identity and quantity. The stock query subscribes to both order placement and cancellation. Rejection after dispatch and stock-query rules remain in the surrounding prose rather than adding another code exercise.

Direction: the existing developer guide; precise and approachable; current quiet code frame and typography; one code excerpt as the added teaching artifact; the same cancellation names connect diagram and source. The fresh [Astra review](review.md) returned visual keep and editorial ready with no material findings. Local build and browser verification passed. No translation or publication.

## Verification

The production build passed with 586 pages and zero Astro errors, warnings, or hints; the repository copy check passed. Nineteen browser checks passed on the single restarted development server at port 4323, across 320, 390, 768, and 1440 pixels in both themes. Code remains 16px, page width is contained, and native horizontal code scrolling works by keyboard. All 64 sidebar links and 16 expanded groups remain. The rendered code lines and clipboard contents exactly match the authored snippet. No browser errors were observed.

The first harness used innerText, which introduces an extra newline for each rendered blank line. Inspecting the DOM established that source tokens and clipboard were intact. The final check reconstructs the renderer's line elements and preserves their actual content and blank lines. No product change was needed. Raw captures include the whole code block, surrounding context, explanation, and the phone's scrolled end.

Source inspection establishes the DSL forms and scope; the illustrative shop types are not defined or compiled in this website task. No runtime, translation, or deployment was run. Astra returned visual keep and editorial ready with no material findings. Owner acceptance of the completed addition remains separate.
