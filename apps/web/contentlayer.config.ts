import { defineDocumentType, makeSource } from "contentlayer/source-files";

import { getToc } from "./src/lib/getToc";
import mdxOptions from "./src/lib/mdxOptions.mjs";

export const Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    lastmod: {
      type: "date",
    },
    headOnly: {
      type: "boolean",
    },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (doc) => doc.id || doc._raw.flattenedPath.replace("docs/", ""),
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("docs/", ""),
    },
    toc: {
      type: "list",
      resolve: (doc) => getToc(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  contentDirExclude: ["docs/_sidebar.js"],
  documentTypes: [Docs],
  mdx: mdxOptions,
});
