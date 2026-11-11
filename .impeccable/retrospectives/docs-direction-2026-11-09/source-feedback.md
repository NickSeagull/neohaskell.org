# Source feedback for the documentation retrospective

The following is the relevant user feedback in chronological order. Quotes are user statements, not reviewer verdicts. Exact historical dates for individual earlier turns are not established here; the replacement and approval were recorded on 2026-11-09.

## Product and identity

NeoHaskell is a Haskell-based programming language and an event-sourcing framework focused on Event Modeling. It aims to help people build applications with AI agents without requiring senior architecture/infrastructure knowledge. The initial visitor outcome was starting to build with an AI agent, through a short installation and agent-setup guide.

The user selected a fresh identity preserving the NeoHaskell name/logo, Astro Starlight and GitHub Pages. Landing-page work uses an image comp first; app screens and documentation use code first. During identity exploration the user named Stripe.dev, tryreify.vercel.app, and antikythera.org. The user explicitly disliked Stripe.dev's solarized-feeling color scheme and later selected “violet + electric cyan as dark mode and daylight + violet ink as light mode.” These visual references preceded the later Stripe Docs request and are different scopes.

## Learning and terminology

1. “I like the violet + electric cyan as dark mode and daylight + violet ink as light mode. I would like to define the visual language of the diagrams next though, since I want them to feel more alive and animated.”
2. “i like the event ledger, but we should from now on call requests \"commands\", rules should be \"decisions\", views should be \"queries\".”
3. “I'd actually would like to use an ecommerce-themed example. On the other hand, I would like the users to get into learning the concepts of commands, events, etc.. and only then using ai agents”
4. “ah i dont want to build an explainer widget here, I was just deciding the visual direction and naming of the components, these things will go into the documentation pages, the homepage will have an initial animation and thats it”

## Documentation exploration

1. “the landing page direction is there, although we need to define the content that will go below, and also the docs part looks very empty and overall badly designed”
2. “we have to figure out a design that maybe will help learning better somehow. Perhaps each paragraph/subsection will have an example or smth that will change when the user scrolls to the next one? Perhaps with scroll hijacking? I hate it, but maybe it makes sense here to give the feel of presentation slides without actually using presentation slides?”
3. Asked whether guided scroll-linked format should be introductory only or throughout: “Use the guided format throughout the docs”.
4. “One thing that I want to have also, is that all examples to be quite interactive and alive. For example, code can be hovered to see what each thing does, diagrams move like the one in the landing page, etc...”
5. “The interactive example feels too bloated, as if it was some kind of calculator. Make a skill that makes a subagent evaluate visually the example each time that we make one and simplify it. Also, ensure that when we scroll, when stuff changes, we make it pop somehow so that it is visible. Also, right now the texts are extremely small and unreadable”
6. “still too many letters, hints, content, etc... looking for something minimal. also im looking that there is \"scroll resistance\" between sections, so one needs to scroll thoroughly to go to the next section”
7. “actually what I meant was about the widget, not the explanation, long prose is fine for docs. Multiple texts at a widget is not. Also, for scroll I didnt mean the scrolling height, I meant a \"sticky\" scroll effect”
8. Asked whether sticky meant snapping sections or a fixed widget: “Sections snap into place”.
9. “so, section snapping is okay, but the widget should change, not be duplicated. So the thing is: left column is docs, with long prose. Right column is just the widget that shows what the current section is, we have space between sections so that they are not shown on screen and make the user to scroll”
10. “this looks much closer to what I want now. Although the layout looks weird, too much close to the top, would like it to be more \"vertically centered but it grows\"”

## Rejection and replacement

1. “nah to be honest I hate everything we did with the content and widget right now. What I'm looking for is actually something like stripe docs”
2. The agent inspected Stripe's current guide and API-reference pages, asked an optional guide/API/docs-homepage clarification, stated conventional guide pages as the default, and rebuilt the two existing docs routes while awaiting the answer.
3. User answered: “Guide pages: flowing prose, inline code and examples”.
4. On the replacement: “yes, this is much better”.
5. After being directed to the setup guide: “looks good”.
6. Current request: “ok, now ask an astra xhigh agent to do a retrospective on this and make skills so that we keep stuff in the same way always”.

## Evidence locations

- Current product/design truths: PRODUCT.md, DESIGN.md, GLOSSARY.md, `.impeccable/design.json`.
- Current implementation: `src/content/docs/learn/index.mdx`, `src/content/docs/getting-started/index.mdx`, `src/styles/docs.css`, `astro.config.mjs`.
- Current brief/state: `.impeccable/questions/learning-experience-brief.md`, `.impeccable/questions/learning-state.json`, `.impeccable/surfaces/src-components-learn-guidedlesson-astro.md` (stable old filename, now targets MDX).
- Raw reference screenshots, implementation captures, initial review, correction verdict and 39 passing behavioral checks: `.impeccable/review/stripe-docs/`.
- Earlier reviewed iterations: `.impeccable/review/learning/`, `simplify/`, `minimal/`, `widget-focus/`, `shared-widget/`, `vertical-center/`. These are historical evidence; their review verdicts predate the user's later rejection.
- The existing `learning-example-review` skill is in the active skills directory. It was created after the user's explicit skill request above.

The setup-guide approval is in this source record but was not yet added as a separate approval entry in learning-state.json. No new UI changes are requested in this retrospective task.
