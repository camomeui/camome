import React from "react";

import { BaseProps } from "src/types";

import styles from "./styles.module.scss";

type Props = {
  children?: React.ReactNode;
} & BaseProps;

export function AvatarGroup({ children }: Props) {
  return <div className={styles.Block}>{children}</div>;
}
