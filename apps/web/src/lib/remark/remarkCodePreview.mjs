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
        const previewPath = node.attributes.path;
        const dir = path.join(".stories", previewPath);
        const html = fs.readFileSync(path.join(dir, "index.html"), "utf-8");
        const htmlFormatted = fs.readFileSync(
          path.join(dir, "index.formatted.html"),
          "utf-8"
        );
        const css = fs.readFileSync(path.join(dir, "styles.css"), "utf-8");
        const code = fs.readFileSync(path.join(dir, "code.tsx"), "utf-8");
        const bundle = fs.readFileSync(path.join(dir, "bundle.jsx"), "utf-8");
        const metadata = JSON.parse(
          fs.readFileSync(path.join(dir, "metadata.json"), "utf-8")
        );

        node.type = "mdxJsxFlowElement";
        node.name = "CodeSandbox";
        node.attributes = [
          { type: "mdxJsxAttribute", name: "react", value: code },
          { type: "mdxJsxAttribute", name: "html", value: html },
          {
            type: "mdxJsxAttribute",
            name: "htmlFormatted",
            value: htmlFormatted,
          },
          { type: "mdxJsxAttribute", name: "css", value: css },
          {
            type: "mdxJsxAttribute",
            name: "bundlePath",
            value: previewPath + ".js",
          },
          {
            type: "mdxJsxAttribute",
            name: "layout",
            value: metadata.layout || "centered",
          },
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
