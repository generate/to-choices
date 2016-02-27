'use strict';

var inquirer = require('inquirer2')();
var toChoices = require('..')({type: 'expand', default: 'blue'});

var question = toChoices('favorite color', [
  {name: 'blue', key: 'u'}, // just showing that you can mix objects and strings
  'red',
  'green'
]);

inquirer.prompt([question], function(answer) {
  console.log('your favorite color is:', answer[question.name]);
});
