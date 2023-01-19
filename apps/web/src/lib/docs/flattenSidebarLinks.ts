import { NavItem, NavItemLink } from "@/types";

export function flattenSidebarLinks(items: NavItem[]): NavItemLink[] {
  return items.flatMap((item) =>
    "items" in item ? flattenSidebarLinks(item.items) : item
  );
}
