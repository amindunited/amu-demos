const path = require('path');
const resolve =require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  devServer: {
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            publicPath: '/',
            useRelativePath: true
        }
      },
      {
        test: /main\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader", // compiles Sass to CSS, using Node Sass by default
            // "raw-loader"
        ]
      },
      {
        test: /\.module\.scss$/,
        // use: ['to-string-loader', 'css-loader']
        use: [
          "to-string-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
        // use: [
        //   'to-string-loader',
        //   {
        //     loader: 'sass-loader',
        //     options: {
        //       implementation: require("sass")
        //     }
        //   }
        // ]
      }]
  },
  plugins: [
    // new webpack.IgnorePlugin(/vertx/),// Patches a bug in web components lite
    // new CleanWebpackPlugin(),
    // // Specify the resulting CSS filename
    // new ExtractTextPlugin('./src/styles.css'),
    new HtmlWebpackPlugin({
      title: 'Style Examples',
      template: 'src/index.html'
    }),
    // new CopyWebpackPlugin([
    //   {from:'src/**/*.html', to:'[name]/[name].[ext]'},
    //   {from:'src/assets/icons/*.svg', to:'assets/icons/[name].[ext]'}
    // ]),

  ],
  resolve: {
    extensions: [ '.js' ],
    alias: {
      ["~"]: resolve(__dirname, "src")
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/styleguide')
  },
  stats: {
    // Colored output
    colors: true
  },
};
