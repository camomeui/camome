import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

import { mdxComponents } from "@/components/MdxComponents";

type Props = {
  code: string;
};

export default function MdxRenderer({ code }: Props) {
  const MDXContent = useMDXComponent(code);
  return <MDXContent components={mdxComponents} />;
}
