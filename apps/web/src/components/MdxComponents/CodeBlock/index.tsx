import clsx from "clsx";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";
import React from "react";
import { hydrateRoot } from "react-dom/client";

import styles from "./styles.module.scss";

export type CodeBlockProps = {
  language: string;
  code: string;
  html?: string;
  css?: string;
  bundlePath?: string;
  layout?: "centered" | "padded";
  className?: string;
};

export default function CodeBlock({
  language,
  code,
  html,
  css,
  bundlePath,
  layout = "centered",
  className,
}: CodeBlockProps) {
  const live = html && css;
  const initRef = React.useRef(false);
  const previewContainerRef = React.useRef<HTMLDivElement>(null!);

  React.useEffect(() => {
    if (!live || !bundlePath || initRef.current) return;
    initRef.current = true;
    (async () => {
      const { default: Bundle } = await import(
        `@/public/stories/bundles/${bundlePath}`
      );
      hydrateRoot(previewContainerRef.current, <Bundle />);
    })();
  }, [bundlePath, live]);

  const codeBlock = (
    <Highlight
      {...defaultProps}
      theme={github}
      code={code?.replace(/\n$/, "") ?? ""}
      language={language as Language}
    >
      {({ tokens, getLineProps, getTokenProps, className: _class }) => {
        return (
          <pre className={clsx(_class, live && styles["pre--live"], className)}>
            <code
              className={clsx(
                className,
                styles["code"],
                live && styles["code--live"],
                "scrollbar"
              )}
            >
              {tokens.map((line, i) => {
                const { ...lineProps } = getLineProps({ line, key: i });
                return (
                  <div key={i} {...lineProps}>
                    {line.map((token, key) => {
                      const { ...tokenProps } = getTokenProps({
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
        <style jsx global>{`
          ${css}
        `}</style>
        <div>
          <div
            className={clsx(
              styles.preview,
              styles[`preview--${layout}`],
              "no-markup"
            )}
          >
            <div
              ref={previewContainerRef}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          {codeBlock}
        </div>
      </>
    );
  }

  return codeBlock;
}
