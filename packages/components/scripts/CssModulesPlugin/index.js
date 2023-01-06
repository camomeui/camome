const plugin = require("./lib/plugin");
const { pluginName } = require("./lib/utils");

/**
 * @type {(options: import('.').Options) => import('esbuild').Plugin}
 */
const CssModulesPlugin = (options = {}) => {
  return {
    name: pluginName,
    setup: async (build) => {
      const { bundle } = build.initialOptions;
      const { v2 } = options;
      const useV2 = v2 && bundle;

      if (useV2) {
        await plugin.setup(build, options);
      } else {
        throw new Error("Use V2");
      }
    },
  };
};

module.exports = CssModulesPlugin;
