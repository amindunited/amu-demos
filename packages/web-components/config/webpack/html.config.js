/**
 * Configure plugins and rules for html files
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlRules = [{
  test: /\.html/,
  loader: 'raw-loader'
}];

const htmlPlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: true,
    appMountId: 'app',
  })
]

module.exports = {
  htmlRules,
  htmlPlugins
}
