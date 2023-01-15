import clsx from "clsx";
import { forwardRef } from "react";

import styles from "./styles.module.scss";

export const tabClassNames = {
  tab: styles.Block,
  tabActive: styles["Block--active"],
  list: styles.list,
  panel: styles.panel,
  group: styles.group,
};

type TabApi = ReturnType<typeof forwardRef<HTMLButtonElement, TabProps>> & {
  Group: typeof TabGroup;
  List: typeof TabList;
  Panel: typeof TabPanel;
};

type BaseProps = {
  className?: string;
  children: React.ReactNode;
};

export type TabGroupProps = BaseProps;

function TabGroup({ children, className }: TabGroupProps) {
  return <div className={clsx(styles.group, className)}>{children}</div>;
}

type TabListProps = BaseProps;

function TabList({ children, className }: TabListProps) {
  return <div className={clsx(styles.list, className)}>{children}</div>;
}

export type TabPanelProps = BaseProps;

function TabPanel({ children, className }: TabPanelProps) {
  return <div className={clsx(styles.panel, className)}>{children}</div>;
}

type TabProps = { active?: boolean } & BaseProps;

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ active, children, className }, ref) => {
    return (
      <button
        className={clsx(
          styles.Block,
          active && styles["Block--active"],
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
) as TabApi;

Tab.displayName = "Tab";
Tab.Group = TabGroup;
Tab.List = TabList;
Tab.Panel = TabPanel;
