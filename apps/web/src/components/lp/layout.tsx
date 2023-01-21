import CollapsibleNavigation from "@/components/CollapsibleNav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavItem } from "@/types";

import styles from "./layout.module.scss";

type Props = {
  sidebarItems: NavItem[];
  children: React.ReactNode;
};

export default function LpLayout({ sidebarItems, children }: Props) {
  return (
    <div className={styles.background}>
      <Header
        menuContent={() => <CollapsibleNavigation items={sidebarItems} />}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
