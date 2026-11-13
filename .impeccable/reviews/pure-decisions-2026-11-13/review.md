# Pure decisions review

Editorial verdict: **ready**. Visual example verdict: **keep**. No material findings or correction round required.

## Scope and method

Fresh combined adversarial reader and learning-example review of the complete `src/content/docs/learn/index.mdx` lesson, with visual review focused on the changed record, purity argument, benefits, and integration explanation. Read the applicable progressive-explanation, example-review, record-formatting, and Unslop instructions, plus `AGENTS.md`, the authoring purpose, product direction, glossary, and source evidence. Inspected all sixteen supplied light/dark captures at 390px and 1440px before reading the page implementation. The author subsequently confirmed that the captures and `verification.json` were final.

The immediate learning goal is to see that a command carries an intended change, a pure decision applies business policy, and a worker performs the requested external task after the application has made its choices.

## Editorial assessment

The complete argument meets the stated purpose. The opening establishes why an accepted fact differs from a customer's request. The constructed record gives the request a concrete shape, and the existing decision diagram returns that example to the stock rule. The purity section then explains the constraint before presenting its consequences. Integrations arrive only after the reader has a reason to ask how an application with pure business logic performs useful external work. Queries complete the same shop scenario without displacing the new explanation.

The five benefits contain distinct, concrete development actions: generate stock cases, retain failing inputs, compare old and new rules, replace providers while preserving policy, and inspect or reuse calculations. Their bold openings support scanning; the paragraphs explain the causal link rather than merely promising simplicity. The concluding purity paragraph asserts NeoHaskell's normal application structure firmly and distinguishes developer policy from execution machinery. It is substantive, not a generic closing.

The integration section is short relative to the purity argument and maintains the requested worker boundary. The email worker receives its recipient and message; choices about acceptance, stock, and confirmation recipients remain in application logic. The section does not introduce implementation languages or HTTP. Its final source link supports the next practical topic without duplicating page navigation.

## Evidence and claim boundaries

Source snapshot `033ae4a570686cd885ca14c6595997d9498d5287` supports the described separation. `Decider.hs` exposes a closed decision description with no arbitrary effect lift; `Service/Command/Core.hs` returns `Decision` from the application decision contract. The interpreter's controlled identifier and protected-value operations remain distinguishable from application-authored database, email, or payment calls. The lesson does not claim that the runtime interpreter itself is effect-free, and its deterministic acceptance example is expressly the stock rule.

Integration ADR 0008 separates pure application configuration from effectful package implementation. `Integration.hs` exposes the effectful action, while `Service/Application/Integrations.hs` describes event subscriptions and workers. These support the provider boundary and the statement that an email failure does not undo an already recorded accepted order. Provider replacement is scoped to preserving the stock policy, not a promise that migration requires no other work. No material unsupported claim was identified within this review scope. The runtime and the illustrative record were not executed by this reviewer.

## Visual assessment and validation

The four-line record is the smallest useful example for the requested concept. Its opening brace sits beside `PlaceOrder`, the separating comma ends the product field, and the closing brace has its own line. The two visible fields directly express the requested mug order. A declaration, annotation, warning label, or extra control would add a second teaching task and is not needed. Copying is the only control; the snippet remains readable without operating it.

At 390px and 1440px, both themes show the complete record with readable indentation and syntax colors. The surrounding explanation and heading keep its purpose apparent. The purity heading, emphasized thesis, concrete stock test, and benefit openings retain a useful reading hierarchy on phone and desktop. The integration section has clear paragraph breaks and no auxiliary caption or identity row. Preserve the native code block, meaningful field names, record punctuation, semantic diagram colors, and existing distinction between command, accepted event, and query answer.

The saved verification reports 19 passing browser checks, including 16px code and 18px prose across 320px, 390px, 768px, and 1440px in both themes; no page overflow; native code scrolling at 320px; exact copied punctuation; a resolving integration link; and no browser errors. This reviewer inspected the 390px and 1440px screenshots and the saved results, rather than independently rerunning those checks. The author reports a passing 586-page build with zero errors, warnings, or hints. Visual appearance and saved behavior checks do not establish measured learning outcomes. Owner acceptance remains separate and pending.
