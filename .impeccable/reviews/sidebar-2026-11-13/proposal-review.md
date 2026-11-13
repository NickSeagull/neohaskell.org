# Adversarial proposal review

Verdict: Revise two bounded paragraphs, then return for approval. The navigation architecture itself is approved for implementation planning. No additional routes, runtime execution, or tutorial code are required to resolve these findings.

Reviewed on 13 November 2026: `docs/research/sidebar-2026-11-13/integrated.json`, five section reports, research README, PRODUCT.md, GLOSSARY.md, the accepted learning-experience brief and surface record. Website checkpoint: `dfc5554cdd2c9411430dd4e1fdb4c173cd188ef5`. Source snapshot: `033ae4a570686cd885ca14c6595997d9498d5287` in `/tmp/neohaskell-sidebar-2026-11-13/source`. This is source and proposal review, not a rendered implementation review, released-version certification, runtime test, or owner acceptance.

## Required corrections

1. Give filtering and pagination a real owner. `reference/framework/queries` promises links to filtering and pagination guides, but neither guide exists in the integrated tree. The access guide owns permission checks, not general query selection. The source supports a material capability here: `Service/Transport.hs:38-53` accepts an optional `NeoQL.Expr` and a `QueryPageRequest`; `docs/agent/queries.md` defines the response envelope and limits. Keep the route count unchanged. Make the query reference own anchored filtering and pagination contracts, and link the HTTP guide there. Suggested replacement paragraph:

   This page will define Query, QueryOf, EntitiesOf, queryId, combine, and the Update, Delete, and NoOp outcomes. A small entity-to-query example will show row identity separately from event stream identity. Anchored sections will cover NeoQL filtering, pagination inputs and response fields, result limits, pre-fetch access, and per-row visibility. The Counter query will supply the concrete consumer, with links to HTTP requests, storage, and authorization tasks instead of repeating their complete procedures.

2. State the actual hash limitation in `guides/storage/query-rebuilds`. Its current sequence of checkpoint resume, changed hash, and replay is technically possible, but together with the concept page's discussion of rebuilding changed query state it invites an unsupported inference that a projection code edit changes the hash. `Service/Query/Subscriber.hs:529-566` derives the runtime hash from the query name. `Service/Query/TH.hs:165-191` does the same at compile time. Neither hashes the projection implementation or record fields. This matters directly to the promised reader task of changing and rebuilding a query. Suggested replacement paragraph:

   This page will configure persistent query storage separately from event history and follow checkpoint resume and an explicitly verified rebuild. It will explain that the current query hash is derived from the query name, so changing projection code alone does not automatically invalidate saved progress. A timeline will show live events arriving during replay and when readiness becomes available. A rebuild failure will connect diagnostic evidence to recovery, which depends on usable history and does not reverse external effects.

   Add the inspected hash definitions to this page's evidence. The concept page may retain its general distinction between resume and rebuild because the task page now owns the concrete limitation and procedure.

## Findings that do not block

The structure directly answers the owner's complaint. Start here exposes installation, creation, launch, first response, project files, and recovery. The seven-step mug-shop tutorial turns a generic application label into a concrete outcome. Guides expose distinct work such as query access, persistent events, generated documents, OIDC identity, provider OAuth, inbound workers, and readiness. Reference groups contracts by reader question rather than mirroring every module. Sixty-one routes are defensible at this planned breadth; extra overview pages and deeper nesting would add work without improving the path.

Ownership is otherwise coherent. The introduction teaches recognition, Concepts explains mechanisms and boundaries, the tutorial applies them to one shop, Guides owns repeatable tasks, and Reference owns signatures and options. Authentication, command authorization, query visibility, and external account connection are usefully separate. The three existing substantive guides and all old URLs remain valuable while most destinations are plans. Existing prose still offers a direct route from concepts to usable agent setup, even as planned pagination grows.

Source checks support the high-impact boundaries. The starter explicitly sets `persistent = False` in `neo/starter/src/App.hs:17-38`; event and query storage are separate in `docs/agent/storage.md`. The decision description and effectful interpreter are distinct in `core/service/Decider.hs:58-174`. Web transport uses trusted context when authentication is not configured at `Service/Transport/Web.hs:890-902`, supporting the authorization caveat. OAuth requires authentication, creates an in-memory transaction store, and falls back to an in-memory token store unless the consumer supplies one at `Service/Application.hs:1274-1295`. Readiness has ready, rebuilding, and failed responses at `Service/Transport/Web.hs:1545-1587`. The outbound guide appropriately avoids durable delivery and exactly-once claims; dispatcher work uses process channels rather than establishing an outbox guarantee.

Release/main separation is adequate for this scaffold: installation commits to selecting a verified release later, new command contracts are tied to the researched revision, and existing resources retain their older pinned evidence. Do not present these future paragraphs as shipped instructions or replace the existing installer based only on main. No new testing or deployment claim is needed now.

Native disclosures with section, subgroup, and page depth are appropriate. The proposed 18rem sidebar width is an implementation hypothesis, not a reviewed visual result. Verify wrapped translated labels, active-branch expansion, and keyboard/phone navigation in the implementation review. Preserve 18px prose, essential 16px examples, native scrolling, search exclusion for standalone plans, and the honestly titled searchable Documentation plan. This applies Unslop's restraint without inventing new decoration.

Next action: replace the two paragraphs and attach the hash evidence, then send the revised proposal for a short approval check.

## Revised proposal approval

Verdict: Approve the revised proposal for implementation. Both required corrections are resolved, with no remaining material proposal blockers.

Rechecked `integrated.json` on 13 November 2026, SHA-256 `fee5945b820b87d2b7081b8f3e56180633a0c180acec788ae08710085a375623`. It contains 61 unique destinations. The query reference now owns anchored NeoQL filtering and pagination contracts, and the HTTP guide explicitly links that destination. The rebuild guide now states the name-based hash limitation and includes both inspected runtime and compile-time hash definitions as evidence.

This approval covers the documentation architecture and future-content paragraphs. The implementation still needs its ordinary build, copy, localization, navigation, search, and rendered review checks. It does not establish released-version compatibility, NeoHaskell runtime execution, or owner acceptance.

Next action: implement the approved 61-page scaffold and verify its desktop and phone navigation.
