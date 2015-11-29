'use strict';

var fs = require('fs');
var toChoices = require('..');

function files(regex, dir) {
  return fs.readdirSync(dir).filter(function(fp) {
    return regex.test(fp);
  });
}

var list = files(/^(?!\.DS)/, '.');

var choices = toChoices('foo', {
  message: 'Which files would you like to include?',
  choices: list
});

console.log(choices)
