import sidebar from "@/content/docs/_sidebar";
import { DocsSidebarItemConfig, Locale, NavItem } from "@/types";
import { allDocs } from "contentlayer/generated";

export function getSidebarItems(
  items: DocsSidebarItemConfig[] = sidebar.items,
  locale: Locale
) {
  const result: NavItem[] = [];
  for (const item of items) {
    const doc =
      allDocs.find((d) => d.id === item.id && d.locale === locale) ??
      allDocs.find((d) => d.id === item.id);
    if ("items" in item) {
      // Category
      result.push({
        ...item,
        ...(doc ? { href: "/docs/" + doc.slug } : {}),
        items: getSidebarItems(item.items, locale),
      });
    } else {
      // Document link

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
