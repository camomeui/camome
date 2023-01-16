import { type MDXComponents } from "mdx/types";
import Image from "next/image";

import A from "@/components/MdxComponents/A";
import CodeSandbox from "@/components/MdxComponents/CodeSandbox";
import CodeTabs from "@/components/MdxComponents/CodeTabs";
import Pre from "@/components/MdxComponents/Pre";
import { Message } from "@camome/core";

export const mdxComponents: MDXComponents = {
  a: A,
  pre: Pre,
  Image,
  Message,
  CodeSandbox,
  CodeTabs,
} as const;
