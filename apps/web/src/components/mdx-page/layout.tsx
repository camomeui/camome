import { NextSeo } from "next-seo";
import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { formatDate } from "@/lib/fotmatDate";

import styles from "./layout.module.scss";

type ArticleMeta = {
  title: string;
  description?: string;
  updatedAt?: string;
};

type Props = {
  meta: ArticleMeta;
  children?: React.ReactNode;
};

export default function MdxPageLayout({
  meta: { title, description, updatedAt },
  children,
}: Props) {
  return (
    <>
      <NextSeo title={title} description={description} />
      <div className={styles.background}>
        <Header />
        <main className={styles.container}>
          <article>
            <header className={styles.header}>
              <h1 className={styles.title}>{title}</h1>
              {updatedAt && (
                <p className={styles.updatedAt}>
                  Last updated on {formatDate(updatedAt)}
                </p>
              )}
            </header>
            <div className={styles.content}>{children}</div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
