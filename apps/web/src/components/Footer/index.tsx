import Link from "next/link";
import React from "react";

import LogoSvg from "@/assets/logo.svg";

import styles from "./styles.module.scss";

type NavSection = {
  section: string;
  links: {
    href: string;
    label: string;
  }[];
};

const navSections: NavSection[] = [
  {
    section: "Product",
    links: [
      {
        href: "/",
        label: "Home",
      },
      {
        href: "/preview",
        label: "Saazy",
      },
    ],
  },
  {
    section: "Support",
    links: [
      {
        href: "/preview/docs/introduction",
        label: "Docs",
      },
      {
        href: "/preview/docs/support/faq",
        label: "FAQ",
      },
      {
        href: "/preview/docs/support/contact",
        label: "Contact",
      },
    ],
  },
  {
    section: "Legal",
    links: [
      {
        href: "/privacy-policy",
        label: "Privacy Policy",
      },
    ],
  },
  {
    section: "Social",
    links: [
      {
        href: "https://twitter.com/MatsuraYuma",
        label: "Twitter",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.description}>
          <div className={styles.description__logo}>
            <LogoSvg />
          </div>
          <p className={styles.description__text}>Made by Matsura Yuma</p>
        </div>
        <nav className={styles.navGrid}>
          {navSections.map((navItem) => (
            <div key={navItem.section} className={styles.navGrid__section}>
              <h2>{navItem.section}</h2>
              <ul>
                {navItem.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
