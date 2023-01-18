import {
  PencilSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { Menu } from "@camome/core/Menu";

export default function Default() {
  return (
    <Menu>
      <Menu.Group>Editing</Menu.Group>
      {data.category1.map((item) => (
        <Menu.Item key={item.label}>
          {item.icon}
          {item.label}
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Group>Danger</Menu.Group>
      {data.category2.map(({ label, icon }) => (
        <Menu.Item key={label}>
          {icon}
          {label}
        </Menu.Item>
      ))}
    </Menu>
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
