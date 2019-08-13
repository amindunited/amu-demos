exports.onPreBootstrap = ({ actions }, pluginOptions) => {
  //  Wrap the require in check for window
  if (typeof window !== `undefined`) {
    const jsdom = require('jsdom');
    // Create a fake DOM for testing with $.ajax
    global.window = new jsdom.JSDOM().window;
    global.document = window.document;
    global.HTMLElement = window.HTMLElement;
  } 
}