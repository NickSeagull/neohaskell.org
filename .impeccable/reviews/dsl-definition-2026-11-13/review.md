# DSL definition review

Teaching-example verdict: **keep**. Editorial verdict: **ready**. Material findings: none.

Scope: the added cancellation DSL excerpt and its surrounding final section in `src/content/docs/introduction/event-modeling/index.mdx`, read in the context of the complete lesson. This review does not reopen the accepted page design, contract-evolution argument, or IDE presentation. Owner acceptance and publication remain separate.

The learning goal is to recognize the diagram's feature, chapter, and slice hierarchy in real declarations and follow one complete historical fixture, command, and expected event through `given`, `when`, and `therefore`.

## Visual and editorial evidence

I inspected all thirteen raw PNG captures in this folder before reading the implementation: context, code, and explanation at 1440px and 390px in both themes, plus the horizontally scrolled dark mobile code capture. Code-element captures were viewed at their original scale. The recorded computed code size is 16px at every checked width. Desktop shows the complete hierarchy clearly. Mobile preserves readable type and the existing horizontal scroll rather than compressing syntax. The scrolled capture exposes the right-hand expressions.

The single code block earns its length. Removing the second slice would lose the command/query distinction and the meaning of the chapter; removing the concrete event records would lose the complete rule the owner requested. One chapter, two slices, and one rule are sufficient. Imports, domain declarations, additional rules, and application wiring would distract from this purpose. No decorative label, auxiliary footer, or competing control has been introduced.

The introductory paragraph establishes that the shop's types already exist. The paragraph after the block reconnects its hierarchy to the diagram, and the next explains each unfamiliar rule operation before returning to the implementation's obligation. The existing rejection and stock-query prose supplies the remaining behavioral context without expanding the excerpt into another lesson. The final paragraph completes the specification-in-source argument instead of duplicating navigation. The bold assertions remain easy to recover when scanning the mobile and desktop views.

## Source and formatting evidence

Inspected `Service/EventModel.hs` lines 506-626 and 828-990, `Starter/Counter/Feature.hs`, `Compile/ValidRuleForms.hs`, and `Compile/WrongRuleCommand.hs` in the supplied NeoHaskell checkout. The evidence supports the declaration and rule API shape described in `authoring.md`.

1. Each slice has exactly one primary declaration. The first has `entity @Order` with `command @CancelOrder`; the second has `query @AvailableMugs`. The rule is a sibling of `entity` at slice level, so its context can be tied to that primary command.
2. `produces @OrderCancelled` agrees with the expected `OrderCancelled` payload. The `when` value uses the same `CancelOrder` type as the command declaration. `requestValue @Uuid` supplies the ID reused in the accepted history, command, and expected event.
3. The given `OrderPlaced` and expected `OrderCancelled` retain the same order ID and quantity of one. No dispatch event is supplied. `readsFrom @Order` with subscriptions to both payload types expresses the history the stock answer depends on. Actual entity, command, event-variant, and query instances remain assumptions of the explicitly illustrative domain types.
4. Multiline records put opening braces beside constructors, commas after fields, and closing braces at the constructor indentation. The short cancellation command is a readable one-line record. There is no conflicting local-binding syntax.

This is source inspection, not compilation or execution of the illustrative shop. The excerpt does not establish an implemented stock projection or complete application on its own, and the published introduction does not claim that it does.

## Verification and preservation

The supplied `verification.json` records 19 passing checks: exact rendered source across both themes at 320, 390, 768, and 1440px, 16px code, no document overflow, complete clipboard text, keyboard code scrolling, preserved navigation counts, and no browser errors. These are producer-run behavioral checks inspected by the reviewer; the reviewer did not start another browser or server. Screenshots establish appearance within the captured scope, not measured learning outcomes.

Preserve the exact copied code, native scrolling and Copy affordance, 16px code, the two primary slice declarations, the rule's slice-level placement, and the surrounding explanations. No correction round or recapture is required for this bounded review.
