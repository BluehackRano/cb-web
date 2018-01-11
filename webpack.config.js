const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require("webpack");

module.exports = {
  entry: {
    index: './src/js/index.js',
    print: './src/js/print.js',
    facebook: './src/js/facebook.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        loader : 'handlebars'
      }
    ]

  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'chatbrick',
      template: './src/html/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/facebook.html',
      filename: 'facebook.html',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};