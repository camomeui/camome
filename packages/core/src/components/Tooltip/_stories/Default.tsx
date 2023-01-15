import { Button } from "@camome/core/Button";
import { Tooltip } from "@camome/core/Tooltip";

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
