const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {

    // start script
    index: './src/index.js',
    // print: './src/js/print.js',
    my_chatbot_list: './src/js/my_chatbot_list.js',
    my_chatbot_create: './src/js/my_chatbot_create.js',
    connect_linkedin: './src/js/connect_linkedin.js',
    select_brick: './src/js/select_brick.js'
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
        loader : 'handlebars-loader'
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
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'chatbrick',
      template: './public/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'chatbrick',
      template: './public/view/connect_linkedin.html',
      filename: 'connect_linkedin.html',
    }),
    new HtmlWebpackPlugin({
      title: 'chatbrick',
      template: './public/view/connect_platform.html',
      filename: 'connect_platform.html',
    }),
    new HtmlWebpackPlugin({
      title: 'chatbrick',
      template: './public/view/my_chatbot_list.html',
      filename: 'my_chatbot_list.html',
    }),
    new HtmlWebpackPlugin({
      title: 'chatbrick',
      template: './public/view/my_chatbot_create.html',
      filename: 'my_chatbot_create.html',
    }),
    new HtmlWebpackPlugin({
      title: 'chatbrick',
      template: './public/view/select_brick.html',
      filename: 'select_brick.html',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    // path: __dirname + '/public',
    // path: __dirname + '/dist'
    path: path.resolve(__dirname, 'dist')
  }
};