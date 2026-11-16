# Adversarial rendered hero review

## Verdict

Revise two layout details, then recheck. The desktop candidate is a meaningful improvement over the rejected giant-logo hero. It is composed rather than merely enlarged: the headline occupies the artwork's deliberate negative space, the rising relief frames the right side, and the cyan channel gives the lower edge a continuous direction. The actual material looks more substantial than the previous sticker-like mark.

It is not strong product storytelling in the manner of Terminal Industries. It remains abstract brand material, closest to the awarded Osmo relief. That is an acceptable, bounded role because the existing paragraph names the language and the actual IDE follows. Do not describe the image as explaining application behavior or proving human control. Its success depends on bringing that next product evidence into view promptly.

The phone composition is weaker than the desktop. It currently treats the relief as a short decorative footer after the standard text stack. A closer crop with less unused vertical space can make it intentional without another image generation.

This review does not establish owner acceptance. Prior review approval of the giant-logo direction was superseded by the owner's explicit rejection.

## Material fixes

### 1. Short desktop: the opening conceals all actual product evidence

Location: `src/styles/home.css`, `.opening` at a 1280x800 viewport.

Observed: the header consumes 88px and the hero has a 760px minimum height. The first fold therefore ends inside the artwork. The ordinary laptop visitor sees the claim, category, actions, and an abstract purple/cyan surface, but no sign of the actual visual IDE. The larger 1440x1000 capture does reveal the next section, so this is specifically a short-height desktop problem.

Change: introduce a short-desktop layout around 600-620px hero height while retaining the more spacious treatment on tall screens. Bring the copy upward by approximately 16px if needed. Reposition the relief deliberately so the cyan edge remains at least 24px below the buttons and the artwork still reaches the page edges. Do not achieve this by blindly cutting 140px from the top of the current `object-fit: cover` image, which can move the channel through the links. The exact height may need adjustment for the existing next-section margin.

Acceptance: at 1280x800, both actions remain comfortably clear, and at least 24-48px of the actual IDE section is visible. No text intersects the image. The scene still reads as one broad field rather than a shrunken right-column illustration.

### 2. Phone: the crop is a shallow footer below an empty wedge

Location: `src/components/HeroArtwork.astro`, phone `.hero-artwork` sizing and image crop.

Observed: at 390px, the secondary link ends near y455. The art scene starts near y492 and ends at y732. Most of its upper-left is empty, and the decisive cyan turn only appears near the lower-right. It feels like a decorative strip attached after the copy. The next-section heading is barely entering at the bottom of the 844px view.

Change: reduce the scene from 240px to about 200-208px and remove its 24px top margin. Enlarge the art within that crop about 1.35 times rather than fitting the entire panorama. Keep the cyan turn around x220 and y560-600 in the 390px first-fold capture, with the upper violet shoulder entering from the right below the actions. Target the hero's bottom around y660-680 instead of y732. These are composition targets, not permission to overlap the links or shrink text.

Acceptance: the phone has an unmistakable close detail with physical thickness, all copy and actions remain immediately readable, and the IDE heading appears comfortably within the initial 844px view. The crop need not reproduce the full desktop diagonal.

## What should remain

1. Keep the approved headline, explanatory sentence, original navigation mark, and two direct actions. They communicate the category and agency without requiring technical prerequisites.
2. Keep the same material asset. It has enough surface detail and a continuous, controlled form. A further generation would address the wrong problem at this stage.
3. Keep both themes free of filters, added gradients, or glow. The alpha cutout integrates acceptably with the light ground; the hard physical edge is an intentional shape, not an accidental rectangular image boundary.
4. Keep the next actual-product section unchanged. Adjust the hero to reveal it; do not redesign the lower page to rescue the opening.

## Comparison with verified references

Terminal Industries: the candidate borrows material weight and an edge-to-edge stage. It does not borrow a literal product object, so it cannot make the same explanatory claim. Earlier product evidence compensates for that difference.

Superlist: the candidate learns from integrating type and objects into one scene. Its mobile crop currently has less force than Superlist's close, deliberate object composition. The requested mobile correction addresses that weakness without copying a floating gadget pile.

Osmo 2025: this is the closest valid reference. Both use a large relief as the physical basis for broad, restrained type. NeoHaskell appropriately replaces Osmo's orange light/noise and auxiliary labels with its accepted violet/cyan identity and simpler copy. Today's Osmo resource-card hero is a later design and is not evidence for the awarded composition.

The result is more authored than a generic two-column SaaS hero, but its strongest claim is a coherent brand composition, not a new visual explanation of the language. Do not overstate its originality or describe it as award quality solely because it used award-winning references.

## Inspected evidence

Raw first folds: `candidate-fold-1440-dark.png`, `candidate-fold-1440-light.png`, `candidate-fold-1280-dark.png`, `candidate-fold-1280-light.png`, `candidate-fold-390-dark.png`, and `candidate-fold-390-light.png`.

Additional raw views: `candidate-hero-1280-dark.png`, `candidate-next-1440-dark.png`, and `candidate-next-390-light.png`.

Sources inspected: `src/components/HeroArtwork.astro`, the hero rules and theme tokens in `src/styles/home.css`, and the rendering location in `src/components/Home.astro`. The asset is decorative and correctly has empty alternative text in an `aria-hidden` container. Static captures cannot verify the entrance animation; its source uses one bounded transform and respects reduced motion through the shared stylesheet.

Build/tests were reported passing by the parent agent. This review does not independently certify the pending automated layout checks.

## Revision review

Reinspected the refreshed `candidate-fold-1280-dark.png`, `candidate-fold-1280-light.png`, `candidate-fold-390-dark.png`, and `candidate-fold-390-light.png`.

The two requested changes are resolved. The laptop hero ends at y708, leaving a visible entry into the actual IDE section. Text and both actions are clear of the cyan path in both themes. The phone hero now ends at y676 and exposes the full IDE heading. Its closer cyan turn has more physical presence, with the previous unused wedge removed. No additional generation or desktop styling change is warranted.

One new mobile crop defect remains: the enlarged image is clipped by the artwork container's `overflow: hidden`. In both phone themes, the upper violet plane terminates in an artificial horizontal edge at y468, from approximately x260 to the right viewport edge. This is a container boundary cutting the artwork inside the page, not the material's own angled silhouette. It makes the phone art look like a rectangular image strip again.

Smallest repair: set the mobile `.hero-artwork` to `overflow: visible`, retaining `.opening { overflow: clip; }` to prevent page overflow. This lets the true diagonal extend upward into the empty right side near the secondary action. Confirm that neither action touches the revealed artwork. If that produces a collision, move the image horizontally before altering the copy or scene height.

Verdict after revision: both initial findings resolved; one introduced crop-boundary defect remains. No other material issue was observed. Owner acceptance remains pending.

## Final verdict

Reinspected the final refreshed `candidate-fold-390-dark.png` and `candidate-fold-390-light.png`. The artificial horizontal crop edge is gone. The actual violet diagonal now enters from the right near y414 and continues cleanly into the close material detail. Both actions remain separate and readable, and the full IDE heading remains visible below the hero. The repair resolves the introduced defect in both themes.

Final visual verdict: ready for owner review, with no remaining material visual blockers in the inspected desktop and phone states. The new hero is a coherent brand composition and a meaningful improvement over the rejected giant-logo layout. It remains deliberately abstract brand artwork, with the following IDE section providing product evidence. This verdict does not establish owner acceptance or publication authorization.

The parent reports a passing final build and four final phone checks covering 320px and 390px in dark and light themes, with no overflow, motion, or link failures. Those automated checks are reported evidence; this reviewer directly verified the refreshed 390px images and previously inspected both 1280px themes and the 1440px first folds.
