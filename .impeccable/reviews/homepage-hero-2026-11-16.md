# Hero concept review

Verdict: **simplify**. The headline, language category, action hierarchy, and visual identity work. The overload is the number of relationships the reader must infer, rather than illegible type or an excessive paragraph length. This is a reasoned newcomer review, not an observed comprehension test.

The visitor should understand that NeoHaskell helps them build an application with AI while remaining able to judge its behavior. The visual question is whether the opening provides one understandable example of that control.

## Evidence and scope

Inspected all twelve supplied raw hero, fold, and next-section screenshots at 1440px and 390px, dark and light, before reading the implementation. Inspected before.json, Home.astro, the application branch of HomepageVisual.astro, the English catalogue, PRODUCT.md, DESIGN.md, and the homepage surface record. The hero is 771px tall at desktop and 1078px on phone. Supporting prose is 20px and 18px respectively; the supplied captures do not support a finding that typography is too small. The nearby IDE section explains the developer's problem more explicitly: reviewing generated code file by file can obscure the application as a whole.

The accepted identity is the original logo, violet/cyan palette, Sansation/Manrope, restrained pixel emphasis, split hero, and substantial native illustration. The headline 'Build with AI. Keep control.' and programming-language identity remain. The current architecture content is implementation evidence and an earlier accepted composition; the owner's present concern authorizes reassessing its introductory burden. This review proposes no changes below the hero.

## Findings

1. **The supporting sentence opens three mechanisms before establishing the user's gain.** Location: English hero description, second sentence, 'Pure business logic, a history of every change, and the essentials already built in.' Purity requires knowing an effect boundary; history requires distinguishing application events from source-code changes; essentials requires knowing which recurring setup work the language supplies. Nothing above explains these. The first sentence and headline already establish a useful category and motivation, so keep those jobs and express understandability/reviewability directly. Each mechanism already has its own later section.

2. **The illustration silently changes the meaning of AI.** Location: 'AI agents' and 'Web & mobile' above the application core. The headline means an agent helping create software. The parallel inbound connections and accessible figure description instead describe an agent using the running application. Both are valid capabilities, but the reader must discover two roles for the same word without a transition. Remove both runtime entrances from the hero; the HTTP/MCP section can own shared access. Merely changing the label to 'Your AI agent' would make the confusion worse.

3. **The center asserts control without showing a decision the developer can inspect.** Location: shield beside 'Your business rules', followed by 'Every change recorded' and three order-history slips. These familiar words are not individually difficult. Their required relationship is: intended rule constrains behavior, accepted behavior leaves history, and that history makes a result inspectable. The current visual supplies neither a concrete rule nor a check against one. The shield does not explain purity, and the shipment checkmark can read as a guarantee. Show one real-world rule and its two contrasting outcomes instead.

4. **The infrastructure inventory competes with the opening promise.** Location: Database, Files, APIs beneath the core, connected to the entire application. Readers can recognize all three words and still have to infer whether these are bundled tools, generated outputs, dependencies, or protected effects. The drawing contains five perimeter endpoints, two internal feature groups, and three historical facts. The issue is not a magic maximum of ten objects; it is four explanatory layers sharing one picture. Remove the perimeter and its connectors. Existing capabilities and transport sections can establish the relationships in context.

5. **Phone reading amplifies the dependency problem.** Location: 390px fold and full hero captures. The first fold ends after 'Every change recorded' and the start of 'Order placed'. The reader has seen two meanings of AI, a generic rules block, and a historical claim before seeing the completed example, and the infrastructure inventory still follows. The 1078px height alone is not a failure. The useful correction is a self-contained illustration whose complete rule/outcome relationship fits together at readable size, not smaller type or tighter spacing everywhere.

## One coherent treatment

Keep the headline exactly as approved.

Hero description:

> An AI-first programming language for turning your ideas into applications you can understand, review and change.

Keep 'Explore the docs' and 'See what's included' with their existing destinations and hierarchy. Their purposes are already clear; removing them does not address the conceptual issue.

Keep one substantial native application illustration in the established scene material. Replace its transport and infrastructure endpoints, shield, and historical slips with a single domain example:

- Title: 'Shipping an order'
- Main rule: 'Orders can ship only after payment.'
- First outcome: 'Paid order' paired with 'Can ship'
- Second outcome: 'Unpaid order' paired with 'Cannot ship'

The two outcomes are equally important evidence for the rule. Use simple aligned rows, readable native text, and restrained neutral surfaces. Do not apply event orange to permissions or outcomes that are not recorded events. No fake agent conversation, generated-code badge, automatic verification claim, extra caption, or new interaction is necessary. The original logo stays in the actual site header; the illustration's title should name the domain situation rather than repeat the product name.

This replaces an architecture inventory with one relationship: the behavior you intend can be expressed concretely and checked against cases. It does not by itself prove the implementation or teach language syntax. The next IDE section explains how NeoHaskell makes larger application behavior reviewable; subsequent history, pure logic, transport, and built-in-capability sections provide mechanisms. Those sections already exist and need no edits for this treatment.

## Cuts and preserved behavior

The hero remains a sales introduction with two existing navigation actions. Preserve responsive layout, accessible figure description matching visible content, selectable text, both themes, and the established brand. The diagram has no interactive behavior to retain. On correction review, inspect whether the rule and both outcomes read as one relationship at desktop and phone widths, whether the public copy avoids implying infallible AI or automated proof, and whether the figure remains visually substantial beside the accepted headline.

## Implementation and verification

Starting checkpoint: `2ec039501adb030817af17c469b90c4003208db9`. Unrelated launch-video work is excluded. Implemented the selected treatment in the application branch of `HomepageVisual.astro`, homepage CSS and the English catalogue. Lower homepage sections, docs and translated prose are unchanged. The body copy and diagram remain illustrative target-product positioning, not evidence of executed language behavior.

The single preview was restarted at `http://127.0.0.1:4323`. Twelve viewport/theme checks across 320, 390, 760, 820, 1100 and 1440px passed with no page overflow or clipped outcome text. Example text remains at least 16px; the existing actions return 200 and the capabilities fragment resolves. The hero now measures 610px at desktop and 884px at phone width, compared with 771px and 1078px previously. No text was shrunk to achieve that reduction.

The normal build passed its copy check and Astro validation and generated 586 pages. All 20 existing tests passed. Saved raw before/after hero, fold and adjacent-section captures, metrics, build logs and fresh reviewer reports are under `/private/tmp/neohaskell-hero-review/`. The independent correction review is `correction.md` in that directory. These are rendering and editorial checks rather than a reader-comprehension experiment.

The same independent reviewer returned keep on correction: all five findings resolved, both outcomes visible in the phone's initial viewport, and no further change required within the English hero review scope. Owner acceptance remains pending.
