import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export function DocSearchBar({ className }: Props) {
  const searchButtonRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const isBrowser = typeof window !== "undefined";
  const [isMac, setIsMac] = React.useState<boolean | undefined>();
  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    searchButtonRef,
  });

  React.useEffect(() => {
    setIsMac(window.navigator.platform.toUpperCase().indexOf("MAC") >= 0);
  }, []);

  return (
    <>
      <button
        ref={searchButtonRef}
        onClick={onOpen}
        className={clsx(styles.searchBar, className)}
      >
        <MagnifyingGlassIcon width="1em" />
        <span>Search</span>
        {isMac !== undefined && <kbd>{isMac ? "⌘" : "Ctrl+"}K</kbd>}
      </button>
      {isOpen &&
        ReactDOM.createPortal(
          <DocSearchModal
            appId="QFBRC94NVN"
            indexName="camome"
            apiKey="fd37af5d4fd07d0729690dfd331dfb14"
            placeholder="Search"
            initialScrollY={isBrowser ? window.scrollY : 160}
            onClose={onClose}
          />,
          document.body
        )}
    </>
  );
}
