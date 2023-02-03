import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

export type AccordionProps = {
  items: {
    summary: React.ReactNode;
    details: React.ReactNode;
  }[];
  classNames?: {
    block?: string;
    details?: string;
    summary?: string;
    content?: string;
  };
};

export function Accordion({ items, classNames }: AccordionProps) {
  return (
    <section className={clsx(styles.Block, classNames?.block)}>
      {items.map(({ summary, details }) => (
        <details
          key={summary?.toString()}
          className={clsx(styles.details, classNames?.details)}
        >
          <summary className={clsx(styles.summary, classNames?.summary)}>
            <span>{summary}</span>
            <ChevronDownIcon />
          </summary>
          <div className={clsx(styles.content, classNames?.content)}>
            {details}
          </div>
        </details>
      ))}
    </section>
  );
}
