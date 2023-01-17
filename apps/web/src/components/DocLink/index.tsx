import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { Locale } from "@/types";
import { allDocs, type Docs } from "contentlayer/generated";

type Props = {
  id?: string;
  href?: string;
  locale?: Locale;
  children?: React.ReactNode | ((doc: Docs) => React.ReactNode);
  className?: string;
  style?: React.CSSProperties;
};

export default function DocLink({
  href,
  id,
  locale,
  children,
  className,
  style,
}: Props) {
  const currentLocale = useRouter().locale;
  const doc =
    allDocs.find((doc) => doc.id === id && doc.locale === currentLocale) ??
    allDocs.find((doc) => doc.id === id);
  if (!doc) throw new Error("Invalid doc link");
  return (
    <Link
      href={href ?? "/docs/" + doc.slug}
      locale={locale}
      className={className}
      style={style}
    >
      {typeof children === "function" ? children(doc) : children ?? doc.title}
    </Link>
  );
}
