import { NextSeo } from "next-seo";
import React from "react";

import LpLayout from "@/components/lp/layout";
import SaazyPage from "@/components/saazy/page";

export default function _SaazyPage() {
  return (
    <>
      <NextSeo title="Pages of Saazy" />
      <SaazyPage />
    </>
  );
}

_SaazyPage.getLayout = LpLayout;
