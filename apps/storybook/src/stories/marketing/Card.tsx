import { CalendarDaysIcon } from "@heroicons/react/24/outline";

import { Button } from "@camome/core/Button";
import { Tag } from "@camome/core/Tag";

import styles from "./Card.module.scss";

export default function Card() {
  return (
    <section className={styles.container}>
      <img
        src="/demo/okinawa-hotel.jpg"
        alt="Entrance of Sheraton Okinawa Sunmarina Resort, a hotel in Okinawa"
        className={styles.img}
      />
      <div className={styles.content}>
        <div className={styles.tags}>
          <Tag size="sm" colorScheme="success">
            30%OFF
          </Tag>
          <Tag size="sm" colorScheme="warn">
            2 rooms left
          </Tag>
        </div>
        <h3 className={styles.title}>Sheraton Okinawa Sunmarina Resort</h3>
        <div className={styles.row}>
          <div className={styles.priceWrap}>
            <small className={styles.small}>1 night, 2 adults</small>
            <p className={styles.price}>¥62,000</p>
          </div>
          <Button
            size="sm"
            endDecorator={<CalendarDaysIcon />}
            className={styles.button}
          >
            Book now
          </Button>
        </div>
      </div>
    </section>
  );
}
