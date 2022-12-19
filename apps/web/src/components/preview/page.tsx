import clsx from "clsx";
import React from "react";

import PreviewHeader from "@/components/preview/Header";
import { buildPreviewUrl } from "@/lib/buildPreviewUrl";

import styles from "./page.module.scss";

type PageProps = {
  params: Params;
};

type Params = {
  path: string;
};

export default function DemoTemplatePage({ params }: PageProps) {
  const [device, setDevice] = React.useState<"phone" | "desktop">("desktop");
  const [isHeaderHidden, setIsHeaderHidden] = React.useState(false);
  return (
    <>
      <PreviewHeader
        setDevice={setDevice}
        isHidden={isHeaderHidden}
        onClickClose={() => {
          setIsHeaderHidden(true);
          setDevice("desktop");
        }}
      />
      <iframe
        src={buildPreviewUrl(params.path)}
        className={clsx(
          styles.base,
          device === "desktop" ? styles.desktop : styles.phone,
          isHeaderHidden && styles.headerHidden
        )}
      />
    </>
  );
}
