import test from 'ava';
import getMonthName from './getMonthName';

test('Month names match indexes', t => {
  t.is(getMonthName(3), 'april');
});

test('Fallback message for bad input', t => {
  t.is(getMonthName(-1), 'There are only 12 months!');
  t.is(getMonthName(-13), 'There are only 12 months!');
});
