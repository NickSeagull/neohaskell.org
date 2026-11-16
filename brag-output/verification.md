# Verification

Source checkpoint: f9cd95997f54a03238ead4c70ea0f82bd46621bc.

The supplied website checkout was clean at the start of composition work. Earlier observed homepage edits were committed by another session before video creation; this task does not modify them.

## Product evidence

The user authorized consulting /Users/nick/Work/NeoHaskell. Its checked-out revision is 033ae4a570686cd885ca14c6595997d9498d5287, matching the website's recorded source evidence.

- core/service/Service/EventModel.hs exposes the Event Model and runtime assembly used by the visual IDE workflow.
- docs/agent/event-model.md describes typed commands, recorded events, and separately maintained query state. It explains that declarations require real implementations.
- core/service/Service/EventStore/Simple.hs appends events and reads historical streams; core/service/Service/EntityFetcher/Core.hs rebuilds from recorded events after a known position.
- The authentic IDE image is public/images/docs/mug-shop-ide.png from the website. No customer or private records are used.

These are source checks, not a framework execution or release certification. The film uses existing approved site claims and the site's illustrative twelve-mug history, without claiming to run a newly generated app.

## Validation results

Pending composition checks, fresh visual review, final encode verification, and local preview restoration.

Website baseline: npm run build passed, including copy validation and Astro check (zero errors and zero warnings), producing 586 pages. The live homepage at 1440x1000 in dark theme matches the planned slogan, fonts, logo, and palette; its primary documentation link points to /introduction/.

## Completed film

- Hyperframes 0.9.56: zero lint, runtime, layout, and audio errors. Final sampled contrast coverage is 23/23. Motion assertions were not enabled; motion was inspected through timed captures and decoded frames.
- Fresh review: keep, with no material findings remaining. See visual-review.md. Desktop frames are 1920x1080; phone review is 844x475 landscape. The four scene captures and enlarged IDE crop preserve the site's identity and the complete relevant diagram relationships.
- Delivery render: 1920x1080 H.264, 30 fps, 600 frames, exactly 20 seconds of video; AAC audio. The container is 20.01 seconds because of AAC padding, unchanged from the original render. Hyperframes rendered locally using screenshot capture and hardware GPU in 8.5 seconds.
- Poster: selected the fully settled opening promise at 1.1 seconds because it includes the original brand and the central pitch. brag.jpg replaces only frame zero. Decoded frame zero visually matches the poster (SSIM 0.998758 after video encoding). Frame count and timing are unchanged.
- Audio packet SHA256 is identical before and after poster replacement. The music and three SFX are present; measured mean is -27.9 dBFS and peak is -4.6 dBFS. No narration. The maintained audio-reactive helper was unavailable because NumPy is missing, so audio-reactive decoration was omitted as permitted by brag; musical cue timing remains.

Decoded final frames were inspected at 0, 7.8, 12.3, 13.6, and 18.9 seconds. They show the baked poster, complete IDE relationships, stock at 11 after ordering, stock restored to 12 after cancellation with earlier events retained, and the final invitation and destination.

The sole pre-render craft warning, first_frame_empty, is resolved in the delivered MP4 by the required poster replacement. The editable composition retains its opening entrance.

The temporary Hyperframes editor was verified at http://127.0.0.1:4323/#project/composition, then stopped. The website development preview was restarted on the same port. No publication or push was performed. Concurrent homepage changes belong to another session and are excluded from this video commit.

Generated videos, posters, check reports and frame captures remain local under this folder. Source, audio, fonts, licenses, product screenshot, and design/review records are committed for reproduction. The composition package pins Hyperframes 0.9.56. A render also needs FFmpeg and FFprobe on PATH. This run used temporary binaries under /private/tmp/neohaskell-brag-tools/bin without changing website dependencies.
