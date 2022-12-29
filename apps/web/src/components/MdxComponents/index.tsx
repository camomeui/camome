import { type MDXComponents } from "mdx/types";
import Image from "next/image";

import A from "@/components/MdxComponents/A";
import CodeBlock from "@/components/MdxComponents/CodeBlock";
import { Message } from "@camome/components/Message";

export const mdxComponents: MDXComponents = {
  a: A,
  Image,
  Message,
  CodeBlock,
} as const;
