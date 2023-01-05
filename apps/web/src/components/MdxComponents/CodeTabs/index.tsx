import CodeBlock from "@/components/MdxComponents/CodeBlock";
import Tabs from "@/components/Tabs";

import styles from "./styles.module.scss";

type CodeTabsProps = {
  items: {
    name: string;
    code: string;
    language?: string;
  }[];
};

export default function CodeTabs({ items }: CodeTabsProps) {
  return (
    <Tabs
      items={items.map(({ name, code, language }) => ({
        id: name,
        label: name,
        panel: (
          <CodeBlock
            code={code}
            language={language}
            classNames={{ pre: styles.pre, code: styles.code }}
          />
        ),
      }))}
      defaultIndex={0}
      className={styles.container}
    />
  );
}
