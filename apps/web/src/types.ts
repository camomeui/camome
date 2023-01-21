import type { OptionalField } from "@camome/utils";

export type Toc = {
  value: string;
  url: string;
  depth: number;
}[];

export type Pagination = {
  currentPage: number;
  totalPages: number;
};

export type LabeledLink = {
  href: string;
  label: string;
};

export type SiteData = {
  title: string;
  subTitle: string;
  description: string;
  url: string;
  ogImage: string;
  defaultAuthor: string;
  defaultBlogThumbImg: string;
  blogPostsPerPage: number;
};

export type Author = {
  name: string;
  avatarImg: string;
};

export type Authors = { [Name: string]: Author };

export type NavItemCategory = {
  id: string;
  label: string;
  href?: string;
  open?: boolean;
  sort?: "asc";
  items: NavItem[];
  type: "section" | "collapsible";
};

export type NavItemLink = {
  id: string;
  label: string;
  href: string;
};

export type NavItem = NavItemCategory | NavItemLink;

export type DocsSidebarItemConfig =
  | NavItemCategory
  | OptionalField<NavItemLink, "href" | "label">;

export type DocsSidebarConfig = {
  items: DocsSidebarItemConfig[];
};

export type DocsComponentPropItem = {
  name: string;
  required: boolean;
  type: string;
  defaultValue: string;
  description: string;
};

export type DocsComponentClass = {
  name: string;
  type: "block" | "element" | "modifier" | "variant" | "size" | "color-scheme";
};

export type DocsComponentParams = {
  displayName: string;
  props: DocsComponentPropItem[];
  cssVariables: { name: string; type: "theme" | "local" }[];
  classes: DocsComponentClass[];
};

export type Locale = "en" | "ja";
