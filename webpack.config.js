'use strict'
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const SOURCE_ROOT = `${__dirname}/src`

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins () {
                return [require('autoprefixer')]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'webpack-import-glob-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@bz': path.resolve(__dirname, 'src/')
    }
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'assets/js/bazinga.app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/bazinga.app.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${SOURCE_ROOT}/assets`,
          to: './assets',
          globOptions: {
            ignore: [
              '**/*.scss'
            ]
          }
        },
        {
          from: `${SOURCE_ROOT}/index.html`,
          to: './'
        }
      ],
      options: {
        concurrency: 100
      }
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
