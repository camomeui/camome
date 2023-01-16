import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { Kbd } from "@camome/core/Kbd";
import { TextInput } from "@camome/core/TextInput";
import { TextInputGroup } from "@camome/core/TextInputGroup";

import styles from "./styles.module.scss";

export default function Group() {
  return (
    <TextInputGroup
      input={<TextInput type="search" size="md" placeholder="Search" />}
      leftDecorator={
        <MagnifyingGlassIcon
          strokeWidth="2.5"
          style={{ color: "var(--cmm-color-gray-3)" }}
        />
      }
      rightDecorator={
        <div
          style={{
            display: "flex",
            fontSize: "0.9rem",
          }}
        >
          <Kbd>⌘ + K</Kbd>
        </div>
      }
      className={styles.group}
    />
  );
}