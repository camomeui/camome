import React from "react";

import { Table } from "@camome/core/Table";
import { lightTheme } from "@camome/system";

import styles from "./styles.module.scss";

function BaseTable({
  variables,
  cssProperty,
  previewText,
  previewStyle,
}: {
  variables: string[];
  cssProperty: keyof React.CSSProperties;
  previewText: string;
  previewStyle?: React.CSSProperties;
}) {
  return (
    <div className={styles.typographyTable}>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {variables.map((variable) => (
            <tr key={variable}>
              <td>
                <code>{variable}</code>
              </td>
              <td>
                <span
                  style={{
                    [cssProperty]: `var(${variable})`,
                    ...previewStyle,
                  }}
                >
                  {previewText}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

type Props = {
  previewText: string;
};

export function FontSizes({ previewText }: Props) {
  return (
    <BaseTable
      variables={Object.keys(lightTheme.font.size).map(
        (size) => `--cmm-font-size-${size}`
      )}
      cssProperty="fontSize"
      previewText={previewText}
    />
  );
}

export function FontWeights({ previewText }: Props) {
  return (
    <BaseTable
      variables={Object.keys(lightTheme.font.weight).map(
        (size) => `--cmm-font-weight-${size}`
      )}
      cssProperty="fontWeight"
      previewText={previewText}
      previewStyle={{ fontSize: "var(--cmm-font-size-2xl)" }}
    />
  );
}

export function FontFamilies({ previewText }: Props) {
  return (
    <BaseTable
      variables={Object.keys(lightTheme.font.family).map(
        (size) => `--cmm-font-family-${size}`
      )}
      cssProperty="fontFamily"
      previewText={previewText}
    />
  );
}
