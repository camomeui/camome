import { useFloating, flip, offset, autoUpdate } from "@floating-ui/react";
import { Tab, Menu, Dialog } from "@headlessui/react";
import clsx from "clsx";
import Highlight, { defaultProps, type Language } from "prism-react-renderer";
import React from "react";
import { useForm } from "react-hook-form";
import { LiveProvider, LiveError, LivePreview } from "react-live";

import { sharedComponents } from "@/components/MdxComponents/shared";
import {
  BrowserOnly,
  useIsBrowser,
  tabClassNames,
  menuClassNames,
  dialogClassNames,
} from "@camome/components";

import styles from "./styles.module.scss";

const scope = {
  HeadlessTab: Tab,
  HeadlessMenu: Menu,
  HeadlessDialog: Dialog,
  clsx,
  Floating: { useFloating, flip, offset, autoUpdate },
  tabClassNames,
  menuClassNames,
  dialogClassNames,
  useForm,
  ...sharedComponents,
};

// TODO: improve the looking
function LivePreviewLoader() {
  return <div>Loading...</div>;
}

type PreviewProps = {
  direction: CodeBlockProps["direction"];
};

function Preview({ direction = "horizontal" }: PreviewProps) {
  // No SSR for the live preview
  // See https://github.com/facebook/docusaurus/issues/5747
  return (
    <BrowserOnly fallback={<LivePreviewLoader />}>
      {() => (
        <>
          <LivePreview
            className={clsx(styles[`preview--${direction}`], "no-markup")}
          />
          <LiveError />
        </>
      )}
    </BrowserOnly>
  );
}

export type CodeBlockProps = {
  children: string;
  className?: string;
  live?: boolean;
  direction?: "horizontal" | "vertical";
};

export default function CodeBlock({
  live,
  direction,
  children,
  className = "",
}: CodeBlockProps) {
  const language = className.replace(/language-/, "") as Language;
  const isBrowser = useIsBrowser();
  const code = children.replace(/\n$/, "");

  const codeBlock = (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      key={String(isBrowser)}
    >
      {({ tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={clsx(live && styles["pre--live"])}>
            <code
              className={clsx(
                className,
                live && styles["code--live"],
                "scrollbar"
              )}
            >
              {tokens.map((line, i) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { style, ...lineProps } = getLineProps({ line, key: i });
                return (
                  <div key={i} {...lineProps}>
                    {line.map((token, key) => {
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      const { style, ...tokenProps } = getTokenProps({
                        token,
                        key,
                      });
                      return <span key={key} {...tokenProps} />;
                    })}
                  </div>
                );
              })}
            </code>
          </pre>
        );
      }}
    </Highlight>
  );

  if (live) {
    return (
      <>
        <LiveProvider code={code} scope={scope}>
          <Preview direction={direction} />
        </LiveProvider>
        {codeBlock}
      </>
    );
  }

  return codeBlock;
}
