import test from 'ava';
import monthName from './monthName';

test('Month names match indexes', t => {
  t.is(monthName(3), 'april');
});

test('Fallback message for bad input', t => {
  t.is(monthName(-1), 'There are only 12 months!');
  t.is(monthName(-13), 'There are only 12 months!');
});
