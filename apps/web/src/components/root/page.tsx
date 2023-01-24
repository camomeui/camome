import {
  ChevronDoubleRightIcon,
  SparklesIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbBrandCss3 } from "react-icons/tb";
import Balancer from "react-wrap-balancer";

import ComponentGrid from "@/components/ComponentGrid";
import Cta from "@/components/Cta";
import CustomThemeSandbox from "@/components/CustomThemePlayground";

import styles from "./page.module.scss";

import DocLink from "@/components/DocLink";
import CodeSandbox from "@/components/MdxComponents/CodeSandbox";
import OverrideDemo from "@/components/OverrideDemo";
import CardDemo from "@/docs-data/demo/marketing/Card";
import { Button } from "@camome/core/Button";

export default function RootPage() {
  return (
    <div className={styles.container}>
      <section id="hero" className={styles.hero}>
        <div className={styles.headingBlock}>
          <div className={styles.topHeading}>
            <Balancer>Light weight, accessible</Balancer>
            <Balancer>UI framework for React and CSS</Balancer>
          </div>
          <p className={styles.topSubheading}>
            <Balancer>
              Camome UI enables you to build various styles of components
              without run-time JavaScript by fully utilizing the power of CSS.
            </Balancer>
          </p>
          <div className={styles.buttons}>
            <Button
              component={DocLink}
              id="guide:overview"
              rightIcon={<ChevronDoubleRightIcon strokeWidth="2" />}
              size="lg"
            >
              Get started
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
              GitHub
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
          <Balancer>Nothing fancy, it just works.</Balancer>
        </h2>
        <p className={styles.styling__description}>
          <Balancer>
            Camome UI is not a fancy framework that advocates for new styling
            methods. You know how to use it.
          </Balancer>
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
              <h2 className={styles.theming__heading}>Fully themable.</h2>
              <p className={styles.theming__description}>
                <Balancer>
                  It provides sensible defaults, but may not be to
                  everyone&apos;s taste. Customize the theme to suit your site.
                </Balancer>
              </p>
            </div>
            <div className={styles.theming__right}>
              <Button
                component={DocLink}
                id="guide:theming"
                size="lg"
                variant="soft"
                rightIcon={<ChevronDoubleRightIcon />}
              >
                Customize theme
              </Button>
            </div>
          </div>
        </div>
        <CustomThemeSandbox className={styles.theming__sandbox} />
      </section>

      <section id="override" className={styles.override}>
        <div>
          <hgroup className={styles.override__heading}>
            <p>Simply override.</p>
            <p>
              It&apos;s not that <code>!important</code>
            </p>
          </hgroup>
          <p className={styles.override__description}>
            <Balancer>
              All styles are enclosed within{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer">
                <code>@layer</code>
              </a>
              . Don&apos;t worry about order or specificity when overriding.
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

const features: {
  title: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    title: "Fully themable",
    description:
      "By combining a well-constructed design system and CSS variables, you can freely customize the theme.",
    icon: <SwatchIcon />,
  },
  {
    title: "Just CSS, no runtime JavaScript",
    description:
      "Built on top of CSS Modules, Camome UI is free from runtime overhead unlike with CSS-in-JS",
    icon: <TbBrandCss3 />,
  },
  {
    title: "Simple but elegant design",
    description:
      "All the components are designed to blend in with basic design websites, but also can be aggressively customized.",
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
