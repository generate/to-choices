'use strict';

var toChoices = require('..');

var a = toChoices('foo', ['a', 'b', 'c']);
console.log(a);

var b = toChoices({
  name: 'foo',
  message: 'Foo bar baz',
  choices: [
    'a',
    'b',
    'c'
  ]
});
console.log(b);

var c = toChoices('foo', {
  message: 'Foo bar baz',
  choices: [
    'a',
    'b',
    'c'
  ]
});
console.log(c);
