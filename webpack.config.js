const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FlowWebpackPlugin = require('flow-webpack-plugin');

const BASE_CSS_LOADER = (modules = false) => ({
  loader: 'css-loader',
  options: {
    modules,
    sourceMap: true,
    importLoaders: 1,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  }
})

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry:  './src/app.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist'),
  },
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            // options: {
            //   // cacheDirectory: true,
            //   presets: [
            //     "@babel/preset-flow",
            //     [
            //       "@babel/preset-env",
            //       {
            //         "useBuiltIns": false,
            //         "modules": false,
            //         "targets": {
            //           "browsers": ["ie >= 11", "chrome >= 56"]
            //         }
            //       }
            //     ],
            //     "@babel/preset-react"
            //   ],
            //   plugins: [
            //     "@babel/plugin-transform-runtime",
            //     {
            //       "absoluteRuntime": false,
            //       "corejs": false,
            //       "helpers": true,
            //       "regenerator": true,
            //       "useESModules": false
            //     }
            //   ],
            // }
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
          // include: [/src/, /example/],
          loader: 'url-loader',
          options: {
            limit: 8192
          },
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            BASE_CSS_LOADER()
          ]
        },
        {
          test: /\.less$/,
          use: [
            { loader: 'style-loader', options: { } },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS
            },
          ]
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader', options: { } },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            }
          ]
        }
      ]
  },
  devServer: {
    hot: true,
    open: 'Google Chrome',
    compress: true,
    progress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    // publicPath: path.resolve(__dirname, './dist'),
    contentBase: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new FlowWebpackPlugin({
      flowArgs: ['check'],
      flowPath: require('flow-bin'),
    })
  ],
};