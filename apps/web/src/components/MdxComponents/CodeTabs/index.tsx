import clsx from "clsx";

import CodeBlock from "@/components/MdxComponents/CodeBlock";
import Tabs from "@/components/Tabs";

import styles from "./styles.module.scss";

export type CodeTabsProps = {
  items: {
    name: string;
    code: string;
    language?: string;
  }[];
  classNames?: {
    tabs?: string;
    codeBlock?: { pre?: string; code?: string };
  };
};

export default function CodeTabs({ items, classNames }: CodeTabsProps) {
  return (
    <Tabs
      items={items.map(({ name, code, language }) => ({
        id: name,
        label: name,
        panel: (
          <CodeBlock
            code={code}
            language={language}
            classNames={{
              pre: clsx(styles.pre, classNames?.codeBlock?.pre),
              code: clsx(styles.code, classNames?.codeBlock?.code),
            }}
            omitSvg
          />
        ),
      }))}
      defaultIndex={0}
      className={clsx(styles.container, classNames?.tabs)}
    />
  );
}
