import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiInfo } from "react-icons/fi";

import DocsPageNav from "@/components/DocsPageNav";
import DocsTabs from "@/components/DocsTabs";
import MdxRenderer from "@/components/MdxRenderer";
import PropsTables from "@/components/PropsTables";
import TableOfContents from "@/components/TableOfContents";
import { DocsComponentMeta, LabeledLink, Toc } from "@/types";
import { Markup } from "@camome/components/Markup";
import { Tag } from "@camome/components/Tag";
import { type Docs } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  doc: Docs;
  toc?: Toc;
  prev?: LabeledLink;
  next?: LabeledLink;
  componentMeta?: DocsComponentMeta[];
};

export default function DocsTemplate({
  doc,
  toc,
  prev,
  next,
  componentMeta,
}: Props) {
  const tabItems = React.useMemo(() => {
    return [
      {
        id: "usage",
        label: "Usage",
        panel: (
          <div className={styles.article}>
            <div className={styles.main}>
              <Markup className={styles.markup} id="markup">
                <MdxRenderer code={doc.body.code} />
              </Markup>
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
        ),
      },
      ...(componentMeta
        ? [
            {
              id: "props",
              label: "Props",
              panel: <PropsTables data={componentMeta} />,
            },
          ]
        : []),
    ];
  }, [componentMeta, doc.body.code, next, prev, toc]);

  const withTabs = tabItems.length > 1;

  const router = useRouter();
  const tabId = router.query.tab;
  const tabIndex = tabId ? tabItems.findIndex((item) => item.id === tabId) : 0;
  const navigateTab = (index: number) => {
    router.push(
      {
        ...router,
        query: {
          slug: router.query.slug,
          ...(index > 0 ? { tab: tabItems[index].id } : {}),
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <header className={clsx(styles.header, withTabs && styles.withTabs)}>
        <h1 className={styles.title}>{doc.title}</h1>
        {doc.description && (
          <p className={styles.description}>{doc.description}</p>
        )}
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
      {withTabs ? (
        <DocsTabs
          items={tabItems}
          className={styles.tab}
          selectedIndex={tabIndex}
          onChange={navigateTab}
        />
      ) : (
        <div className={styles.panel}>{tabItems[0].panel}</div>
      )}
    </div>
  );
}
