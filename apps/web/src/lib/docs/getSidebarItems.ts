import sidebar from "@/content/docs/_sidebar";
import { DocsSidebarItemConfig, Locale, NavItem } from "@/types";
import { allDocs } from "contentlayer/generated";

export function getSidebarItems(
  items: DocsSidebarItemConfig[] = sidebar.items,
  locale: Locale
) {
  const result: NavItem[] = [];
  for (const item of items) {
    if ("items" in item) {
      // Category
      result.push({
        ...item,
        items: getSidebarItems(item.items, locale),
      });
    } else {
      // Document link
      const doc =
        allDocs.find((d) => d.id === item.id && d.locale === locale) ??
        allDocs.find((d) => d.id === item.id);
      if (!doc) continue;
      result.push({
        ...item,
        href: "/docs/" + doc.slug,
        label: item.label ?? doc.label ?? doc.title,
      });
    }
  }
  return result;
}
