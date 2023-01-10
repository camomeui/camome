import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";

import styles from "./styles.module.scss";

export type BreadcrumbsProps = {
  paths: {
    label: string;
    href?: string;
  }[];
  className?: string;
  renderLink?: (props: {
    href: string;
    children?: React.ReactNode;
  }) => React.ReactElement;
};

export function Breadcrumbs({
  paths,
  className,
  renderLink = (props) => <a {...props} />,
}: BreadcrumbsProps) {
  return (
    <nav className={className}>
      <ol className={styles.list}>
        {paths.map((p, i) => (
          <li key={p.label} className={styles.item}>
            {p.href ? (
              renderLink({ href: p.href, children: p.label })
            ) : (
              <span>{p.label}</span>
            )}
            {i !== paths.length - 1 ? (
              <ChevronRightIcon className={styles.separator} />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
