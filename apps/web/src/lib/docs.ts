import * as docgen from "react-docgen-typescript";

import sidebar from "@/content/docs/_sidebar";
import {
  NavItem,
  DocsSidebarItemConfig,
  NavItemLink,
  DocsComponentPropItem,
  DocsComponentMeta,
} from "@/types";
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

const excludedProps = ["className", "style"];

export function getComponentMeta(name: string): DocsComponentMeta[] {
  const resp = docgen.parse(
    `node_modules/@camome/components/src/components/${name}/index.tsx`,
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
                !excludedProps.includes(prop.name)
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
