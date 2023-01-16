import { Tooltip, Button } from "@camome/core";

import styles from "./styles.module.scss";

export default function Default() {
  return (
    <div className={styles.default__container}>
      <Tooltip title="This is a tooltip" placement="top">
        <Button size="sm">Top</Button>
      </Tooltip>
    </div>
  );
}
