# Localized homepage hero

Checkpoint: `ade95ef308d191737363746cece5a6e9bfdcff62`. The owner accepted the preceding hero repair and requested good presentation in every language. Scope is the homepage hero layout, without changing existing translations.

## Findings and changes

The English display size made German and Russian headings excessively tall and split Armenian words. This pushed translated body text and actions onto the material artwork. Russian's unsupported Pixelify glyphs fell back to an inconsistent serif face. Spanish and Portuguese also required smaller headings and separate action rows. Portuguese needed the smaller alphabetic scale to keep its second phrase together at ultrawide sizes.

Localized font scales preserve complete words and normal phrase wrapping. The translated accent is inline, and Russian uses the same sans fallback as the other scripts unsupported by Pixelify. Longer action labels stack with a 12px gap. Translated desktop heroes reserve 160px below the content so the lower cyan edge does not cross the copy. English composition and all translation catalogs are unchanged.

## Verification

All nine configured languages were rendered in both themes at 320, 390, 820, 1100, 1280, 1440, and 2560px. The final 126 combinations have no horizontal overflow and no sampled hero-text contrast failures. Conservative character-box samples account for the actual image alpha, fit mode, crop, and theme ground. Visual inspection covered all localized desktop and phone compositions, with closer review of German, Russian, Armenian, French, and Portuguese. Browser captures are in `/private/tmp/neohaskell-hero-locales/`.

Every localized primary action resolves to its matching introduction page with HTTP 200. The secondary action remains the existing framework anchor. Normal build, copy checks, all 20 tests, and translation-file coverage pass. [Structured results](checks.json) record the combined final matrix; the 14 Portuguese cases were rechecked after its final scoped font adjustment.

This verifies layout and presentation using the existing translations. It does not constitute a new native-speaker editorial review or authorize publication.
