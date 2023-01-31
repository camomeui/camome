import { FireIcon } from "@heroicons/react/20/solid";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

import { type SvgComponent } from "@camome/utils";
import { createPolymorphicComponent } from "src/utils/createPolymorphicComponent";

import styles from "./styles.module.scss";

type Status = "success" | "info" | "danger" | "warn";

export type MessageProps = {
  status?: "success" | "info" | "danger" | "warn";
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

const statusTitleMap: { [S in Status]: string } = {
  success: "Success",
  info: "Info",
  warn: "Caution",
  danger: "Danger",
};

const _Message = React.forwardRef<HTMLDivElement, MessageProps>(
  (
    {
      status = "info",
      title,
      icon,
      isAlert = false,
      children,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const titleId = React.useId();
    const DefaultIcon = statusIconMap[status];
    return (
      <div
        role={isAlert ? "alert" : undefined}
        className={clsx(styles.Block, styles[`--${status}`], className)}
        ref={forwardedRef}
        {...props}
      >
        <span className={styles.icon}>{icon ? icon : <DefaultIcon />}</span>
        {title && (
          <div className={clsx(styles.title)} id={titleId}>
            {statusTitleMap[status]}
          </div>
        )}
        {children && <div className={styles.message}>{children}</div>}
      </div>
    );
  }
);

_Message.displayName = "Message";

export const Message = createPolymorphicComponent<"div", MessageProps>(
  _Message
);
