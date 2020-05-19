const merge = require('webpack-merge');
const BaseConfig = require('./webpack.config.base');

module.exports = merge(BaseConfig(state='development'), {
  mode: 'development',
  devServer: {
    port: 8888,
    hot: true,
    open: true,
    https: false
  },
  devtool: 'inline-source-map'
});





