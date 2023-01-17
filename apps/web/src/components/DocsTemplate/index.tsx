import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiInfo } from "react-icons/fi";

import ComponentParamTables from "@/components/ComponentParamTables";
import DocsPageNav from "@/components/DocsPageNav";

import styles from "./styles.module.scss";

import DocsTabs from "@/components/DocsTabs";
import MdxRenderer from "@/components/MdxRenderer";
import TableOfContents from "@/components/TableOfContents";
import { DocsComponentParams, LabeledLink, Toc } from "@/types";
import { Markup, Tag } from "@camome/core";
import { toKebabCase } from "@camome/utils";
import { type Docs } from "contentlayer/generated";

type Props = {
  doc: Docs;
  toc?: Toc;
  prev?: LabeledLink;
  next?: LabeledLink;
  componentParams?: DocsComponentParams[];
};

export default function DocsTemplate({
  doc,
  toc,
  prev,
  next,
  componentParams,
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
                <TableOfContents
                  toc={toc}
                  className={styles.toc}
                  anchorsContainerSelector="#markup"
                />
              </aside>
            )}
          </div>
        ),
      },
      ...(componentParams
        ? [
            {
              id: "api",
              label: "API",
              panel: (
                <div className={styles.article}>
                  <div className={styles.main}>
                    <ComponentParamTables data={componentParams} id="api" />
                  </div>
                  {toc && (
                    <aside className={styles.tocWrap}>
                      <TableOfContents
                        toc={tocOfComponentParams(componentParams)}
                        className={styles.toc}
                        anchorsContainerSelector="#api"
                      />
                    </aside>
                  )}
                </div>
              ),
            },
          ]
        : []),
    ];
  }, [componentParams, doc.body.code, next, prev, toc]);

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
              href="/docs/guide/headless-integration"
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

export function tocOfComponentParams(params: DocsComponentParams[]): Toc {
  const variables = params.flatMap((comp) => comp.cssVariables);
  const classes = params.flatMap((comp) => comp.classes);
  const hasProps = params.flatMap((comp) => comp.props).length > 0;
  const hasVariables = variables.length > 0;
  const hasClasses = classes.length > 0;

  const propToc = {
    depth: 2,
    url: "#props",
    value: "React props",
  };
  const varToc = {
    depth: 2,
    url: "#variables",
    value: "CSS variables",
  };
  const classToc = {
    depth: 2,
    url: "#classes",
    value: "Classes",
  };
  const componentToc = params.map((comp) => ({
    depth: 3,
    url: `#${toKebabCase(comp.displayName)}`,
    value: comp.displayName,
  }));

  return [
    ...(hasProps ? [propToc] : []),
    ...componentToc,
    ...(hasVariables ? [varToc] : []),
    ...(hasClasses ? [classToc] : []),
  ];
}
