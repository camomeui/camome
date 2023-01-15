import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

export const menuClassNames = {
  menu: styles.Block,
  item: styles.item,
  itemActive: styles["item--active"],
  group: styles.group,
  divider: styles.divider,
};

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type MenuItemProps = {
  active?: boolean;
} & BaseProps;

// TODO: Could be <a/> tag?
const MenuItem = ({ active, className, ...props }: MenuItemProps) => {
  return (
    <button
      className={clsx(styles.item, active && styles["item--active"], className)}
      {...props}
    />
  );
};

const MenuGroup = ({ className, ...props }: BaseProps) => {
  return <div className={clsx(styles.group, className)} {...props} />;
};

const MenuDivider = ({ className, ...props }: BaseProps) => {
  return <div className={clsx(styles.divider, className)} {...props} />;
};

export const Menu = ({ className, ...props }: BaseProps) => {
  return <div className={clsx(styles.Block, className)} {...props} />;
};

Menu.Item = MenuItem;
Menu.Group = MenuGroup;
Menu.Divider = MenuDivider;
