import { DefaultSeo as DefaultNextSeo, type DefaultSeoProps } from "next-seo";

const DefaultSeoConfig: DefaultSeoProps = {
  defaultTitle: `Camome UI`,
  titleTemplate: `%s | Camome UI`,
  description: "Light weight, accessible UI framework for React and CSS.",
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
