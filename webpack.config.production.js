const merge = require('webpack-merge');
const BaseConfig = require('./webpack.config.base');

module.exports = merge(BaseConfig(state='production'), {
  mode: 'production',
  devtool: 'source-map',
});