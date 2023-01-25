import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import {
  useDocsMeta,
  type DocsMetaContextValue,
} from "@/contexts/DocsMetaContext";
import { Locale } from "@/types";

type Props = {
  id?: string;
  href?: string;
  hash?: string;
  locale?: Locale;
  children?:
    | React.ReactNode
    | ((doc: DocsMetaContextValue["docs"][number]) => React.ReactNode);
  className?: string;
  style?: React.CSSProperties;
};

export default function DocLink({
  id,
  href,
  hash,
  locale,
  children,
  className,
  style,
}: Props) {
  const currentLocale = useRouter().locale;
  const { docs } = useDocsMeta();
  const doc =
    docs.find((doc) => doc.id === id && doc.locale === currentLocale) ??
    docs.find((doc) => doc.id === id);
  if (!doc) throw new Error(`Invalid doc link: ${id}`);
  return (
    <Link
      href={href ?? "/docs/" + doc.slug + (hash ? `#${hash}` : "")}
      locale={locale}
      className={className}
      style={style}
    >
      {typeof children === "function" ? children(doc) : children ?? doc.title}
    </Link>
  );
}
