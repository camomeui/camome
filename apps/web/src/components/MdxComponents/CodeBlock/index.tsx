import clsx from "clsx";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";
import React from "react";
import { BiCheck, BiCopy } from "react-icons/bi";

import { Tooltip } from "@camome/components/Tooltip";

import styles from "./styles.module.scss";

export type CodeBlockProps = {
  code: string;
  language?: string;
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
  const codeRef = React.useRef<HTMLElement>(null!);
  const [shown, setShown] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [hasScrollbar, setHasScrollbar] = React.useState(false);

  const onEnter = () => {
    setShown(true);
  };

  const onExit = () => {
    if (!copied) setShown(false);
  };

  const onCopy = async () => {
    setCopied(true);
    await navigator.clipboard.writeText(code);
    setTimeout(() => {
      setCopied(false);
      setShown(false);
    }, 2000);
  };

  React.useLayoutEffect(() => {
    const rem = Number(
      window.getComputedStyle(document.body).fontSize.replace("px", "")
    );
    const codeHeight = codeRef.current.getBoundingClientRect().height;
    const childrenHeight = Array.from(codeRef.current.children).reduce(
      (acc, elm) => acc + elm.getBoundingClientRect().height,
      0
    );
    if (childrenHeight > codeHeight + rem * 2) {
      setHasScrollbar(true);
    }
  }, []);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className={styles.container}
    >
      {shown && (
        <Tooltip
          label={copied ? "Copied!" : "Copy"}
          className={styles["tooltip-wrap"]}
          style={{ translate: hasScrollbar ? "-0.6rem" : 0 }}
        >
          <button
            type="button"
            className={styles["copy-button"]}
            onClick={onCopy}
          >
            {copied ? <BiCheck /> : <BiCopy />}
          </button>
        </Tooltip>
      )}
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
                ref={codeRef}
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
    </div>
  );
}
