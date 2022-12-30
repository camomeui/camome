import clsx from "clsx";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";
import React from "react";

import { hash } from "@camome/utils";

import styles from "./styles.module.scss";

export type CodeBlockProps = {
  code: string;
  html?: string;
  css?: string;
  language: string;
  className?: string;
};

export default function CodeBlock({
  code,
  html,
  css,
  language,
  className,
}: CodeBlockProps) {
  const live = html && css;
  const codeBlock = (
    <Highlight
      {...defaultProps}
      theme={github}
      code={code?.replace(/\n$/, "") ?? ""}
      language={language as Language}
    >
      {({ tokens, getLineProps, getTokenProps, className, style }) => {
        return (
          <pre
            className={clsx(
              styles["pre"],
              live && styles["pre--live"],
              className
            )}
            style={style}
          >
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
            dangerouslySetInnerHTML={{ __html: html }}
            className={styles.preview}
          />
          {codeBlock}
        </div>
      </>
    );
  }

  return codeBlock;
}
