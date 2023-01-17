import {
  DocumentTextIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import DocLink from "@/components/DocLink";
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

export default function DocLinkCard({ href, id, label, icon, locale }: Props) {
  return (
    <DocLink id={id} href={href} className={styles.container} locale={locale}>
      {(doc) => (
        <>
          <div className={styles.icon}>
            {icon ?? <DocumentTextIcon strokeWidth="2" />}
          </div>
          <div className={styles.label}>{label ?? doc.title}</div>
          <div className={styles.arrow}>
            <ArrowSmallRightIcon strokeWidth="1.75" />
          </div>
        </>
      )}
    </DocLink>
  );
}
