import { Button } from "@camome/components/Button";
import { Tooltip } from "@camome/components/Tooltip";

import styles from "./styles.module.scss";

export default function Placement() {
  return (
    <div className={styles.placement__container}>
      <Tooltip label="Top" placement="top">
        <Button size="sm">Top</Button>
      </Tooltip>
      <Tooltip label="Bottom" placement="bottom">
        <Button size="sm">Bottom</Button>
      </Tooltip>
    </div>
  );
}
