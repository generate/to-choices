'use strict';

var inquirer = require('inquirer');
var toChoices = require('..');

var choices = toChoices('favorite color', [
  'red',
  'blue',
  'green'
]);

inquirer.prompt(choices, function(answer) {
  console.log('your favorite color is:', answer[choices.name]);
});
