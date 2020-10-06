const fs = require('fs');
const path = require('path');
const ensurePath = require('../../ensure-path');

let config = {

};

const init = (initConfig) => {

  // get the path (everything before the last '/')
  const givenPath = path.dirname(initConfig.givenPath);

  // get the name (the word after the last '/')
  const componentName = path.basename(initConfig.componentName);

  const projectRoot = path.join(process.cwd(), initConfig.projectRoot);
  const configDestination = path.join(projectRoot, initConfig.configDestination);

  // if there is no hyphen in the name, and web components naming is turned on
  // ...throw error;
  // if (!componentName.match(/-/)) {
  //   throw `
  // ################################################
  // Error!
  // A Web Component must have a hyphen in it's name
  // ################################################
  // `;
  // }

  return {
    givenPath: givenPath,
    componentName: componentName,
    templatePath: path.join(__dirname, initConfig.templatePath),
    projectRoot: projectRoot,
    configDestination: configDestination,
    destination: path.join(configDestination, givenPath, componentName),
  }
}


const getTemplateFiles = (templateDir) => {
  const promise = new Promise((resolve, reject) => {
    fs.readdir(templateDir, (err, files) => {
      if (err) { reject(err); }
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
      if (err) { console.log('read file error'); reject(err); }
      resolve(body);
    });
  });
  return promise;
}


const writeFile = (filePath, fileContent) => {
  console.log('writting ', filePath);
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(filePath, fileContent, 'utf8',  (err) => {
      if (err) { console.warn(err); }
      resolve();
    });
  });
  return promise;
};


const processTemplates = async (templates, config) => {
  const writes = await Promise.all(templates.map( async (template) => {
    const rawFileContent = await readFile(config.templatePath + '/' + template);
    const fileContent = rawFileContent
      .replace(/\${kebabCaseName}/g, config.nameCases.kebabCaseName)///\${titleCaseName}/g
      .replace(/\${camelCaseName}/g, config.nameCases.camelCaseName)
      .replace(/\${titleCaseName}/g, config.nameCases.titleCaseName);

    const fileName = template.replace('${kebabCaseName}', config.nameCases.kebabCaseName)
      .replace('${camelCaseName}', config.nameCases.camelCaseName)
      .replace('${titleCaseName}', config.nameCases.titleCaseName);

    // console.log('finally going to write ', fileContent, 'to ', config.destination +'/'+fileName);
    await ensurePath(config.destination);
    const writtingFile = await writeFile(config.destination + '/' + fileName, fileContent);
    console.log('after writting');
    return writtingFile;
  })).catch((err) => {
    console.log('wtf', err);
  });

  return writes;

}

const createSassComponent = async(args) => {
  // set up config for writting sass file
  const sassInitConfig = {
    givenPath: args[0],
    componentName: args[0],
    templatePath: '/templates/sass',
    projectRoot: '/src',
    configDestination: '/styles/components'
  }
  const sassFileConfig = init(sassInitConfig);
  console.log('sassFile config', sassFileConfig);
  sassFileConfig.nameCases = nameCases(sassFileConfig.componentName);
  const templates = await getTemplateFiles(sassFileConfig.templatePath);
  const process = await processTemplates(templates, sassFileConfig);
  console.log('afet process (scss)');
  return process;
}

const createWebComponent = async(args) => {
  // set up config for writting sass file
  const initConfig = {
    givenPath: args[0],
    componentName: args[0],
    templatePath: '/templates/web-component',
    projectRoot: '/src',
    configDestination: '/components'
  }
  const webComponentFileConfig = init(initConfig);
  webComponentFileConfig.nameCases = nameCases(webComponentFileConfig.componentName);
  const templates = await getTemplateFiles(webComponentFileConfig.templatePath);
  const process = await processTemplates(templates, webComponentFileConfig);
  return process;
}

const createExamplePage = async(args) => {
  // set up config for writting sass file
  const initConfig = {
    givenPath: args[0],
    componentName: args[0],
    templatePath: '/templates/example-page',
    projectRoot: '/workspace',
    configDestination: '/components'
  }
  const examplePageFileConfig = init(initConfig);
  examplePageFileConfig.nameCases = nameCases(examplePageFileConfig.componentName);
  const templates = await getTemplateFiles(examplePageFileConfig.templatePath);
  const process = await processTemplates(templates, examplePageFileConfig);
  return process;
}

module.exports = async (args) => {
  console.log('creating feaure', args);
  await createSassComponent(args);
  console.log('after scss');
  // set up config for writting component file
  await createWebComponent(args);
  console.log('after webComponent');
  // set up config for writting example file
  await createExamplePage(args);
  console.log('after example page');

  return;
}
