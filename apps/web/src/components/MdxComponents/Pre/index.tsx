import React from "react";

import CodeBlock, {
  type CodeBlockProps,
} from "@/components/MdxComponents/CodeBlock";

type Props = {
  children?: React.ReactNode;
  previewHeight?: number;
} & Pick<CodeBlockProps, "live" | "direction">;

export default function Pre({
  live,
  direction,
  previewHeight,
  children,
  ...props
}: Props) {
  if (React.isValidElement(children) && children.type === "code") {
    return (
      <div {...props}>
        <CodeBlock
          live={live}
          direction={direction}
          previewHeight={previewHeight ? Number(previewHeight) : undefined}
          {...children.props}
        />
      </div>
    );
  }
  return <pre {...props}>{children}</pre>;
}
