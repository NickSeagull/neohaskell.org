# Homepage hero replacement, 16 November 2026

The owner rejected the oversized-logo hero and requested an adversarial subagent to research award-winning references and build a stronger replacement. Checkpoint: `12b2da80caab19fb0b24547ce2d1812f0de55e91`. The independent research and exact award links are in [research.md](research.md). The final result remains pending owner acceptance.

## Implemented direction

One full-width composition places the approved headline and category description in the negative space of a cropped violet material relief. A continuous cyan inset and angular joins echo the existing identity. The original navigation logo, typography families, copy, actions and lower homepage sections remain. The artwork supplies brand atmosphere; the actual IDE immediately below supplies product evidence. It does not illustrate language execution or introduce technical concepts.

Desktop uses a broad diagonal composition. Short desktop viewports use a 620px opening, exposing the beginning of the IDE section at 1280x800. Phones keep immediate, left-aligned text and actions above a close 208px artwork crop. The image has one bounded 1100ms entrance and no animation under reduced motion. It is decorative, has empty alt text and is hidden from assistive technology.

## Artwork provenance

Generated with the built-in image generation tool. The selected 1672x941 PNG was converted to a 102KB WebP with true alpha using Sharp, without creative post-processing. The first building-like candidate and second whole-machine candidate were rejected before implementation. The selected macro relief avoids a complete building or device silhouette.

- Asset: `public/images/home/hero-relief.webp`.
- Exact prompt: [artwork-prompt.txt](artwork-prompt.txt).
- Prompt sidecar: `public/images/home/hero-relief.webp.json`, written with the maintained Impeccable embed-prompt command.

## Verification

Normal build passes, including the copy check and Astro diagnostics. All 20 repository tests pass. Browser checks cover seven viewport sizes from 320px through 1440px in both themes, with no horizontal overflow and loaded artwork. Both action destinations resolve; reduced motion disables the entrance. Structured results are in [checks.json](checks.json). A final four-case phone check at 320px and 390px is in [phone-checks.json](phone-checks.json).

The adversarial render review required a shorter laptop hero and tighter phone crop. Both were implemented in one correction batch, followed by a server restart and the final browser matrix on `http://127.0.0.1:4323`. The review is retained in [render-review.md](render-review.md). The closer phone crop initially clipped the upper silhouette; allowing local image overflow while retaining outer hero clipping resolved that defect. The normal build and final phone checks passed after this repair. The final composition was visually inspected in both themes on desktop and phone. No publication is authorized by this task.

The design detector reports advisory 112px and 96px headline sizes outside its shared ramp. Both are intentional hero-only values documented in DESIGN.md; no global token or sidecar repair was made. Prompt scan reports one raster and no missing provenance.
