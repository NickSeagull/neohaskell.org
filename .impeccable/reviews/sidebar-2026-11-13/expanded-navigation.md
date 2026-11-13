# Expanded documentation navigation

Implemented on 13 November 2026 from checkpoint `46f9c39551ab4c8807a810b7f69ea9bddc63a208`. The owner requested every section and subgroup expanded on initial entry, while retaining ordinary collapse controls.

The shared `group()` helper in `astro.config.mjs` now sets `collapsed: false`. All five sections and ten nested subgroups use that helper. The 61 destinations, hierarchy, labels, and layout are unchanged.

## Direction and review

Product: NeoHaskell documentation for people building applications with AI agents. Character: approachable, exact, calm. World: native guide pages and readable source. Moments: article content and the selected topic. Signature: the accepted NeoHaskell logo, type, and selected-link accent.

The scoped Unslop review found no additional visual change necessary. Existing navigation spacing, wrapping labels, native disclosure icons, quiet chrome, and accepted palette remain intact. No auxiliary copy was added. Desktop and phone screenshots were inspected, including the lower reference subgroups in dark mode.

## Source evidence

Installed Starlight 0.42.9 renders each group using `open={sidebarGroupHasCurrent(entry) || !entry.collapsed}` in `node_modules/@astrojs/starlight/dist/components/SidebarSublist.astro`. Its recursive rendering applies this to nested groups too.

`SidebarPersister.astro` restores explicit session choices only when the sidebar hash matches and the viewport is at least 50em. `components-internals/SidebarPersistState.js` records disclosure clicks rather than automatically saving every default open value. Thus a fresh entry stays fully expanded, while a desktop reader's manual collapse persists on reload. Native mobile behavior skips that restoration and returns to expanded defaults. Existing manual desktop choices in the same session remain respected; this change does not forcibly reset them.

## Verification

Playwright used the refreshed configuration on `http://127.0.0.1:4326`, not the older preview on 4324. After the initial configuration restart interrupted one browser evaluation, a fresh browser completed the checks.

1. At 1440x1000 and 390x844, `/docs/`, `/learn/`, `/getting-started/`, and `/reference/framework/queries/` each rendered five open sections, ten open subgroups, and 61 links. No horizontal page overflow was observed.
2. Enter collapsed a top-level disclosure, Space reopened it, and Enter collapsed a nested disclosure in both sizes. Desktop reload retained that manual nested collapse; phone reload followed native expanded defaults.
3. With JavaScript disabled, all 15 groups remained expanded. The dark phone navigation also rendered all 15 expanded and scrolled to the lower reference subgroups.
4. Inspected captures: `/tmp/nh-expanded-sidebar-1440.png`, `/tmp/nh-expanded-sidebar-390.png`, and `/tmp/nh-expanded-sidebar-dark-390.png`.

The coordinating agent owns the final production build, copy check, translated-route verification, commit, and push. This note establishes the scoped English navigation behavior and visual inspection, not those broader results.
