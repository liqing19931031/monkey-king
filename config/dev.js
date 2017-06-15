const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');
const config = Object.assign({}, baseConfig, {
  watch: true,
  entry: {
    app: [
      `webpack-dev-server/client?http://localhost:${defaultSettings.port}`, // 这一行很重要，使 webpack-dev-server 使用 inline 模式，iframe 模式下 url 不会变比较头疼
      'webpack/hot/dev-server'
    ]
  },
  cache: true,
  devtool: 'cheap-source-map',
  plugins: defaultSettings.plugins.concat([
    new webpack.HotModuleReplacementPlugin() // 热替换
  ])
});
module.exports = config;