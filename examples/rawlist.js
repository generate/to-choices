'use strict';

var inquirer = require('inquirer2')();
var toChoices = require('..')({type: 'rawlist'});

var question = toChoices('favorite color', [
  'red',
  'blue',
  'green'
]);

inquirer.prompt([question], function(answer) {
  console.log('your favorite color is:', answer[question.name]);
});
