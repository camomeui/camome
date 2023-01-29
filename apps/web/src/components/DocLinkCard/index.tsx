import { DocumentTextIcon } from "@heroicons/react/24/outline";
import React from "react";

import DocLink from "@/components/DocLink";
import { Locale } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  label?: React.ReactNode;
  id?: string;
  href?: string;
  icon?: React.ReactNode;
  locale?: Locale;
  hash?: string;
};

export default function DocLinkCard({
  href,
  id,
  label,
  icon,
  locale,
  hash,
}: Props) {
  return (
    <DocLink
      id={id}
      href={href}
      className={styles.container}
      locale={locale}
      hash={hash}
      label={(doc) => (
        <>
          <div className={styles.icon}>
            {icon ?? <DocumentTextIcon strokeWidth="2" />}
          </div>
          <div className={styles.label}>{label ?? doc.label ?? doc.title}</div>
        </>
      )}
    />
  );
}
