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

import { NavItem, NavItemCategory } from "@/types";
import { type SvgComponent } from "@camome/utils";

import styles from "./styles.module.scss";

type Props = {
  items: NavItem[];
  onClickLink?: () => void;
  className?: string;
};

export default function CollapsibleNavigation({
  items,
  onClickLink,
  className,
}: Props) {
  return (
    <nav className={className}>
      <ul className={styles.rootList}>
        {items.map((item) => (
          <Item key={item.id} item={item} onClickLink={onClickLink} />
        ))}
      </ul>
    </nav>
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
      <li key={item.href}>
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
  const isCategoryActive = items.some(
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
      <details
        open={open || isCategoryActive}
        ref={detailsRef}
        className={styles.collapsible}
      >
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
