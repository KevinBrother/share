const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/renderer.ts',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:  './index.html',
    }),
  ]
};