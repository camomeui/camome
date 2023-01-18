import React from "react";

import TableOfContents from "@/components/TableOfContents";
import { Toc } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  toc?: Toc;
  tocLevel?: number;
  anchorsContainerSelector: string;
  children: React.ReactNode;
};

export default function DocsInnerLayout({
  toc,
  tocLevel,
  anchorsContainerSelector,
  children,
}: Props) {
  return (
    <div className={styles.article}>
      <div className={styles.main}>{children}</div>
      {toc && (
        <aside className={styles.tocWrap}>
          <TableOfContents
            toc={toc}
            toHeading={tocLevel}
            className={styles.toc}
            anchorsContainerSelector={anchorsContainerSelector}
          />
        </aside>
      )}
    </div>
  );
}
