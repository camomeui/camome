import { FireIcon } from "@heroicons/react/20/solid";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

import { type SvgComponent } from "@camome/utils";

import { BaseProps, PolymorphicProps } from "../../types";
import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";

import styles from "./styles.module.scss";

type Status = "success" | "info" | "danger" | "warn";

export type MessageProps = {
  status?: "success" | "info" | "danger" | "warn";
  title?: React.ReactNode;
  icon?: React.ReactNode;
  isAlert?: boolean;
  children?: React.ReactNode;
} & BaseProps;

const statusIconMap: { [S in Status]: SvgComponent } = {
  success: CheckCircleIcon,
  info: InformationCircleIcon,
  warn: ExclamationTriangleIcon,
  danger: FireIcon,
};

const _Message = React.forwardRef<
  HTMLDivElement,
  MessageProps & PolymorphicProps
>(
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
            {title}
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
