import {
  DocumentTextIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { Locale } from "@/types";
import { allDocs } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  label?: React.ReactNode;
  id?: string;
  href?: string;
  icon?: React.ReactNode;
  locale?: Locale;
};

export default function DocLink({ href, id, label, icon, locale }: Props) {
  const currentLocale = useRouter().locale;
  const doc =
    allDocs.find((doc) => doc.id === id && doc.locale === currentLocale) ??
    allDocs.find((doc) => doc.id === id);
  if (!doc) throw new Error("Invalid doc link");
  return (
    <Link
      href={href ?? "/docs/" + doc.slug}
      className={styles.container}
      locale={locale}
    >
      <div className={styles.icon}>
        {icon ?? <DocumentTextIcon strokeWidth="2" />}
      </div>
      <div className={styles.label}>{label ?? doc.title}</div>
      <div className={styles.arrow}>
        <ArrowSmallRightIcon strokeWidth="1.75" />
      </div>
    </Link>
  );
}
