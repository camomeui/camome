import React from "react";

import CodeBlock, {
  type CodeBlockProps,
} from "@/components/MdxComponents/CodeBlock";

type Props = {
  children?: React.ReactNode;
} & Pick<CodeBlockProps, "live" | "direction">;

export default function Pre({ live, direction, children, ...props }: Props) {
  if (React.isValidElement(children) && children.type === "code") {
    return (
      <div {...props}>
        <CodeBlock live={live} direction={direction} {...children.props} />
      </div>
    );
  }
  return <pre {...props}>{children}</pre>;
}
