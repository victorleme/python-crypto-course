import test from 'ava';
import getMonthName from './getMonthName';

test('Month names match indexes', t => {
  t.is(getMonthName(3), 'april');
});
