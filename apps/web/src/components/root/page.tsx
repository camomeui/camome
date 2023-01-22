import {
  ChevronDoubleRightIcon,
  SparklesIcon,
  Square2StackIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { TbBrandCss3 } from "react-icons/tb";

import CustomThemeSandbox from "@/components/CustomThemePlayground";
import CodeSandbox from "@/components/MdxComponents/CodeSandbox";
import CardDemo from "@/docs-data/demo/marketing/Card";
import MenuAndButtonDemo from "@/docs-data/demo/marketing/MenuAndButton";

import styles from "./page.module.scss";

import { Button } from "@camome/core/Button";

export default function RootPage() {
  return (
    <div className={styles.container}>
      <section id="hero">
        <div className={styles.headingBlock}>
          <div className={styles.topHeading}>
            <div>Lorem ipsum dolor sit amet</div>
            <div>consectetur adipiscing elit</div>
          </div>
          <p className={styles.topSubheading}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <div className={styles.buttons}>
            <Button
              rightIcon={<ChevronDoubleRightIcon strokeWidth="2" />}
              size="lg"
            >
              Get started
            </Button>
            <Button
              variant="soft"
              colorScheme="neutral"
              size="lg"
              className={styles.installBtn}
              rightIcon={<Square2StackIcon />}
            >
              <code>npm install @camome/core</code>
            </Button>
          </div>
        </div>
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
          Nothing fancy, it just works.
        </h2>
        <p className={styles.styling__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <CodeSandbox
          {...CardDemo}
          orientation="horizontal"
          showCode={{ react: true }}
          extraCode={[
            {
              code: cardScss,
              name: "Card.module.scss",
              language: "scss",
            },
          ]}
        />
      </section>

      <section id="theming" className={styles.theming}>
        <div>
          <h2 className={styles.theming__heading}>Fully themable.</h2>
          <p className={styles.theming__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <CustomThemeSandbox className={styles.theming__sandbox} />
      </section>

      <section id="demo" className={styles.demo}>
        <h2 className={styles.demo__heading}>Readable, semantic classes.</h2>
        <p className={styles.demo__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <CodeSandbox {...MenuAndButtonDemo} orientation="horizontal" />
      </section>
    </div>
  );
}

const features: {
  title: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    title: "Fully themable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: <SwatchIcon />,
  },
  {
    title: "Just CSS, no runtime JavaScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: <TbBrandCss3 />,
  },
  {
    title: "Simple yet elegant design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: <SparklesIcon />,
  },
];

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
