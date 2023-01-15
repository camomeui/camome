import clsx from "clsx";
import React from "react";

import CodeTabs from "@/components/MdxComponents/CodeTabs";

import styles from "./styles.module.scss";

export type CodeSandboxProps = {
  Component: React.FC;
  react: string;
  html: string;
  css: string;
  bundlePath?: string;
  layout?: "centered" | "padded";
};

export default function CodeSandbox({
  Component,
  react,
  html,
  css,
  layout = "centered",
}: CodeSandboxProps) {
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
          <div className={styles.previewInner}>
            <Component />
          </div>
        </div>
        <CodeTabs
          items={[
            {
              name: "React",
              code: react,
              language: "tsx",
            },
            {
              name: "HTML",
              code: html,
              language: "html",
            },
          ]}
        />
      </div>
    </>
  );
}
