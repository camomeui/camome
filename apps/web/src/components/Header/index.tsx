import {
  Squares2X2Icon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

import LogoIconSvg from "@/assets/logo-icon.svg";
import LogoSvg from "@/assets/logo.svg";
import CollapsibleNav from "@/components/CollapsibleNav";
import LocaleSwitch from "@/components/LocaleSwitch";
import PopoverLinks from "@/components/PopoverLinks";
import ThemeSwitch from "@/components/ThemeSwitch";
import { LabeledLink, NavItem, NavItemLink } from "@/types";
import { IconButton } from "@camome/core/IconButton";
import { Tooltip } from "@camome/core/Tooltip";
import { type SvgComponent } from "@camome/utils";

import styles from "./styles.module.scss";

const DIALOG_ID = "header-menu" as const;

const navItems: NavItem[] = [
  {
    id: "components",
    href: "/docs/components",
    label: "Components",
  },
];

const linkToIconMap: { [id: string]: SvgComponent } = {
  components: Squares2X2Icon,
};

type Props = {
  menuContent?: ({ close }: { close: () => void }) => React.ReactNode;
  classNames?: {
    block?: string;
    inner?: string;
  };
};

export default function Header({ menuContent, classNames }: Props) {
  const dialogRef = React.useRef<HTMLDialogElement>(null!);

  const openMenu = () => {
    dialogRef.current?.showModal();
  };
  const closeMenu = () => {
    dialogRef.current?.close();
  };

  return (
    <header className={clsx(styles.Block, classNames?.block)}>
      <div className={clsx(styles.inner, classNames?.inner)}>
        <div className={styles.left}>
          <IconButton
            variant="ghost"
            colorScheme="neutral"
            className={styles.menuButtonOpen}
            aria-label="Toggle navigation menu"
            onClick={openMenu}
          >
            <Bars3Icon strokeWidth="1.5" />
          </IconButton>
          <Link href="/" aria-label="Home">
            <LogoIconSvg className={styles.logoIcon} />
            <LogoSvg className={styles.logo} />
          </Link>
          <Navigation items={navItems} className={styles.desktopOnly} />
        </div>
        <div className={clsx(styles.right)}>
          <LocaleSwitch />
          <Tooltip title="Toggle theme" placement="bottom">
            <ThemeSwitch />
          </Tooltip>
          <Tooltip title="GitHub" placement="bottom">
            <IconButton
              component={Link}
              href="https://github.com/sabigara/camome"
              variant="outline"
              colorScheme="neutral"
              size="sm"
              aria-label="GitHub"
            >
              <FaGithub />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <dialog ref={dialogRef} className={styles.menu} id={DIALOG_ID}>
        <div className={styles.menu__header}>
          <IconButton
            variant="ghost"
            colorScheme="neutral"
            onClick={closeMenu}
            data-dialog-trigger-for={DIALOG_ID}
            aria-label="Close menu"
            className={styles.menuButtonClose}
          >
            <XMarkIcon />
          </IconButton>
          <LogoSvg className={styles.logo} />
        </div>
        <div className={styles.menu__content}>
          {menuContent ? (
            menuContent({ close: closeMenu })
          ) : (
            <div className={styles.navMobile}>
              <CollapsibleNav items={navItems} onClickLink={closeMenu} />
            </div>
          )}
        </div>
      </dialog>
    </header>
  );
}

type NavigationProps = {
  items: NavItem[];
  onClickLink?: () => void;
  className?: string;
};

function Navigation({ items, onClickLink, className }: NavigationProps) {
  return (
    <nav className={clsx(styles.nav, className)}>
      <ul className={styles.list}>
        {items.map((item) =>
          "items" in item ? (
            <PopoverLinks
              key={item.id}
              title={item.label}
              links={item.items.filter(isLinkItem).map((link) => ({
                ...link,
                Icon: linkToIconMap[link.id],
              }))}
            />
          ) : (
            <LinkItem
              key={item.id}
              onClick={onClickLink}
              Icon={linkToIconMap[item.id]}
              {...item}
            />
          )
        )}
      </ul>
    </nav>
  );
}

type LinkItemProps = LabeledLink & {
  Icon?: SvgComponent;
  onClick?: () => void;
};

function LinkItem({ href, label, Icon, onClick }: LinkItemProps) {
  return (
    <li>
      <Link href={href} onClick={onClick} className={styles.link}>
        {Icon && <Icon />}
        <span>{label}</span>
      </Link>
    </li>
  );
}

function isLinkItem(item: NavItem): item is NavItemLink {
  return !("items" in item);
}
