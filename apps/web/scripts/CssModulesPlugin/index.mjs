// Original: https://github.com/indooorsman/esbuild-css-modules-plugin

import { setup } from "./lib/plugin.mjs";
import { pluginName } from "./lib/utils.mjs";

/**
 * @type {(options: import('.').Options) => import('esbuild').Plugin}
 */
const CssModulesPlugin = (options = {}) => {
  return {
    name: pluginName,
    setup: async (build) => {
      await setup(build, options);
    },
  };
};

module.exports = CssModulesPlugin;
