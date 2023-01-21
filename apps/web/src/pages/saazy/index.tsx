import { GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";

import LpLayout from "@/components/lp/layout";
import SaazyPage from "@/components/saazy/page";
import { getSidebarItems } from "@/lib/docs/getSidebarItems";
import { Locale, NavItem } from "@/types";

type Props = {
  sidebarItems: NavItem[];
};

export default function _SaazyPage({ sidebarItems }: Props) {
  return (
    <LpLayout sidebarItems={sidebarItems}>
      <NextSeo title="Pages of Saazy" />
      <SaazyPage />
    </LpLayout>
  );
}

export async function getStaticProps({
  locale,
  defaultLocale,
}: GetStaticPropsContext) {
  const sidebarItems = getSidebarItems(
    undefined,
    (locale ?? defaultLocale) as Locale
  );
  return {
    props: {
      sidebarItems,
    },
  };
}
