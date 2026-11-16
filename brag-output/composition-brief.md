# Hyperframes Composition Brief: NeoHaskell

Create the 20-second landscape film specified by brag-plan.md. Output composition/ (editable local Hyperframes source), brag.mp4 (1920x1080, 30 fps), brag.jpg (a selected settled hero frame, also replacing MP4 frame zero), and share-copy.txt. No narration and no publication.

## Source and intent

Source: ../../src/components/Home.astro, HomepageVisual.astro, HomepageHighlights.astro, ../../src/i18n/en/site.json, ../../src/styles/home.css, ../../src/styles/diagram-colors.css, ../../public/logo.svg, ../../public/images/docs/mug-shop-ide.png. Product evidence: ../../PRODUCT.md and ../../GLOSSARY.md. The user also permits consulting ~/Work/NeoHaskell.

Keep exact wording: "Build with AI. Keep control.", "A visual IDE, built in.", "Data with a memory", "Build the idea you keep thinking about." Use NeoHaskell or the language as category, not the framework. Keep the logo unchanged and screenshot authentic.

LOOK: dark violet #1c062d, off-white #fcf9ff, secondary #d9bce9, cyan #7df9ff, lilac #c989e7; local Sansation 400, Manrope 400/500, Pixelify 400. 1920x1080, 30 fps. Title-safe inset 192px horizontally and 108px vertically; large 96-144px titles, 36-44px supporting copy; short readable labels. Source semantic diagram tokens govern history. Existing brand takes priority over generic palette prescriptions.

Four scenes: control 0-3.4; IDE 3.4-9.6; history 9.6-16.4; build 16.4-20. Specific behavior, reading holds and transitions are in brag-plan.md. The IDE is a source screenshot, not a simulated live build. History retains all earlier facts and updates the separate stock answer 12, 11, 12.

## Audio

Use assets/music/happy-beats-business-moves-vol-12-by-ende-dot-app.mp3 at 0.30 gain, 0.25-second fade-in and 1.2-second fade-out. Source cue preset is copied into assets/music/cues/. Target cancellation at 13.11 seconds. Readability overrides other beat alignment. Use at most three soft low-risk SFX, chosen from the bundled brag library after animation exists. Preserve licensing in CREDITS.md and share-copy.txt.

Read media-use/audio/references/captions/motion.md for the maintained extraction helper. If available, use tiny audio-derived logo-edge emphasis only; no breathing scale, title motion after landing, or waveform decoration. Record any extraction limitation rather than inventing a replacement pipeline.

## Implementation and validation

Use current standalone Hyperframes skills at /Users/nick/.agents/skills/{hyperframes,hyperframes-cli,hyperframes-registry,media-use}. CLI: node /Users/nick/.agents/skills/hyperframes/scripts/plugin-cli.mjs in composition/. Read format.md, motion.md, look.md, check and render references. Skip generic storyline/SPEC/history/usage/feedback/REVIEW workflows because brag owns this film. No external messages or publishing.

One scene per editable sub-composition. Seek-safe synchronous timelines. Local assets and fonts. Source content remains selectable HTML except the authentic IDE capture. Search registry for an appropriate reveal before inventing named effects. No decorative UI badges, footers, or attribution overlay; credits accompany the video.

Gate: hyperframes check --json with zero errors and real nonzero contrast coverage; inspect snapshots from all scenes and the history's before/during/after states. Complete a fresh learning-example review of the changed history illustration. Render with delivery quality, inspect decoded frames, verify dimensions/frame count/duration/audio and replace only frame zero with the selected poster. Keep generated render/cache files out of Git; locally commit reusable source, plan, licenses, and verification notes.
