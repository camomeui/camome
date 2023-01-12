// Original: https://github.com/indooorsman/esbuild-css-modules-plugin

const plugin = require("./lib/plugin");
const { pluginName } = require("./lib/utils");

/**
 * @type {(options: import('.').Options) => import('esbuild').Plugin}
 */
const CssModulesPlugin = (options = {}) => {
  return {
    name: pluginName,
    setup: async (build) => {
      await plugin.setup(build, options);
    },
  };
};

module.exports = CssModulesPlugin;
