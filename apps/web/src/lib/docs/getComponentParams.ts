import fs from "fs/promises";
import path from "path";

import { parse } from "react-docgen-typescript";

import {
  DocsComponentClass,
  DocsComponentParams,
  DocsComponentPropItem,
} from "@/types";
import { variants, colorSchemes, sizes } from "@camome/system";

const COMPONENTS_ROOT = `node_modules/@camome/core/` as const;
const SYSTEM_ROOT = `node_modules/@camome/system/` as const;
const SYSTEM_CSS_NAME = "theme.css" as const;
const CORE_CSS_NAME = "components.css" as const;
const EXCLUDED_PROPS = ["className", "style"];

export async function getComponentParams(
  name: string
): Promise<DocsComponentParams[]> {
  const resp = parse(
    path.join(COMPONENTS_ROOT, "src", "components", name, "index.tsx"),
    {
      savePropValueAsString: true,
      propFilter: (prop) => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find(
            (declaration) => {
              // Only those defined by @camome/core;
              // excluding HTML attributes.
              return (
                declaration.fileName.includes("@camome/core") &&
                !EXCLUDED_PROPS.includes(prop.name)
              );
            }
          );

          return Boolean(hasPropAdditionalDescription);
        }

        return true;
      },
    }
  );

  if (resp.length === 0) {
    throw new Error(`Couldn't parse metadata for: ${name}`);
  }

  const componentCss = await fs.readFile(
    path.join(COMPONENTS_ROOT, "dist", CORE_CSS_NAME),
    "utf-8"
  );
  const regex = new RegExp(`--cmm-(${name}-[a-zA-Z0-9-]+)`, "g");
  const cssVariableNames: string[] = [];
  for (const match of componentCss.matchAll(regex)) {
    const variable = match[1].trim();
    if (!cssVariableNames.includes(variable)) cssVariableNames.push(variable);
  }

  const themeCss = await fs.readFile(
    path.join(SYSTEM_ROOT, "dist", SYSTEM_CSS_NAME),
    "utf-8"
  );

  const cssVariables: DocsComponentParams["cssVariables"] = cssVariableNames
    .sort()
    .map((variable) => ({
      name: variable,
      type: themeCss.includes(variable) ? "theme" : "local",
    }));

  const { default: styles } = (await import(
    `node_modules/@camome/core/src/components/${name}/styles.module.scss`
  )) as Record<string, string>;
  const classes: DocsComponentParams["classes"] = Object.values(styles).map(
    (name) => ({
      name,
      type: classType(name),
    })
  );

  return resp.map((component) => ({
    displayName: component.displayName,
    props: Object.entries(component.props)
      .map(([, v]) => ({
        defaultValue: v.defaultValue?.value ?? null,
        name: v.name,
        required: v.required,
        type: v.type.name,
        description: v.description,
      }))
      .sort(compareProp),
    cssVariables,
    classes: classes.sort(compareClass),
  }));
}

function classType(className: string) {
  if (!className.match(/(-|_)/)) return "block";
  if (className.includes("__")) return "element";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lastToken = className.split("-").at(-1) as any;
  if (variants.includes(lastToken)) return "variant";
  else if (colorSchemes.includes(lastToken)) return "color-scheme";
  else if (sizes.includes(lastToken)) return "size";
  else return "modifier";
}

export function compareProp(
  a: DocsComponentPropItem,
  b: DocsComponentPropItem
): number {
  if (a.required && !b.required) return -1;
  if (!a.required && b.required) return 1;
  return a.name.localeCompare(b.name);
}

export function compareClass(
  a: DocsComponentClass,
  b: DocsComponentClass
): number {
  const priority: readonly DocsComponentClass["type"][] = [
    "block",
    "element",
    "size",
    "color-scheme",
    "variant",
    "modifier",
  ] as const;
  const diff = priority.indexOf(a.type) - priority.indexOf(b.type);
  return diff === 0 ? a.name.localeCompare(b.name) : diff;
}
