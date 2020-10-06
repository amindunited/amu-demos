/**
 * Webpack config overrides for development sever
 */
const path = require('path');
const webpackConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
}

module.exports = webpackConfig;
