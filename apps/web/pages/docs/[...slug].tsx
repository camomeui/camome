import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import * as docgen from "react-docgen-typescript";

import type {
  NavItem,
  LabeledLink,
  DocsComponentMeta,
  DocsComponentPropItem,
} from "@/types";

import DocsLayout from "@/components/DocsLayout";
import DocsTemplate from "@/components/DocsTemplate";
import { flattenSidebarLinks, getSidebarItems } from "@/lib/docs";
import { allDocs, type Docs } from "contentlayer/generated";

type Props = {
  doc: Docs;
  sidebarItems: NavItem[];
  next: LabeledLink | null;
  prev: LabeledLink | null;
  componentMeta: DocsComponentMeta[] | null;
};

const excludedProps = ["className", "style"];

function getComponentData(name: string): DocsComponentMeta[] {
  const resp = docgen.parse(
    `node_modules/@camome/components/src/components/${name}/index.tsx`,
    {
      savePropValueAsString: true,
      propFilter: (prop) => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find(
            (declaration) => {
              // Only those defined by @camome/components;
              // excluding HTML attributes.
              return (
                declaration.fileName.includes("@camome/components") &&
                !excludedProps.includes(prop.name)
              );
            }
          );

          return Boolean(hasPropAdditionalDescription);
        }

        return true;
      },
    }
  );

  if (resp.length === 0) {
    throw new Error(`Couldn't parse metadata for: ${name}`);
  }

  return resp.map((component) => ({
    displayName: component.displayName,
    props: Object.entries(component.props)
      .map(([, v]) => ({
        defaultValue: v.defaultValue?.value ?? null,
        name: v.name,
        required: v.required,
        type: v.type.name,
        description: v.description,
      }))
      .sort(compareProp),
  }));
}

function compareProp(
  a: DocsComponentPropItem,
  b: DocsComponentPropItem
): number {
  if (a.required && !b.required) return -1;
  if (!a.required && b.required) return 1;
  return a.name.localeCompare(b.name);
}

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

  let componentMeta: DocsComponentMeta[] | null = null;
  if (doc.slug.match(/components\/.+/)) {
    componentMeta = doc.components
      ? doc.components.flatMap(getComponentData)
      : getComponentData(doc.title);
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
