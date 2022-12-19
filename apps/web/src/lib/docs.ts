import sidebar from "@/content/docs/_sidebar";
import { NavItem, DocsSidebarItemConfig, NavItemLink } from "@/types";
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
