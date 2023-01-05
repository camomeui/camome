import clsx from "clsx";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";
import React from "react";

import styles from "./styles.module.scss";

export type CodeBlockProps = {
  language: string;
  code: string;
  classNames?: {
    pre?: string;
    code?: string;
  };
};

export default function CodeBlock({
  language,
  code,
  classNames,
}: CodeBlockProps) {
  return (
    <Highlight
      {...defaultProps}
      theme={github}
      code={code?.replace(/\n$/, "") ?? ""}
      language={language as Language}
    >
      {({ tokens, getLineProps, getTokenProps, className: _class }) => {
        return (
          <pre className={clsx(_class, classNames?.pre)}>
            <code
              className={clsx(styles["code"], "scrollbar", classNames?.code)}
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
}
