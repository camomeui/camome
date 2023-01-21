import { GetStaticPropsContext } from "next";

import LpLayout from "@/components/lp/layout";
import RootPage from "@/components/lp/page";
import { getSidebarItems } from "@/lib/docs/getSidebarItems";
import { Locale, NavItem } from "@/types";

type Props = {
  sidebarItems: NavItem[];
};

export default function _RootPage({ sidebarItems }: Props) {
  return (
    <LpLayout sidebarItems={sidebarItems}>
      <RootPage />
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
