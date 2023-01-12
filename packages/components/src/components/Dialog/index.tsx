import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";

import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";
import { IconButton } from "../IconButton";

import styles from "./styles.module.scss";

export const dialogClassNames = {
  container: styles.Block,
  backdrop: styles.backdrop,
  panelWrapper: styles["panel-wrapper"],
  panel: styles.panel,
  title: styles.title,
  content: styles.content,
  close: styles.close,
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogBackdrop = ({ className, ...props }: BaseProps) => {
  return (
    <div className={clsx(styles.backdrop, className)} aria-hidden {...props} />
  );
};

const DialogPanelWrapper = ({ className, ...props }: BaseProps) => {
  return (
    <div className={clsx(styles["panel-wrapper"], className)} {...props} />
  );
};

const DialogPanel = ({ className, ...props }: BaseProps) => {
  return <div className={clsx(styles.panel, className)} {...props} />;
};

const DialogTitle = ({ className, ...props }: BaseProps) => {
  return <h2 className={clsx(styles.title, className)} {...props} />;
};

const DialogContent = ({ className, ...props }: BaseProps) => {
  return <div className={clsx(styles.content, className)} {...props} />;
};

const _DialogClose = React.forwardRef<HTMLButtonElement, BaseProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <IconButton
        aria-label="Close"
        className={clsx(styles.close, className)}
        variant="ghost"
        colorScheme="neutral"
        ref={forwardedRef}
        {...props}
      >
        <XMarkIcon />
      </IconButton>
    );
  }
);

_DialogClose.displayName = "DialogClose";
const DialogClose = createPolymorphicComponent<"button", BaseProps>(
  _DialogClose
);

export const Dialog = ({ className, ...props }: BaseProps) => {
  return <div className={clsx(styles.Block, className)} {...props} />;
};

Dialog.Backdrop = DialogBackdrop;
Dialog.PanelWrapper = DialogPanelWrapper;
Dialog.Panel = DialogPanel;
Dialog.Title = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Close = DialogClose;
