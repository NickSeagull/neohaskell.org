/** Announce a disclosure before it changes the companion's dimensions. */
export function beforeExampleResize(example: HTMLElement) {
  example.dispatchEvent(new Event('example:resize', { bubbles: true }));
}

/** Observe native section snapping without intercepting wheel, touch, or keys. */
export function scrollSections(root: HTMLElement, onActive: (scene: HTMLElement, changed: boolean) => void) {
  const scenes = [...root.querySelectorAll<HTMLElement>('[data-scroll-scene]')];
  const companion = root.querySelector<HTMLElement>('[data-lesson-companion]');
  let active: HTMLElement | undefined;
  let scheduled = false;
  let preservingPosition = false;
  const clearance = () => (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 96)
    + (scenes[0] ? parseFloat(getComputedStyle(scenes[0]).scrollMarginTop) || 0 : 0);
  const update = () => {
    scheduled = false;
    if (preservingPosition) return;
    const top = clearance();
    let chosen = scenes[0];
    for (const scene of scenes) if (scene.getBoundingClientRect().top <= top + 24) chosen = scene;
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) chosen = scenes[scenes.length - 1];
    if (chosen && chosen !== active) {
      const changed = !!active;
      active = chosen;
      scenes.forEach(scene => { scene.dataset.current = String(scene === chosen); });
      root.dataset.activeScene = chosen.id;
      document.querySelectorAll<HTMLElement>('[data-section-link]').forEach(link => {
        if (link.dataset.sectionLink === chosen.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      onActive(chosen, changed);
    }
  };
  const schedule = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } };
  const observer = new ResizeObserver(schedule);
  scenes.forEach(scene => observer.observe(scene));
  // The compact companion stays above the prose on small screens. Account for
  // its actual height so snapped headings and fragment links remain visible.
  if (companion) {
    const measure = () => {
      document.documentElement.style.setProperty('--lesson-companion-height', `${companion.getBoundingClientRect().height}px`);
      schedule();
    };
    new ResizeObserver(measure).observe(companion);
    measure();
    root.addEventListener('example:resize', () => {
      if (preservingPosition || !active || !matchMedia('(max-width: 1180px)').matches) return;
      const pane = companion.getBoundingClientRect();
      if (pane.top > parseFloat(getComputedStyle(companion).top) + 1) return;
      const scene = active;
      const offset = scene.getBoundingClientRect().top - clearance();
      preservingPosition = true;
      document.documentElement.dataset.guidedResizing = 'true';
      requestAnimationFrame(() => {
        measure();
        if (Math.abs(pane.height - companion.getBoundingClientRect().height) > 1) {
          // Keep the same passage below an expanded/collapsed example. Native
          // wheel, touch and keyboard scrolling remain entirely browser-owned.
          scrollBy({ top: scene.getBoundingClientRect().top - clearance() - offset, behavior: 'instant' });
        }
        requestAnimationFrame(() => {
          delete document.documentElement.dataset.guidedResizing;
          preservingPosition = false;
          schedule();
        });
      });
    });
  }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  addEventListener('hashchange', schedule);
  document.fonts.ready.then(() => {
    document.documentElement.dataset.guidedScroll = 'snap';
    // Fonts and the shared pane determine mobile anchor clearance. Reapply a
    // direct-entry fragment once after that layout settles, using native scroll.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const target = scenes.find(scene => `#${scene.id}` === location.hash);
      target?.scrollIntoView({ block: 'start', behavior: 'instant' });
      schedule();
    }));
  });
  update();
}
