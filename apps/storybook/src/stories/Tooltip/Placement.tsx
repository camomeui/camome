import { Button, Tooltip } from "@camome/core";

import styles from "./styles.module.scss";

export default function Placement() {
  return (
    <div className={styles.placement__container}>
      <Tooltip title="Top" placement="top" className={styles.placement__top}>
        <Button size="sm">Top</Button>
      </Tooltip>
      <Tooltip
        title="Right"
        placement="right"
        className={styles.placement__right}
      >
        <Button size="sm">Right</Button>
      </Tooltip>
      <Tooltip
        title="Bottom"
        placement="bottom"
        className={styles.placement__bottom}
      >
        <Button size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip title="Left" placement="left" className={styles.placement__left}>
        <Button size="sm">Left</Button>
      </Tooltip>
    </div>
  );
}
