import { Button } from "@camome/components/Button";
import { Tooltip } from "@camome/components/Tooltip";

import styles from "./styles.module.scss";

export default function Placement() {
  return (
    <div className={styles.placement__container}>
      <Tooltip label="Top" placement="top" className={styles.placement__top}>
        <Button size="sm">Top</Button>
      </Tooltip>
      <Tooltip
        label="Right"
        placement="right"
        className={styles.placement__right}
      >
        <Button size="sm">Right</Button>
      </Tooltip>
      <Tooltip
        label="Bottom"
        placement="bottom"
        className={styles.placement__bottom}
      >
        <Button size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip label="Left" placement="left" className={styles.placement__left}>
        <Button size="sm">Left</Button>
      </Tooltip>
    </div>
  );
}
