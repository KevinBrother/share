const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

module.exports = {
  mode: 'none',
  devtool: 'eval-source-map',
  entry: './src/index.js',
  module: {},
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};
