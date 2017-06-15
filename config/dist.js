const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');
const config = Object.assign({}, baseConfig, {
  entry: {
  },
  cache: false,
  plugins: defaultSettings.plugins.concat([
  ])
});
module.exports = config;