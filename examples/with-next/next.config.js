const { generateScopedName, hash } = require("@camome/utils");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@camome/core"],
  webpack: (config) => {
    // Generate static class names for `@camome/core`.
    // There's no way to do so without messing up like this.
    config.module.rules
      .find(({ oneOf }) => !!oneOf)
      .oneOf.filter(({ use }) => JSON.stringify(use)?.includes("css-loader"))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options?.modules) {
          options.modules.getLocalIdent = (
            context,
            localIdentName,
            localName
          ) => {
            const filename = context.resourcePath;
            // @camome/core depends on static class names
            // but your own module classes won't.
            if (!filename.match(/@camome\/core/)) {
              // Whatever. `hash()` doesn't have any special effect.
              return localName + "-" + hash(filename);
            }
            return generateScopedName(localName, filename);
          };
        }
      });

    return config;
  },
};

module.exports = nextConfig;
