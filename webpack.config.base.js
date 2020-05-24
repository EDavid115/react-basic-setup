const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const libraryName = 'react-setup'

module.exports = (state) => {
  let envPath = './.env.dev'
  let min = ''
  if (state === 'production') {
    envPath = './.env.prod'
    min = '.min'
  }

  const env = dotenv.config({ path: envPath }).parsed

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return {
    entry: './src/index.js',
    output: {
      filename: `${libraryName}.[name].[hash]${min}.js`,
      chunkFilename: `${libraryName}.[name].[hash]${min}.js`,
      path: path.join(__dirname, 'dist'),
      // Configurar a necesidad
      // publicPath: 'dist/'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'locales'), to: 'locales' }
        ]
      }),
      new ManifestPlugin(),
      new ServiceWorkerWebpackPlugin({
        entry: path.join(__dirname, 'src/sw.js'),
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    resolve: {
      modules: [__dirname, 'src', 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader')
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test:/\.s?css$/,
          use:['style-loader','css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]'
            }
          }
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      ]
    }
  }
};