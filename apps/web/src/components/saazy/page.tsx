import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./page.module.scss";

const routes: { label: string; href: string; img: string }[] = [
  {
    href: "/",
    label: "Landing page",
    img: "lp.png",
  },
  {
    href: "/pricing",
    label: "Pricing",
    img: "pricing.png",
  },
  {
    href: "/blog",
    label: "Blog posts",
    img: "blog-posts.png",
  },
  {
    href: "/blog/example",
    label: "Blog example post",
    img: "blog-example-post.png",
  },
  {
    href: "/blog/tags",
    label: "Blog tags",
    img: "blog-tags.png",
  },
  {
    href: "/blog/tags/example-tag",
    label: "Blog example tag",
    img: "blog-example-tag.png",
  },
  {
    href: "/docs/introduction",
    label: "Docs",
    img: "docs.png",
  },
  {
    href: "/docs/components",
    label: "Components",
    img: "components.png",
  },
  {
    href: "/signup",
    label: "Sign up",
    img: "signup.png",
  },
  {
    href: "/signin",
    label: "Sign in",
    img: "signin.png",
  },
  {
    href: "/contact",
    label: "Contact",
    img: "contact.png",
  },
  {
    href: "/404",
    label: "404",
    img: "404.png",
  },
  {
    href: "/mdx-page",
    label: "MDX page",
    img: "mdx-page.png",
  },
];

export default function SaazyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All pages of Saazy</h1>
      <div className={styles.grid}>
        {routes.map(({ href, label, img }) => (
          <Link key={href} href={"/preview" + href} className={styles.card}>
            <div className={styles.card__img}>
              <Image
                src={"/preview-images/" + img}
                alt={"Scrennshot of " + label + " page"}
                fill
              />
            </div>
            <div className={styles.card__content}>
              <div className={styles.card__label}>{label}</div>
              <div className={styles.card__href}> {href}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
