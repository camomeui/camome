import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  Squares2X2Icon,
  DocumentTextIcon,
  PuzzlePieceIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { flattenSidebarLinks } from "@/lib/docs/flattenSidebarLinks";
import { NavItem, NavItemCategory } from "@/types";
import { type SvgComponent } from "@camome/utils";

import styles from "./styles.module.scss";

type Props = {
  items: NavItem[];
  onClickLink?: () => void;
  scrollContainer?: React.RefObject<HTMLElement>;
  className?: string;
};

const ScrollContainerContext =
  React.createContext<Props["scrollContainer"]>(undefined);

export default function CollapsibleNavigation({
  items,
  onClickLink,
  scrollContainer,
  className,
}: Props) {
  return (
    <ScrollContainerContext.Provider value={scrollContainer}>
      <nav className={className}>
        <ul className={styles.rootList}>
          {items.map((item) => (
            <Item key={item.id} item={item} onClickLink={onClickLink} />
          ))}
        </ul>
      </nav>
    </ScrollContainerContext.Provider>
  );
}

type ItemProps = {
  item: NavItem;
  onClickLink?: () => void;
};

function Item({ item, onClickLink }: ItemProps) {
  const router = useRouter();
  const isActive = React.useCallback(
    (href: string) => href === router.asPath,
    [router.asPath]
  );
  const isItemActive = !("items" in item) && isActive(item.href);
  const linkRef = React.useRef<HTMLLIElement>(null!);

  const scrollContainer = React.useContext(ScrollContainerContext);

  // Scroll the container so that the active link item
  // is shown at the center.
  React.useEffect(() => {
    if (isItemActive && scrollContainer?.current) {
      scrollContainer.current.scrollTop =
        linkRef.current.offsetTop +
        linkRef.current.getBoundingClientRect().height / 2 -
        scrollContainer.current.getBoundingClientRect().height / 2;
    }
  }, [isItemActive, item, scrollContainer]);

  if ("items" in item) {
    // Category
    return item.type === "collapsible" ? (
      <CategoryCollapsible {...item} isActive={isActive} />
    ) : (
      <CategorySection {...item} isActive={isActive} />
    );
  } else {
    // Document link
    return (
      <li key={item.href} ref={linkRef}>
        <Link
          href={item.href}
          className={styles.link}
          onClick={onClickLink}
          aria-current={isActive(item.href) ? "page" : undefined}
        >
          {item.label}
        </Link>
      </li>
    );
  }
}

type CategoryChildrenProps = {
  items: NavItem[];
  onClickLink?: () => void;
};

function CategoryChildren({ items, onClickLink }: CategoryChildrenProps) {
  return (
    <ul className={styles.children}>
      {items.map((item) => (
        <Item key={item.id} item={item} onClickLink={onClickLink} />
      ))}
    </ul>
  );
}

type CategoryCollapsibleProps = NavItemCategory & {
  isActive: (href: string) => boolean;
  onClickLink?: () => void;
};

function CategoryCollapsible({
  id,
  items,
  label,
  open,
  isActive,
  onClickLink,
}: CategoryCollapsibleProps) {
  const router = useRouter();
  const detailsRef = React.useRef<HTMLDetailsElement>(null);
  const isCategoryActive = flattenSidebarLinks(items).some(
    (i) => !("items" in i) && isActive(i.href)
  );
  const Icon = collapsibleCategoryIconMap[id];

  React.useEffect(() => {
    // Open if category is active and not open.
    // But don't close even if category is not active.
    if (detailsRef.current && !detailsRef.current.open && isCategoryActive) {
      detailsRef.current.open = true;
    }
  }, [isCategoryActive, router.asPath]);

  return (
    <li>
      <details open={open} ref={detailsRef} className={styles.collapsible}>
        <summary>
          <span>{Icon && <Icon className={styles.categoryIcon} />}</span>
          <span>{label}</span>
          <ChevronRightIcon className={styles.chevronIcon} />
        </summary>
        <CategoryChildren items={items} onClickLink={onClickLink} />
      </details>
    </li>
  );
}

type CategorySectionProps = NavItemCategory & {
  isActive: (href: string) => boolean;
  onClickLink?: () => void;
};

function CategorySection({ items, label, onClickLink }: CategorySectionProps) {
  return (
    <li className={styles.section}>
      <div className={styles.sectionLabel}>{label}</div>
      <CategoryChildren items={items} onClickLink={onClickLink} />
    </li>
  );
}

const collapsibleCategoryIconMap: { [id: string]: SvgComponent } = {
  guide: DocumentTextIcon,
  ["design-system"]: SwatchIcon,
  integrations: PuzzlePieceIcon,
  components: Squares2X2Icon,
};
