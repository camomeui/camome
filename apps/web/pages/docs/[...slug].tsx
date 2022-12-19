import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";

import type { NavItem, LabeledLink } from "@/types";

import DocsLayout from "@/components/DocsLayout";
import DocsTemplate from "@/components/DocsTemplate";
import { flattenSidebarLinks, getSidebarItems } from "@/lib/docs";
import { allDocs, type Docs } from "contentlayer/generated";

type Props = {
  doc: Docs;
  sidebarItems: NavItem[];
  next: LabeledLink | null;
  prev: LabeledLink | null;
};

export default function DocsPage({ sidebarItems, doc, next, prev }: Props) {
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout sidebarItems={sidebarItems}>
        <DocsTemplate
          doc={doc}
          toc={doc.toc}
          next={next ?? undefined}
          prev={prev ?? undefined}
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

  const flatItems = flattenSidebarLinks(sidebarItems);
  const docIndex = flatItems.findIndex((item) => item.id === doc.id);
  const next = flatItems[docIndex + 1];
  const prev = flatItems[docIndex - 1];

  const props: Props = {
    doc,
    sidebarItems,
    next: next ?? null,
    prev: prev ?? null,
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
