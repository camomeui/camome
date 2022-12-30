import { useFloating, offset, flip } from "@floating-ui/react";
import { Menu as HeadlessMenu } from "@headlessui/react";
import {
  PencilSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

import { Button } from "@camome/components/Button";
import { Menu, menuClassNames } from "@camome/components/Menu";

import styles from "./styles.module.scss";

export default function WithHeadlessUI() {
  const { x, y, reference, floating, strategy } = useFloating({
    placement: "bottom",
    middleware: [offset(8), flip()],
  });
  const { menu, item, itemActive } = menuClassNames;

  return (
    <HeadlessMenu as="div">
      <HeadlessMenu.Button as="span">
        {() => <Button ref={reference}>Open</Button>}
      </HeadlessMenu.Button>
      <HeadlessMenu.Items
        className={menu}
        ref={floating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
          width: "max-content",
        }}
      >
        <Menu.Label>Editing</Menu.Label>
        {data.category1.map(({ label, icon, ...style }) => (
          <HeadlessMenu.Item
            key={label}
            as="button"
            className={({ active }) => clsx(item, active && itemActive)}
            style={style}
          >
            {icon}
            {label}
          </HeadlessMenu.Item>
        ))}
        <Menu.Divider />
        <Menu.Label>Danger</Menu.Label>
        {data.category2.map(({ label, icon }) => (
          <HeadlessMenu.Item
            key={label}
            as="button"
            className={({ active }) =>
              clsx(item, active && itemActive, styles["with-headless-ui"])
            }
          >
            {icon}
            {label}
          </HeadlessMenu.Item>
        ))}
      </HeadlessMenu.Items>
    </HeadlessMenu>
  );
}

const data = {
  category1: [
    {
      label: "Edit",
      icon: <PencilSquareIcon />,
    },
    {
      label: "Duplicate",
      icon: <Square2StackIcon />,
    },
  ],

  category2: [
    {
      label: "Delete",
      icon: <TrashIcon />,
    },
  ],
};
