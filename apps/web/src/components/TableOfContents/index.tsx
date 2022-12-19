import clsx from "clsx";
import React from "react";

import { type Toc } from "@/types";

import styles from "./styles.module.scss";
import useTocHighlight from "./useTocHighlight";

type Props = {
  toc: Toc;
  indentDepth?: number;
  fromHeading?: number;
  toHeading?: number;
  asDisclosure?: boolean;
  exclude?: string | string[];
  className?: string;
};

export default function TableOfContents({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 3,
  exclude = "",
  className,
}: Props) {
  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i");

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  );

  useTocHighlight({
    linkActiveClassName: styles.active,
    linkClassName: styles.item,
    anchorsContainerSelector: "#markup",
    minHeadingLevel: fromHeading,
    maxHeadingLevel: toHeading,
  });

  return (
    <nav id="toc" className={clsx(styles.Block, className)}>
      <div className={styles.title}>Contents</div>
      <ul className={clsx(styles.list, "scrollbar")}>
        {filteredToc.map((heading) => (
          <li key={heading.value}>
            <a
              href={heading.url}
              className={clsx(
                styles.item,
                heading.depth >= indentDepth && styles.indent
              )}
              data-depth={heading.depth}
            >
              {heading.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
