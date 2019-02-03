var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const autoprefixer = require('autoprefixer'); 


const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]'
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true
  }
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
      })
    ]
  }
}
 
module.exports = {
  // ...
  entry: path.resolve(__dirname, './src/js/app.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader']
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          CSSModuleLoader,
          postCSSLoader,
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        // Load a custom template (lodash by default)
        template: './src/index.html',
        filename: './index.html' //relative to root of the application
      }
    )
  ],
  devtool: "eval-source-map"
}