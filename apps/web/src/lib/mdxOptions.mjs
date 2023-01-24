import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkMdxCodeMeta from "remark-mdx-code-meta";

import linkIcon from "./hast/link-icon.mjs";
import remarkAdmonitions from "./remark/remarkAdmonitions.mjs";
import remarkCodeTitles from "./remark/remarkCodeTitles.mjs";
import remarkImgToJsx from "./remark/remarkImgToJsx.mjs";

/** @type {import('@mdx-js/mdx').CompileOptions} */
const mdxOptions = {
  remarkPlugins: [
    remarkGfm,
    remarkMdxCodeMeta,
    remarkDirective,
    remarkAdmonitions,
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
          class: "hash-link",
        },
        content() {
          return [linkIcon];
        },
      },
    ],
  ],
};

export default mdxOptions;
