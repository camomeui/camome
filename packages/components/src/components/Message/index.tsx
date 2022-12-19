import { FireIcon } from "@heroicons/react/20/solid";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

import { type SvgComponent } from "@camome/utils";

import styles from "./styles.module.scss";

type Status = "success" | "info" | "danger" | "warn";

export type MessageProps = {
  status?: Status;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  isAlert?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const statusIconMap: { [S in Status]: SvgComponent } = {
  success: CheckCircleIcon,
  info: InformationCircleIcon,
  warn: ExclamationTriangleIcon,
  danger: FireIcon,
};

export function Message({
  status = "info",
  title,
  icon,
  isAlert = false,
  children,
  className,
}: MessageProps) {
  const DefaultIcon = statusIconMap[status];
  const Tag = isAlert ? "div" : "aside";
  return (
    <Tag
      role={isAlert ? "alert" : undefined}
      className={clsx(styles.Block, styles[`--${status}`], className)}
    >
      <span className={styles.icon}>{icon ? icon : <DefaultIcon />}</span>
      {title && <div className={clsx(styles.title)}>{title}</div>}
      {children && <div className={styles.message}>{children}</div>}
    </Tag>
  );
}
