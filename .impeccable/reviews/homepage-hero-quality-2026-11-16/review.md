# Hero contrast and image-quality review

## Finding

The owner's contrast complaint is reproducible. The artwork crosses actual text at wider desktop and intermediate tablet sizes. Passing checks at 1440px and 390px did not cover that geometry. The asset also combines source texture, lossy encoding damage, and insufficient native resolution for large high-density screens. These are separate causes.

Review scope: homepage hero only. Preserve the owner's improved composition direction, original identity, headline, category sentence, actions, and later sections. Latest feedback authorizes correcting contrast and image finish, not replacing the whole art direction. Skills applied: local visual language, content review, Unslop, positioning, and design-feedback. The visitor should understand the language category and find the documentation action without the artwork weakening either.

## Confirmed defects

1. `HeroArtwork.astro` uses `object-fit: cover` with bottom alignment in a fixed-height field. As width grows, the source image grows vertically, then loses its upper negative space to cropping. At 2560x1440, the violet plane crosses the pixel headline and the cyan channel runs beneath the secondary action. At 1920x1080, the pixel word already meets the bright violet edge. At 820x900, the secondary link crosses the violet bevel. The cause is placement, not weak base palette values.
2. Approximate contrast at fully colored glyph positions falls to 1.01:1 for the pixel word at 2560px in light mode, 1.13:1 for the secondary action at 2560px in dark mode, and 2.22:1 for the secondary action at 820px in light mode. On the intended plain background, those colors have strong contrast: pixel word 5.93:1 light and 7.38:1 dark; body 8.25:1 and 11.07:1; secondary action 16.94:1 and 18.08:1. These are estimates from actual screenshot glyph positions and decoded image coordinate mapping, not a complete accessibility audit.
3. The 104,108-byte WebP visibly adds blocky grey/magenta fringes around the cutout's diagonal edges relative to the 1,326,618-byte original PNG. Alpha values are identical; the new damage is RGB encoding around the partial-alpha boundary. The original has a much cleaner edge. Interior texture also becomes coarse. Raw detail crops are retained for comparison.
4. Both source and WebP are only 1672x941. At 2560 CSS pixels and DPR2, the artwork spans 5120 physical pixels, approximately 3.06 times its native width. Even lossless encoding cannot create missing detail. The original itself also contains dense generated grain and milling texture, so a higher WebP quality setting alone cannot remove the noisy finish.

## Selected repair and evidence boundary

Keep the composition. Preserve its negative-space proportions instead of cropping them away on desktop; move the material below the copy at intermediate widths. Do not add a text-shadow, dark overlay, glow, or global palette change to hide a geometry defect. Test full-width fill for the abstract relief and inspect its physical shape at 2560px. A capped centered image would leave cutout edges inside the page, so it is a poorer first repair.

The parent's built-in fidelity edit was visually inspected at `/Users/nick/.codex/generated_images/01a1e42a-85b1-7c23-8a86-53921c19753a/exec-1048d003-6d2b-493e-9757-4638f213af10.png`. It preserves the silhouette and joins, and materially reduces grain and milling texture. It remains 1672x941. It must not be called native 4K or claimed to solve all high-density resolution limits. Lossless WebP is appropriate to preserve its boundary colors without repeating the compression damage.

## Evidence

Sixteen DPR2 captures cover 2560x1440, 1920x1080, 1440x1000, 1280x800, 1100x820, 1024x768, 820x900, and 390x844, each in dark and light themes. They are `before-{width}-{theme}.png`. Geometry and computed colors are in `render-metrics.json`; approximate glyph contrast results in `contrast-estimates.json`; source/encoding comparison in `encoding-comparison.json`. `original-detail.png`, `webp-detail.png`, and `repaired-detail.png` isolate the same material detail. These files are review evidence, not production assets.

## First repair verification

The repaired desktop geometry and earlier stack breakpoint remove the confirmed text/image collisions in all 16 checked cases, including the 1100/1101px boundary. The follow-up measures the actual rendered background by taking a second screenshot with the copy hidden, then samples beneath fully colored glyph pixels. Headline, pixel accent, paragraph, and secondary action now remain on the intended plain background: minimum measured contrast is 5.93:1 in light mode and 7.38:1 in dark mode. The original body contrast remains 8.25:1 light and 11.07:1 dark. No horizontal overflow was found. Results: `after-contrast.json`.

The smoother source and lossless delivery visibly remove the coarse texture and blocky cutout fringe. The parent independently reports zero changed visible channels and preserved alpha against the edited PNG. The expanded relief retains believable joins at 2560px, although it becomes a broader, flatter composition than the narrower desktop crop. The composition remains coherent and keeps the user's accepted direction. A native 1672px raster still cannot provide true 1:1 pixel detail across a 5120-device-pixel viewport; the delivered improvement is removal of compression damage and noisy texture, not an increase in native source resolution.

One introduced tablet defect requires correction before completion: the newly stacked 280px scene still uses cover at widths from 481px through 1100px. Its crop slices the upper plane into a horizontal edge immediately below the actions. Use the full-source fill treatment for that interval too, retaining the established close cover crop only at 480px and below. This is the same crop-boundary defect already solved on phones, not a request to reopen the composition.

## Final verdict

The tablet silhouette repair is resolved. Final 820px and 1100px captures in both themes show a continuous angled upper edge, readable actions, and no horizontal overflow. The actual-background contrast checks remain at least 5.93:1 in light mode and 7.38:1 in dark mode for the reviewed text. Evidence: `final-{820,1100}-{dark,light}.png` and `final-tablet-contrast.json`.

The reported contrast and encoding defects are fixed in the inspected layouts. The smoother lossless image is visibly cleaner, and the material no longer interferes with the message. No further material visual correction is required for this scope. The native raster resolution limit remains documented; this review does not claim a 4K source, a full accessibility audit, or owner acceptance. Ready for the owner to inspect the working preview.
