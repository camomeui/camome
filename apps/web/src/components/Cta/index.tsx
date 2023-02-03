import ChevronDoubleRightIcon from "@heroicons/react/24/outline/ChevronDoubleRightIcon";
import RocketLaunchIcon from "@heroicons/react/24/outline/RocketLaunchIcon";
import clsx from "clsx";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { FaGithub } from "react-icons/fa";
import Balancer from "react-wrap-balancer";

import { Button } from "@camome/core/Button";

import styles from "./styles.module.scss";

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
          endDecorator={<ChevronDoubleRightIcon />}
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
          startDecorator={<FaGithub />}
        >
          {t("button.github")}
        </Button>
      </div>
    </section>
  );
}
