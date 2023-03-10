import { type MDXComponents } from "mdx/types";
import Image from "next/image";

import * as DesignSystem from "@/components/DesignSystem";
import DocLink from "@/components/DocLink";
import DocLinkCardGrid from "@/components/DocLinkCardGrid";
import A from "@/components/MdxComponents/A";
import CodeSandbox from "@/components/MdxComponents/CodeSandbox";
import CodeTabs from "@/components/MdxComponents/CodeTabs";
import Pre from "@/components/MdxComponents/Pre";
import { Message, type MessageProps } from "@camome/core/Message";

export const mdxComponents: MDXComponents = {
  a: A,
  pre: Pre,
  Image,
  Message: (props: MessageProps) => <Message {...props} className="" />,
  CodeSandbox,
  CodeTabs,
  DocLink,
  DocLinkCardGrid: (props: any) => (
    <DocLinkCardGrid
      {...props}
      className="no-markup"
      style={{ margin: "1.5rem 0" }}
    />
  ),
  DesignSystem,
} as const;
