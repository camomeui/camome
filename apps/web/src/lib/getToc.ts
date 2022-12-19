import { remark } from "remark";
import remarkMdx from "remark-mdx";

import { Toc } from "../types";

import remarkTocHeadings from "./remark/remarkTocHeadings";

export async function getToc(markdown: string) {
  const toc: Toc = [];
  remark()
    .use(remarkMdx)
    .use(remarkTocHeadings, { exportRef: toc })
    .processSync(markdown);
  return toc;
}
