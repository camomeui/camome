import { type MDXComponents } from "mdx/types";
import Image from "next/image";

import A from "@/components/MdxComponents/A";
import Pre from "@/components/MdxComponents/Pre";
import { sharedComponents } from "@/components/MdxComponents/shared";

export const mdxComponents: MDXComponents = {
  a: A,
  pre: Pre,
  Image,
  ...sharedComponents,
} as const;
