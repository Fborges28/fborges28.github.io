const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
let path = require('path');

exports.htmlPlugin = () => new HtmlWebpackPlugin({
  // Load a custom template (lodash by default)
  title: "Felipe Borges - Desenvolvedor Web",
  template: 'src/index.html',
  filename: '../index.html' //relative to root of the application
})

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })]
  }
})

exports.clean = path => ({
  plugins: [new CleanWebpackPlugin([path])],
});