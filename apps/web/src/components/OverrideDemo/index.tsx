import useTranslation from "next-translate/useTranslation";
import React from "react";
import undent from "undent";

import CodeBlock from "@/components/MdxComponents/CodeBlock";
import { Button } from "@camome/core/Button";

import styles from "./styles.module.scss";

export default function OverrideDemo() {
  const [overridden, setOverridden] = React.useState(false);
  const { t } = useTranslation("root");
  return (
    <section className={styles.container}>
      <div className={styles.preview}>
        <Button
          className={overridden ? styles.overridden : undefined}
          colorScheme="danger"
          size="lg"
          onClick={() => setOverridden((curr) => !curr)}
        >
          {overridden
            ? t("override.button.is-overridden")
            : t("override.button.is-default")}
        </Button>
      </div>
      <CodeBlock code={codeCss} language="css" />
    </section>
  );
}

const codeCss = undent`
.Button {
  border-radius: var(--cmm-radius-full);
  background: linear-gradient(
    to right,
    hsl(240deg 60% 40%) 0%,
    hsl(300deg 80% 40%) 100%
  );
}
`;
