import fs from "fs";
import path from "path";

import { visit } from "unist-util-visit";

export default function remarkAdmonition() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === "leafDirective" &&
        node.name === "preview" &&
        node.attributes &&
        "path" in node.attributes
      ) {
        const dir = path.join(
          "node_modules/@camome/components/.stories",
          node.attributes.path
        );
        const html = fs.readFileSync(path.join(dir, "index.html"), "utf-8");
        const css = fs.readFileSync(path.join(dir, "styles.css"), "utf-8");
        const code = fs.readFileSync(path.join(dir, "code.tsx"), "utf-8");

        node.type = "mdxJsxFlowElement";
        node.name = "CodeBlock";
        node.attributes = [
          { type: "mdxJsxAttribute", name: "html", value: html },
          { type: "mdxJsxAttribute", name: "css", value: css },
          { type: "mdxJsxAttribute", name: "code", value: code },
          {
            type: "mdxJsxAttribute",
            name: "language",
            value: node.attributes.lang ?? "tsx",
          },
        ];
      }
    });
  };
}
