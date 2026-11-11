import { beforeExampleResize, scrollSections } from './scroll-sections';
import { evaluateOrder, type OrderResult } from './order-model';
const explanations: Record<string, string> = {
  command: 'Command: asks for a change. Creating it does not change stock.',
  decision: 'Decision: accept only when the requested quantity is positive and available.',
  event: 'Event: OrderPlaced records an accepted order. A rejection adds no accepted-order event.',
  query: 'Query: reads available stock. Its answer can change; the recorded fact stays.',
  identity: 'entityId identifies the existing entity this command is for.',
  quantity: 'quantity is how many mugs the customer wants. Intention comes before a change in stock.',
  integer: 'Int is a whole number. The decision still checks it is positive and available.'
};

const focusFor = (phase: number) => ['command','decision','event','query','decision'][phase-1] || 'command';
const code = 'data PlaceOrder = PlaceOrder\n  { entityId :: Uuid\n  , quantity :: Int\n  }\n  deriving (Generic, Typeable, Show)';
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const controllers: OrderExample[] = [];
class OrderExample {
  root: HTMLElement; stage: number; exploring = false; pinned = ''; showingCode = false;
  timers: ReturnType<typeof setTimeout>[] = []; attention?: Animation; result: OrderResult;
  constructor(root: HTMLElement) {
    this.root = root; this.stage = Number(root.dataset.defaultStage || 1);
    this.result = evaluateOrder(this.stage === 5 ? 0 : 3, 1);
    root.querySelector('[data-scenario-action]')!.addEventListener('click', () => {
      if (this.exploring) { this.exploring = false; this.pinned = ''; this.sync(this.stage, true); }
      else this.tryScenario();
    });
    root.querySelector('[data-code-toggle]')!.addEventListener('click', () => {
      beforeExampleResize(root);
      this.showingCode = !this.showingCode;
      root.querySelector<HTMLElement>('[data-model-view]')!.hidden = this.showingCode;
      root.querySelector<HTMLElement>('[data-code-view]')!.hidden = !this.showingCode;
      const toggle = root.querySelector('[data-code-toggle]')!;
      toggle.textContent = this.showingCode ? 'Model' : 'Code';
      toggle.setAttribute('aria-expanded', String(this.showingCode)); this.inspect(this.pinned);
    });
    root.querySelectorAll<HTMLButtonElement>('[data-inspect]').forEach(button => {
      const key = button.dataset.inspect!;
      button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') this.inspect(key); });
      button.addEventListener('pointerleave', () => this.inspect(this.pinned));
      button.addEventListener('focus', () => this.inspect(key));
      button.addEventListener('blur', () => this.inspect(this.pinned));
      button.addEventListener('click', () => { this.pinned = this.pinned === key ? '' : key; this.inspect(this.pinned); });
    });
    const unpin = () => { this.pinned = ''; this.inspect(''); };
    root.querySelector('[data-unpin]')!.addEventListener('click', unpin);
    root.addEventListener('keydown', event => { if (event.key === 'Escape') unpin(); });
    root.querySelector('[data-copy-code]')!.addEventListener('click', async event => {
      const button = event.currentTarget as HTMLButtonElement;
      try { await navigator.clipboard.writeText(code); button.textContent = 'Copied'; } catch { button.textContent = 'Select code to copy'; }
    });
    this.render(this.stage); this.inspect('');
  }
  text(selector: string, value: string) { this.root.querySelectorAll(selector).forEach(node => { node.textContent = value; }); }
  clear() { this.timers.forEach(clearTimeout); this.timers = []; this.attention?.cancel(); this.root.classList.remove('is-playing'); }
  inspect(key: string) {
    beforeExampleResize(this.root);
    this.root.dataset.inspected = ['identity','quantity','integer'].includes(key) ? 'command' : key;
    this.root.querySelector<HTMLElement>('.example-caption')!.hidden = !key;
    this.text('[data-explanation]', explanations[key] || '');
    this.root.querySelector<HTMLButtonElement>('[data-unpin]')!.hidden = !this.pinned;
    this.root.querySelectorAll('[data-inspect]').forEach(node => node.setAttribute('aria-pressed', String(node.getAttribute('data-inspect') === this.pinned && !!this.pinned)));
  }
  setAction() {
    this.root.dataset.exploring = String(this.exploring);
    const button = this.root.querySelector<HTMLButtonElement>('[data-scenario-action]')!;
    const label = this.exploring ? 'Return to lesson' : this.stage < 2 ? 'Place order' : this.stage === 5 ? 'Restock & try' : 'Try 4 mugs';
    button.childNodes[0].textContent = label;
  }
  cue(key: string) {
    this.root.dataset.focus = key; this.attention?.cancel();
    if (reduced.matches || document.hidden) return;
    const target = this.root.querySelector<HTMLElement>(this.showingCode ? '.code-view' : `.diagram-node[data-inspect="${key}"]`)!;
    this.attention = target.animate([{transform:'translateY(-4px)',filter:'brightness(1.25)'},{transform:'translateY(0)',filter:'brightness(1)'}], {duration:550,easing:'cubic-bezier(.16,1,.3,1)'});
  }
  sync(stage: number, animate = false) {
    this.stage = stage;
    if (this.exploring) return;
    this.clear(); this.result = evaluateOrder(stage === 5 ? 0 : 3, 1);
    this.render(stage); this.inspect(this.pinned);
    if (animate) this.cue(focusFor(stage));
  }
  render(phase: number) {
    const r = this.result, evaluated = phase >= 2, recorded = phase >= 3 && r.accepted, complete = phase >= 4;
    this.root.dataset.stage = String(phase); this.root.dataset.recorded = String(recorded);
    this.root.dataset.outcome = evaluated ? (r.accepted ? 'accepted' : 'rejected') : 'pending';
    this.root.dataset.focus = evaluated && !r.accepted ? 'decision' : focusFor(phase);
    this.root.querySelector<HTMLElement>('[data-query-before]')!.hidden = !(phase === 3 && recorded);
    this.text('[data-quantity]', String(r.quantity)); this.text('[data-plural]', r.quantity === 1 ? '' : 's');
    this.text('[data-decision]', !evaluated ? 'In stock?' : r.accepted ? 'Accept' : 'Reject');
    this.root.querySelector<HTMLElement>('[data-event-row]')!.hidden = !recorded;
    this.root.querySelector<HTMLElement>('[data-empty-row]')!.hidden = recorded;
    this.text('[data-empty-row]', 'No event');
    const stock = complete ? r.remaining : r.stock;
    this.text('[data-stock]', String(stock)); this.setAction();
    this.root.querySelector('.command-node')!.setAttribute('aria-label', `Command: order ${r.quantity} mug${r.quantity === 1 ? '' : 's'}`);
    this.root.querySelector('.decision-node')!.setAttribute('aria-label', `Decision: ${!evaluated ? 'pending' : r.accepted ? 'accept' : 'reject'}`);
    this.root.querySelector('.event-node')!.setAttribute('aria-label', recorded ? `Event ledger: OrderPlaced, ${r.quantity} mug${r.quantity === 1 ? '' : 's'}` : 'Event ledger: no event');
    this.root.querySelector('.query-node')!.setAttribute('aria-label', `Query: ${stock} mugs left${phase === 3 && recorded ? ', before the update' : ''}`);
    if (this.exploring && complete) this.text('[data-order-status]', r.reason);
    else if (!this.exploring) this.text('[data-order-status]', '');
  }
  tryScenario() {
    this.clear(); this.pinned = ''; this.exploring = true;
    this.result = evaluateOrder(3, this.stage >= 2 && this.stage <= 4 ? 4 : 1);
    this.render(1); this.inspect('');
    if (reduced.matches || document.hidden) { this.render(4); this.inspect(''); return; }
    this.root.classList.add('is-playing');
    for (const [phase, delay] of [[2,180],[3,430],[4,700]]) {
      this.timers.push(setTimeout(() => { this.render(phase); this.cue(this.result.accepted ? focusFor(phase) : 'decision'); }, delay));
    }
    this.timers.push(setTimeout(() => { this.root.classList.remove('is-playing'); this.inspect(''); this.timers = []; }, 740));
  }
  settle() { if (this.timers.length) { this.clear(); this.render(4); this.inspect(this.pinned); } else this.attention?.cancel(); }

}
document.querySelectorAll<HTMLElement>('[data-order-example]').forEach(root => controllers.push(new OrderExample(root)));
const lesson = document.querySelector<HTMLElement>('[data-guided-lesson]');
if (lesson) {
  scrollSections(lesson, (scene, changed) => {
    const controller = controllers.find(c => lesson.contains(c.root));
    controller?.sync(Number(scene.dataset.lessonStep), changed);
  });
}

reduced.addEventListener('change', () => { if (reduced.matches) controllers.forEach(c => c.settle()); });
document.addEventListener('visibilitychange', () => { if (document.hidden) controllers.forEach(c => c.settle()); });
document.documentElement.dataset.learningReady = 'true';
