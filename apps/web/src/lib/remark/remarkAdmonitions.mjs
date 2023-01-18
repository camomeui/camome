import { visit } from "unist-util-visit";

export default function remarkAdmonitions() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        if (!["info", "success", "warn", "danger"].includes(node.name)) return;
        // Store node.name before overwrite with "Alert".
        const status = node.name;

        node.type = "mdxJsxFlowElement";
        node.name = "Message";
        node.attributes = [
          { type: "mdxJsxAttribute", name: "status", value: status },
        ];
      }
    });
  };
}
