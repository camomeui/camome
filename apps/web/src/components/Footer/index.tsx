import Link from "next/link";

import Logo from "@/components/Logo";

import styles from "./styles.module.scss";

const links: { href: string; label: string }[] = [
  {
    href: "/docs/guide/overview",
    label: "Docs",
  },
  {
    href: "/templates/saazy",
    label: "Templates",
  },
  {
    href: "https://github.com/camomeui/camome",
    label: "GitHub",
  },
  {
    href: "https://rubiq.vercel.app",
    label: "Author",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/">
            <Logo />
          </Link>
          <div className={styles.copyrights}>
            <small>© {new Date().getFullYear()} Matsura Yuma</small>
            <small>
              Images from{" "}
              <a
                href="https://unsplash.com/"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Unsplash
              </a>
            </small>
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.linkList}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
