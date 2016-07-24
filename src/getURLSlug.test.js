import test from 'ava';
import getURLSlug from './getURLSlug';

test('URL slugs are created from strings', t => {
  t.is(getURLSlug('hello world'), 'hello-world');
});

test('Uppercase letters are converted to lower case', t => {
  t.is(getURLSlug('HeLLo WorLD'), 'hello-world');
});
