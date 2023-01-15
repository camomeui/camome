import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

export type AccordionProps = {
  items: {
    summary: React.ReactNode;
    details: React.ReactNode;
  }[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  return (
    <section className={clsx(styles.Block, className)}>
      {items.map(({ summary, details }) => (
        <details key={summary?.toString()} className={styles.details}>
          <summary className={styles.summary}>
            <span>{summary}</span>
            <ChevronDownIcon />
          </summary>
          <div className={styles.contents}>{details}</div>
        </details>
      ))}
    </section>
  );
}
