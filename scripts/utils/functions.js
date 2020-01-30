const { generateComponent, generateRoute } = require('../generators');
const isEmptyInput = async (input) => {
  const firstLetter = input ? input[0] : '';

  if (firstLetter.toUpperCase() !== firstLetter) {
    return 'Name of the element should starts with capital letter.';
  }

  if (!input.trim()) {
    return 'You should provide at least one character.';
  }
  
  return true;
};

const isComponentSelected = (answers) => answers.type === 'component';

// const errorCallback = (resolve) => (err) => {
//   if (err) resolve(`-- Unexpected error --`);
// }

const generate = (answers) => new Promise( async (resolve, reject) => {
  let message;

  switch (answers.type) {
    case 'component':
      message = await generateComponent(answers);
      break;
    case 'route':
      message = await generateRoute(answers);
      break;
    default:
      message = 'Exit with no action.';
      break;
  }

  resolve(message);
});

module.exports = {
  isEmptyInput,
  isComponentSelected,
  // errorCallback,
  generate,
};
