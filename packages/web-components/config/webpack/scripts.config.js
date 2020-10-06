/**
 * Configure plugins and rules for scripts (js/ts...)
 */
const path = require('path');
const scriptRules = [{
    test: /\.(ts|tsx)?$/,
    loader: 'ts-loader',
    include: path.resolve(process.cwd()),
    exclude: [ /node_modules/, /utils/ ]
  }, 
  // {
  //   test: /\.(js|jsx)?$/,
  //   loader: 'babel-loader',
  //   options: {
  //     presets: ['@babel/preset-env']
  //   },
  //   include: path.resolve(process.cwd()),
  //   exclude: [ /node_modules/, /utils/ ]
  // }
];

module.exports = {
  scriptRules
}
// npm install webpack webpack-dev-server webpack-cli sass html-webpack-plugin typescript ts-loader babel-loader @babel/core @babel/preset-env tslint style-loader css-loader sass-loader file-loader url-loader raw-loader clean-webpack-plugin copy-webpack-plugin postcss-loader postcss-flexbugs-fixes postcss-preset-env postcss-normalize typescript-plugin-css-modules mini-css-extract-plugin --save-dev