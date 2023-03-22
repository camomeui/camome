import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

import { Input } from "@camome/core/Input";
import { InputGroup } from "@camome/core/InputGroup";
import { Kbd } from "@camome/core/Kbd";

import styles from "./styles.module.scss";

export default function Group() {
  return (
    <InputGroup
      input={<Input type="search" size="md" placeholder="Search" />}
      startDecorator={
        <MagnifyingGlassIcon
          strokeWidth="2.5"
          style={{ color: "var(--cmm-color-font-subtle)" }}
        />
      }
      endDecorator={
        <div
          style={{
            display: "flex",
            fontSize: "0.9rem",
          }}
        >
          <Kbd>⌘ K</Kbd>
        </div>
      }
      className={styles.group}
    />
  );
}
