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
  const containerRef = React.useRef<HTMLElement>(null!);
  return (
    <aside
      className={clsx(styles.Block, "scrollbar", className)}
      ref={containerRef}
    >
      <CollapsibleNavigation
        items={items}
        onClickLink={onClickLink}
        scrollContainer={containerRef}
      />
    </aside>
  );
}
