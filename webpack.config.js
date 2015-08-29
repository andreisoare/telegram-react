var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  target: 'web',
  cache: true,
  entry: {
    app: [
      'app/Router.js'
    ],
    vendor: [
      'react',
      'react-router'
    ],
  },
  output: {
    path: 'dist',
    filename: '[name].js',
    hash: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules|dist)/,
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css!less'),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html',
      filename: 'index.html',
      hash: true,
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ],
  resolve: {
    root: [__dirname],
  },
  devServer: {
    contentBase: '/',
    historyApiFallback: true,
  },
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  config.debug = true;
  config.devtool = 'cheap-module-eval-source-map';
  config.entry.vendor.push('webpack-dev-server/client?http://localhost:8080');
  config.entry.vendor.push('webpack/hot/only-dev-server');
}

module.exports = config;
