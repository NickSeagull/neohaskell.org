# Hero contrast and image quality correction

Checkpoint: `62553d2a744378e57c5720d32caba16a230caa87`. The owner called the composition better but rejected its contrast and compression quality, requesting a subagent review. The correction preserves the composition, copy and palette.

## Causes and repairs

The previous cover sizing cropped violet material under the pixel headline and cyan under the secondary action at wide sizes. At tablet widths, the violet silhouette crossed the secondary action. Changing foreground colors would not resolve these changing backgrounds. The relief now fills the desktop field without cover cropping, and stacks below the copy at widths up to 1100px. The tablet image also uses fill to preserve its complete angled silhouette. Only the existing close phone crop retains cover sizing.

The original source already contained grain. Its lossy WebP encoding additionally introduced blocky colored fringes at transparent edges. A built-in image generation edit removed grain while preserving geometry and transparency. The edited source was encoded as lossless WebP. The resulting 605548-byte asset preserves every visible source color channel and the complete alpha channel. It replaces the previous 104108-byte lossy asset. Extra transfer size is intentional.

Asset: `public/images/home/hero-relief.webp`. Exact edit prompt: [artwork-prompt.txt](artwork-prompt.txt), also recorded in the asset's JSON sidecar. The tool returned 1672 by 941px despite a higher-resolution request. This is a smoother, lossless asset, not a native 4K replacement. High-density ultrawide screens still interpolate the raster; no fake resolution increase or sharpening was applied.

## Verification

The independent review sampled actual rendered backgrounds under solid glyph pixels in both themes, including tablet and ultrawide sizes. The previous contrast approached 1:1 where art crossed text. Corrected minimum sampled contrast is 5.93:1 in light mode and 7.38:1 in dark mode; body text is 8.25:1 and 11.07:1 respectively. These measurements cover the inspected hero text, not a full-site accessibility certification.

The normal build and all 20 tests pass. Parent browser checks cover 18 combinations from 320px through 2560px at device scale factor 2, with no overflow, loaded artwork, correct tablet stacking, reduced motion, and both working destinations. A final tablet-only correction removes a horizontal crop boundary; the final review checks that repair. Prompt provenance scan reports no missing prompt.

The independent findings and final verdict are in [review.md](review.md). No publication was requested. Owner acceptance of the final repair remains pending.
