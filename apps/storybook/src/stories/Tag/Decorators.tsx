import LinkIcon from "@heroicons/react/24/outline/LinkIcon";
import WifiIcon from "@heroicons/react/24/outline/WifiIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";

import { Avatar } from "@camome/core/Avatar";
import { IconButton } from "@camome/core/IconButton";
import { Tag } from "@camome/core/Tag";

import styles from "./styles.module.scss";

export default function Decorators() {
  return (
    <div className={styles.container}>
      <Tag
        component="a"
        href="#"
        size="md"
        startDecorator={<LinkIcon strokeWidth="2.5" />}
      >
        Website
      </Tag>
      <Tag
        size="md"
        variant="solid"
        startDecorator={<WifiIcon strokeWidth="2.2" />}
      >
        Online
      </Tag>
      <Tag
        size="md"
        colorScheme="success"
        endDecorator={
          <IconButton variant="ghost" colorScheme="success" aria-label="Delete">
            <XMarkIcon strokeWidth="2" />
          </IconButton>
        }
        className={styles["with-close"]}
      >
        Next.js
      </Tag>
      <Tag
        size="md"
        startDecorator={
          <Avatar size="sm" src="https://i.imgur.com/isPfQ2E.jpg" alt="Alt" />
        }
        className={styles["with-avatar"]}
      >
        Jean Doe
      </Tag>
    </div>
  );
}
