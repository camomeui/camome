import Image from "next/image";
import React from "react";

import { type SvgComponent } from "@camome/utils";

import styles from "./Tag.module.scss";

export type TagProps = {
  Icon?: SvgComponent;
  iconSrc?: string;
  iconAlt?: string;
  text: string;
};

export default function Tag({ Icon, iconSrc, iconAlt, text }: TagProps) {
  return (
    <span className={styles.container}>
      {Icon && <Icon className={styles.icon} />}
      {iconSrc && iconAlt && (
        <Image
          className={styles.icon}
          src={iconSrc}
          alt={iconAlt}
          width={16}
          height={16}
        />
      )}
      <span>{text}</span>
    </span>
  );
}
