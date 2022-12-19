import clsx from "clsx";
import React from "react";

import CollapsibleNavigation from "@/components/CollapsibleNav";
import { NavItem } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  items: NavItem[];
  onClickLink?: () => void;
  className?: string;
};

export default function Sidebar({ items, onClickLink, className }: Props) {
  return (
    <aside className={clsx(styles.Block, "scrollbar", className)}>
      <CollapsibleNavigation items={items} onClickLink={onClickLink} />
    </aside>
  );
}
