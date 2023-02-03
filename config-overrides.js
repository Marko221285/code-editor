const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config.resolve.fallback = {
    os: false,
    fs: false,
  };
  config.plugins.push(new NodePolyfillPlugin());
  return config;
};
