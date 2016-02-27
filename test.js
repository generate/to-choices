'use strict';

require('mocha');
var assert = require('assert');
var toChoices = require('./');

describe('to-choices', function() {
  it('should support the name as a string', function() {
    var question = toChoices('foo', ['a', 'b', 'c']);
    assert.equal(question.name, 'foo');
  });

  it('should support the name as an object property', function() {
    var question = toChoices({name: 'foo', choices: ['a', 'b', 'c']});
    assert.equal(question.name, 'foo');
  });

  it('should support choices as an object property', function() {
    var question = toChoices({name: 'foo', choices: ['a', 'b', 'c']});
    assert.deepEqual(question.choices, [
      { name: 'all', value: [ 'a', 'b', 'c' ] },
      { type: 'separator', line: '\u001b[90m————\u001b[39m' },
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ]);
  });

  it('should support choices as an array', function() {
    var question = toChoices('foo', ['a', 'b', 'c']);
    assert.deepEqual(question.choices, [
      { name: 'all', value: [ 'a', 'b', 'c' ] },
      { type: 'separator', line: '\u001b[90m————\u001b[39m' },
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ]);
  });
});
