/*eslint-disable */
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// No sourcemaps
delete config.devtool;

// Files only, nothing extra
config.entry = {
  main: [
    './src/main.js'
  ]
};

// config.output = {
//   path: __dirname + '/dist',
//   filename: '[name].[chunkhash].js',
//   chunkFilename: '[name].[chunkhash].js'
// };

config.plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html'),
    inject: 'body'
  })
];

module.exports = config;
