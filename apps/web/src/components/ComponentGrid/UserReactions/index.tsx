import React from "react";

import { Avatar } from "@camome/core/Avatar";
import { AvatarGroup } from "@camome/core/AvatarGroup";
import { Tag } from "@camome/core/Tag";

import styles from "./styles.module.scss";

export default function UserReactions() {
  return (
    <section className={styles.container}>
      <div className={styles.reactions}>
        <Tag variant="outline" colorScheme="neutral">
          🎉 4
        </Tag>
        <Tag variant="outline" colorScheme="neutral">
          👍 5
        </Tag>
        <Tag variant="outline" colorScheme="neutral">
          😸 8
        </Tag>
        <Tag variant="outline" colorScheme="neutral">
          😀 3
        </Tag>
        <Tag variant="outline" colorScheme="neutral">
          🙌 2
        </Tag>
      </div>
      <div className={styles.users}>
        <AvatarGroup>
          <Avatar src="/demo/avatar-1.jpg" alt="avatar" size="sm" />
          <Avatar src="/demo/avatar-2.jpg" alt="avatar" size="sm" />
          <Avatar src="/demo/avatar-3.jpg" alt="avatar" size="sm" />
          <Avatar size="sm" variant="solid">
            YM
          </Avatar>
          <Avatar size="sm" variant="solid" colorScheme="neutral">
            +12
          </Avatar>
        </AvatarGroup>
        <span className={styles.users__label}>16 people reacted</span>
      </div>
    </section>
  );
}
