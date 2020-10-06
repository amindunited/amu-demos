const CopyWebpackPlugin = require('copy-webpack-plugin');

const assetRules = [
  // Fonts
  {
    test: /\.(woff2?|ttf|otf|eot|svg)$/,
    exclude: [/node_modules/, /.*\.DS_Store/],
    loader: 'file-loader',
    options: {
        name: '[name].[ext]',
        publicPath: '/',
        useRelativePath: true
    }
  },
];

const assetPlugins = [
  new CopyWebpackPlugin([
    { 'from': './src/assets', 'to': 'assets' }
  ])
]

module.exports = {
  assetRules,
  assetPlugins
}
