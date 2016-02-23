var webpack = require('webpack');
var config = require('webpack.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

delete config.devtool;

config.plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html'),
    inject: 'body'
  })
];
