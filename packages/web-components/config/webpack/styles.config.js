/**
 * Webpack config rules, and plugins for building styles (scss)
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');

const sassModuleRegex = /\.module\.(scss|sass)$/i;
const sassRegex = /(styles|main)\.scss$/i;
const sassStringRegex = /\.string\.(scss|sass)$/i;


/**
 * Use functions to create some reusable configs
 */
const sassConfig = () => {
  return {
    loader: 'sass-loader',
    options: {
      implementation: require("sass")
    }
  }
}

const postCssConfig = () => {
  return {
    loader: 'postcss-loader',
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebook/create-react-app/issues/2677
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
        // Adds PostCSS Normalize as the reset css with default options,
        // so that it honors browserslist config in package.json
        // which in turn let's users customize the target behavior as per their needs.
        postcssNormalize(),
      ],
      // sourceMap: isEnvProduction && shouldUseSourceMap,
    }
  }
}

const styleRules = [
  // CSS Modules:
  {
    test: sassModuleRegex,
    exclude: [sassRegex],
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true
        }
      },
      sassConfig(),
      postCssConfig()
    ]
  },
  // Plain Sass
  {
    test: sassRegex,
    exclude: [sassModuleRegex],
    use: [
      MiniCssExtractPlugin.loader,
      { loader: 'css-loader' },
      sassConfig(),
      postCssConfig()
    ]
  },
  // Scss as a string
  {
    test: sassStringRegex,
    exclude: [sassRegex, sassModuleRegex],
    use: [
      'raw-loader',
      sassConfig(),
      postCssConfig()
    ]
  }
];

const stylePlugins = [
  new MiniCssExtractPlugin({
    filename: `[name].[contenthash].css`
  }),
]


module.exports = {
  styleRules,
  stylePlugins
}
