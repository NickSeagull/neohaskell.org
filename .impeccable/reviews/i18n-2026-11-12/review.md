# Internationalization implementation

The owner requested English as the source of truth, eight translated languages, content-freshness checking, and one Codex CLI GPT-6 Luna max execution per language with pending work. The clean starting revision was `368bb739f8e59f52000b3c8d246e6d024f46f935`.

## Direction and scope

Product: an AI-first language and framework for building understandable applications.
Character: direct, precise, approachable.
World: the accepted NeoHaskell developer guide and application illustrations.
Moments: retain the application, event-history, pure-decision, and transport figures.
Signature: the original logo, violet/cyan identity, and existing domain shapes.

The Unslop audit found no reason to replace the accepted visual direction. The necessary changes were translated copy and controls, a compact language menu, text expansion, and non-Latin font fallback. No badges, captions, helper rows, or new explanatory footers were added. Long Armenian illustration labels exposed the narrow horizontal input/decision/result arrangement, so that sequence now stacks below 480px without reducing text size.

English remains at the existing URLs. Translated routes cover the homepage and all three guides. Translation freshness uses content hashes, including the glossary and policy version. The checker reports missing, changed, edited, and orphaned translations; unchanged content does not expire with age. Translation outputs and their manifest are versioned, while prompts, raw responses, and logs stay in the ignored `.i18n/runs/` directory.

## Review and verification

The fresh learning-example reviewer inspected the Commands and first-task examples in all eight target languages at 1440px and 390px before reading their sources, plus the Armenian pure-decision figure at 320px. Verdict: keep, with no material findings. The combined scope covers 32 guide captures and one homepage figure. Code remains 16px, mobile prose 18px, and desktop lead prose 20px. The examples preserve the distinction between intention and fact, stock conditions, `OrderPlaced`, rejected commands, and unchanged executable installation syntax. The detailed [learning review](learning-review.md) records its evidence and limits; it does not establish measured learning outcomes or owner acceptance.

The first Chinese response was rejected because the structural validator counted an English sentence's leading text node. Inspection showed that Chinese naturally started with the existing bold phrase. The validator was corrected to compare meaningful markup and protected values without requiring English text-node boundaries. The saved response then passed validation and was applied without another Codex call.

All 40 translated files are current. The initial generation made exactly eight Codex CLI calls, one per target language, using `gpt-6-luna` with `max` reasoning. A subsequent translation invocation skipped every language without another model call. Every saved output passes the final structural validator.

All 18 tests pass, including freshness detection, protected content, batching, failed-response recovery, and concurrent-run locking. The normal build passes the copy check and Astro validation with zero errors, warnings, or hints, and generates 37 routes with Pagefind and the sitemap. `git diff --check` passes.

Production browser verification passes 467 checks across all 36 content pages at desktop and phone widths, with no JavaScript errors. It covers language metadata, canonical and alternate links, translated headings, stable section identifiers, localized links, preserved executable commands, language switching with fragments and attribution, mobile menu access, theme persistence, and reading without JavaScript. Another 54 homepage viewport/theme checks pass across nine languages at 320px, 390px, and 1440px. All 1,368 inspected internal links resolve to existing pages and fragments. Spanish search returns localized results, and the installation control copies the exact original command.

Local raw screenshots and browser evidence are stored under `/tmp/neohaskell-i18n-review/`; the durable reviewer report is included here. Automated and visual checks do not substitute for a native-speaker editorial review. No deployment was performed.
