import EllipsisHorizontalIcon from "@heroicons/react/24/outline/EllipsisHorizontalIcon";
import { RiUserAddLine } from "react-icons/ri";

import { Avatar } from "@camome/core/Avatar";
import { Button } from "@camome/core/Button";
import { IconButton } from "@camome/core/IconButton";
import { Tag } from "@camome/core/Tag";

import styles from "./styles.module.scss";

export default function CustomThemeDemo() {
  return (
    <section className={styles.container} id="custom-theme-demo-container">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Avatar
        src="/demo/avatar-1.jpg"
        alt="Avatar image"
        className={styles.avatar}
      />
      <div className={styles.right}>
        <div className={styles.row}>
          <h3 className={styles.name}>Jean Doe</h3>
          <span className={styles.id}>@jean_doe</span>
          <Tag size="sm">Pro</Tag>
        </div>
        <hr />
        <p className={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className={styles.buttons}>
          <Button size="sm" startDecorator={<RiUserAddLine />}>
            Follow
          </Button>
          <Button size="sm" variant="outline" colorScheme="neutral">
            Contact
          </Button>
          <IconButton aria-label="More" variant="ghost" size="sm">
            <EllipsisHorizontalIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
}
