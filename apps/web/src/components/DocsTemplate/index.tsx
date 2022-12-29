import Link from "next/link";
import { FiInfo } from "react-icons/fi";

import DocsPageNav from "@/components/DocsPageNav";
import MdxRenderer from "@/components/MdxRenderer";
import TableOfContents from "@/components/TableOfContents";
import { LabeledLink, Toc } from "@/types";
import { Markup } from "@camome/components/Markup";
import { Tag } from "@camome/components/Tag";
import { type Docs } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  doc: Docs;
  toc?: Toc;
  prev?: LabeledLink;
  next?: LabeledLink;
};

export default function DocsTemplate({ doc, toc, prev, next }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <article>
          <header className={styles.header}>
            <h1 className={styles.title}>{doc.title}</h1>
            <p className={styles.description}>{doc.description}</p>
            {doc.headOnly && (
              <div>
                <Tag
                  component={Link}
                  href="/docs/getting-started/headless-integration"
                  size="sm"
                  endDecorator={<FiInfo stroke-width="2.5" />}
                  className={styles.tag}
                >
                  Head-only
                </Tag>
              </div>
            )}
          </header>
          <Markup className={styles.markup} id="markup">
            <MdxRenderer code={doc.body.code} />
          </Markup>
        </article>
        <aside className={styles.aside}>
          <DocsPageNav next={next} prev={prev} />
        </aside>
      </div>
      {toc && (
        <aside className={styles.tocWrap}>
          <TableOfContents toc={toc} className={styles.toc} />
        </aside>
      )}
    </div>
  );
}
