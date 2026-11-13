# Progressive introduction editorial proposal

Checkpoint: `b193e3f`. Proposal only, not a rendered or executed lesson. The current owner instruction supersedes the earlier scenario-only opening: substantive motivation is required; slogans and direct second-person address remain excluded.

## Route plan

| Order | Title | Route | Existing material |
| --- | --- | --- | --- |
| 1 | The work behind the code | `/introduction/` | Shop story figure, concrete business-policy questions |
| 2 | Keep the facts | `/introduction/history/` | New compact stock/history comparison, no code |
| 3 | Protect changes and answer questions | `/learn/` | Existing decision and query figures, accepted/rejected cases |
| 4 | Connect the whole process | `/introduction/event-modeling/` | Full shop Event Model, cancellation and existing-system discussion |

Use sidebar label Why NeoHaskell for page 1. Keep these four pages under Start here. Move installation, project creation, first run, first response, project files, agent setup, and troubleshooting to Build your first application. Preserve existing route destinations. This separates design prerequisites from toolchain tasks without adding a second parallel introduction.

The draft below is intended as complete article prose. Figure placement notes belong to implementation, not the published text. Preserve existing guide typography, reading width, semantic colors and quiet chrome. Do not add learning-objective cards, term badges, exercise panels, or explanatory figure footers.

## Exact draft

### Page 1: The work behind the code

Software development begins with understanding work: what people are trying to accomplish, which promises a business makes, and what must happen when something goes wrong. Writing code turns that understanding into a working system. Choosing the right behavior comes first.

That work often involves uncomfortable questions. What happens when the business cannot keep a promise? Which person may make an exception? Is the current process a deliberate policy, or a workaround everyone has learned to tolerate? An application can implement an answer precisely and still solve the wrong problem if nobody asks.

AI makes this responsibility more visible. An agent can produce an implementation from a description, suggest alternatives, and help explore unfamiliar code. It cannot settle an unresolved business policy merely by producing a working program. A successful build does not establish that customers, staff, and developers meant the same thing.

The developer's contribution includes asking those questions, mapping the process, and choosing tools that make the agreed behavior practical. Asking questions, mapping the process, and choosing suitable tools remain essential whether the code is written by hand, with an agent, or through a mixture of both. Understanding the application makes it possible to judge a proposed change and decide whether to keep it.

#### A shop with three mugs

A shop owner asks for online orders. The shop has three ceramic mugs available. Before choosing a database or generating a checkout screen, several questions affect the design:

- Does adding a mug to a basket make it unavailable to other customers?
- Does the shop promise the mug when it accepts the order or when payment arrives?
- If an order is cancelled, when does its mug become available again?
- What should happen when a customer orders more mugs than remain?

For this first example, accepting an order immediately uses the requested stock. The quantity must be positive, and enough stock must be available. The shop starts with no orders. Accepting an order for one mug leaves two available.

[Place existing story figure here.]

These are choices for this shop, not universal rules of online commerce.

#### Why NeoHaskell makes technical choices

NeoHaskell is an AI-first language and framework built to give application behavior a common structure. It chooses an event-based history, separates the decision to accept a change from work with external systems, and gives changes and questions defined places in the application.

A team can build the same approach with another language and selected libraries. It must then choose and maintain the conventions that join those parts. NeoHaskell makes those choices part of the framework, so a developer or agent does not have to invent a new arrangement for each feature.

The aim includes making development more enjoyable: spending attention on the shop's rules instead of repeatedly deciding where validation belongs or how another interface reaches the same behavior. Conventions do not remove difficult business decisions. They provide a consistent place to express, inspect, and test the answers.

The first of those choices concerns what the application remembers. Continue to [Keep the facts](/introduction/history/).

### Page 2: Keep the facts

The shop had three mugs available. Now it has two. That number answers how many remain, but it does not explain what happened.

Perhaps a customer ordered one mug. Perhaps one broke. Perhaps a stock count found that the original number was wrong. All three situations can produce the same change from three to two. They have different consequences: an order creates work for dispatch, breakage may require a replacement, and a counting correction should not become a sale.

#### A value, a snapshot, and a fact

An application can replace its stored stock value with two. To explain the change later, it must retain additional information somewhere else.

Keeping successive snapshots preserves more: stock was three, then two. Comparing these two snapshots reveals a decrease of one. The numbers alone still cannot distinguish an order from a broken mug.

An event records the business fact. `OrderPlaced` says that an order was accepted, with its product and quantity. A different kind of fact would describe breakage or a corrected count. The meaning is recorded when the change happens, rather than guessed later from the difference between two values.

[Place a compact comparison here: current value 2; snapshots 3 then 2; event OrderPlaced, quantity 1. The prose, not an extra caption, supplies the alternative explanations.]

This does not mean an ordinary database cannot preserve history. It can store events, audit records, and snapshots. The difference is which records the application treats as authoritative and whether they retain the business meaning needed later.

#### Derive the present from the history

NeoHaskell uses recorded events to derive application state. This approach is called **Event Sourcing**. In this small example, the agreed opening stock is three. Applying the accepted order for one produces a current stock of two.

A later cancellation can record another event and return the mug to available stock. The order event stays in the history. The application can distinguish an order that was cancelled from an order that never existed.

This also separates the facts from a particular calculation. If a stock calculation contains a bug, correcting that calculation and applying the retained history again can rebuild the derived state. Replaying an order does not mean placing it again, charging a customer again, or undoing an external payment.

Snapshots can still help an event-based application avoid recalculating its whole history each time. They save a derived state at a known point, allowing later events to be applied from there.

#### Remember enough to answer later

History only contains what was recorded. An event with a product and quantity cannot explain who approved an exception unless that information was also retained. Event design therefore returns to business questions: which facts will staff need when investigating an order or explaining a decision?

Keeping history also creates work. Old event shapes must remain understandable, and a corrected interpretation must be checked against existing records. The benefit is a retained account of business changes, with enough information to calculate useful answers again.

Before a fact can enter that history, the application must decide whether the proposed change is allowed. Continue to [Protect changes and answer questions](/learn/).

### Page 3: Protect changes and answer questions

A customer asking for four mugs has not created an order for four mugs. With only three available, the shop must refuse that request without consuming stock or recording an accepted order.

#### Put the decision before the fact

A **command** describes an intended change. `PlaceOrder` supplies the product and quantity. A **decision** evaluates that command against the relevant current state and the shop's conditions.

For this example, the quantity must be positive and enough stock must remain. An order for one passes when three are available. An order for four fails.

[Place existing decision figure here.]

If accepted, the application records `OrderPlaced`. If rejected, it records no `OrderPlaced` event and leaves stock unchanged. Naming the intention and the fact separately prevents a submitted form from being mistaken for a promise the shop has accepted.

Validation can be written in any language. NeoHaskell gives this decision a defined role and keeps it pure: evaluating it cannot quietly send an email, write a file, or call a payment service. Work with external systems belongs outside that decision. A test can supply a command and state and check the resulting outcome without contacting those services.

The same behavior can then serve different interfaces. A website and an application command line can submit the same command instead of each implementing their own stock policy. An agent helps write that policy; it does not decide at runtime whether the customer deserves a mug.

#### Give questions their own answers

The customer needs order confirmation. The next shopper needs available stock. Staff may need the number of accepted orders.

A **query** maintains useful state derived from the application and exposes an answer to a caller. In the example, the accepted order reduces the stock answer from three to two and increases the order count from zero to one.

[Place existing query figure here.]

The application does not need to scan the complete history for every page visit. Query state can be updated as changes arrive, so the stock question reads the maintained stock answer. The event remains the recorded fact; the query's state is a way of using those facts.

A new report can derive a different answer from existing history, provided the necessary information was recorded. If its calculation changes, its derived data can be rebuilt. This does not discover information absent from the events, and a query that is still catching up may return an older answer.

Separating the handling of changes from the handling of questions is called **CQRS**. Event Sourcing concerns the history used to derive state; CQRS concerns these different responsibilities.

Commands, decisions, events, and queries explain the parts. The next page connects them to the work people do: [Connect the whole process](/introduction/event-modeling/).

### Page 4: Connect the whole process

An accepted order connects several things: a customer sees available stock, submits an intention, receives confirmation, and changes what the next customer can order. Describing each part separately can leave gaps between them.

**Event Modeling** lays out the process as connected screens, commands, events, and queries. It helps people examine where information originates, what changes it, and where it is needed next. It is a design method, distinct from Event Sourcing's choice of history and CQRS's separation of changes and questions.

#### Follow an order and a cancellation

Extend the shop with one policy: cancelling an order before dispatch returns its mug to available stock. The customer first orders one mug, then cancels that order.

[Place existing full ShopEventModel figure here.]

The order command leads to an accepted order event. The stock query then answers two. The order screen supplies the identity needed to request cancellation. After an accepted cancellation, another event records that fact and the stock answer returns to three. Both events remain in the history.

Following the connections exposes questions that a list of features might hide. Where does the cancellation command obtain the order identity? Which condition prevents cancellation after dispatch? Which query supplies the confirmation that cancellation succeeded?

These questions can be discussed with the people running the shop before their answers become code. Staff may expect cancellation to restore stock while the current system only changes an order status.

#### Keep a change understandable

Adding cancellation does not require inventing a new way to describe behavior. It needs an intention, acceptance conditions, a recorded outcome, and answers that reflect the change. This repeated structure gives a developer or agent a specific set of things to implement and check.

[Place GrowthComparison here, in its own section titled "How change effort grows".]

If new behaviors take roughly similar effort, total effort grows roughly in proportion to their number. Reusing the same structure and keeping dependencies visible supports that aim. The graph compares this aim with repeated changes to earlier behavior; it shows a conceptual comparison, not measured costs.

Some changes still cross boundaries. Cancellation and dispatch must agree on which order states permit each action. Making that dependency visible identifies the behavior and tests that need review. It does not make every new feature equally cheap or eliminate coordination.

NeoHaskell carries these concepts into the application and provides a visual IDE for inspecting their relationships. The diagram helps locate the behavior; its decisions and tests establish what the implementation does. A connected diagram alone cannot establish that the business policy is correct or complete.

The design now contains a concrete accepted case and a rejected case: ordering one mug from three leaves two; ordering when none remain is refused and leaves zero. Those examples provide observable results for the first implementation, whether written by hand or with an agent.

Continue to [Install NeoHaskell](/getting-started/installation/) to prepare the development environment.

## Adversarial findings and implementation constraints

1. **Why not ordinary programming?** The original intro assumes named parts justify themselves. This draft explicitly grants ordinary code can validate and ordinary databases can retain history. The distinction is the framework's authoritative event history, enforced pure decisions, and shared convention. Do not claim other stacks cannot do these things.
2. **Why not an arbitrary stack plus AI?** State the actual transferred work: choosing and maintaining conventions and integration points. Do not imply convention prevents an agent from misunderstanding requirements or writing faulty code. The retained promise is inspectable behavior and fewer repeated architectural decisions.
3. **History is not an explanation by itself.** A delta of minus one and two snapshots have the same ambiguity. Events help only when their names and payloads retain the meaning needed. Identity, reasons, and exception approval do not appear automatically. The proposed comparison deliberately avoids the simplistic claim that before/after values prove what happened.
4. **Mechanisms have costs.** Keep the brief sentences on event compatibility, incomplete recorded data, query catch-up, and shared cancellation/dispatch rules. They answer concrete objections within the teaching flow. Avoid readiness boxes or a catalogue of advanced failure modes.
5. **Preserve teaching accuracy.** The opening stock is an explicit initial condition, not falsely shown as an event. The first model excludes concurrency, payments and shipping implementation. A cancelled order remains an accepted historical order, so do not silently decrement an all-time accepted-order count. The snapshot explanation is conceptual, not a claim about a configured NeoHaskell optimization. Do not put command, query and integration primaries into one DSL slice. Root must complete fresh rendered teaching-example review after implementation.

Preserve the owner-requested GrowthComparison on page 4 in a separate section after the cancellation model. Introduce its conceptual axes and repeated-rework notation immediately before the figure. The concrete cancellation/dispatch dependency must remain alongside it so linear growth is an explained design aim rather than a guaranteed complexity bound. Root may keep the existing explanation of A-G and R; these are figure legend semantics, not a promotional footer.

Unslop editorial check: detail belongs in the shop's decisions, not interface decoration. Each page answers one question and ends at the next dependency. Motivation names real responsibilities and sources of satisfaction rather than issuing motivational commands. No author name-dropping or additional research was needed: this proposal relies on the repository's existing pinned source research and product records.

## Parent implementation notes

The implemented introduction moves developer enjoyment and control before the example and removes the draft's duplicated developer-contribution sentence. The source check narrows the pure-decision wording to separation from arbitrary external business actions. The history page explicitly acknowledges richer snapshots and ordinary databases that preserve meaningful facts. The query lesson distinguishes maintained state from retrieval and avoids an automatic performance claim.

As optional philosophical inspiration, the parent inspected the official [Ruby overview](https://www.ruby-lang.org/en/about/) and [Rails Doctrine](https://rubyonrails.org/doctrine). Rails explicitly treats programmer happiness, conventions, and integrated systems as design choices. The new NeoHaskell opening connects that aim to business judgment and reviewable implementation; it neither quotes the doctrine nor attributes NeoHaskell capability evidence to it. This reading supplements the proposal and does not alter its earlier source-inspection record.
