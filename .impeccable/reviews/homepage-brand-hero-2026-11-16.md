# Brand hero replacement

Checkpoint: `5f93f0b4a778fc8b1eb8dd0d227197d9cb43278d`. The owner rejected the shipping-rule example and requested an epic opening comparable to well-funded frameworks. Unrelated launch-video work is excluded.

## Reference and decision

Inspected the actual [Laravel](https://laravel.com/), [Next.js](https://nextjs.org/) and [Nuxt](https://nuxt.com/) homepages at 1440px and 390px. Laravel pairs a short promise with substantial branded artwork. Next uses large brand typography and open space. Nuxt presents a product/code example. The selected NeoHaskell treatment draws on the first two qualities without copying their identity or adding another lesson.

The original headline now has a 112px desktop ceiling, with a 1.2:1 composition around the unchanged original logo. Two fine outline copies of the logo geometry add depth. The category description and actions remain, while the shipping example and its unused strings are removed. Phones center the copy above a smaller artwork. A single coordinated entrance has a static reduced-motion state. No generated raster, new font, runtime dependency or product claim was added.

The fresh independent reviewer returned ship for local presentation after reviewing the actual reference screenshots and the new English desktop/phone hero in both themes. It judged the result closest to Next's brand-led approach, with Laravel's split composition, and explicitly did not equate it with Laravel's illustration complexity. The documenter updated the existing design and surface records and marked the rejected shipping treatment historical. Owner acceptance remains pending.

## Verification

- Normal build: copy check passed, zero Astro errors or warnings, 586 pages built. Existing tests: 20 passed.
- Twelve settled viewport/theme cases at 320, 390, 760, 820, 1100 and 1440px: no horizontal overflow, original logo loaded, existing actions present. Both destinations return 200 and the capabilities fragment resolves.
- The first artwork size exceeded the available width. Reducing the excess width fixed the settled composition. An additional animation-start check found temporary tablet overflow from horizontal movement; changing the entrance to a 24px vertical movement fixed it at 761, 820, 1100 and 1440px without changing the settled composition.
- Reduced motion disables the entrance. Existing German, Japanese and Armenian homepages remain within a 320px viewport; translated prose was not edited.
- The detector reported only hero font-size values outside the previous scale. These are deliberate, scoped display sizes documented in the existing records. The intermediate cap was normalized from 82px to 80px; no global token or sidecar migration was performed.

The development server was restarted after each runtime batch and remains at `http://127.0.0.1:4323/`. All verification used that origin. Temporary evidence is `/private/tmp/neohaskell-hero-brand/`: raw framework screenshots, `final-*` settled captures, `final-checks.json`, `access-checks.json`, build/test logs, detector output and independent `review.md`. The last motion-only correction leaves the settled captures unchanged.

The visual verdict covers composition and introductory meaning. Browser checks establish the recorded layout and behavior; neither establishes owner acceptance or measured visitor comprehension.
