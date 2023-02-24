import { GetStaticPropsContext, GetStaticPropsResult } from "next";

import LpLayout from "@/components/LpLayout";
import TemplateListPage from "@/components/TemplateListPage";
import { extractContentMeta, ExtractContentMeta } from "@/lib/contentlayer";
import { getSidebarItems } from "@/lib/docs/getSidebarItems";
import { Locale, NavItem } from "@/types";
import { allTemplates, Template } from "contentlayer/generated";

type Props = {
  sidebarItems: NavItem[];
  templates: ExtractContentMeta<Template>[];
};

export default function TemplatesPage({ sidebarItems, templates }: Props) {
  return (
    <LpLayout sidebarItems={sidebarItems}>
      <TemplateListPage templates={templates} />
    </LpLayout>
  );
}

export async function getStaticProps({
  locale,
  defaultLocale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const sidebarItems = getSidebarItems(
    undefined,
    (locale ?? defaultLocale) as Locale
  );
  return {
    props: {
      sidebarItems,
      templates: allTemplates.map(extractContentMeta),
    },
  };
}
