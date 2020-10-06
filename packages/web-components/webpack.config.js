const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Require our extended configs
const devConfig = require('./config/webpack/webpack.dev.config');
const { styleRules, stylePlugins } = require('./config/webpack/styles.config');
const { assetRules, assetPlugins } = require('./config/webpack/asset.config');
const { scriptRules } = require('./config/webpack/scripts.config');
const { htmlRules, htmlPlugins } = require('./config/webpack/html.config');
// const { markdownRules } = require('./config/webpack/markdown.config');

let webpackConfig = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  entry: {
    'brand-header': './src/brand-header/index.js',
  },
  module: {
    rules: [
      ...scriptRules,
      ...styleRules,
      ...assetRules,
      // ...markdownRules,
      ...htmlRules
    ],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...stylePlugins,
    ...assetPlugins,
    ...htmlPlugins
  ],
  stats: {
    // Coloured output
    colors: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[contenthash].js',
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'BrandHeader',
    libraryExport: 'BrandHeader'
  },
}

module.exports = (env) => new Promise(async (resolve, reject) => {

  // Add dev mode config
  if (env && env.NODE_ENV === 'dev') {
    webpackConfig = {
      ...webpackConfig,
      ...devConfig
    }
  }

  // Exposes the NODE_ENV to the app
  webpackConfig.plugins.push(new webpack.DefinePlugin({'process.env': JSON.stringify(env.NODE_ENV)}))


  // await any async operations here
  resolve(webpackConfig);
});
