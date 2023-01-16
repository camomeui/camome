import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

import { mdxComponents } from "@/components/MdxComponents";
import * as pm from "@/lib/packageManager";

type Props = {
  code: string;
};

export default function MdxRenderer({ code }: Props) {
  const MDXContent = useMDXComponent(code, { pm });
  return <MDXContent components={mdxComponents} />;
}
