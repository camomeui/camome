import { Message } from "@camome/core/Message";

import styles from "./styles.module.scss";

export default function Variant() {
  return (
    <div className={styles.variant__container}>
      <Message status="success" title="Success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
      <Message status="info" title="Info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
      <Message status="warn" title="Caution">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
      <Message status="danger" title="Error">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
    </div>
  );
}
