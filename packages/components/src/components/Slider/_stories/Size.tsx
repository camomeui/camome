import { Slider } from "@camome/components/Slider";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <Slider aria-label="Volume" size="sm" />
      <Slider aria-label="Volume" size="md" />
      <Slider aria-label="Volume" size="lg" />
    </div>
  );
}
