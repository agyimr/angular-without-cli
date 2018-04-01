const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {AngularCompilerPlugin} = require('@ngtools/webpack')

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'app': './src/main.ts'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: [
      '.js', '.ts'
    ]
  },

  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: {
          loader: '@ngtools/webpack'
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      path.resolve('src'),
      {}
    ),
    new webpack.DefinePlugin({
      ENV_PRODUCTION: true,
    }),
    new UglifyJsPlugin(),
    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: path.resolve('src/main.ts')
    }),
  ]
};