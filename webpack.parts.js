let path = require('path');
const autoprefixer = require('autoprefixer'); 

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    contentBase: path.join(__dirname, ''),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
});

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

const fileLoader = {
  test: /\.(jpg|png|gif|svg|pdf|ico)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[path][name]-[hash:8].[ext]'
      },
    },
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: '65-90',
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75
        }
      }
    }
  ]
}

exports.mainModule = () => ({
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
    },
    fileLoader
  ]
})















