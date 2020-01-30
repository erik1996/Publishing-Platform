const inquirer = require('inquirer');
const questions = require('./utils/questions');
const { generate } = require('./utils/functions');

console.clear();
inquirer
  .prompt(questions)
  .then(async answers => {
    const message = await generate(answers);
    console.log(message);
  });
