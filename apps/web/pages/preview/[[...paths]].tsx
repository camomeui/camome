import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import React from "react";

import DemoTemplatePage from "@/components/preview/page";

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const paths = params?.paths as string[] | undefined;
  return {
    props: {
      params: {
        path: paths ? paths.join("/") : "/",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function PreviewPage({ params }: PageProps) {
  return (
    <>
      <NextSeo title="Live preview" />
      <DemoTemplatePage
        params={{
          path: params.path,
        }}
      />
    </>
  );
}
