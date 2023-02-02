import clsx from "clsx";

import Form from "@/components/ComponentGrid/Form";
import UserReactions from "@/components/ComponentGrid/UserReactions";
import { Tab } from "@camome/core/Tab";

import Card from "./Card";
import styles from "./styles.module.scss";

type Props = {
  classNames?: {
    container?: string;
    inner?: string;
  };
};

export default function ComponentGrid({ classNames }: Props) {
  return (
    <div className={clsx(styles.container, classNames?.container)}>
      <div className={clsx(styles.inner, classNames?.inner)}>
        <div className={styles.col}>
          <Tab.Group className={styles.tab}>
            <Tab.List>
              <Tab className="Tab--active">React</Tab>
              <Tab>Vue</Tab>
              <Tab>Svelte</Tab>
              <Tab>Solid</Tab>
            </Tab.List>
          </Tab.Group>
          <UserReactions />
          <Form />
        </div>

        <div className={styles.col}>
          <Card />
        </div>
      </div>
    </div>
  );
}
