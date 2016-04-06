var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for js bundles.
  entry: {
    main: [
      'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
      './src/main.js'
    ]
  },
  // Use source-maps.
  devtool: 'source-map',
  // Output to dist/main.js
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  // Plugins for hot-reloading and copying over the index.html file.
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      inject: false
    })
  ],
  // Dev server set up. Serve from dist directory.
  devServer: {
    contentBase: './dist'
  },
  // How to resolve imports. Use src/ and node_modules/ as roots.
  resolve: {
    root: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['', '.js', '.jsx']
  },
  // Handle js, jsx, scss files with webpack loaders.
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loaders: ['react-hot', 'babel-loader']

    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loaders: ['style', 'css?sourceMap!sass?sourceMap'],
    }]
  }
};
