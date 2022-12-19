import { DefaultSeo as DefaultNextSeo, type DefaultSeoProps } from "next-seo";
import React from "react";

const DefaultSeoConfig: DefaultSeoProps = {
  defaultTitle: `Camome UI`,
  titleTemplate: `%s | Camome UI`,
  description:
    "Clean components and templates hand-crafted for modern websites.",
  twitter: {
    cardType: "summary_large_image",
  },
  openGraph: {
    images: [
      {
        url: process.env.NEXT_PUBLIC_BASE_URL + "/og.png",
      },
    ],
  },
};

export default function DefaultSeo() {
  return <DefaultNextSeo {...DefaultSeoConfig} />;
}
