# Event Modeling introduction

Historical research and first editorial draft. The later [visual-tour correction](event-modeling-tour-2026-11-13.md) supersedes the public title, author mentions, table, and paper exercise below. The primary-source evidence remains relevant.

Research and editorial proposal, 13 November 2026. Website checkpoint: `46f9c39551ab4c8807a810b7f69ea9bddc63a208`. Framework source inspected at `033ae4a570686cd885ca14c6595997d9498d5287`. This record proposes English content only. It does not report a rendered teaching-example review or an executed NeoHaskell application.

## Recommendation

Put one short article, **Understand the application together**, before Core concepts and installation. Its reader outcome is to explain a small behavior with a business stakeholder, identify a missing decision, and write one concrete acceptance example. Keep the existing 61-page plan and its specific destinations. Add this entry lesson rather than turning the documentation into an Event Modeling book or replacing the useful Core concepts article.

Recommended reading order: introduction, Core concepts, installation, project creation, first run. Link the existing Features, chapters, and slices destination as the later explanation of NeoHaskell's model structure. Do not make that structural chapter a prerequisite for understanding why modeling helps. The existing documentation map should introduce the same motivation before its setup journey. The homepage's documentation invitation should enter this learning journey, rather than dropping a new reader straight into environment work.

The correction is about motivation and teaching order. It does not reopen the accepted guide layout, brand, sidebar hierarchy, or substantive existing concepts. Use flowing prose with one small inline story, one exercise, and an ordinary next-page link. No code, setup command, framework module catalogue, interactive editor, or glossary table is needed in the first viewport.

## Primary-source findings

### Adam Dymitruk

In his original [Event Modeling: What is it?](https://eventmodeling.org/posts/what-is-event-modeling/), dated 23 June 2019 and marked as periodically updated, Dymitruk connects an ordered story with screens, commands, and read models. Concrete scenarios describe accepted and unsuccessful behavior. His completeness check asks whether information has an origin and a destination. The article also discusses existing systems and an incremental modernization pattern. These are observations about what he teaches, not independent evidence of universal project outcomes.

Editorial inference: show the reader a customer-facing story and a business question before introducing implementation vocabulary. Use the information-flow check as a question people can ask, not a claim that a valid diagram proves all requirements were discovered. Do not repeat the article's stronger claims about constant feature costs, guaranteed delivery, or eliminated rework as measured NeoHaskell benefits.

### Martin Dilger

Dilger's original [How to Bring Event Modeling to Your Company](https://eventmodelers.ai/docs/blog/bring-event-modeling-company/), dated 29 November 2025, proposes starting with one part of an existing system. Team members model it separately, compare interpretations, and agree the flow together. This directly supports introducing Event Modeling as a way to understand an application already in use, without requiring a rewrite or a full modeling programme.

His [post on using Event Modeling as a communication tool](https://www.linkedin.com/posts/martindilger_eventmodeling-activity-7483772722301526016-tEkL) says dedicated tooling is not a prerequisite and describes sketching a model to clarify a stuck discussion. Treat this as practitioner guidance, not a controlled finding. His [account of stepping back from the first solution](https://www.linkedin.com/posts/martindilger_eventmodeling-activity-7404029955229073409-e4U_) describes discovering missed details by working through behavior before implementing. Do not reuse its personal delivery-time estimate as a general promise.

Editorial inference: the developer's useful contribution is helping people expose assumptions and agree observable behavior. A paper exercise makes that contribution tangible before readers meet the NeoHaskell IDE. The IDE then extends a habit they already understand.

### Distinctions to preserve

Event Modeling describes behavior and information flow. Event Sourcing is an implementation approach that keeps events as the history from which state is derived. They fit well together, but modeling an application's behavior does not require first converting it to Event Sourcing. The intro should make the distinction in two sentences. NeoHaskell's own history and state semantics belong to the next lesson.

Dymitruk uses the terms view and read model. Explain those terms when citing his material, but use the website's established **query** vocabulary when naming NeoHaskell concepts. A business rule in the story becomes part of a **decision** in the next lesson. Avoid suggesting that Decision is a fifth standard Event Modeling sticky-note type.

## NeoHaskell capability evidence

These are source observations at the pinned revision, not installed-release or runtime results.

| Capability | Evidence and boundary |
| --- | --- |
| An application Event Model composed from source-local features | [Service.EventModel](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/service/Service/EventModel.hs) exports features, chapters, slices, command/event/query declarations, rules, `toApplication`, and `run`. The starter's [Counter feature](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/src/Starter/Counter/Feature.hs) provides a concrete composition. Do not imply that merely declaring topology supplies every business decision. |
| A browser visual IDE | [IDE server](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/commands/ide.rs) serves embedded frontend assets and a WebSocket endpoint. [Canvas](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/assets/ide/src/ui/Canvas.tsx) renders model nodes and edges using ReactFlow. [Feature pages](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/assets/ide/src/ui/featurePages.ts) organize the diagram by feature and preserve cross-feature connections with navigable boundary representations. This is implemented source, not merely a design aspiration. |
| Source changes reflected in model data | The IDE server watches source changes. [Sync implementation](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/ide/sync.rs) documents and implements code-to-model synchronization. Source owns fields. Writing fields back into Haskell from the diagram is explicitly outside its scope. There are layout interactions and a [JSON write RPC](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/ide/methods/write_event_model.rs), so describing the whole IDE as read-only would also be inaccurate. |
| Model validation | [Read and validate](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/src/ide/methods/read_event_model.rs) checks JSON Schema and referential integrity. A passing check does not establish business completeness or validate every stakeholder assumption. DSL type checks and executable behavioral rules are separate kinds of evidence. |
| Version scope | [CLI manifest](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/Cargo.toml) and [core manifest](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/core/nhcore.cabal) both declare `0.17.1`. The [starter flake](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/neo/starter/flake.nix) separately pins framework revision `ea75873fbd0da7da39124c82f328c2e70bdca629`. No installation or runtime test was performed for this research. |

The [executable-slices design proposal](https://github.com/neohaskell/NeoHaskell/blob/033ae4a570686cd885ca14c6595997d9498d5287/docs/executable-slices-and-local-generation.md) includes broader future semantic-engine and generation plans. Do not use its roadmap as evidence that every proposed capability currently works. Equally, do not use its future tense to deny the concrete IDE and EventModel implementations already present.

Safe introductory product sentence: "NeoHaskell carries these ideas into the application, with commands, decisions, events, and queries, and a visual IDE for inspecting the event model as a diagram."

Keep version and sync details in this evidence record and later tooling documentation. They are unnecessary interruptions in an introduction whose purpose is understanding behavior.

## Proposed article

Title: Understand the application together

Description: Use Event Modeling to agree how an application should behave before you build or change it.

### Opening

Your value as a developer starts with helping people agree what their application should do. The people running a business know its work, its exceptions, and what customers need. You help turn that knowledge into behavior everyone can discuss and check.

Consider a shop owner asking, "Let customers order mugs online." That sounds clear until you ask when a mug stops being available. When someone adds it to a basket? When the shop accepts the order? When payment arrives? Each answer describes a different application.

**Event Modeling gives that conversation a shared picture.** You lay out what someone sees, what they try to do, what happens, and what information becomes available next. You can use it to design a new application or understand one your business already relies on.

### Follow one order

Our shop has three ceramic mugs available. The owner chooses a simple policy: accepting an order uses the requested stock immediately.

| Moment | What happens |
| --- | --- |
| Before ordering | The customer sees three mugs available. |
| Customer action | The customer asks to order one mug. |
| Shop decision | Enough stock is available, so the shop accepts the order. |
| Recorded fact | An order for one mug has been placed. |
| After ordering | The customer sees confirmation. The available stock is now two. |

Read this story with the shop owner. The important work is agreeing what each step means. Does "available" include mugs already promised to another customer? What should the customer see when an order cannot be accepted?

For this first model, if no mugs remain, the shop rejects the order and explains that it is sold out. There is no accepted order to record, and stock stays at zero. Payment and delivery are separate behaviors we can model later.

[Adam Dymitruk's introduction to Event Modeling](https://eventmodeling.org/posts/what-is-event-modeling/) connects a timeline of facts with the actions and screens around them. That connection gives both business people and developers something concrete to question.

### Find the missing decision

A model becomes useful when it reveals something you have not agreed yet. Suppose the owner now says, "Customers should be able to cancel." Follow the story again: does accepting a cancellation make that mug available to sell? What must the customer see afterward?

Write the unanswered question beside the step it affects. Ask the person responsible for that policy and update the story together. An AI agent can suggest cases and help implement the answer, but the business decision still belongs to you and the people who know the work.

For an existing application, begin with a real customer task and describe what happens today. Compare that story with someone who uses or supports the application. Mark any behavior you have assumed and check it against the running system. [Martin Dilger recommends starting with one small part of a system](https://eventmodelers.ai/docs/blog/bring-event-modeling-company/) to uncover differences in how a team understands it.

### Try it on paper

Take five minutes with one behavior from your own work, such as approving an expense or booking an appointment.

1. Write what the person needs to see before acting.
2. Add the action, the fact that should follow, and what they see afterward.
3. Describe one situation where the action should be refused. Write the expected response.
4. Review the story with someone who knows the work. Record one unanswered question or confirm one assumption together.

For our shop, a checkable example is: "With three mugs available, accepting an order for one leaves two. With no mugs available, the order is rejected and stock stays at zero."

### Carry the story into NeoHaskell

Event Modeling helps you describe behavior. Event Sourcing is a way to implement an application by retaining its events and deriving state from that history. You can model a process before choosing how to store its data.

NeoHaskell is an AI-first language and framework that carries this way of thinking into the application. Commands express intentions, decisions enforce the agreed conditions, events record what happened, and queries answer questions about the resulting state. Its visual IDE lets you inspect the event model as a diagram as you work on the application.

That gives you and your agent a concrete behavior to build and a result you can check. Continue to [Core concepts](/learn/) to follow the same order through those four parts before installing NeoHaskell.

## Presentation and verification handoff

The table is a proposed teaching example, not a reviewed or rendered component. Root should run the required fresh teaching-example visual review after implementation. A small static figure can replace the table if it teaches the same story more clearly; do not include both. If using a figure, distinguish the customer's screen from the recorded fact and preserve an understandable reading order on a phone. Keep labels large enough to read without zooming. A full IDE screenshot is unnecessary here because its dense model would compete with the first explanation.

The draft deliberately leaves the cancellation answer open: its purpose is to demonstrate a question for the business, not silently introduce a new shop policy. The accepted ordering/stock example remains intact. The exercise is manual and is not a runnable NeoHaskell program.

Unslop and continuity check: concrete customer behavior motivates the topic; one domain story supplies the detail; restrained prose avoids delivery guarantees; the existing guide structure and terminology remain. The new lesson prepares the reader to make a useful decision before setup. Translation remains postponed until documentation content is complete.
