'use strict';

require('mocha');
var assert = require('assert');
var toChoices = require('./');
var choices;

describe('to-choices', function() {
  beforeEach(function() {
    choices = toChoices();
  });

  describe('type: choices', function() {
    it('should create a choices question object', function() {
      var question = choices('foo', ['a', 'b', 'c']);
      assert(question);
      assert.equal(typeof question, 'object');
      assert.equal(question.type, 'checkbox');
    });

    it('should support the name as a string', function() {
      var question = choices('foo', ['a', 'b', 'c']);
      assert.equal(question.name, 'foo');
    });

    it('should support the name as an object property', function() {
      var question = choices({name: 'foo', choices: ['a', 'b', 'c']});
      assert.equal(question.name, 'foo');
    });

    it('should support choices as an object property', function() {
      var question = choices({name: 'foo', choices: ['a', 'b', 'c']});
      assert.deepEqual(question.choices, [
        { name: 'all', value: [ 'a', 'b', 'c' ] },
        { type: 'separator', line: '\u001b[90m·······\u001b[39m' },
        { name: 'a', value: 'a', key: 'a' },
        { name: 'b', value: 'b', key: 'b' },
        { name: 'c', value: 'c', key: 'c' }
      ]);
    });

    it('should support choices as an array', function() {
      var question = choices('foo', ['a', 'b', 'c']);
      assert.deepEqual(question.choices, [
        { name: 'all', value: [ 'a', 'b', 'c' ] },
        { type: 'separator', line: '\u001b[90m·······\u001b[39m' },
        { name: 'a', value: 'a', key: 'a' },
        { name: 'b', value: 'b', key: 'b' },
        { name: 'c', value: 'c', key: 'c' }
      ]);
    });
  });

  describe('type: list', function() {
    it('should create a "list" question object', function() {
      var question = choices('foo', ['a', 'b', 'c'], {type: 'list'});
      assert(question);
      assert.equal(typeof question, 'object');
      assert.equal(question.type, 'list');
    });

    it('should not add an "all" choice and separator when the type is "list"', function() {
      var question = choices('foo', ['a', 'b', 'c'], {type: 'list'});
      assert(question);
      assert.equal(question.choices.length, 3);
    });
  });

  describe('type: rawlist', function() {
    it('should create a "rawlist" question object', function() {
      var question = choices('foo', ['a', 'b', 'c'], {type: 'rawlist'});
      assert(question);
      assert.equal(typeof question, 'object');
      assert.equal(question.type, 'rawlist');
    });

    it('should not add an "all" choice and separator when the type is "rawlist"', function() {
      var question = choices('foo', ['a', 'b', 'c'], {type: 'rawlist'});
      assert(question);
      assert.equal(question.choices.length, 3);
    });
  });
});
