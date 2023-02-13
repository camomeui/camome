import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { NextSeo } from "next-seo";

import LpLayout from "@/components/LpLayout";
import TemplatePage from "@/components/Template";
import { getSidebarItems } from "@/lib/docs/getSidebarItems";
import { Locale, NavItem } from "@/types";
import { allTemplates, Template } from "contentlayer/generated";

type Props = {
  template: Template;
  sidebarItems: NavItem[];
};

export default function _RootPage({ template, sidebarItems }: Props) {
  return (
    <>
      <NextSeo title={template.name} description={template.description} />
      <LpLayout sidebarItems={sidebarItems}>
        <TemplatePage template={template} />
      </LpLayout>
    </>
  );
}

export async function getStaticProps({
  params,
  locale,
  defaultLocale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const sidebarItems = getSidebarItems(
    undefined,
    (locale ?? defaultLocale) as Locale
  );
  const template = allTemplates.find((t) => t.slug === params!.slug);
  if (!template) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      template,
      sidebarItems,
    },
  };
}

export async function getStaticPaths({
  locales,
}: GetStaticPropsContext): Promise<GetStaticPathsResult> {
  return {
    paths: locales!.flatMap((locale) =>
      allTemplates.map((temp) => ({
        params: { slug: temp.slug },
        locale,
      }))
    ),
    fallback: false,
  };
}
