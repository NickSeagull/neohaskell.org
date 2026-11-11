# NeoHaskell vocabulary

Canonical website and diagram terminology, confirmed by the owner on 2026-11-06. Use these terms in future copy, diagrams, and domain identifiers.

| Term | Meaning in the website's explanatory model | Replaces |
| --- | --- | --- |
| Command | An intent to change application state, such as placing an order for one mug. | Request |
| Decision | Evaluates a command against current state and domain conditions; determines whether to accept or reject it. | Rule |
| Event | A recorded fact about something that happened, such as `OrderPlaced`. | Unchanged |
| Query | Reads application state; its result reflects the state derived from recorded events. | View |

The illustrative online shop follows **command → decision → event → query**. A customer places an order for one mug. The decision accepts it if stock is available, recording `OrderPlaced`; the query then returns two mugs in stock instead of three. When sold out, the decision rejects the command, no `OrderPlaced` event is recorded, and the query result remains zero. Accepting an order consumes one unit of stock in this teaching model. The ledger displays events from this order; opening stock is provided as the example's initial state.

This illustration does not claim that every command in every application emits exactly one event. It illustrates one order and its stock effect; payments, shipping, and concurrent orders are outside this first example. Explain these concepts in documentation before introducing installation and AI-agent setup. The homepage uses the same vocabulary in one initial animation, without an interactive lesson. The visual study's controls are review tools, not approved website components.

Keep the event record distinct from the query result. The history retains the event; the query returns the current state. The AI agent helps the builder create the application and is not the runtime decision maker in this model.

Archived image prompts and prior visual rounds retain their original wording as provenance. This glossary takes precedence for all new and revised work. HTTP requests, browser APIs, and SVG `viewBox` remain ordinary technical terms.
