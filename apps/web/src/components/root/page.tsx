import {
  ChevronDoubleRightIcon,
  SparklesIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbBrandCss3 } from "react-icons/tb";
import Balancer from "react-wrap-balancer";

import ComponentGrid from "@/components/ComponentGrid";
import Cta from "@/components/Cta";
import CodeSandbox from "@/components/MdxComponents/CodeSandbox";
import OverrideDemo from "@/components/OverrideDemo";
import CardDemo from "@/docs-data/demo/marketing/Card";
import { Button } from "@camome/core/Button";

import styles from "./page.module.scss";

const CustomThemeSandbox = dynamic(import("@/components/CustomThemeSandbox"));

export default function RootPage() {
  const { t } = useTranslation("root");

  const features: {
    title: string;
    icon: React.ReactNode;
    description: string;
  }[] = [
    {
      title: t("features.themable.title"),
      description: t("features.themable.description"),
      icon: <SwatchIcon />,
    },
    {
      title: t("features.no-runtime.title"),
      description: t("features.no-runtime.description"),
      icon: <TbBrandCss3 />,
    },
    {
      title: t("features.design.title"),
      description: t("features.design.description"),
      icon: <SparklesIcon />,
    },
  ];

  return (
    <div className={styles.container}>
      <section id="hero" className={styles.hero}>
        <div className={styles.headingBlock}>
          <div className={styles.topHeading}>
            <Balancer>{t("hero.heading.0")}</Balancer>
            <Balancer>{t("hero.heading.1")}</Balancer>
          </div>
          <p className={styles.topSubheading}>
            <Balancer>{t("hero.subheading")}</Balancer>
          </p>
          <div className={styles.buttons}>
            <Button
              component={Link}
              href="/docs/guide/overview"
              rightIcon={<ChevronDoubleRightIcon strokeWidth="2" />}
              size="lg"
            >
              {t("button.get-started")}
            </Button>
            <Button
              component="a"
              href="https://github.com/camomeui/camome"
              variant="soft"
              colorScheme="neutral"
              size="lg"
              className={styles.githubLink}
              leftIcon={<FaGithub />}
            >
              {t("button.github")}
            </Button>
          </div>
        </div>
        <ComponentGrid
          classNames={{
            container: styles.componentGrid,
            inner: styles.componentGridInner,
          }}
        />
      </section>

      <section id="features" className={styles.featureSection}>
        <div className={styles.featList}>
          {features.map(({ title, description, icon }) => (
            <div key={title} className={styles.feat}>
              <div className={styles.feat__icon}>{icon}</div>
              <h3 className={styles.feat__title}>{title}</h3>
              <p className={styles.feat__description}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="styling" className={styles.styling}>
        <h2 className={styles.styling__heading}>
          <Balancer>{t("styling.heading")}</Balancer>
        </h2>
        <p className={styles.styling__description}>
          <Balancer>{t("styling.subheading")}</Balancer>
        </p>
        <CodeSandbox
          {...CardDemo}
          showCode={{ react: true }}
          extraCode={[
            {
              code: cardScss,
              name: "Card.module.scss",
              language: "scss",
            },
          ]}
          classNames={{
            container: styles.styling__sandbox,
            preview: styles.styling__preview,
          }}
        />
      </section>

      <section id="theming" className={styles.theming}>
        <div>
          <div className={styles.theming__group}>
            <div className={styles.theming__left}>
              <h2 className={styles.theming__heading}>
                {t("theming.heading")}
              </h2>
              <p className={styles.theming__description}>
                <Balancer>{t("theming.subheading")}</Balancer>
              </p>
            </div>
            <div className={styles.theming__right}>
              <Button
                component={Link}
                href="/docs/guide/theming"
                size="lg"
                variant="soft"
                rightIcon={<ChevronDoubleRightIcon />}
              >
                {t("theming.button")}
              </Button>
            </div>
          </div>
        </div>
        <CustomThemeSandbox className={styles.theming__sandbox} />
      </section>

      <section id="override" className={styles.override}>
        <div>
          <hgroup className={styles.override__heading}>
            <p>{t("override.heading.0")}</p>
            <p>
              {t("override.heading.1")} <code>!important</code>{" "}
              {t("override.heading.2")}
            </p>
          </hgroup>
          <p className={styles.override__description}>
            <Balancer>
              {t("override.subheading.0")}{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer">
                <code>@layer</code>
              </a>{" "}
              {t("override.subheading.1")}
            </Balancer>
          </p>
        </div>
        <OverrideDemo />
      </section>

      <div className={styles.cta}>
        <Cta />
      </div>
    </div>
  );
}

const cardScss = `.container {
  border: 1px solid var(--cmm-color-border-base);
  border-radius: var(--cmm-radius-lg);
  padding: 0.5rem;
  width: 20rem;
  display: grid;
  gap: 0.5rem;

  :root[data-theme="dark"] & {
    background: var(--cmm-color-surface-1);
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: var(--cmm-radius-sm);
}

.title {
  font-weight: var(--cmm-font-weight-bold);
}

.price {
  color: var(--cmm-color-primary-emphasis);
  font-weight: var(--cmm-font-weight-bold);
  font-size: var(--cmm-font-size-lg);
}

.small {
  color: var(--cmm-color-font-muted);
  font-size: var(--cmm-font-size-xs);
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  place-self: end;
  border-radius: var(--cmm-radius-full);
}
`;
