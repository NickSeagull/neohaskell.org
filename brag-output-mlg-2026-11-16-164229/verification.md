# MLG experiment verification

This is a separate 24-second, 1920x1080, 30 fps experiment requested after the owner accepted the cinematic cut. The approved original directory remains unchanged. Named copies brag-approved.mp4 and brag-approved.jpg live beside the original export. preserved-version.json records matching SHA-256 values, rechecked after the experiment. The initial repository checkpoint is ade95ef308d191737363746cece5a6e9bfdcff62; the approved source commit is 286fd6b700544ca6b434436958d78b94c1258aa5.

The explicitly requested Astra agent researched primary references and actual hosted clips, then reviewed the implementation against that research. mlg-research.md contains its findings. mlg-review.md records the product-specific joke review and the corrected crowd framing. The owner additionally requested dank and edgy text; the experiment uses the revised copy in brag-plan.md. This does not change the approved website copy or cinematic film.

The nine-scene film contains the real Intervention quickscope, Filthy Frank clock cutout, Supa Hot Fire crowd, scope locks, hitmarkers, a six-item combo, outlined meme stamps, pixel sunglasses and 23 placed sound cues. The source code and IDE evidence remain unchanged. The sources, edits and hashes are in meme-assets.json. The soundtrack remains the approved Dark Horizons excerpt with local volume automation and a limited SFX bus.

The final HyperFrames check passes with zero errors. All 27 sampled text contrast checks passed, and layout has zero warnings. Three lint warnings identify intentionally local nonzero media start times in sub-compositions. The remaining craft warning concerns reading the entire supporting DSL excerpt in its brief evidence shot, as in the approved film. The visible claim is the reading target. All other reading holds pass.

Raw browser captures and decoded delivery frames were inspected. The scope no longer covers the main claim; Frank's caption clears the updated-contract label; the reply is shortened to NAH; inactive crowd wrappers are transparent; and the main crowd reaction remains in frame. Known screen colors were keyed with FFmpeg because the maintained cutout command has no explicit color-key mode. Chromium confirmed the alpha channels render correctly.

The delivery file contains 720 H.264 frames at 1920x1080 and 30 fps, with 24.000 seconds of AAC audio. The final mix measures -15.46 LUFS integrated, -3.36 dBTP true peak and 5.80 LU range. Full 24-second browser playback completed with zero dropped frames, successful audio decoding, and no page errors. Both experiment and preserved-original URLs returned HTTP 200. The browser decoded 724 frames including native autoplay before the explicit seek to zero; the encoded frame count is independently verified.

The poster is the settled identity with pixel sunglasses at 23 seconds. It replaces only the first video frame. Duration, stream metadata, and encoded audio packet hashes match before and after poster insertion. Detailed check, snapshot, render, audio and playback records are retained in verification/, excluded from Git together with generated exports.

The normal website build and copy check pass with 586 pages. Its first run found eight missing keys in concurrently edited homepage files; after those separate catalog edits arrived, the repeated build passed. This task did not edit or stage those website files. Authored experimental copy passes the repository punctuation rules. Nothing was pushed or published. The sole persistent repository server is http://127.0.0.1:4323.

Render again from composition/ with the maintained launcher:

```sh
PATH=/private/tmp/neohaskell-brag-tools/bin:$PATH node /Users/nick/.agents/skills/hyperframes/scripts/plugin-cli.mjs render --quality delivery --fps 30 --output ../brag.mp4
```
