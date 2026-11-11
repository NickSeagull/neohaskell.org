import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateOrder } from '../src/scripts/order-model.ts';

test('an accepted order records a fact and reduces stock by the quantity', () => {
  assert.deepEqual(evaluateOrder(3, 2), {accepted:true, stock:3, quantity:2, remaining:1, event:'OrderPlaced', reason:'2 ordered. Stock changes from 3 to 1.'});
});
test('insufficient stock records no accepted-order event and preserves stock', () => {
  const outcome = evaluateOrder(3, 4);
  assert.equal(outcome.accepted,false); assert.equal(outcome.event,null); assert.equal(outcome.remaining,3);
});
test('sold-out stock is a valid rejected scenario', () => {
  const outcome = evaluateOrder(0,1); assert.equal(outcome.event,null); assert.equal(outcome.remaining,0);
});
test('ordering exactly the available stock is accepted', () => {
  assert.equal(evaluateOrder(3,3).remaining,0); assert.equal(evaluateOrder(3,3).event,'OrderPlaced');
});
test('invalid quantities and stock cannot become events', () => {
  for(const qty of [0,-1,.5,100,NaN,Infinity]) assert.throws(()=>evaluateOrder(3,qty),RangeError);
  for(const stock of [-1,.5,100,NaN]) assert.throws(()=>evaluateOrder(stock,1),RangeError);
});
test('replaying the same scenario does not consume stock twice', () => {
  assert.deepEqual(evaluateOrder(3,1),evaluateOrder(3,1)); assert.equal(evaluateOrder(3,1).remaining,2);
});
