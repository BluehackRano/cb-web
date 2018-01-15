const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    print: './src/js/print.js',
    my_chatbot_list: './src/js/my_chatbot_list.js', 
    my_chatbot_create: './src/js/my_chatbot_create.js',
    connect_linkedin: './src/js/connect_linkedin.js'
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
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
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
      title: 'chatbrick',
      template: './src/html/connect_linkedin.html',
      filename: 'connect_linkedin.html',
    }),
    new HtmlWebpackPlugin({
      title: 'chatbrick',
      template: './src/html/my_chatbot_list.html',
      filename: 'my_chatbot_list.html',
    }),
    new HtmlWebpackPlugin({
      title: 'chatbrick',
      template: './src/html/my_chatbot_create.html',
      filename: 'my_chatbot_create.html',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};