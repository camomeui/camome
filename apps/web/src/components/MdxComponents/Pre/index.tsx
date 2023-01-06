import React from "react";

import CodeBlock from "@/components/MdxComponents/CodeBlock";

type Props = {
  children?: React.ReactNode;
};

export default function Pre({ children, ...props }: Props) {
  if (React.isValidElement(children) && children.type === "code") {
    const { className: language, children: code } = children.props;
    return (
      <div {...props}>
        <CodeBlock code={code} language={language.replace("language-", "")} />
      </div>
    );
  }
  return <pre {...props}>{children}</pre>;
}
