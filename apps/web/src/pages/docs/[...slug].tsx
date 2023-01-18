import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";

import type {
  NavItem,
  LabeledLink,
  DocsComponentParams,
  Locale,
} from "@/types";

import DocsLayout from "@/components/DocsLayout";
import DocsTemplate from "@/components/DocsTemplate";
import {
  flattenSidebarLinks,
  getComponentParams,
  getSidebarItems,
} from "@/lib/docs";
import { allDocs, type Docs } from "contentlayer/generated";

type Props = {
  doc: Docs;
  sidebarItems: NavItem[];
  next: LabeledLink | null;
  prev: LabeledLink | null;
  componentMeta: DocsComponentParams[] | null;
};

export default function DocsPage({
  sidebarItems,
  doc,
  next,
  prev,
  componentMeta,
}: Props) {
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout sidebarItems={sidebarItems}>
        <DocsTemplate
          doc={doc}
          toc={doc.toc}
          tocLevel={doc.tocLevel}
          next={next ?? undefined}
          prev={prev ?? undefined}
          componentParams={componentMeta ?? undefined}
          key={doc._id} // Force initiate tab state
        />
      </DocsLayout>
    </>
  );
}

export async function getStaticProps({
  params,
  locale,
  defaultLocale,
}: GetStaticPropsContext) {
  const slug = params?.slug;
  if (!Array.isArray(slug)) {
    return {
      notFound: true,
    };
  }
  const sidebarItems = getSidebarItems(
    undefined,
    (locale ?? defaultLocale) as Locale
  );
  const doc =
    allDocs.find(
      (post) => post.slug === slug.join("/") && post.locale === locale
    ) ?? allDocs.find((post) => post.slug === slug.join("/"));

  if (!doc) {
    return { notFound: true };
  }

  let componentPrams: DocsComponentParams[] | null = null;
  if (doc.slug.match(/components\/.+/)) {
    componentPrams = await (doc.components
      ? (await Promise.all(doc.components.map(getComponentParams))).flat()
      : getComponentParams(doc.title));
  }

  const flatItems = flattenSidebarLinks(sidebarItems);
  const docIndex = flatItems.findIndex((item) => item.id === doc.id);
  const next = flatItems[docIndex + 1];
  const prev = flatItems[docIndex - 1];

  const props: Props = {
    doc,
    sidebarItems,
    next: next ?? null,
    prev: prev ?? null,
    componentMeta: componentPrams ?? null,
  };

  return {
    props,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = allDocs.map((doc) => ({
    params: { slug: doc.slug.split("/") },
    locale: doc.locale,
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
