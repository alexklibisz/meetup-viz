/*eslint-disable */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {};

// Define entry points with setup for webpack server and react hot reloading.
config.entry = {
  main: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    './src/main.js'
  ]
};

// Enable source maps for debugging
config.devtool = 'source-map';

config.output = {
  path: path.join(__dirname, 'dist'),
  filename: '[name].js'
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html'),
    inject: 'body'
  })
];

config.devServer = {
  contentBase: './dist',
  stats: {
    colors: true
  },
  historyApiFallback: true,
  hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
};

config.resolve = {
  root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
  extensions: ['', '.js', '.jsx']
};

config.module = {
  loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      include: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules/skeleton-css')
      ],
      // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      loaders: ['style', 'css?sourceMap'],
    },
    // Loader that handles .scss stylesheets with autoprefixing and creates a separate css bundle.
    {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loaders: ['style', 'css?sourceMap!sass?sourceMap'],
      // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')
    },
    // Loader for pngs
    {
      test: /\.png/,
      loader: 'url?limit=100000&minetype=image/png'
    },
    // Loader for other images, fonts
    {
      test: /\.(eot|woff|woff2|ttf|jpg|svg)$/,
      include: [path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules/goratchet/dist')
      ],
      loader: 'url-loader?limit=10000'
    }
  ]
};

module.exports = config;
