# Assessment B — browser evidence and detector critique

Method: isolated Assessment B (`/root/ruby_gap_browser`), without Assessment A findings or prior review reports. Review only; no repository edits. Target checkpoint supplied by parent: `68a9493`. Observed 11 November 2026.

The main gap is the journey from understanding NeoHaskell to successfully using it. The homepage now has real source, evidence links, a visible primary action, and a distinctive approved identity. It still behaves more like a project introduction than a useful language website once a visitor wants to install, investigate support, learn the language, or recover from trouble. Ruby provides those destinations explicitly. Repainting NeoHaskell would not address this gap.

## Five ranked, verified gaps

### 1. P1 — The first successful application is not a complete website journey

**Observed:** `/getting-started/` tells the reader to follow a general upstream project README for the environment, have an application repository already open, install agent skills, and give the agent a prose task. It does not teach how that application repository is created, how the application is started, what URL/command to use to exercise it, what actual output should appear, or how to run the named checks. The guide ends with prose about asking the agent to demonstrate results, followed only by Previous → Core concepts. A novice arriving from the no-install concepts introduction has to cross an unexplained project/bootstrap boundary.

**Location:** `src/content/docs/getting-started/index.mdx:13–29`, `:49–63`; final rendered route `http://127.0.0.1:4321/getting-started/`. The external environment link is `https://github.com/neohaskell/NeoHaskell#readme`, not a specific environment section or versioned starter instruction.

**Ruby evidence:** the homepage has a visible Install navigation destination and Download action; three source examples each deep-link into a prefilled browser playground. The official download page distinguishes platform installation paths and stable/preview/maintenance branches. Relevant destinations: `https://www.ruby-lang.org/en/documentation/installation/`, `https://www.ruby-lang.org/en/downloads/`, `https://try.ruby-lang.org/`.

**Concrete improvement:** keep concepts first, then provide one verified path from empty folder to a running starter, an exact test/run command and a small success result, with a troubleshooting/contact exit. Link directly to the maintained upstream instructions where duplicating commands would be fragile. A full browser runtime is a product/tooling investment; a precise runnable starter guide is a website gap that can be addressed independently. Do not invent a command or execution transcript.

### 2. P1 — “Documentation” opens a two-page introduction without a reference destination

**Observed:** the complete local documentation tree contains only `learn/index.mdx` and `getting-started/index.mdx`. The concepts page intentionally uses plain-text models, explicitly not executable code. The setup page adds an installer and prose task. There is no language primer, syntax/API reference, framework guide, error catalogue, or maintained index pointing to those resources. Search exists, but two pages cannot answer the questions that arise when reviewing the homepage’s actual source: `Maybe`, `Task`, the command types, event registration, query APIs, testing, or imports. The new source excerpt makes this missing bridge more visible.

**Location:** `astro.config.mjs` sidebar; both files in `src/content/docs/`; homepage source in `src/components/DecisionExample.astro:12–13`. URL evidence: `http://127.0.0.1:4321/learn/` and `/getting-started/`.

**Ruby evidence:** `https://www.ruby-lang.org/en/documentation/` separates beginner tutorials, versioned official manuals, tools, editors, and further learning. Its point is not merely more pages; visitors can distinguish learning material from a lookup resource.

**Concrete improvement:** add an honest documentation index with Learn, Build, and Reference destinations, prioritizing a small verified language/framework reference and a link explaining the Counter source. Explicitly label incomplete coverage. Do not fabricate ecosystem breadth or position prior Haskell expertise as a prerequisite.

### 3. P2 — Useful task paths and readiness information are buried below the introduction

**Observed:** the desktop homepage has only Documentation and GitHub in its main navigation. Mobile removes GitHub, leaving Docs and theme. There is no direct setup link, code jump, release/status jump, or support link at the top. The only main internal destination is `/learn/`, repeated in the hero, product section and footer. The page already has `id="see-the-code"`, but no navigation link exposes it. On mobile the first code begins at y=1807, the agent workflow link at y=3369, the runnable starter at y=3741, the release link at y=4075, and Discord at y=4298. A reader looking for practical evidence travels 2–5 initial screens before encountering it.

**Location:** `src/pages/index.astro:40–53`, `:56`, `:75–106`. Screenshot evidence: `home-mobile-full.png`, `home-desktop-full.png`.

**Ruby evidence:** six task names are visible in the desktop masthead: Install, Docs, Libraries, Contribution, Community, News. Download and release version appear within the first viewport; source starts at y=725 desktop / y=601 mobile. Ruby is longer overall, but shortcut destinations are near the entrance.

**Concrete improvement:** retain the accepted primary Learn the concepts action. Add a small number of meaningful shortcuts, such as See the code and Set up your agent, and bring truthful development status into the first evaluation area. This does not require adding many top-level choices or changing the approved hero composition. Date any status assertion and distinguish the framework version from the skills version.

### 4. P2 — “AI-first” has inspectable ingredients, but no connected example of the claimed workflow

**Observed:** the opening shop diagram is explicitly illustrative; the real function body is from Counter; the setup prompt returns to the shop; the skills link opens a third artifact. Each is responsibly labeled, but the visitor must mentally assemble how intent becomes generated source, checks, and an application. There is no single example connecting one user requirement to the agent task, a bounded source change, a performed check, and an observed result. There is also no compact statement of suitable current application types, known limits, or work still required from the builder.

**Location:** `src/pages/index.astro:51–90`; `src/components/DecisionExample.astro`; `src/content/docs/getting-started/index.mdx:31–63`; exact public source links are in `inventory.md`.

**Ruby evidence:** the first code examples demonstrate recognizable language operations and each supplies a directly adjacent Try action. Its lower sections connect language properties to concrete tooling/community context. NeoHaskell should borrow the connection between claim, artifact and next action, not Ruby’s ecosystem claims.

**Concrete improvement:** document one source-verified starter flow end to end, or record a real executed example, labeled with what was actually checked. Add a small suitability/limitations explanation using verified product facts. Customer logos, fabricated testimonials, adoption counts, or a fake “live” demo would be worse than the current honest evidence. An executed demonstration may require upstream product work; the website can immediately improve the continuity and labeling of available evidence.

### 5. P2 — The website lacks a useful project-support and trust directory

**Observed:** the footer contains only Documentation, GitHub and Discord. Community copy invites questions and contributions but offers no task-specific routes for reporting a bug, contributing, reading release history, learning project status/limitations, or finding license/security information. Two dated release links are helpful evidence, but not a release/news index or a clear support policy. The locally distributed Apache license for the quoted source is not discoverable through the main footer. This is a discoverability observation, not a claim that upstream has no such policies.

**Location:** `src/pages/index.astro:94–106`; `public/licenses/neohaskell-apache-2.0.txt` exists; `public/robots.txt` and canonical metadata are present. Homepage metadata has title/description/canonical/Open Graph text but no social preview image. The image omission is secondary polish, not the central trust gap.

**Ruby evidence:** the current homepage separates community, dated news, security updates, and a footer with license and website ownership routes. Its community page organizes multiple ways to participate: `https://www.ruby-lang.org/en/community/`; `https://www.ruby-lang.org/en/security/`; `https://www.ruby-lang.org/en/about/website/`; `https://www.ruby-lang.org/en/about/license.txt`.

**Concrete improvement:** expose verified project-owned routes with labels tied to tasks: ask a question, report a bug, contribute, see releases, read license. Explain active-development constraints without pretending to have Ruby’s release-maintenance infrastructure. A conference directory, job board, translations, large library catalogue, or testimonial wall are maturity-dependent, not requirements for this stage.

## Measured page depth and first-visit paths

Coordinates refer to a fresh dark-mode browser context after the opening sequence settled. Desktop was 1440×1000 and phone 390×844. No zoom was applied.

| Surface | Desktop height | Mobile height | Meaningful depth |
|---|---:|---:|---|
| NeoHaskell home | 3180px / 3.18 viewports | 4647px / 5.51 viewports | Code at 1106 / 1807px; starter link at 2500 / 3741px |
| Core concepts | 3774px / 3.77 viewports | 5422px / 6.42 viewports | Main-flow setup link at 3450 / 5103px; mobile menu offers shortcut |
| Set up your agent | 2540px / 2.54 viewports | 3740px / 4.43 viewports | Skills installer at 792 / 1147px; no next guide at end |
| Ruby home | 5025px / 5.03 viewports | 8778px / 10.40 viewports | Source at 725 / 601px; Download at 482 / 414px; first Try at 1130 / 887px |

**Path count:** NeoHaskell homepage → concepts is one click. Homepage → setup is two clicks on desktop using the docs sidebar; three taps on mobile using Docs → Menu → Set up your agent. Following the article instead reaches the setup link only near the bottom of the 5422px mobile concept page. Homepage → upstream environment instructions is three desktop clicks or four mobile taps through the shortest labeled local setup route. Homepage → the named runnable starter is one external click, but only after substantial scroll. Ruby homepage → installation or download is one desktop click; the hero download remains one tap on mobile. A prefilled Try link is one click/tap after scrolling to its example.

**Link inventory:** home has 19 anchors including the offscreen skip link, 18 displayed desktop links, 17 displayed mobile links, and 11 distinct displayed destinations. Ruby has 62 anchors including collapsed language/navigation items; 39 displayed desktop links and 33 mobile, with 28 and 24 distinct destinations. These are descriptive counts, not evidence that more links are automatically better. Full labels, exact destinations, heading levels and y positions are in `inventory.md`; raw geometry is in `browser-evidence.json`.

**Heading hierarchy:** NeoHaskell homepage has one H1, three H2 sections, and four subordinate H3s. The article hierarchy is one H1 with six concept H2s, or four setup H2s; desktop Starlight also has an auxiliary “On this page” H2. Ruby’s inspected homepage has no H1 in the captured DOM; its visible hierarchy begins at H2. Do not copy that semantic omission. NeoHaskell’s concise heading hierarchy is already better here.

## Responsive and accessibility observations

All eight baseline visits returned HTTP 200. No page errors, failed requests, or console warnings/errors were recorded during those visits. Both sites had document scrollWidth equal to viewport width. Offscreen children in the Starlight sidebar, Ruby illustration/marquee, and scrollable tables are not page-level horizontal overflow.

NeoHaskell’s 16px source text remains readable, with a visible sideways-scroll cue on phones and a focusable code region. At 390px its source pane is 352px wide with 530px scrollWidth; a reader cannot see the full decision at once. That is an accepted explicit tradeoff, not a missing code sample. The local guide’s four-column outcome tables also clip horizontally within their own containers; the final stock column is partly offscreen and has no comparable text scroll cue. A subtle cue or mobile restructuring would improve discoverability without reducing type size. `src/styles/docs.css:115–116` controls this behavior.

Mobile docs Menu is 32×32px, Search 32×40px and Copy controls 40×40px. These are smaller than the 44px comfort target and deserve a minor touch-target pass; they are not automatically a WCAG AA failure, since that standard has a smaller minimum and exceptions. The homepage theme control measured 44×44px at 390px. Search and mobile menu open correctly; Escape closes search. Copy controls have title="Copy to clipboard", so the first inventory’s empty innerText is not proof of unlabeled buttons. Search query results, actual clipboard behavior, screen-reader traversal, zoom, and full contrast conformance were not tested in this bounded baseline.

The current docs introduction leads with Haskell/event-sourcing terminology after the homepage’s AI-first positioning. Technical context is legitimate in a guide, but the first newcomer paragraph could connect it to the already-stated user task before introducing both architectural terms. This is a clarity concern, not a request to remove factual heritage.

Ruby is not a model for every detail: its mobile homepage is almost twice NeoHaskell’s depth, it has small 14px code, a dense six-item desktop navigation, animated community imagery, and no inspected H1. Copy its useful destinations and immediate evidence, not all its density or effects.

## Deterministic detector evidence

CLI command, run once from the project root:

```sh
/Users/nick/.agents/skills/impeccable/scripts/impeccable detect --json src/pages/index.astro src/components/DecisionExample.astro src/components/EventLedger.astro
```

Exit status **0**, JSON **[]**, zero CLI findings across the three source targets. Saved as `detector.json`. A clean mechanical scan does not test content completeness or first-run success.

Live-browser detector was injected successfully on all three representative local pages after mutable injection preflight. Baseline console summaries: homepage **20** anti-pattern groups; concepts **0**; setup **1**. Full serialized selectors/geometry are in `overlay-findings.json`; baseline console summaries are retained in `browser-evidence.json`.

| Route | Rule | Count | Assessment |
|---|---|---:|---|
| `/` | `ai-color-palette` | 20 | Brand/context false positives; preserve approved violet/cyan identity |
| `/learn/` | none | 0 | No browser-detector findings |
| `/getting-started/` | `line-length` | 1 | Minor valid reading-width signal, not a major UX defect |

The 20 color flags comprise the pixel word (`src/pages/index.astro:51`), model heading (`src/components/EventLedger.astro`), ten generated source syntax-token spans (`src/components/DecisionExample.astro:12`, token colors `src/styles/home.css:99`), the source link (`DecisionExample.astro:13`), both source-test links (`index.astro:70–71`), lower learning link (`:73`), both artifact links (`:84`, `:90`), and two community titles (`:101–102`). They are all instances of one generic heuristic, not 20 independent design mistakes. Source syntax coloring and deliberately selected brand accents should not be neutralized to satisfy it.

The setup line-length flag targets the introductory paragraph at `src/content/docs/getting-started/index.mdx:11`, rendered selector `p:nth-of-type(2)`: approximately 89 characters on two of three lines at 1440px. A modest prose width adjustment or shorter paragraph is reasonable; changing all docs layout merely to silence it is not justified.

## Evidence and run accounting

Target slug resolved as `src-pages-index-astro`. `.impeccable/critique/ignore.md` was absent. Impeccable context, PRODUCT/GLOSSARY, Unslop, positioning/docs guidance, and the Assessment B critique workflow were read. Approved palette, typography, one initial animation, article format, and terminology were treated as constraints.

Native browser tools were absent (`ALL_TOOLS` browser/Playwright discovery returned none), so project Playwright was used in fresh isolated Chromium contexts. Mutable preflight changed document.title, appended an executing script, verified the mutation, then restored/removes those test changes; evidence is in `preflight.log`. Detector-only page titles were prefixed `[Human]` as instructed. Browser was headless and no native presentation capability existed: **no persistent user-visible [Human] tab is claimed**. Injection and real in-page execution succeeded; saved overlay screenshots are the presentation fallback. Initial extraction omitted serialized selectors; the bounded follow-up retained them in `overlay-findings.json` rather than inventing file locations.

The temporary Impeccable live server was started from the evidence directory, PID 5199 on port 8400, and stopped with `impeccable live-server stop --keep-inject`. Post-cleanup port 8400 returned no response; the user’s original port 4321 still returned 200. No source injection was written to disk. All Playwright browsers/contexts were closed. Temporary evidence/scripts are intentionally retained under `/tmp/neohaskell-ruby-gap-review/b/` for parent review; nothing was added to the repository, and its final status remained clean. No builds, dependency changes, source tests, deployments, or messages to third parties were performed.

Screenshots: `{home,learn,setup,ruby}-{desktop,mobile}-{viewport,full}.png`; `home-desktop-overlay.png`, `learn-desktop-overlay.png`, `setup-desktop-overlay.png`; mobile menu and search captures. Supporting artifacts: `browser-evidence.json`, `overlay-findings.json`, `interaction-evidence.json`, `inventory.md`, `detector.json`, `preflight.log`.

Exact live evidence URLs: `http://127.0.0.1:4321/`, `http://127.0.0.1:4321/learn/`, `http://127.0.0.1:4321/getting-started/`, `https://www.ruby-lang.org/en/`. Ruby’s documentation, download, and community pages were also opened through the web tool for primary-source content verification. This report did not test the underlying language runtime or infer current production readiness from release metadata.

Questions skipped: Assessment B is an isolated evidence handoff; the parent owns synthesis and any user discussion.
