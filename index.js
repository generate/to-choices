/*!
 * to-choices <https://github.com/jonschlinkert/to-choices>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');
var merge = require('mixin-deep');
var gray = require('ansi-gray');

/**
 * Create a question object with the given `name`
 * and array of `choices`.
 *
 * ```js
 * toChoices(name[, options]);
 * ```
 * @param {String|Object} `name` Name of the question or object with a `name` property.
 * @param {Object|Array} `options` Question options or array of choices. If an array of choices is specified, the name will be used as the `message`.
 * @return {Object}
 * @api public
 */

function toChoices(name, message, options) {
  if (Array.isArray(options)) {
    return toChoices(name, message, {choices: options});
  }
  if (Array.isArray(message)) {
    return toChoices(name, {choices: message}, options);
  }
  if (typeof message === 'string') {
    return toChoices(name, {message: message}, options);
  }
  if (typeof name === 'string') {
    return toChoices({name: name}, message, options);
  }

  var question = merge({}, choices, message, name);
  question.type = 'checkbox';

  if (typeof question.message === 'undefined') {
    question.message = question.name;
  }

  /**
   * Generate the list of choices
   */

  var choices = [];
  var len = question.choices.length;
  var idx = -1;

  // create `all` choice
  if (len > 1 && question.all !== false) {
    choices.unshift({line: question.separator || gray('————'), type: 'separator'});
    choices.unshift({name: 'all', value: question.choices.slice()});
  }

  while (++idx < len) {
    var ele = question.choices[idx];
    if (typeof ele === 'string') {
      choices.push({ name: ele });

    } else if (isObject(ele)) {
      choices.push(ele);

    } else {
      throw new TypeError('expected choice to be a string or object:' + ele);
    }
  }

  question.choices = choices;
  return question;
};

/**
 * Expose `toChoices`
 */

module.exports = toChoices;
