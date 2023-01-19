import clsx from "clsx";
import React from "react";

import { Sample } from "@/components/DesignSystem/common";
import {
  lightTheme,
  colorSchemes,
  ColorScheme,
  variants,
} from "@camome/system";
import { getValue, uppercaseFirst } from "@camome/utils";

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
        <div className={clsx(styles.sampleGrid, styles.col5)}>
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
        <div className={clsx(styles.sampleGrid, styles.col4)}>
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
    <div className={clsx(styles.sampleGrid, styles.col4)}>
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
    <div className={clsx(styles.sampleGrid, styles.col4)}>
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
    <div className={clsx(styles.sampleGrid, styles.col4)}>
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

export function TemplateColors() {
  return (
    <ColorsForScheme
      renderColors={(scheme) => (
        <div className={styles.variantContainer}>
          {variants.map((variant) => (
            <div className={clsx(styles.sampleGrid, styles.col4)} key={variant}>
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
