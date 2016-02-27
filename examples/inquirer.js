'use strict';

var inquirer = require('inquirer2')();
var toChoices = require('..');

var question = toChoices('favorite color', [
  'red',
  'blue',
  'green'
]);

inquirer.prompt(question, function(answer) {
  console.log('your favorite color is:', answer[question.name]);
});
