import path from "path";
import { buildScopedClassName } from "@camome/utils";
import { withContentlayer } from "next-contentlayer";
import createMdx from "@next/mdx";
import mdxOptions from "./src/lib/mdxOptions.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["@camome/core"],
  webpack: (config) => {
    // define class names generated by css-modules
    config.module.rules
      .find(({ oneOf }) => !!oneOf)
      .oneOf.filter(({ use }) => JSON.stringify(use)?.includes("css-loader"))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options.modules) {
          options.modules.getLocalIdent = (
            context,
            localIdentName,
            localName
          ) => {
            return buildScopedClassName(localName, context.resourcePath);
          };
        }
      });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });

    // https://github.com/contentlayerdev/contentlayer/issues/313#issuecomment-1279678289
    config.infrastructureLogging = {
      level: "error",
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/*": "./src/*",
      "@/content/*": "./content/*",
      "@/public/*": "./public/*",
    };

    return config;
  },
};

const withMdx = createMdx({
  extension: /\.mdx?$/,
  options: mdxOptions,
});

export default withContentlayer(withMdx(nextConfig));
