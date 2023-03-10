import createBundleAnalyzer from "@next/bundle-analyzer";
import createMdx from "@next/mdx";
import { withContentlayer } from "next-contentlayer";
import withNextTranslate from "next-translate";

import { generateScopedName } from "@camome/utils";

import mdxOptions from "./src/lib/mdxOptions.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["@camome/core"],
  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    localeDetection: false,
  },
  webpack: (config) => {
    // define class names generated by css-modules
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
            return generateScopedName(localName, context.resourcePath);
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

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(
  withNextTranslate(withContentlayer(withMdx(nextConfig)))
);
