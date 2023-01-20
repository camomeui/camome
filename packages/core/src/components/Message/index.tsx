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
  status?: "success" | "info" | "danger" | "warn";
  title?: React.ReactNode;
  icon?: React.ReactNode;
  isAlert?: boolean;
  children?: React.ReactNode;
  className?: string;
  hideTitle?: boolean;
  "aria-label"?: string;
};

const statusIconMap: { [S in Status]: SvgComponent } = {
  success: CheckCircleIcon,
  info: InformationCircleIcon,
  warn: ExclamationTriangleIcon,
  danger: FireIcon,
};

const statusTitleMap: { [S in Status]: string } = {
  success: "Success",
  info: "Info",
  warn: "Warn",
  danger: "danger",
};

export function Message({
  status = "info",
  title,
  icon,
  isAlert = false,
  children,
  className,
  hideTitle = false,
  ...props
}: MessageProps) {
  const titleId = React.useId();
  const DefaultIcon = statusIconMap[status];
  const Element = isAlert ? "div" : "aside";
  return (
    <Element
      role={isAlert ? "alert" : undefined}
      className={clsx(styles.Block, styles[`--${status}`], className)}
      // One of the aria-* must be supplied when !isAlert.
      // hideTitle ? aria-label : titleId
      // https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI
      aria-label={props["aria-label"]}
      aria-labelledby={hideTitle ? undefined : titleId}
    >
      <span className={styles.icon}>{icon ? icon : <DefaultIcon />}</span>
      {!hideTitle && (
        <div className={clsx(styles.title)} id={titleId}>
          {title ?? statusTitleMap[status]}
        </div>
      )}
      {children && <div className={styles.message}>{children}</div>}
    </Element>
  );
}
