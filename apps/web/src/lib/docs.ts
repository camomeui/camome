import fs from "fs/promises";
import path from "path";

import { parse } from "react-docgen-typescript";

import type {
  NavItem,
  DocsSidebarItemConfig,
  NavItemLink,
  DocsComponentPropItem,
  DocsComponentParams,
  DocsComponentClass,
} from "@/types";

import sidebar from "@/content/docs/_sidebar";
import { colorSchemes, sizes, variants } from "@camome/system";
import { allDocs } from "contentlayer/generated";

export function getSidebarItems(
  items: DocsSidebarItemConfig[] = sidebar.items
) {
  const result: NavItem[] = [];
  for (const item of items) {
    if ("items" in item) {
      // Category
      result.push({
        ...item,
        items: getSidebarItems(item.items),
      });
    } else {
      // Document link
      const doc = allDocs.find((d) => d.id === item.id);
      if (!doc) continue;
      result.push({
        ...item,
        href: "/docs/" + doc.slug,
        label: item.label ?? doc.title,
      });
    }
  }
  return result;
}

export function flattenSidebarLinks(items: NavItem[]): NavItemLink[] {
  return items.flatMap((item) =>
    "items" in item ? flattenSidebarLinks(item.items) : item
  );
}

const COMPONENTS_ROOT = `node_modules/@camome/components/` as const;
const SYSTEM_ROOT = `node_modules/@camome/system/` as const;
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
              // Only those defined by @camome/components;
              // excluding HTML attributes.
              return (
                declaration.fileName.includes("@camome/components") &&
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
    path.join(COMPONENTS_ROOT, "dist", "style.css"),
    "utf-8"
  );
  const regex = new RegExp(`--cmm-(${name}-[a-zA-Z0-9-]+)`, "g");
  const cssVariableNames: string[] = [];
  for (const match of componentCss.matchAll(regex)) {
    const variable = match[1].trim();
    if (!cssVariableNames.includes(variable)) cssVariableNames.push(variable);
  }

  const themeCss = await fs.readFile(
    path.join(SYSTEM_ROOT, "dist", "style.css"),
    "utf-8"
  );

  const cssVariables: DocsComponentParams["cssVariables"] = cssVariableNames
    .sort()
    .map((variable) => ({
      name: variable,
      type: themeCss.includes(variable) ? "theme" : "local",
    }));

  const { default: styles } = (await import(
    `node_modules/@camome/components/src/components/${name}/styles.module.scss`
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

export function compareProp(
  a: DocsComponentPropItem,
  b: DocsComponentPropItem
): number {
  if (a.required && !b.required) return -1;
  if (!a.required && b.required) return 1;
  return a.name.localeCompare(b.name);
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
