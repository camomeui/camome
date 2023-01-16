import Link from "next/link";
import React from "react";

import {
  Breadcrumbs as _Breadcrumbs,
  type BreadcrumbsProps,
} from "@camome/core";

type Props = Omit<BreadcrumbsProps, "renderLink">;

export default function Breadcrumbs(props: Props) {
  return (
    <_Breadcrumbs {...props} renderLink={(props) => <Link {...props} />} />
  );
}
