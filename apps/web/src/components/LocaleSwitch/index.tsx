import { useFloating, offset, flip } from "@floating-ui/react";
import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineTranslate } from "react-icons/hi";
import { HiChevronDown, HiCheck } from "react-icons/hi2";

import { Locale } from "@/types";
import { Button } from "@camome/components/Button";
import { menuClassNames } from "@camome/components/Menu";

import styles from "./styles.module.scss";

const localeToLabel: { [T in Locale]: string } = {
  en: "English",
  ja: "日本語",
} as const;

export default function LocaleSwitch() {
  const { locale, defaultLocale, asPath } = useRouter();
  const { x, y, reference, floating, strategy } = useFloating({
    placement: "bottom-end",
    middleware: [offset(8), flip()],
  });

  const currentLocale = (locale ?? defaultLocale) as Locale;

  return (
    <Menu as="div" className={styles.menu}>
      <div>
        <Menu.Button as={React.Fragment}>
          {() => (
            <Button
              ref={reference}
              className={clsx(styles.button)}
              leftIcon={<HiOutlineTranslate />}
              rightIcon={<HiChevronDown />}
              size="sm"
              variant="outline"
              colorScheme="neutral"
            >
              <span>{localeToLabel[currentLocale]}</span>
            </Button>
          )}
        </Menu.Button>
      </div>
      <Menu.Items
        className={menuClassNames.menu}
        ref={floating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
      >
        {["en", "ja"].map((locale) => (
          <Menu.Item
            key={locale}
            as={React.Fragment}
            disabled={locale === currentLocale}
          >
            {({ active, disabled }) =>
              disabled ? (
                <div
                  className={clsx(
                    menuClassNames.item,
                    active && menuClassNames.itemActive,
                    disabled && menuClassNames.itemDisabled
                  )}
                >
                  <span>{localeToLabel[locale as Locale]}</span>
                  <HiCheck strokeWidth="1.5" />
                </div>
              ) : (
                <Link
                  href={asPath}
                  locale={locale}
                  aria-current={disabled ? "page" : undefined}
                  className={clsx(
                    menuClassNames.item,
                    active && menuClassNames.itemActive,
                    disabled && menuClassNames.itemDisabled
                  )}
                >
                  {localeToLabel[locale as Locale]}
                </Link>
              )
            }
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
