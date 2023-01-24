import {
  ChevronDoubleRightIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Balancer from "react-wrap-balancer";

import DocLink from "@/components/DocLink";
import { Button } from "@camome/core/Button";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export default function Cta({ className }: Props) {
  return (
    <section className={clsx(styles.container, className)}>
      <span className={styles.icon}>
        <RocketLaunchIcon />
      </span>
      <h2 className={styles.title}>
        <Balancer>Start your next project from here.</Balancer>
      </h2>
      <p className={styles.description}>
        <Balancer>
          Develop faster with a well-constructed design system and components.
        </Balancer>
      </p>
      <div className={styles.buttons}>
        <Button
          component={DocLink}
          id="guide:overview"
          size="md"
          rightIcon={<ChevronDoubleRightIcon />}
        >
          Get started
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
          GitHub
        </Button>
      </div>
    </section>
  );
}
