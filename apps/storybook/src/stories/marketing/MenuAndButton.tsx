import {
  PencilSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@camome/core/Button";
import { Menu } from "@camome/core/Menu";
import { Spinner } from "@camome/core/Spinner";

export default function MenuAndButton() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button
        variant="solid"
        colorScheme="primary"
        size="md"
        disabled
        leftIcon={<Spinner size="sm" />}
      >
        Button
      </Button>
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
    </div>
  );
}
