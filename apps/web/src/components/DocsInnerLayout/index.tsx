import PencilSquareIcon from "@heroicons/react/24/outline/PencilSquareIcon";
import Link from "next/link";
import React from "react";

import TableOfContents from "@/components/TableOfContents";
import { Toc } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  docPath: string;
  toc?: Toc;
  tocLevel?: number;
  anchorsContainerSelector: string;
  children: React.ReactNode;
};

export default function DocsInnerLayout({
  docPath,
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
            extraLinks={
              <div>
                <a
                  href={`https://github.com/camomeui/camome/tree/main/apps/web/content/${docPath}.mdx`}
                  className={styles.tocExtraLink}
                >
                  <PencilSquareIcon />
                  Edit this page on GitHub
                </a>
                <Link href="/templates/saazy" className={styles.tocExtraLink}>
                  <span className={styles.emoji}>🚀</span>Speed up your project
                  with Camome templates!
                </Link>
              </div>
            }
          />
        </aside>
      )}
    </div>
  );
}
