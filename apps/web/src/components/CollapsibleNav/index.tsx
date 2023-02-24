import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import PuzzlePieceIcon from "@heroicons/react/24/outline/PuzzlePieceIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import SwatchIcon from "@heroicons/react/24/outline/SwatchIcon";
import sortBy from "lodash.sortby";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { flattenSidebarLinks } from "@/lib/docs/flattenSidebarLinks";
import { NavItem, NavItemCategory, NavItemLink } from "@/types";
import { type SvgComponent } from "@camome/utils";

import styles from "./styles.module.scss";

type Props = {
  items: NavItem[];
  onClickLink?: React.MouseEventHandler;
  scrollContainer?: React.RefObject<HTMLElement>;
  className?: string;
};

const NavContext = React.createContext<
  Pick<Props, "onClickLink" | "scrollContainer"> & {
    isActive: (href: string) => boolean;
  }
>({
  isActive: () => false,
});

function useNavContent() {
  return React.useContext(NavContext);
}

export default function CollapsibleNavigation({
  items,
  onClickLink,
  scrollContainer,
  className,
}: Props) {
  const router = useRouter();
  const isActive = React.useCallback(
    // Ignore queries
    (href: string) => href === router.asPath.replace(/\?.*/, ""),
    [router.asPath]
  );
  return (
    <NavContext.Provider value={{ scrollContainer, onClickLink, isActive }}>
      <nav className={className}>
        <ul className={styles.rootList}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </NavContext.Provider>
  );
}

type ItemProps = {
  item: NavItem;
};

function Item({ item }: ItemProps) {
  const { scrollContainer, isActive } = useNavContent();
  const isItemActive = item.href && isActive(item.href);
  const linkRef = React.useRef<HTMLLIElement>(null!);

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
    let children = item.items;
    if (item.sort === "asc") {
      children = sortBy(item.items, (item) => item.label);
    }
    // Category
    return item.type === "collapsible" ? (
      <CategoryCollapsible {...item} items={children} summaryRef={linkRef} />
    ) : (
      <CategorySection {...item} items={children} />
    );
  } else {
    // Document link
    return (
      <li key={item.href} ref={linkRef}>
        <ItemLink {...item}>{item.label}</ItemLink>
      </li>
    );
  }
}

function ItemLink({ href, label }: NavItemLink) {
  const { isActive, onClickLink } = useNavContent();
  return (
    <Link
      href={href}
      onClick={onClickLink}
      className={styles.link}
      aria-current={isActive(href) ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

type CategoryChildrenProps = {
  items: NavItem[];
};

function CategoryChildren({ items }: CategoryChildrenProps) {
  return (
    <ul className={styles.children}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function CategoryCollapsible({
  id,
  items,
  label,
  href,
  open,
  summaryRef,
}: NavItemCategory & { summaryRef?: React.Ref<HTMLElement> }) {
  const { isActive, onClickLink } = useNavContent();
  const router = useRouter();
  const detailsRef = React.useRef<HTMLDetailsElement>(null!);
  const isCategoryActive = flattenSidebarLinks(items).some(
    (i) => !("items" in i) && isActive(i.href)
  );
  const Icon = collapsibleCategoryIconMap[id];

  const onClickSummary = (e: React.MouseEvent<HTMLElement>) => {
    if (!href) return;
    e.preventDefault();

    if (router.asPath === href) {
      detailsRef.current.open = !detailsRef.current.open;
      return;
    }

    router.push(href);
    detailsRef.current.open = true;
    onClickLink?.(e);
  };

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
        <summary
          onClick={onClickSummary}
          className={styles.link}
          // TODO: not sure this is conforming as summary is not a link.
          // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current#associated_roles
          aria-current={href && isActive(href) ? "page" : undefined}
          ref={summaryRef}
        >
          <span className={styles.content}>
            {Icon && <Icon />}
            {label}
          </span>
          <ChevronRightIcon className={styles.chevronIcon} />
        </summary>
        <CategoryChildren items={items} />
      </details>
    </li>
  );
}

function CategorySection({ items, label }: NavItemCategory) {
  return (
    <li className={styles.section}>
      <div className={styles.sectionLabel}>{label}</div>
      <CategoryChildren items={items} />
    </li>
  );
}

const collapsibleCategoryIconMap: { [id: string]: SvgComponent } = {
  guide: DocumentTextIcon,
  ["design-system"]: SwatchIcon,
  integrations: PuzzlePieceIcon,
  components: Squares2X2Icon,
};
