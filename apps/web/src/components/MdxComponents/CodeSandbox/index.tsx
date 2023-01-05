import clsx from "clsx";
import React from "react";
import { hydrateRoot } from "react-dom/client";

import CodeBlock from "@/components/MdxComponents/CodeBlock";

import styles from "./styles.module.scss";

export type CodeSandboxProps = {
  language: string;
  code: string;
  html: string;
  css: string;
  bundlePath?: string;
  layout?: "centered" | "padded";
};

export default function CodeSandbox({
  language,
  code,
  html,
  css,
  bundlePath,
  layout = "centered",
}: CodeSandboxProps) {
  const initRef = React.useRef(false);
  const previewContainerRef = React.useRef<HTMLDivElement>(null!);

  React.useEffect(() => {
    if (!bundlePath || initRef.current) return;
    initRef.current = true;
    (async () => {
      const { default: Bundle } = await import(
        `@/public/stories/bundles/${bundlePath}`
      );
      hydrateRoot(previewContainerRef.current, <Bundle />);
    })();
  }, [bundlePath]);

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
        <CodeBlock
          code={code}
          language={language}
          classNames={{ pre: clsx(styles.pre), code: clsx(styles.code) }}
        />
      </div>
    </>
  );
}
