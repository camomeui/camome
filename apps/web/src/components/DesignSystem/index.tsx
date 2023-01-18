import clsx from "clsx";
import React from "react";

import {
  lightTheme,
  colorSchemes,
  ColorScheme,
  variants,
} from "@camome/system";
import { getValue, toKebabCase, uppercaseFirst } from "@camome/utils";

import styles from "./styles.module.scss";

function ColorsForScheme({
  renderColors,
}: {
  renderColors: (scheme: ColorScheme) => React.ReactElement;
}) {
  const perColorScheme = (scheme: ColorScheme) => (
    <section key={scheme}>
      <h3>{uppercaseFirst(scheme)}</h3>
      {renderColors(scheme)}
    </section>
  );
  return <>{colorSchemes.map((scheme) => perColorScheme(scheme))}</>;
}

export function ShadeColors() {
  return (
    <ColorsForScheme
      renderColors={(scheme) => (
        <div className={clsx(styles.colorSampleGrid, styles.col5)}>
          {[...Array(10).keys()].map((num) => (
            <Sample
              tokens={["color", scheme, num.toString()]}
              labelFrom={scheme}
              key={num}
            />
          ))}
        </div>
      )}
    />
  );
}

export function SemanticColors() {
  return (
    <ColorsForScheme
      renderColors={(scheme) => (
        <div className={clsx(styles.colorSampleGrid, styles.col4)}>
          {["font", "muted", "subtle", "emphasis"].map((token) => (
            <Sample
              tokens={["color", scheme, token]}
              labelFrom={scheme}
              key={token}
            />
          ))}
        </div>
      )}
    />
  );
}

export function BorderColors() {
  return (
    <div className={clsx(styles.colorSampleGrid, styles.col4)}>
      {Object.keys(lightTheme.color.border).map((token) => (
        <Sample
          tokens={["color", "border", token]}
          labelFrom={"border"}
          key={token}
        />
      ))}
    </div>
  );
}

export function SurfaceColors() {
  return (
    <div className={clsx(styles.colorSampleGrid, styles.col4)}>
      {Object.keys(lightTheme.color.surface).map((token) => (
        <Sample
          tokens={["color", "surface", token]}
          labelFrom={"surface"}
          key={token}
        />
      ))}
    </div>
  );
}

export function FontColors() {
  return (
    <div className={clsx(styles.colorSampleGrid, styles.col4)}>
      {Object.keys(lightTheme.color.font).map((token) => (
        <Sample
          tokens={["color", "font", token]}
          labelFrom={"font"}
          key={token}
        />
      ))}
    </div>
  );
}

export function VariantColors() {
  return (
    <ColorsForScheme
      renderColors={(scheme) => (
        <div className={styles.variantContainer}>
          {variants.map((variant) => (
            <div
              className={clsx(styles.colorSampleGrid, styles.col4)}
              key={variant}
            >
              {Object.keys(
                getValue(lightTheme, ["color", scheme, variant].join("."))
              ).map((token) => (
                <Sample
                  tokens={["color", scheme, variant, token]}
                  labelFrom={scheme}
                  key={token}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    />
  );
}

// TODO: return background for preview if solid or font.invert
function getSampleStyles(tokens: string[]): {
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
  } else {
    return {};
  }
}

type SampleProps = { tokens: string[] };

function Sample({ tokens, labelFrom }: SampleProps & { labelFrom: string }) {
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
