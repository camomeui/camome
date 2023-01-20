import { Message } from "@camome/core/Message";

import styles from "./styles.module.scss";

export default function WithoutTitle() {
  return (
    <div className={styles.variant__container}>
      <Message status="success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
      <Message status="info" title="Custom info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
      <Message status="warn" aria-label="Custom warn" hideTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
    </div>
  );
}
