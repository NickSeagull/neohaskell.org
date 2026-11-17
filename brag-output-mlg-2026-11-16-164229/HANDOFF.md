# NeoHaskell launch video handoff

Updated 2026-11-17. The user accepted the latest video with "great" and requested this file for the next agent. There is no unfinished video revision, pending render, or active approval. Continue from the next user request. This handoff records the video state at commit `d33426a`; its own documentation commit comes afterward.

## Start here

1. Work in `/Users/nick/Work/neohaskell.org`. Read the repository `AGENTS.md` and inspect `git status --short` before editing. The tree was clean before this handoff.
2. Watch the current accepted [43-second video](http://127.0.0.1:4323/@fs/Users/nick/Work/neohaskell.org/brag-output-mlg-2026-11-16-164229/brag.mp4?v=6). The last changed scene is at 7-12 seconds.
3. Read this file's accepted decisions, then [verification.md](verification.md). Use [composition-brief.md](composition-brief.md) for background, but its earlier sections intentionally preserve superseded directions. Current source and the latest user request take priority.
4. Make the next requested change in the active directory below. Preserve accepted choices outside that scope, verify the result, render when needed, and finish with a local English commit. Keep publication separate from local iteration.

## Active files and saved versions

The active directory is `/Users/nick/Work/neohaskell.org/brag-output-mlg-2026-11-16-164229/`. All relative paths below are inside it unless stated otherwise.

| File or directory | Purpose |
| --- | --- |
| `brag.mp4`, `brag.jpg` | Accepted current export and its end-card poster. Poster pixels replace frame zero. |
| `composition/index.html` | Root scene mounts, global audio cues, music automation, duration and shared assets. |
| `composition/compositions/*.html` | Nine editable scenes, each inside a template with its own paused GSAP timeline. |
| `composition/assets/film.css`, `mlg.css`, `motion.js` | Established fonts, visual language, MLG overlays and motion helpers. |
| `pacing-v5.json` | Current timing, despite the v5 filename. The v6 freezing revision kept all boundaries. |
| `v5-visual-cues.json`, `audio-cues.json` | Global visual and audio anchors. Root HTML is the render source; keep these records synchronized when timing changes. |
| `composition/assets/audio/` | Accepted master WAV, beat grid, per-frame energy, provenance and music credits. |
| `composition/assets/memes/`, `meme-assets.json` | Actual meme video/audio assets and source records. Unused historical assets are retained. |
| `brag-plan.md`, `composition-brief.md`, `audio-notes.md` | Evolving creative record. Later sections supersede earlier copy, duration and music choices. |
| `mlg-research.md` | Original Astra research into MLG memes and sources. |
| `freezing-review.md` | Fresh visual review of the current freezing scene. Verdict: keep. |
| `verification.md`, `verification/` | Current verification narrative and detailed logs, probes, captures and playback receipts. |
| `CREDITS.md`, `share-copy.txt` | Source attribution and the single share caption. |
| `preserved-version.json` | Saved export filenames, source checkpoints and SHA-256 hashes. |

Generated MP4s, JPGs and verification artifacts are ignored by Git. Source and source media assets are tracked. Do not assume a fresh clone contains the exports or local verification captures. Rebuild from source if necessary. Keep `.hyperframes` intact; the CLI owns its state.

| Accepted or historical version | Saved export and source checkpoint |
| --- | --- |
| Current v6, behavior-based freezing proof | `brag.mp4`, `d33426a` |
| Prior accepted 43-second clean-language cut | `brag-mlg-v5.mp4` and matching JPG, `92ddc60` |
| Final 24-second cut with full-volume Nice | `brag-mlg-24s.mp4` and matching JPG, `3725815` |
| Earlier expanded MLG effects cut | `brag-mlg-v2.mp4`, `85475fc` |
| First MLG experiment | `brag-mlg-v1.mp4`, `1395916` |
| Accepted pre-MLG cinematic film | Repository sibling `brag-output-2026-11-16-125227/brag-approved.mp4` and original `brag.mp4`; see preservation record for exact checkpoint and hashes. |

Preserve those versions. Before a substantial new experiment, save the currently accepted export under a new name and record its hash and source commit. Do not modify the older cinematic composition while working on the MLG cut.

## Accepted creative direction

The initial request was `$brag --full`. The user then moved the film from a wholesome business presentation to an aggressive, cinematic developer launch video, inspired by the Microsoft Windows Terminal announcement at `https://www.youtube.com/watch?v=8gw0rXPMMPE`. This reference is historical inspiration; the current accepted output is the concrete visual baseline.

The user wanted more product features and a philosophical developer benefit pitch. The film now includes compiler-enforced contracts and pure decisions, freezing, the real visual IDE, built-ins, an executable specification, retained history, and the one-person whole-app payoff. The AI skills code section was explicitly removed. Product philosophy is about building an app you understand and control, protecting working behavior, and avoiding unnecessary integration work.

The music direction evolved from aggressive electronic music to less distorted Glitch Mob-like pacing, then moody epic instrumental trap with a cinematic feel. Happy or joyful tracks and harsh distorted brostep were rejected. An initially requested 4-5 second buildup was later explicitly removed. The accepted film starts directly on the beat. Keep the current track unless the user asks to replace it.

The MLG experiment was explicitly requested after saving the cinematic version. Desired vocabulary includes quickscopes, hitmarkers, crowd reactions, Filthy Frank, "mom get the camera", "baby it's a triple", meme typography, exaggerated visual effects and overlapping reaction sounds. The user repeatedly asked for more visual effects and longer sound tails. Preserve the energy through entrances and accents while retaining readable holds.

Latest accepted constraints:

1. Clean language on screen and in audio. The user reported YouTube age restriction and superseded the earlier request for edgy swearing. The whole "Damn Son" sample is removed. Historical notes and unused files may still contain former language; they are not active render content. Do not claim any guaranteed moderation result.
2. About 43 seconds, increased from 24 because viewers found it too fast. This duration overrides the Brag default. Keep the source music tempo and reaction playback behavior; longer holds provide reading time.
3. Display "Database connection", not PostgreSQL, in the built-ins scene. Keep Authentication, OAuth, File storage, OpenAPI and HTTP + MCP as the remaining labels.
4. The ending uses Michael Rosen clicking his tongue and saying "Nice" at normal volume. The loud Smash commentary "WHERE YOU AT" was explicitly removed. Nice gain is 1.0, not the former 0.35.
5. The history scene has a manually rebuilt "3 kill streak: UAV available" graphic. The earlier demand for original game pixels was superseded by the request to recreate it. The triple scene uses exaggerated falling dollar bills, not coins: 736 bills across dense side cascades and foreground tumblers.

## Current sequence and readability

Timeline: 1920x1080, 30 fps, root duration 42.857142857 seconds, 140 BPM, 100 beats. Encoding produces 1286 video frames, 42.866667 seconds of video and a 42.88-second MP4 container. This rounding is expected.

| Scene | Global interval | Content |
| --- | --- | --- |
| `impact` | 0-2.571 | SHIP YOUR IDEA. Immediate beat and horn. |
| `contracts` | 2.571-6.857 | BAD WIRING? GET REKT. Compiler-enforced contracts, pure decisions and quickscope. |
| `frozen` | 6.857-12 | IT'S TIME TO STOP BREAKING APIs. Frozen behavior and separate delivery path. |
| `ide` | 12-16.286 | SEE THE APP YOU'RE BUILDING. Actual IDE and camera reaction. |
| `included` | 16.286-23.143 | BATTERIES. INCLUDED. Six built-ins, triple reaction and money deluge. |
| `rules` | 23.143-30.857 | YOUR SPEC GOT HANDS. Then RULES THAT ACTUALLY RUN. |
| `history` | 30.857-35.143 | HISTORY STAYS. ANSWERS RESPAWN. Rebuild, hitmarkers and UAV. |
| `payoff` | 35.143-39.429 | ONE DEV. THE WHOLE APP. Crowd response. |
| `brand` | 39.429-42.857 | NeoHaskell, AI-first language, neohaskell.org and Nice. |

Built-ins arrive every 0.857 seconds and the complete set holds for about 2.37 seconds. The specification excerpt has a stable 5.2-second reading hold before its verdict. Avoid compressing those holds when making local edits. The previous specification reading-time warning is resolved.

## Last change: code freezing

The user felt the earlier "Existing checkout" and "Updated checkout" schema cards did not demonstrate freezing. They explicitly asked for a subagent to think through it. Research agent `freezing_concept` proposed the current two independent caller-to-behavior paths. A separate fresh `freezing_visual_review` agent reviewed raw timed captures before the source and returned keep. The user then accepted the result.

`composition/compositions/frozen.html` now shows collection checkout connected to `PlaceOrder`, with "No email required" inside a locked enclosure labeled "Inputs + logic frozen". Delivery checkout appears below and connects to the separate `PlaceOrderWithContact`, with "Email required". The original caller, connection, identity and behavior never morph into the new path.

A request succeeds on the original path before the addition. At local 2.571 seconds the new path settles. At local 3.429 seconds independent request pulses traverse both paths, followed by success marks. Both paths remain readable until the exit at local 4.953 seconds. Frank plays in the reserved upper-right area for the first 2.3 seconds, clear of the diagram. The heading and audio are unchanged.

The field lists were intentionally removed because they only proved schema differences. An attempted-edit or rejection detour was considered and omitted because it added a third idea inside five seconds. There is no connector between the two command boxes. The lesson is coexistence of frozen existing behavior and separately named new behavior.

Product evidence is in repository `PRODUCT.md:137`, `src/content/docs/introduction/event-modeling/index.mdx:50-70`, and `.impeccable/reviews/model-evolution-2026-11-13/source-evidence.md`. These describe the owner's approved target product model. They do not establish newly executed compiler enforcement. A frozen old implementation can be deprecated and its entry point retired; consumers migrate independently; retained event history is not erased. Avoid claims of automatic migration, eternal availability or identical outputs regardless of application state.

For further product research, the user explicitly offered `~/Work/NeoHaskell`. Read local code as necessary. Repository `PRODUCT.md` owns positioning and `GLOSSARY.md` owns terminology. Commands are blue, events orange, query answers green-cyan and integrations slate. The video already has the copied semantic token stylesheet at `composition/assets/diagram-colors.css`.

## Audio and media details

The accepted music is "Dark Horizons - Cinematic Trap Music" by AurosonMusic, CC BY 4.0. The source page, download URL, license and hashes are in `composition/assets/audio/cinematic-beat-provenance.json`. The active WAV is `cinematic-beat-master.wav`, source interval 30.857142857 through 73.714285714 seconds, original tempo, no loop or time stretch, 2 ms opening anti-click fade and 200 ms ending fade. The original download was also at `/private/tmp/neohaskell-darkhorizons.mp3`; temporary files may disappear.

The master measures -12.33 LUFS and -1.54 dBTP. The accepted mixed export measures -15.47 LUFS, -1.08 dBTP and 6.50 LU range. The v6 export's encoded audio packets exactly match v5, including after poster insertion. Music is ducked around reaction samples. The shared SFX limiter remains -7 dB. Treat `audio-cues.json` as the detailed cue record rather than guessing timing from these rounded descriptions.

| Important reaction | Global start and preserved treatment |
| --- | --- |
| Frank | Video 6.9, duration 2.3, existing playback rate 0.75. Voice 6.9, offset 0.98, duration 2.311429, gain 0.55. |
| Mom get the camera | 13.0, duration 3.004082, gain 0.4. Kept earlier in the film as requested. |
| Triple | 18.05, duration 4.989388, gain 0.64. Full selected tail overlaps the built-ins hold. |
| Crowd | Audio 34.285714, offset 2.54, duration 6.080408, gain 0.3. Visual starts at 36.0. |
| Nice | Video and voice 40.414286. Audio duration 2.1735, gain 1.0. Video duration 2.2022. |

The last audio correction raised Nice by 9.12 dB before the shared limiter. Preserve unity gain unless explicitly changed. Sound tails can overlap scene boundaries; the user prefers overlap over abrupt cuts. Historical "WHERE YOU AT" and "Damn Son" assets are inactive.

If duration changes, update the root scene mounts, local durations, sound cues, music automation, grid, energy data, provenance and credits together. `cinematic-beat-analysis.json` and its Markdown companion are explicitly historical 24-second detector analysis. Current timing lives in the grid, energy, pacing and cue files.

## Working and verification commands

Use the installed skill launcher rather than inventing another renderer. Read these skill files when modifying the video:

| Skill | Location |
| --- | --- |
| Brag and HyperFrames | `/Users/nick/.agents/skills/brag/SKILL.md`, `/Users/nick/.agents/skills/hyperframes/SKILL.md` |
| CLI, registry, media | Sibling `hyperframes-cli/SKILL.md`, `hyperframes-registry/SKILL.md`, `media-use/SKILL.md` |
| Project quality | Repository `.agents/skills/unslop/SKILL.md`; use relevant positioning and terminology skills under `/Users/nick/.codex/skills/`. |
| Materially changed teaching example | `/Users/nick/.codex/skills/learning-example-review/SKILL.md` and `minimal-teaching-visuals/SKILL.md`; fresh visual reviewer required. |
| Waiting | `/Users/nick/.agents/skills/await-work/SKILL.md`; exponential backoff with retained job identity. |

Brag is the workflow owner: its plan and brief replace generic HyperFrames storyline and SPEC work. Skip generic usage/history/feedback/REVIEW.md steps under that workflow. Local check and visual inspection are the render gates. Prior optional account-linked telemetry was rejected by automatic approval review; it was not needed for the video. Do not retry optional telemetry or publish anything as part of a local revision.

Run these from the active `composition/` directory. The FFmpeg path is a local convenience; verify it still exists in a new environment. HyperFrames launches may require sandbox escalation for npm access and Chromium.

```sh
export PATH=/private/tmp/neohaskell-brag-tools/bin:$PATH
node /Users/nick/.agents/skills/hyperframes/scripts/plugin-cli.mjs lint --json
node /Users/nick/.agents/skills/hyperframes/scripts/plugin-cli.mjs snapshot --at 7.3,8.4,9.6,10.8,11.65 --no-end --output ../verification/next-freezing --json
node /Users/nick/.agents/skills/hyperframes/scripts/plugin-cli.mjs check --at 7.3,8.4,9.6,10.8,11.65 --json
node /Users/nick/.agents/skills/hyperframes/scripts/plugin-cli.mjs render --quality delivery --fps 30 --output ../brag.mp4
```

Use lint during structural iteration, then the full check as the final gate. Redirect verbose stdout and stderr to verification files; print bounded summaries. Inspect actual full-resolution captures and decoded export frames. A successful command alone does not establish visual clarity.

Scene media `data-start` values are local to their nested composition. Five existing lint warnings flag nonzero local starts for Nice, quickscope, Frank and the two crowd videos. Those are intentional and verified, not unresolved runtime errors. Keep GSAP deterministic and seekable, preserve the single paused registered timeline, and let HyperFrames seek video assets. Do not add arbitrary media play/pause calls to composition code.

The poster currently comes from the settled Nice end card at 41.9 seconds. If the finale changes, choose and inspect a new frame. Bake it into the first frame without shifting duration or audio. From the active output directory:

```sh
/private/tmp/neohaskell-brag-tools/bin/ffmpeg -hide_banner -loglevel error -y -ss 41.9 -i brag.mp4 -frames:v 1 -q:v 2 brag.jpg
/private/tmp/neohaskell-brag-tools/bin/ffmpeg -hide_banner -loglevel error -y -i brag.mp4 -i brag.jpg -filter_complex "[0:v][1:v]overlay=0:0:enable='lt(t,0.02)'[v]" -map '[v]' -map '0:a?' -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p -c:a copy -movflags +faststart brag.poster.mp4
```

Before replacing `brag.mp4` with `brag.poster.mp4`, compare ffprobe stream dimensions, frame counts and durations, and verify encoded audio packet hashes match. Use `ffprobe -select_streams a -show_packets -show_data_hash sha256 -show_entries packet=data_hash -of json` on both files. Replace only after validation. Then verify the delivered file plays on the required repository origin.

For audio-energy extraction, the maintained media helper worked through uv with NumPy available:

```sh
PATH=/private/tmp/neohaskell-brag-tools/bin:$PATH /Users/nick/.local/bin/uv run --with numpy python /Users/nick/.agents/skills/media-use/audio/scripts/extract-audio-data.py assets/audio/cinematic-beat-master.wav --fps 30 --bands 16 -o assets/audio/cinematic-beat-energy-30fps.json
```

## Local preview and repository rules

Keep exactly one repository server at `http://127.0.0.1:4323`. At handoff it is running as PID 95398, but verify its current identity rather than trusting that PID later. `npm run dev -- status` is the maintained status command. The video is served through Astro's `/@fs/` path in the watch link above. Add a new query version after a new render to avoid a cached video.

After a completed source-change batch, use the README workflow from repository root:

```sh
npm run preview -- stop
npm run dev -- stop
npm run build
npm run dev -- --port 4323 --background --force
```

Do not create another persistent HyperFrames preview server while the repository server is running. CLI check, snapshot and render use temporary internal browser infrastructure. `require('playwright')` works from repository root for delivered-MP4 playback checks. Navigate to the exact local MP4 URL, play it from zero, wait for ended, then record duration, video error, page errors, dropped frames and decoded audio bytes. Browser automation may require escalation.

Repository changes require applicable checks and a local English commit. Do not push an iteration because pushing can deploy. The video task does not authorize website changes, translations, account operations or public uploads. Stage only the intended files, preserving unrelated work. The last video commit used `git commit --only ... -- brag-output-mlg-2026-11-16-164229`.

Keep responses short and actionable for an ADHD reader: lead with the next action or artifact, state bounded progress, and end with one quick next action. Use plain punctuation, no emojis, middle dots or em dashes. Apply the repository Unslop skill, but explicit accepted MLG style overrides generic rules against loud type, cyan accents and exaggerated effects. Do not reopen accepted direction or ask for permission on routine authorized edits.

## Latest verified state

The v6 source gate passes with zero runtime, layout, motion, contrast, craft or audio errors or warnings. Contrast coverage is 47/47. The five known nested-media lint warnings remain intentional. The normal repository build and copy check pass with 586 pages. No website source changed.

The render completed in 20.5 seconds using screenshot capture and hardware GPU on Apple M4 Max. Actual time may differ on another machine. The decoded 10.8-second export frame matches the reviewed two-path state. Final full Chromium playback returned HTTP 200, duration 42.88, ended=true, zero dropped frames, 1,072,520 decoded audio bytes and no page or video errors. Its 1291 decoded frames include initial native autoplay before explicitly restarting from zero; the file itself contains 1286 frames.

Evidence: `verification/v6-check.json`, `v6-build.log`, `v6-render.log`, `v6-final-probe.json`, `v6-playback.json`, `v6-freezing/`, and `v6-encoded-freezing.png`. v5 captures retain the prior scene and accepted neighbors. The current export's audio packets match v5 exactly. There are no pending jobs or unresolved failures.

The historical agents include feature research, aggressive audio/review, cinematic VFX review, Astra MLG research, MLG composition, and the two most recent freezing agents. Their availability is session-specific. Do not assume they are running or depend on their memory; the durable source, research and review records above carry the useful context. The latest user request authorized this handoff file, not another video change.
