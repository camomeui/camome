import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkCodeTitles from "./remark/remarkCodeTitles.mjs";
import remarkImgToJsx from "./remark/remarkImgToJsx.mjs";
import remarkMdxCodeMeta from "remark-mdx-code-meta";

/** @type {import('@mdx-js/mdx').CompileOptions} */
const mdxOptions = {
  remarkPlugins: [
    remarkGfm,
    remarkMdxCodeMeta,
    remarkCodeTitles,
    remarkImgToJsx,
  ],
  rehypePlugins: [
    rehypeExternalLinks,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
        properties: {
          ["aria-hidden"]: false,
          ["tab-index"]: false,
          ["class"]: "hash-link",
        },
      },
    ],
  ],
};

export default mdxOptions;
