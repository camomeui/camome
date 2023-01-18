import clsx from "clsx";

import { toKebabCase } from "@camome/utils";

import styles from "./styles.module.scss";

type SampleProps = { tokens: string[] };

export function Sample({
  tokens,
  labelFrom,
}: SampleProps & { labelFrom: string }) {
  const isFont = tokens.includes("font");
  const sampleStyles = getSampleStyles(tokens);
  return (
    <div className={clsx(styles.sample, "no-markup")}>
      <div className={styles.sample__preview} style={sampleStyles.preview}>
        <div
          className={isFont ? styles.sample__font : styles.sample__block}
          style={sampleStyles.sample}
        >
          {isFont && "Aa"}
        </div>
      </div>
      <code>{labelFrom + tokens.join(".").split(labelFrom)?.[1]}</code>
    </div>
  );
}

export function getSampleStyles(tokens: string[]): {
  sample?: React.CSSProperties;
  preview?: React.CSSProperties;
} {
  const variable = `var(--cmm-${toKebabCase(tokens.join("-"))})`;
  if (tokens.includes("font")) {
    let previewBg: string | undefined = undefined;
    if (tokens.includes("solid")) {
      const scheme = tokens[tokens.findIndex((t) => t === "solid") - 1];
      previewBg = `var(--cmm-color-${scheme}-emphasis)`;
    } else if (tokens.includes("onEmphasis")) {
      previewBg = `var(--cmm-color-neutral-emphasis)`;
    }
    return { sample: { color: variable }, preview: { background: previewBg } };
  } else if (tokens.includes("border")) {
    return {
      sample: { border: `1px solid ${variable}` },
    };
  } else if (tokens.includes("color")) {
    return {
      sample: { background: variable },
    };
  } else if (tokens.includes("radius")) {
    return {
      sample: {
        borderRadius: variable,
        background: "var(--cmm-color-primary-emphasis)",
      },
    };
  } else if (tokens.includes("shadow")) {
    return {
      sample: { boxShadow: variable },
    };
  } else {
    return {};
  }
}
