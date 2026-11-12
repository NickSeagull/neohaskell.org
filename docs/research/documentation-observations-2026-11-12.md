# Documentation observation record

Inspected on 12 November 2026 using Playwright Chromium. Desktop viewport: 1440 by 1000. Phone viewport: 390 by 844, loaded in a fresh context. This is a qualitative page sample, not an accessibility certification, performance benchmark, or documentation popularity ranking. Controls listed below were visually inspected; their entire execution paths were not tested.

| Family | Inspected page | Observations |
| --- | --- | --- |
| Rust | [Guessing-game chapter](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html) | Numbered book tree, prose with incremental code and command output, copy and selected run controls. Fresh phone load collapses navigation. |
| Go | [Packages](https://go.dev/tour/basics/1) | Short lesson, editable source, output, Run/Format/Reset, numbered progression. Phone layout stacks explanation and source. |
| TypeScript | [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) | Handbook and reference navigation, small Playground-linked examples, in-context diagnostics. Long contents list precedes article on phone. |
| Elixir | [Introduction](https://elixir.hexdocs.pm/introduction.html) | Version 1.20.5 shown, guides/modules in shared shell, IEx transcript, Markdown/source access. Search remains visible on phone. |
| Phoenix | [Up and Running](https://phoenix.hexdocs.pm/up_and_running.html) | Version 1.8.16 shown, setup alternatives, commands and expected output. Phone source blocks scroll independently. |
| React | [State: A Component's Memory](https://react.dev/learn/state-a-components-memory) | Version 19.3 shown, problem-led explanation, code/result sandboxes, optional deep dives and challenges. Sampled sandbox result area was empty; runtime success is unverified. |
| Vue | [Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) | API preference changes relevant content, separate topic and local navigation, quiet surfaces. Preference notice occupies substantial phone space. |
| Svelte | [State tutorial](https://svelte.dev/tutorial/svelte/state) | Prose, editable file, rendered counter, solution control. Phone offers a text/editor switch, which separates explanation from the artifact. |
| Astro | [Install Astro](https://docs.astro.build/en/install-and-setup/) | Tutorial/guide/reference distinction, prerequisite section, alternative commands, on-page outline. Phone has separate topic-menu and contents controls. |
| Django | [First app, stable](https://docs.djangoproject.com/en/stable/intro/tutorial01/) | Stable resolves to 6.1. OS command alternatives, exact verification and failure explanation, versions/languages. Sponsor region occupies much of first phone viewport. |
| Laravel | [Routing, current](https://laravel.com/docs/routing) | Current guide is 13.x. Task tree, compact source examples, copy, Markdown, version and local outline. Long phone contents list delays source. |
| FastAPI | [First Steps](https://fastapi.tiangolo.com/tutorial/first-steps/) | Minimal source connected to endpoint and generated API documentation. Several extra panels and a floating assistant compete with article space. |
| MDN | [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | Predictable reference sections, Run/Reset example, return value and edge cases, specification/compatibility. Phone heading wraps the identifier and local contents remain readable. |

All listed fresh phone loads had document width no greater than viewport width. That is an overflow observation only, not proof of usability. Essential code may still need its own horizontal scroll. Reference sites' dark themes, keyboard controls, screen-reader output, and external runtime reliability were not exhaustively audited.

Initial local capture used an older preview at port 4321 whose generated asset prefix did not match its serving base. It was discarded. Valid NeoHaskell baseline captures use the existing dev server at `http://127.0.0.1:4323/learn/`: the accepted Manrope guide, violet/cyan themes, three navigation groups, 18px prose, inline examples, and no document overflow. Initial Django 5.2 and Laravel 12 captures were superseded by current stable pages. A hidden Vue code block caused an example-scroll capture to time out; the fresh desktop and phone page captures succeeded and are the visual evidence used.

Temporary capture directory: `/tmp/neohaskell-docs-research/`. `observations.json` records initial source-visible text and controls; `refresh.json` records canonical URLs and fresh viewport results. These generated files are session evidence and are not required to understand the durable findings in this record or the [research report](documentation-design-2026-11-12.md).
