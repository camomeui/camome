import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { NextPage } from "next/types";

import type { AppProps } from "next/app";

import DefaultSeo from "@/components/common/DefaultSeo";

import "@/styles/globals.css";
import "@camome/system/style.min.css";

type GetLayout = (page: React.ReactElement) => React.ReactNode;
type NextPageWithLayout = NextPage & {
  getLayout?: GetLayout;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <DefaultSeo />
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "5eb6cf5006564d3ea3745a94d7764a80"}'
      />
      <ThemeProvider attribute="data-theme">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
