const path = require('path');
const defaultSettings = require('./defaults');

module.exports = {
  port: defaultSettings.port,
  debug: true,
  output: {
    path: path.join(__dirname, '/../dist/ui'),
    filename: '[name].js',
    publicPath: `.${defaultSettings.publicPath}`
  },
  // webpack-dev-server 的配置
  devServer: {
    contentBase: './src',
    historyApiFallback: true, // enables support for history API fallback
    inline: true,
    hot: true,
    port: defaultSettings.port,
    // noInfo: true, // suppress boring information
    stats: {
      colors: true // add some colors to the output
    }
  },
  resolve: defaultSettings.resolve,
  module: defaultSettings.getDefaultModules(),
  postcss: defaultSettings.postcss
};