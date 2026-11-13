# Independent introduction review

Review date: 13 November 2026. Scope: the four English Start here articles, their rendered teaching examples, and their stated capability claims. This is a fresh combined adversarial editorial and teaching-example review. No source or skill files were changed by the reviewer.

Final editorial verdict: **ready** for the four English Start here articles. Final visual verdict: **keep** for their inspected teaching examples and article rhythm. One material finding was resolved in one correction round. No unresolved evidence request remains within this scope.

## Initial finding

1. **The Event Model narrative supplies information the picture does not supply.** In `src/content/docs/introduction/event-modeling/index.mdx:26`, the passage says: "The customer can identify the order on the order screen and request its cancellation." The rendered `Your order` screen contains only `2 available` and `Cancel order`, with its incoming connection from `Available mugs`. The next paragraph asks where cancellation gets the order identity. A reader can reasonably object: "Did this model already solve order identification, or is that the missing connection I am supposed to discover?" This matters to the page's central purpose: finding missing business decisions by inspecting the model. Keep the diagram as the initial sketch and make the prose expose its gap. For example: "The customer also needs a way to identify the order before requesting cancellation." Introduce the diagram as a first sketch if needed. Preserve the following concrete questions, the accepted stock transitions, and the existing diagram geometry. This needs a local prose correction, not more nodes or interface explanation.

Correction score: **resolved**. The introduction now calls the model a "first sketch", and the passage says: "Cancellation needs the identity of the order; the stock answer alone does not supply it." The fresh desktop capture shows this directly beside the unchanged diagram. The missing-identity question now develops an explicitly observed gap instead of contradicting an asserted capability. No second correction round is needed.

## What the reading establishes

The first page has a firm, recognizable thesis. Its opening assertion about developer value leads through concrete shop questions, disagreement between people, recurring assembly work, and the pleasure of understandable implementation. The shop now demonstrates judgment without hijacking the page into a stock tutorial. Semantic bold exposes the main claims when scanning; paragraphs remain connected when read continuously. The final paragraphs explain how the same business concepts support implementation review and responsibility. They do not duplicate the native next link.

The history page makes the need for events clear before naming Event Sourcing. Order versus breakage demonstrates lost business meaning more effectively than an abstract ledger claim. The comparison table is compact and useful. Snapshots are introduced as saved calculations, and the final question about future explanations completes the argument without a promotional closing.

The commands-and-queries page distinguishes intention from acceptance before introducing the command. The email example earns its place by showing a separate failure mode and a focused test. Queries are maintained answers, with reading distinguished from maintenance and delayed answers distinguished from permission to order. The prose does not imply that an AI agent makes domain decisions at runtime.

The final page connects the prior concepts to cancellation, shared order status, bounded work, and inspection of generated changes. Its growth claim is an aim, with an illustrative comparison rather than a benchmark. With the order-identity correction, the examples consistently return to the page's purpose.

The owner's language-first identity correction is also satisfied. The first page now says "A language that takes on the assembly work" and "We build these capabilities into the language". The four articles no longer use framework as the product's name or category. The opening, integrated tools, judgment, and enjoyment arguments remain intact. Current `PRODUCT.md`, `GLOSSARY.md`, and the positioning skill distinguish the language from actual framework components and the named One Person Framework philosophy. The revised desktop and phone captures preserve the original paragraph rhythm and semantic emphasis.

## Rendered example assessment

Visual verdict: **keep** for the inspected diagrams, history table, and illustrative command. The central learning goal is to distinguish business facts, requested changes, maintained answers, and missing connections while following the same shop process.

Native-scale 390px and 1440px captures were inspected before source implementation. Evidence included the introductory headings, customer story, history comparison table, decision flow, query flow, connected shop Event Model, conceptual growth comparison, phone cancellation end state, and the lower introductory assembly-work and happiness sections. Light and dark themes were represented. Full first-view captures were also inspected. The complete plain-text command is readable in both desktop themes. Fresh `command-dark-390.png` and `command-light-390.png` resolve the initially incomplete phone evidence: all three lines fit at readable size with the Copy control clear of their text. Fresh `language-*` captures supersede the earlier `framework-*` captures for the final identity assessment.

The static diagrams require no added controls or changed-state interaction. Command, event, and query colors remain meaningful; numbers and labels carry the teaching content. The phone Event Model preserves readable geometry through horizontal scrolling, and the captured end state reveals the cancellation half. No auxiliary caption or helper row is needed. Preserve the order/cancellation sequence, accepted facts versus intentions, and keyboard access to horizontal overflow.

Saved `verification.json` reports 155 passing checks and no failures. Its inspected desktop/phone entries report 18px prose, 16px examples, normal zoom, and no page overflow. This supports the observed legibility; the verdict also rests on reading the rendered paragraphs and scanning their emphasis. Saved keyboard-scroll checks support access, but were not rerun by this reviewer.

## Evidence boundaries

Capability claims were checked against `PRODUCT.md`, `GLOSSARY.md`, and the supplied source evidence at framework revision `033ae4a570686cd885ca14c6595997d9498d5287`. The command execution path, separate external actions, snapshots, query maintenance, and source-to-model IDE statements fit that evidence. No runtime, speed, staffing, or correctness guarantee is established by this review. The One Person Framework philosophy is an approved design position, not a staffing benchmark that requires public disclaimers.

Technical verification, editorial review, visual review, and owner acceptance remain separate. The owner accepted the stronger prose direction during this review and then requested primary identification as a language. Prior reviewer verdicts were not used as evidence for this assessment.
