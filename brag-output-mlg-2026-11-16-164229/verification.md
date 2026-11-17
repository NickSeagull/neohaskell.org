# Friday deployment revision verification

V7 changes three scenes in the existing film. The opener now says DEPLOY ON / FRIDAY. The freezing scene retains its two independent checkout paths, then changes the heading to NEW FEATURE / OLD FEATURES STILL WORK and follows the two visible successes with Tony Stark and WEIRD FLEX BUT OK. The purple victory scene now says ABSOLUTE / CINEMA, adds the original Scorsese meme, and switches to GO / OFFLINE before the unchanged brand and Nice ending.

The accepted v6 export and poster are preserved as brag-mlg-v6.mp4 and brag-mlg-v6.jpg. Checkpoint 9133b1a5b2b4efc1ab02f2951a6f53227dd4d9a0 preserves their source. Hashes are in preserved-version.json. Six other scene files are byte-identical to that checkpoint. Nothing was published or pushed.

The source lasts 44.571428571 seconds: 104 beats at 140 BPM. Four beats were added after the freezing proof, and every subsequent host and sound moved forward by 1.714285714 seconds. Programmatic checks confirmed contiguous scene boundaries and agreement between every audio cue record and its rendered tag. The built-ins cadence and specification's 5.2-second reading hold remain unchanged. The motion sidecar now audits the entire duration, replacing its stale 24-second boundary; its maximum static interval explicitly accommodates that approved reading hold.

The same music source is extended continuously from source 30.857142857 through 75.428571429 seconds, without looping or time stretching. Its grid, energy data, provenance and automation are synchronized. The new Vine boom plays after Frank and before the camera sample. Nice remains at unity gain. The final mix measures -15.33 LUFS, -0.99 dBTP and 6.10 LU loudness range.

Final HyperFrames gate: verification/v7-check-stable.json passes with zero runtime, layout, motion, contrast, craft or audio errors or warnings. Six lint warnings describe intentionally local nonzero nested video starts, including the new Tony clip. The source clip is padded with its final frame to cover the full reaction hold. Fresh 13.3s and 13.5s captures confirm no blank tail. The completed diagram is explicitly hidden when the opaque reaction scene replaces it, so invisible text does not remain in the layout audit.

The fresh teaching-example review returned keep. Both old and new behaviors remain visible before the reaction; the reaction never covers a live teaching step. v7-visual-review.md records the reviewed scope and the existing limitation of small diagram labels when a landscape film is scaled into a portrait feed. It does not claim owner acceptance or executed language guarantees.

The delivery render completed in 18.2 seconds with screenshot capture and hardware GPU. The final MP4 has 1338 video frames at 1920x1080 and 30 fps, a 44.600-second video stream and a 44.608-second container. The end-card poster was taken at 43.6 seconds and replaces frame zero. Before replacement, ffprobe confirmed unchanged stream durations and frame counts; every encoded audio packet hash matched. The full export contact sheet and full-resolution decoded frames at 13.3 and 38.2 seconds were inspected.

The normal repository build and copy check pass, with 586 pages. Only video sources, media and their records changed. The single repository development server was restarted at http://127.0.0.1:4323 after the source batch. Other listening development servers were verified to belong to other projects and preserved.

Render command from composition/:

```sh
PATH=/private/tmp/neohaskell-brag-tools/bin:$PATH node /Users/nick/egregoreOS/.agents/skills/hyperframes/scripts/plugin-cli.mjs render --quality delivery --fps 30 --output ../brag.mp4
```

Final Chromium playback on the required local origin returned HTTP 200, reached ended=true at 44.608 seconds, decoded 1338 video frames and 1,114,570 audio bytes, and reported zero dropped frames, video errors or page errors. Evidence: verification/v7-playback.json. The first browser harness waited for loadeddata while paused and was terminated at its deadline; starting playback directly resolved that harness issue. No video-source change was needed.
