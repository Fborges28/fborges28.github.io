const merge = require("webpack-merge");
let path = require('path');
let parts = require('./webpack.parts');
let webpackPlugins = require("./webpack.plugins-config");


const PATHS = {
  build: path.resolve(__dirname, 'dist')
}

const commonConfig = merge([
  {
    entry: path.resolve(__dirname, 'src/js/app.js'),
    output: {
      path: PATHS.build,
      filename: 'js/bundle.js',
      publicPath: "/dist/"
    },
    module: parts.mainModule(),
    plugins: [
      webpackPlugins.htmlPlugin()
    ],
    devtool: "eval-source-map"
  },
]);

const productionConfig = merge([
  webpackPlugins.clean(PATHS.build),
  webpackPlugins.minifyJavaScript(),
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  })
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};