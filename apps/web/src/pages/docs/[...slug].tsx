import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
} from "next";
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
  DocsMetaContext,
  DocsMetaContextValue,
} from "@/contexts/DocsMetaContext";
import bundleSizeJson from "@/docs-data/bundle-size.json";
import { flattenSidebarLinks } from "@/lib/docs/flattenSidebarLinks";
import { getComponentParams } from "@/lib/docs/getComponentParams";
import { getSidebarItems } from "@/lib/docs/getSidebarItems";
import { allDocs, type Docs } from "contentlayer/generated";

type Props = {
  doc: Docs;
  sidebarItems: NavItem[];
  docsMeta: DocsMetaContextValue;
  next: LabeledLink | null;
  prev: LabeledLink | null;
  componentMeta: DocsComponentParams[] | null;
  bundleSize: { js: number; css: number } | null;
};

export default function DocsPage({
  sidebarItems,
  doc,
  docsMeta,
  next,
  prev,
  componentMeta,
  bundleSize,
}: Props) {
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsMetaContext.Provider value={docsMeta}>
        <DocsLayout sidebarItems={sidebarItems}>
          <DocsTemplate
            doc={doc}
            toc={doc.toc}
            tocLevel={doc.tocLevel}
            next={next ?? undefined}
            prev={prev ?? undefined}
            componentParams={componentMeta ?? undefined}
            bundleSize={bundleSize ?? undefined}
            key={doc._id} // Force initiate tab state
          />
        </DocsLayout>
      </DocsMetaContext.Provider>
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
  const bundleSize = bundleSizeJson[doc.title as keyof typeof bundleSizeJson];

  const flatItems = flattenSidebarLinks(sidebarItems);
  const docIndex = flatItems.findIndex((item) => item.id === doc.id);
  const next = flatItems[docIndex + 1];
  const prev = flatItems[docIndex - 1];

  const props: Props = {
    doc,
    docsMeta: {
      docs: allDocs.map((doc) => ({
        id: doc.id!,
        slug: doc.slug,
        title: doc.title,
        locale: doc.locale ?? "en",
        label: doc.label ?? null,
      })),
    },
    sidebarItems,
    next: next ?? null,
    prev: prev ?? null,
    componentMeta: componentPrams ?? null,
    bundleSize: bundleSize ?? null,
  };

  return {
    props,
  };
}

export async function getStaticPaths({
  locales,
}: GetStaticPathsContext): Promise<GetStaticPathsResult> {
  if (!locales) throw new Error("No `locales` passed to `getStaticPaths`");
  // Make sure to pre-render all the pages for every locale because
  // `getComponentsParams` relies on reading files in `node_modules`
  // which is not available on serverless functions.
  const paths = locales?.flatMap((locale) =>
    allDocs.map((doc) => ({
      params: { slug: doc.slug.split("/") },
      locale: locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
}
