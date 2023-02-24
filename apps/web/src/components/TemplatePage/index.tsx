import clsx from "clsx";
import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import MdxRenderer from "@/components/MdxRenderer";
import { Button } from "@camome/core/Button";
import { Markup } from "@camome/core/Markup";
import { type Template } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  template: Template;
};

export default function TemplatePage({ template }: Props) {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.container}>
      <section className={clsx(styles.screenshots, "scrollbar")}>
        {template.screenshots?.map((src, i) => (
          <div key={src} className={styles.imgWrap}>
            <Image
              src={src}
              alt={`Screenshot of ${template.name}`}
              fill
              priority={i < 2}
            />
          </div>
        ))}
      </section>
      <section>
        <header className={styles.header}>
          <h1 className={styles.name}>{template.name}</h1>
          <p className={styles.author}>
            <span className={styles.author__prefix}>By</span>
            <span className={styles.author__name}>{template.author}</span>
          </p>
          <p className={styles.description}>{template.description}</p>
          <div className={styles.techStacks}>
            {mounted &&
              template.techStack?.map(({ src, srcDark, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={resolvedTheme === "dark" && srcDark ? srcDark : src}
                  alt={alt}
                />
              ))}
          </div>
          <div className={styles.buttons}>
            <Button
              component="a"
              href={template.getUrl}
              endDecorator={<FiArrowUpRight strokeWidth="2.2" />}
              rel="noreferrer noopener"
            >
              {template.price ? `Buy for ${template.price}` : `Get for free`}
            </Button>
            <Button
              component="a"
              href={template.demoUrl}
              variant="soft"
              endDecorator={<FiArrowUpRight strokeWidth="2.2" />}
              rel="noreferrer noopener"
              target="_blank"
            >
              Live demo
            </Button>
          </div>
        </header>
        <Markup className={styles.markup}>
          <MdxRenderer code={template.body.code} />
        </Markup>
      </section>
    </div>
  );
}
