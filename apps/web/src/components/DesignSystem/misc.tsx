import clsx from "clsx";

import { Sample } from "@/components/DesignSystem/common";
import { lightTheme } from "@camome/system";

import styles from "./styles.module.scss";

export function Shadows() {
  return (
    <div className={clsx(styles.sampleGrid, styles.col4)}>
      {Object.keys(lightTheme.shadow).map((token) => (
        <Sample tokens={["shadow", token]} labelFrom={"shadow"} key={token} />
      ))}
    </div>
  );
}

export function Radiuses() {
  return (
    <div className={clsx(styles.sampleGrid, styles.col4)}>
      {Object.keys(lightTheme.rounded).map((token) => (
        <Sample tokens={["rounded", token]} labelFrom={"rounded"} key={token} />
      ))}
    </div>
  );
}
