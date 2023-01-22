import clsx from "clsx";
import React from "react";

import CodeTabs, { CodeTabsProps } from "@/components/MdxComponents/CodeTabs";

import styles from "./styles.module.scss";

export type CodeSandboxProps = {
  Component: React.FC;
  react: string;
  html: string;
  css: string;
  bundlePath?: string;
  showCode?:
    | false
    | {
        react?: boolean;
        html?: boolean;
        css?: boolean;
      };
  extraCode?: CodeTabsProps["items"];
  layout?: "centered" | "padded";
  orientation?: "vertical" | "horizontal";
  classNames?: {
    preview?: string;
    codeBlock?: {
      pre?: string;
      code?: string;
    };
  };
};

export default function CodeSandbox({
  Component,
  react,
  html,
  css,
  showCode = { html: true, react: true },
  extraCode = [],
  layout = "centered",
  orientation = "vertical",
  classNames,
}: CodeSandboxProps) {
  const codeItems: CodeTabsProps["items"] = [];
  if (showCode !== false) {
    if (showCode.react)
      codeItems.push({
        name: "React",
        code: react,
        language: "tsx",
      });
    if (showCode.html)
      codeItems.push({
        name: "HTML",
        code: html,
        language: "html",
      });
    if (showCode.css) {
      codeItems.push({
        name: "CSS",
        code: css,
        language: "css",
      });
    }
    codeItems.push(...extraCode);
  }

  return (
    <>
      <style jsx global>{`
        ${css}
      `}</style>
      <div
        className={clsx(
          styles.container,
          orientation === "horizontal"
            ? styles.container__horizontal
            : styles.container__vertical,
          classNames?.preview
        )}
      >
        <div
          className={clsx(
            styles.preview,
            styles[`preview--${layout}`],
            "no-markup",
            "scrollbar"
          )}
        >
          <div className={styles.previewInner}>
            <Component />
          </div>
        </div>
        {showCode && (
          <CodeTabs
            items={codeItems}
            classNames={{ codeBlock: classNames?.codeBlock }}
          />
        )}
      </div>
    </>
  );
}
