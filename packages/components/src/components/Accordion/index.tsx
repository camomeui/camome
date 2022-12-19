import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

import styles from "./styles.module.scss";

export type AccordionItem = {
  summary: string;
  details: React.ReactNode;
};

type Props = {
  items: AccordionItem[];
  classNames?: {
    details?: string;
    summary?: string;
    contents?: string;
  };
};

export function Accordion({ items, classNames }: Props) {
  return (
    <section>
      {items.map(({ summary, details }) => (
        <details
          key={summary}
          className={clsx(styles.details, classNames?.details)}
        >
          <summary className={clsx(styles.summary, classNames?.summary)}>
            <span>{summary}</span>
            <ChevronDownIcon />
          </summary>
          <div className={clsx(styles.contents, classNames?.contents)}>
            {details}
          </div>
        </details>
      ))}
    </section>
  );
}
