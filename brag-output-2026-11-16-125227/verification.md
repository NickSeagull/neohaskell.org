# Cinematic launch film verification

The final source produces a 24-second, 1920x1080, 30 fps film. The editable composition is in composition/. The local delivery files are brag.mp4 and brag.jpg; generated exports and detailed verification captures are excluded from Git. The caption and required music attribution are in share-copy.txt.

The user accepted the cinematic soundtrack, typography and effects, then requested an immediate beat, removal of the agent-skills scene, and a stronger developer-benefit pitch. The clean-tree checkpoint for this refinement is 62553d2a744378e57c5720d32caba16a230caa87. The final soundtrack now begins on the main beat at zero and contains fourteen uninterrupted bars at 140 BPM. The prior quiet introduction is removed. Source timing and measured levels are recorded in audio-notes.md.

The story now connects four developer gains: build your idea, understand what you build, spend less time on setup, and build the whole app with an integrated set of tools. The final payoff replaces the agent-skills scene. benefit-review.md records the independent visual and positioning review, with no material findings.
HyperFrames check passes with zero lint, runtime, layout, motion, or contrast errors. All 34 sampled text contrast checks passed. The sole craft warning concerns reading the entire authentic DSL excerpt during its 1.7-second evidence shot; the primary claim is readable and the montage is not a code tutorial. The following rule shot uses three large behavioral pairs rather than an unreadable complete listing.

The earlier independent review in cinematic-review.md resolved the empty rules boundary, clipped duplicate keywords, and weak circular impacts. Raw captures verify immediate headline visibility, large Given/When/Then pairs, directional bursts, retained event history and the reconstructed answer. Reviewer approval is recorded separately from owner acceptance.

The normal website build passed with 586 pages. No website application source or translations changed. Authored film copy passes the project punctuation rules. All runtime dependencies, fonts, images and audio are local, with credits preserved. Nothing was pushed or published.

The final encoded file contains 720 H.264 frames at 1920x1080 and 30 fps, with 24.000 seconds of AAC audio. Full 24-second browser playback completed with zero dropped frames, successful audio decoding, and no errors. The browser counted 725 decoded frames including native-player autoplay before seeking to zero; the encoded file independently contains exactly 720 frames. The served URL returned HTTP 200 and video/mp4. Poster insertion preserves every frame timestamp and copies the encoded audio stream unchanged, verified by matching SHA-256 audio packet hashes. Detailed measurements and browser results are retained in verification/.

To render again, run the maintained HyperFrames launcher from composition/:

```sh
PATH=/private/tmp/neohaskell-brag-tools/bin:$PATH node /Users/nick/.agents/skills/hyperframes/scripts/plugin-cli.mjs render --quality delivery --fps 30 --output ../brag.mp4
```

The poster is extracted from the settled final identity at 23 seconds and baked into only the first video frame for reliable idle thumbnails.
