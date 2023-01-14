import { useFloating, offset, flip } from "@floating-ui/react";
import { Menu as HeadlessMenu } from "@headlessui/react";
import {
  PencilSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

import { Button } from "@camome/components/Button";
import { Menu, menuClassNames } from "@camome/components/Menu";

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
        <Menu.Group>Editing</Menu.Group>
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
        <Menu.Group>Danger</Menu.Group>
        {data.category2.map(({ label, icon }) => (
          <HeadlessMenu.Item
            key={label}
            as="button"
            className={({ active }) => clsx(item, active && itemActive)}
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
