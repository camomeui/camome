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
        const dir = path.join(
          "node_modules/@camome/components/.stories",
          previewPath
        );
        const html = fs.readFileSync(path.join(dir, "index.html"), "utf-8");
        const css = fs.readFileSync(path.join(dir, "styles.css"), "utf-8");
        const code = fs.readFileSync(path.join(dir, "code.tsx"), "utf-8");
        const bundle = fs.readFileSync(path.join(dir, "bundle.jsx"), "utf-8");
        const metadata = JSON.parse(
          fs.readFileSync(path.join(dir, "metadata.json"), "utf-8")
        );

        const bundleDir = `/public/stories/bundles/${previewPath}`;
        fs.mkdirSync(process.cwd() + bundleDir, { recursive: true });
        fs.writeFileSync(`${process.cwd()}${bundleDir}/index.jsx`, bundle);

        node.type = "mdxJsxFlowElement";
        node.name = "CodeBlock";
        node.attributes = [
          { type: "mdxJsxAttribute", name: "html", value: html },
          { type: "mdxJsxAttribute", name: "css", value: css },
          { type: "mdxJsxAttribute", name: "code", value: code },
          { type: "mdxJsxAttribute", name: "bundlePath", value: previewPath },
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
