export type OrderResult = { accepted: boolean; stock: number; quantity: number; remaining: number; event: 'OrderPlaced' | null; reason: string };
/** A teaching model: each run starts from the supplied stock. No backend or compiler. */
export function evaluateOrder(stock: number, quantity: number): OrderResult {
  if (!Number.isInteger(stock) || stock < 0 || stock > 99) throw new RangeError('Stock must be a whole number from 0 to 99.');
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) throw new RangeError('Choose a whole quantity from 1 to 99.');
  const accepted = quantity <= stock;
  return { accepted, stock, quantity, remaining: accepted ? stock - quantity : stock, event: accepted ? 'OrderPlaced' : null,
    reason: accepted ? `${quantity} ordered. Stock changes from ${stock} to ${stock - quantity}.` : `Order rejected: ${quantity} requested, ${stock} available. No event recorded; stock stays ${stock}.` };
}
