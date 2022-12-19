import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

export const menuClassNames = {
  menu: styles.Block,
  item: styles.item,
  itemActive: styles["item--active"],
  label: styles.label,
  divider: styles.divider,
};

type MenuApi = React.FC<BaseProps> & {
  Item: typeof MenuItem;
  Label: typeof MenuLabel;
  Divider: typeof MenuDivider;
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

const MenuLabel = ({ className, ...props }: BaseProps) => {
  return <div className={clsx(styles.label, className)} {...props} />;
};

const MenuDivider = ({ className, ...props }: BaseProps) => {
  return <div className={clsx(styles.divider, className)} {...props} />;
};

export const Menu = (({ className, ...props }: BaseProps) => {
  return <div className={clsx(styles.Block, className)} {...props} />;
}) as MenuApi;

Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Divider = MenuDivider;
