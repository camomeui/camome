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
      <Menu.Item>
        <PencilSquareIcon />
        Edit
      </Menu.Item>
      <Menu.Item>
        <Square2StackIcon />
        Duplicate
      </Menu.Item>
      <Menu.Divider />
      <Menu.Group>Danger</Menu.Group>
      <Menu.Item>
        <TrashIcon />
        Delete
      </Menu.Item>
    </Menu>
  );
}
