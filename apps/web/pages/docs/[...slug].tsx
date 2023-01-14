import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";

import type { NavItem, LabeledLink, DocsComponentParams } from "@/types";

import DocsLayout from "@/components/DocsLayout";
import DocsTemplate from "@/components/DocsTemplate";
import {
  flattenSidebarLinks,
  getComponentMeta,
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
          next={next ?? undefined}
          prev={prev ?? undefined}
          componentMeta={componentMeta ?? undefined}
          key={doc._id} // Force initiate tab state
        />
      </DocsLayout>
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug;
  if (!Array.isArray(slug)) {
    return {
      notFound: true,
    };
  }
  const sidebarItems = getSidebarItems();
  const doc = allDocs.find((post) => post.slug === slug.join("/"));

  if (!doc) {
    return { notFound: true };
  }

  let componentMeta: DocsComponentParams[] | null = null;
  if (doc.slug.match(/components\/.+/)) {
    componentMeta = await (doc.components
      ? (await Promise.all(doc.components.map(getComponentMeta))).flat()
      : getComponentMeta(doc.title));
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
    componentMeta: componentMeta ?? null,
  };

  return {
    props,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = allDocs.map((doc) => ({
    params: { slug: doc.slug.split("/") },
  }));

  return {
    paths,
    fallback: false,
  };
}
