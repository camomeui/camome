// https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/00059a8e7fa5fe400cda3e502201ce65bfe47d7a/lib/remark-toc-headings.js

import { slug } from "github-slugger";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

import { Toc } from "@/types";

// https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/4d6114f8f858cea78574a87a113ddb6a89f8ddce/lib/remark-toc-headings.js
export default function remarkTocHeadings(options: { exportRef: Toc }) {
  return (tree: any) =>
    visit(tree, "heading", (node) => {
      const textContent = toString(node);
      options.exportRef.push({
        value: textContent,
        url: "#" + slug(textContent),
        depth: node.depth,
      });
    });
}
