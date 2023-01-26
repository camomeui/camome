import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiInfo } from "react-icons/fi";

import Breadcrumbs from "@/components/Breadcrumbs";
import ComponentParamTables from "@/components/ComponentParamTables";
import DocsInnerLayout from "@/components/DocsInnerLayout";
import DocsPageNav from "@/components/DocsPageNav";
import DocsTabs from "@/components/DocsTabs";
import MdxRenderer from "@/components/MdxRenderer";
import { DocsComponentParams, LabeledLink, Toc } from "@/types";
import { Markup } from "@camome/core/Markup";
import { Tag } from "@camome/core/Tag";
import { Tooltip } from "@camome/core/Tooltip";
import { formatBytes, toKebabCase, uppercaseFirst } from "@camome/utils";
import { type Docs } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  doc: Docs;
  toc?: Toc;
  tocLevel?: number;
  prev?: LabeledLink;
  next?: LabeledLink;
  componentParams?: DocsComponentParams[];
  bundleSize?: { js: number; css: number };
};

export default function DocsTemplate({
  doc,
  toc,
  tocLevel,
  prev,
  next,
  componentParams,
  bundleSize,
}: Props) {
  const tabItems = React.useMemo(() => {
    return [
      {
        id: "usage",
        label: "Usage",
        panel: (
          <DocsInnerLayout
            docPath={doc._raw.flattenedPath}
            toc={toc}
            tocLevel={tocLevel}
            anchorsContainerSelector="#markup"
          >
            <>
              <Markup className={styles.markup} id="markup">
                <MdxRenderer code={doc.body.code} />
              </Markup>
              <aside className={styles.aside}>
                <DocsPageNav next={next} prev={prev} />
              </aside>
            </>
          </DocsInnerLayout>
        ),
      },
      ...(componentParams
        ? [
            {
              id: "api",
              label: "API",
              panel: (
                <DocsInnerLayout
                  docPath={doc._raw.flattenedPath}
                  toc={tocOfComponentParams(componentParams)}
                  anchorsContainerSelector="#api"
                >
                  <ComponentParamTables data={componentParams} id="api" />
                </DocsInnerLayout>
              ),
            },
          ]
        : []),
    ];
  }, [
    componentParams,
    doc._raw.flattenedPath,
    doc.body.code,
    next,
    prev,
    toc,
    tocLevel,
  ]);

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

  const [category] = router.query.slug as string[];
  const categoryHref = `/docs/${category}`;

  const breadcrumbs = [
    {
      label: "Documentation",
    },
    {
      label: uppercaseFirst(category.replace("-", " ")),
      href: router.asPath === categoryHref ? undefined : categoryHref,
    },
  ];

  return (
    <div>
      <header className={clsx(styles.header, withTabs)}>
        <Breadcrumbs paths={breadcrumbs} />
        <h1 className={styles.title}>{doc.title}</h1>
        {doc.description && (
          <p className={styles.description}>{doc.description}</p>
        )}
        {(bundleSize || doc.headOnly) && (
          <div className={styles.tags}>
            {bundleSize && (
              <Tooltip
                placement="bottom"
                title={<BundleSizeTooltipContent {...bundleSize} />}
              >
                <Tag
                  size="sm"
                  startDecorator={<span>📦</span>}
                  colorScheme="info"
                >
                  {formatBytes(bundleSize.js + bundleSize.css)}
                </Tag>
              </Tooltip>
            )}
            {doc.headOnly && (
              <Tag
                component={Link}
                href="/docs/guide/headless-integration"
                size="sm"
                colorScheme="info"
                endDecorator={<FiInfo stroke-width="2.5" />}
                className={styles.tag}
              >
                Head-only
              </Tag>
            )}
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

function BundleSizeTooltipContent(bundleSize: { js: number; css: number }) {
  return (
    <dl className={styles.bundleSizeTooltip}>
      {Object.entries(bundleSize).map(([key, val]) => (
        <div key={key}>
          <dt>{key.toUpperCase()}:</dt>
          <dd>{formatBytes(val)}</dd>
        </div>
      ))}
    </dl>
  );
}
