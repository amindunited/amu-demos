const fs = require('fs');
const path = require('path');
const ensurePath = require('../utils/ensure-path');

let config = { };

const init = (args) => {

  // get the path (everything before the last '/')
  const givenPath = path.dirname(args[0]);

  // get the name (the word after the last '/')
  const componentName = path.basename(args[0]);

  const projectRoot = path.join(process.cwd(), '/src');
  const configDestination = path.join(projectRoot, '');

  // if there is no hyphen in the name, and web components naming is turned on
  // ...throw error;
  if (!componentName.match(/-/)) {
    throw `
  ################################################
  Error!
  A Web Component must have a hyphen in it's name
  ################################################
  `;
  }

  return {
    givenPath: givenPath,
    componentName: componentName,
    templatePath: path.join(__dirname, '/templates'),
    projectRoot: path.join(process.cwd(), '/src'),
    configDestination: path.join(projectRoot, ''),
    destination: path.join(configDestination, givenPath, componentName),
  }
};

const getTemplateFiles = (templateDir) => {
  // console.log('readdir ', templateDir);
  const promise = new Promise((resolve, reject) => {
    fs.readdir(templateDir, (err, files) => {
      if (err) { reject(err); }
      // console.log('files ', files);
      resolve(files);
    });
  });
  return promise;
};

const nameCases = (componentName) => {
  const kebabCaseName = componentName;
  const camelCaseName = kebabCaseName.split(/\-/).reduce((accumulator, current) => {
    return accumulator + current.toLowerCase().replace(/^\w/, (char) => {
    	return char.toUpperCase();
  	});
  });

  const titleCaseName = camelCaseName.replace(/^\w/, char => char.toUpperCase() );

  return {
    kebabCaseName,
    camelCaseName,
    titleCaseName
  }
};

const readFile = (filePath) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, body) => {
      if (err) { reject(err); }
      resolve(body);
    });
  });
  return promise;
}


const writeFile = (filePath, fileContent) => {
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(filePath, fileContent, 'utf8',  (err) => {
      if (err) { console.warn(err); }
    });
  });
  return promise;
};


const processTemplates = async (templates) => {
  templates.forEach( async (template) => {
    // console.log('tempalte???', template, config.templatePath + '/' + template);
    const rawFileContent = await readFile(config.templatePath + '/' + template);
    // console.log('raw', rawFileContent);
    const fileContent = rawFileContent
      .replace(/\${kebabCaseName}/g, config.nameCases.kebabCaseName)///\${titleCaseName}/g
      .replace(/\${camelCaseName}/g, config.nameCases.camelCaseName)
      .replace(/\${titleCaseName}/g, config.nameCases.titleCaseName);
    const fileName = template.replace('${kebabCaseName}', config.nameCases.kebabCaseName);

    // console.log('finally going to write ', fileContent, 'to ', config.destination +'/'+fileName);
    /**
     * Turned off file writting!!!
     */
    // console.log('File writting turned off!', config.destination +'/'+fileName, fileContent);
    await ensurePath(config.destination);
    await writeFile(config.destination +'/'+fileName, fileContent);
    /**
     * 
     */
  });

}

module.exports = async (args) => {
  config = init(args);
  config.nameCases = nameCases(config.componentName);
  const templates = await getTemplateFiles(config.templatePath);
  // console.log('templates ', templates);
  processTemplates(templates);
}

