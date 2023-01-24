import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

import type { Option } from "../types";

import styles from "./styles.module.scss";

type Props = {
  options: Option[];
  onChange: (opt: Option) => void;
  selected: Option;
};

export default function CustomThemeRadio({
  options,
  onChange,
  selected,
}: Props) {
  return (
    <RadioGroup value={selected} onChange={onChange}>
      <RadioGroup.Label className="visually-hidden">Theme</RadioGroup.Label>
      <div className={styles.group}>
        {options.map((theme) => (
          <RadioGroup.Option
            key={theme.name}
            value={theme}
            className={({ active, checked }) =>
              clsx(
                styles.option,
                active && styles["option--active"],
                checked && styles["option--checked"]
              )
            }
            style={
              {
                background: theme.properties.color.surface[0],
                color: theme.properties.color.font.base,
                ["--accent-color"]: theme.properties.color.primary[5],
              } as React.CSSProperties
            }
          >
            {({ checked }) => (
              <>
                <RadioGroup.Label as="p">{theme.label}</RadioGroup.Label>
                {checked && <span className={styles.icon}>{theme.icon}</span>}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
