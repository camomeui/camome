import { NextPage } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "./layout.module.scss";

export default function LpLayout(page: NextPage) {
  return (
    <div className={styles.background}>
      <Header />
      {/* @ts-ignore */}
      <main>{page}</main>
      <Footer />
    </div>
  );
}
