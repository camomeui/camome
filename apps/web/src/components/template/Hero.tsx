import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import NextJsIcon from "@/assets/nextjs.svg";
import TypeScriptIcon from "@/assets/typescript.svg";
import BuyButton from "@/components/common/BuyButton";
import Tag, { TagProps } from "@/components/common/Tag";

import styles from "./Hero.module.scss";

import HeroPng from "@/public/hero-image.png";
import { Button, TextInput } from "@camome/core";

const tags: TagProps[] = [
  {
    Icon: NextJsIcon,
    text: "Next.js",
  },
  {
    Icon: TypeScriptIcon,
    text: "TypeScript",
  },
  {
    iconSrc: "/css-modules.png",
    iconAlt: "CSS Modules",
    text: "CSS Modules",
  },
  {
    Icon: CheckCircleIcon,
    text: "Blog",
  },
  {
    Icon: CheckCircleIcon,
    text: "Docs",
  },
  {
    Icon: CheckCircleIcon,
    text: "Pure HTML/CSS",
  },
];

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.texts}>
        <div className={styles.mainCopy}>
          <div>Simple.</div>
          <div>Beautiful.</div>
          <div>Versatile.</div>
        </div>
        <div className={styles.subCopy}>
          Clean components and templates hand-crafted for modern websites.
        </div>
      </div>
      <div className={styles.newsletter}>
        <p>Get notified when new templates are released.</p>
        <form action="/api/newsletter" method="POST">
          <TextInput
            type="email"
            name="email"
            required
            placeholder="address@example.com"
          />
          <Button style={{ backgroundColor: "var(--cmm-color-gray-5)" }}>
            Subscribe
          </Button>
        </form>
      </div>
      <div className={styles.card}>
        <Image src={HeroPng} alt="Components of Saazy" />
        <div className={styles.card__contents}>
          <ul className={styles.card__tags}>
            {tags.map((props) => (
              <Tag key={props.text} {...props} />
            ))}
          </ul>
          <h2>Saazy Template</h2>
          <p>
            Marketing template for SaaS, powered by Next.js or pure
            HTML/CSS/JavaScript.
          </p>
          <div className={styles.card__buttons}>
            <BuyButton />
            <Button component={Link} variant="soft" href="/saazy">
              Live preview
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
