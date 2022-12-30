import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMdxCodeMeta from "remark-mdx-code-meta";
import remarkDirective from "remark-directive";
import remarkCodeTitles from "./remark/remarkCodeTitles.mjs";
import remarkImgToJsx from "./remark/remarkImgToJsx.mjs";
import remarkCodePreview from "./remark/remarkCodePreview.mjs";
import linkIcon from "./hast/link-icon.mjs";

/** @type {import('@mdx-js/mdx').CompileOptions} */
const mdxOptions = {
  remarkPlugins: [
    remarkGfm,
    remarkMdxCodeMeta,
    remarkDirective,
    remarkCodeTitles,
    remarkImgToJsx,
    remarkCodePreview,
  ],
  rehypePlugins: [
    rehypeExternalLinks,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
        content(node) {
          return [linkIcon];
        },
      },
    ],
  ],
};

export default mdxOptions;
