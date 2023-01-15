import {
  defineDocumentType,
  makeSource,
  RawDocumentData,
} from "contentlayer/source-files";

import { getToc } from "./src/lib/getToc";
import mdxOptions from "./src/lib/mdxOptions.mjs";

const resolveSlugAndLocale = (raw: RawDocumentData) => {
  const [slug, locale] = raw.flattenedPath.replace("docs/", "").split(".");
  return { slug, locale };
};

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
    label: {
      type: "string",
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
    components: {
      type: "list",
      of: {
        type: "string",
      },
    },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (doc) => doc.id || doc._raw.flattenedPath.replace("docs/", ""),
    },
    slug: {
      type: "string",
      resolve: (doc) => resolveSlugAndLocale(doc._raw).slug,
    },
    locale: {
      type: "enum",
      options: ["en", "ja"],
      resolve: (doc) => resolveSlugAndLocale(doc._raw).locale,
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
  mdx: {
    ...mdxOptions,
  },
});
