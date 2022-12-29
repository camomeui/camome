import Head from "next/head";
import React from "react";

import BuyButton from "@/components/common/BuyButton";

import styles from "./styles.module.scss";

export type CodeBlockProps = {
  html: string;
  styles: string;
  code: string;
};

export default function CodeBlock({ html, styles, code }: CodeBlockProps) {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <pre>
          <code>{code}</code>
        </pre>
        <pre>
          <code>{html}</code>
        </pre>
      </div>
    </>
  );
}
