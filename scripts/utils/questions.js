const { isEmptyInput, isComponentSelected } = require('./functions');
const questions = [
  {
    name: 'type',
    message: 'What you want to bake?',
    type: 'list',
    choices: [
      'component',
      'route',
    ]
  },
  {
    name: 'isStateful',
    type: 'list',
    when: isComponentSelected,
    message: 'What kind of component you want to bake?',
    choices: [
      {
        name: 'stateful',
        value: true,
      },
      {
        name: 'stateless',
        value: false,
      }
    ]
  },
  {
    name: 'name',
    type: 'input',
    message: 'What name should I give this component?',
    validate: isEmptyInput
  }
];

module.exports = questions;
