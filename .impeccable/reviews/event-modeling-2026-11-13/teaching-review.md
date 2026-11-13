# Teaching-example review

Verdict: **keep**. Initial independent visual review completed on 13 November 2026. No material correction is required within this review's scope.

## Learning goal and scope

A developer should be able to discuss one application's behavior with a business stakeholder, expose an unanswered business decision, and write a useful manual acceptance example before learning NeoHaskell concepts or installing tools. The page should also help readers investigate an existing application.

Reviewed the new English introduction in `src/content/docs/introduction/index.mdx`, the supplied primary-source research record, and the six native-size introductory and story captures in this directory. Images were opened before reading the implementation. This verdict covers the rendered introduction and order table at 1440 by 1000 in light theme and 390 by 844 in light and dark themes. The lower article's exercise and framework bridge were assessed from source, not from supplied screenshots.

## Findings

1. **Keep the concrete motivation.** The opening stock-availability question makes the business consequence of an apparently simple request visible before terminology appears. The paragraph about understanding an existing application gives a second relevant use without changing scenarios. There is no setup or code prerequisite.
2. **Keep the five-row table.** It separates what the customer sees, the request, the shop's decision, the accepted fact, and the resulting stock. Three mugs becoming two is easy to trace. The refusal paragraph correctly keeps stock at zero and does not invent an accepted order. Cancellation remains an explicit unanswered policy question rather than silently changing the example. These distinctions must survive any later copy edits.
3. **Keep the current amount of modeling detail.** This is a first conversation exercise rather than a complete Event Modeling notation lesson. A table is sufficient here: it presents a readable ordered story with a concrete input and outcome. The exercise asks for a successful path, a refusal, and stakeholder review. It does not claim that this establishes model completeness. Full provenance checks, a multi-lane diagram, color taxonomy, or another worked scenario would add a second lesson. No material omission requires those additions for the stated immediate goal.
4. **Keep the restrained presentation and bridge.** The table has meaningful row names and no duplicate caption, status row, badge, or controls. In both phone themes, all rows remain readable without horizontal scrolling. The Event Modeling versus Event Sourcing distinction prevents an unnecessary architectural prerequisite, and the final paragraph provides a natural continuation into the existing Core concepts article. The IDE claim matches the supplied pinned-source evidence and is not presented as a runtime test.

## Verification and limits

The supplied capture metadata records 18px paragraph text, 16px table text, no page overflow, 62 navigation links, and all 15 navigation groups open in every captured configuration. Fresh independent Playwright checks against `http://127.0.0.1:4325/introduction/` at desktop and phone widths also returned `visualViewport.scale === 1`, HTML and body CSS zoom of `1`, and no horizontal overflow. All 15 navigation groups were open. The additional closed sidebar `details` element is the English language selector, not a navigation group.

The example is static. It does not need a scroll-change cue, interaction controls, or a changed-state capture. This review does not establish learning outcomes through reader testing, execute the NeoHaskell application, validate translations, approve the entire documentation tree, or replace the root agent's build and final browser QA. Existing guide styling and the accepted sidebar structure remain outside correction scope. User acceptance is separate from this review verdict.

Next action: complete the root agent's final build and browser checks. No correction-pass recapture is required unless the reviewed example changes materially.
