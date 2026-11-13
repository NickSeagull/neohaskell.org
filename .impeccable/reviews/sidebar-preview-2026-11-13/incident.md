# Stale development sidebar

Checkpoint: `a266421`. The working tree was clean when the owner reported missing sidebar pages. No documentation routes or sidebar entries had been removed from the repository.

The development URL shared in the prior animation task, port 4323, belonged to process 18950, started on 12 November. It served the current article and example with an older in-memory sidebar: three documentation links under Learn NeoHaskell, Build an application, and Explore the project. The source configuration and production preview on port 4321 still contained all 64 destinations and 16 groups.

The delivery check had verified the animation and removed controls on the development URL, while broader navigation checks ran against the production preview. That split allowed the stale development configuration to go unnoticed.

The existing development process was stopped with the project's Astro CLI and restarted on port 4323 with the current configuration and a forced content refresh. README now requires navigation verification on the exact URL being shared. No page content or navigation configuration was changed. Publication and translation remain deferred.

The owner's follow-up requires a single local server, restarted between batches of changes. AGENTS.md, neohaskell-docs, README, and the current brief now carry that rule, with lifecycle commands owned by README. Process inspection found a second NeoHaskell server on port 4321, PID 73333, serving the production build. It was stopped through Astro's preview command. The other listening web servers were verified as belonging to different projects and were left intact.

Final verification on the shared development URL found all 64 links, with all 16 groups expanded at 1440px and 390px. All 64 destinations returned HTTP 200. The current event animation remained present without the removed formula or pause control, and no browser errors were observed. Native desktop and phone captures were inspected. The production build, copy check, and updated skill validation passed. The only remaining NeoHaskell server listens on port 4323; Astro reports no production-preview server. No deployment was performed.
