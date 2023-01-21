import React from "react";

import type { NavItem } from "@/types";

import CollapsibleNavigation from "@/components/CollapsibleNav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import styles from "./styles.module.scss";

type Props = {
  sidebarItems: NavItem[];
  children: React.ReactNode;
};

export default function DocsLayout({ sidebarItems, children }: Props) {
  return (
    <div className={styles.Block}>
      <Header
        classNames={{ block: styles.header, inner: styles.headerInner }}
        menuContent={({ close }) => (
          <CollapsibleNavigation items={sidebarItems} onClickLink={close} />
        )}
      />
      <main className={styles.main}>
        <Sidebar items={sidebarItems} className={styles.sidebarDesktop} />
        {children}
      </main>
      <Footer />
    </div>
  );
}
