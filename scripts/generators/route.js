const routeGenerator = (answers) => new Promise(async (resolve, reject) => {
  // check route existing state
  // check folder existing state
  // formatting and creation of route
  resolve(`Route ${answers.name} is generated.`);
});

module.exports = routeGenerator;
