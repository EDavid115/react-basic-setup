const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const BaseConfig = require('./webpack.config.base');

module.exports = merge(BaseConfig(state='production'), {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'react-setup-analyzer.html',
      generateStatsFile: true,
      openAnalyzer: false
    })
  ]
});