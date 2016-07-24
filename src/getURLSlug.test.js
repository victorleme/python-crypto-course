import test from 'ava';
import getURLSlug from './getURLSlug';

test('URL slugs are created from strings', t => {
  t.is(getURLSlug('Hello World'), 'hello-world');
});
