const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],
  mode: 'development'
};
