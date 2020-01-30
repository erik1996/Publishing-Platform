const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

const errorCallback = (resolve) => (err) => {
  if (err) resolve(`-- Unexpected error --`);
}

const componentGenerator = (answers) => new Promise(async (resolve, reject) => {
  const componentFolder = path.join(__dirname, '../../src/components/', answers.name);
  const componentTemplateFolder = path.join(__dirname, '../templates/component');

  if (fs.existsSync(componentFolder)) {
    resolve(`${answers.name} folder is already exists.`);
  } else {
    fs.mkdir(componentFolder, errorCallback(resolve));
  }

  const formattedAnswers = {
    ...answers,
    isStateful: answers.isStateful ? 'S' : '',
    useMemoOpen: answers.isStateful ? '' : "React.useMemo(() => ",
    useMemoClose: answers.isStateful ? '' : ', [])',
  }

  fs.readdir(componentTemplateFolder, (err, fileList) => {
    errorCallback(resolve)(err);

    fileList.forEach(templateName => {
      fs.readFile(path.join(componentTemplateFolder, templateName), 'utf8', (err, data) => {
        errorCallback(resolve)(err)
        const templateWithExt = templateName.slice(0, templateName.length - 4);
        const extDotPosition = templateWithExt.lastIndexOf('.');
        const ext = templateWithExt.slice(extDotPosition);
        const formattedData = mustache.render(data, formattedAnswers);
        const filename = templateWithExt === 'index.tsx' ? templateWithExt : answers.name + ext;

        fs.writeFileSync(path.join(componentFolder, filename), formattedData, 'utf8', errorCallback(resolve))
        resolve(`Component ${answers.name} is generated.`);
      })
    })
  })
});

module.exports = componentGenerator;
