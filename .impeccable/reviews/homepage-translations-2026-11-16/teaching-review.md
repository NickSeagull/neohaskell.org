# Homepage translation teaching-example review

Verdict: simplify.

Scope: translated homepage hero, visual IDE, frozen-contract example and specification example. Raw light-theme captures at 390px and representative 1440px desktop views were inspected before source. All eight translated freeze examples were inspected at 390px. The English desktop examples supplied comparison context. This is a visual and editorial review, not a native-speaker certification or runtime test.

Central learning goal: see that the original checkout continues using its unchanged contract while the revised checkout uses a separate contract with email; understand that the specification is part of the code and describes orders supplying stock information.

The accepted violet identity, authentic English IDE image, code identifiers, separate command and query slices, two independent contract lanes, and surrounding benefit explanations remain appropriate. The translations retain the approved final-product promises. No new auxiliary labels or interactions are needed.

## Findings

1. Reflow the caller labels so translated words cannot intersect their connector. In `before-hy-390-freeze.png`, `before-hy-1440-freeze.png` and `before-ru-390-freeze.png`, the updated-checkout label extends into its arrow. The existing 80px mobile and 104px desktop label columns do not contain these words. The collision obscures the relationship the figure is meant to establish. At narrow widths, put the caller icon and label together above its contract and retain a distinct connector; at wider widths, give the label a flexible bounded column and safe wrapping. Keep 16px labels instead of shrinking text. Preserve the two independent connections and lock on the original contract.
2. Name the checkout form rather than the purchase in Spanish and Portuguese. The labels `Compra existente` and `Compra actualizada` read as an existing or revised purchase, while the text and computer icon describe callers. Use Spanish `Formulario actual` and `Formulario actualizado`; Portuguese `Formulário atual` and `Formulário atualizado`. This removes an unnecessary inference without introducing domain jargon. Surrounding prose can retain its current explanation of the checkout page.

## Evidence and remaining verification

The specification document retains a short localized domain requirement before the exact English DSL. The command produces an event and the separate query consumes that event. Code source declares 16px and body requirement 18px. The caller source declares 16px and contract fields 16px; computed-size evidence should accompany the correction capture.

Hero translations remain readable in inspected mobile captures. IDE copy describes reviewing the whole application without requiring command/event/query knowledge. English identifiers in the real screenshot and code are intentionally preserved under README policy, and the source now scopes English language tags to actual English code/fields instead of localized prose.

Recapture the corrected freeze examples at 390px and 1440px, plus the 320px stress case and dark theme. Verify label containment, retained connections, and unchanged code accessibility. The reviewer will score both findings on the correction pass. No owner acceptance is implied by this verdict.

## Correction pass

Verdict: keep for the two listed findings.

1. Resolved. The Armenian 390px and 1440px captures and Russian 390px capture now keep labels clear of connectors. Phones use an icon and label above each full-width contract, connected with a short downward arrow. Desktop preserves separate horizontal paths. All eight translated 390px freeze examples were inspected in the correction pass. The locked original and added email remain distinct, and the layout adds no explanatory chrome.
2. Resolved. Spanish now shows `Formulario actual` / `Formulario actualizado`; Portuguese shows `Formulário atual` / `Formulário atualizado`. The labels now identify the form that invokes each behavior.

The saved `final-checks.json` has 54 viewport/theme cases, no reported page or inspected-element overflow, and computed 16px text for checkout labels, contract fields and specification code in every case. This is supplied browser evidence, inspected by the reviewer; dark-theme and 320px appearance are not independently image-reviewed in this pass.

Evidence freshness note: `final-pt-390-freeze.png` and `final-pt-390-spec.png` precede the final Portuguese formal-address correction. Current source has `Acrescente`, `Veja`, and `Registe`, while those captures retain `Acrescenta`, `Vê`, and `Regista`. The implementing agent should retain an updated Portuguese capture after its rebuild. This does not reopen either resolved finding; the form labels and layout are already verified.

The verdict covers readable localized labels, preserved example relationships and the scoped language presentation. It does not certify native-speaker accuracy for every language, runtime capabilities, user comprehension outcomes, deployment, or owner acceptance.
