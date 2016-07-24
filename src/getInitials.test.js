import test from 'ava';
import getInitials from './getInitials';

test('Initials are created from strings', t => {
  t.is(getInitials('Hello World'), 'H.W.');
});
