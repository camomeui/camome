import {
  ChevronDoubleRightIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Balancer from "react-wrap-balancer";

import styles from "./styles.module.scss";

import { Button } from "@camome/core/Button";

type Props = {
  className?: string;
};

export default function Cta({ className }: Props) {
  const { t } = useTranslation("root");
  return (
    <section className={clsx(styles.container, className)}>
      <span className={styles.icon}>
        <RocketLaunchIcon />
      </span>
      <h2 className={styles.title}>
        <Balancer>{t("cta.heading")}</Balancer>
      </h2>
      <p className={styles.description}>
        <Balancer>{t("cta.subheading")}</Balancer>
      </p>
      <div className={styles.buttons}>
        <Button
          component={Link}
          href="/docs/guide/overview"
          size="md"
          rightIcon={<ChevronDoubleRightIcon />}
        >
          {t("button.get-started")}
        </Button>
        <Button
          component="a"
          href="https://github.com/camomeui/camome"
          variant="outline"
          colorScheme="neutral"
          size="md"
          className={styles.githubLink}
          leftIcon={<FaGithub />}
        >
          {t("button.github")}
        </Button>
      </div>
    </section>
  );
}
