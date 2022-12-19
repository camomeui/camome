import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import React from "react";

export default function useScrollLock(ref: React.RefObject<HTMLElement>) {
  const scrollY = React.useRef<number>();

  const disable = () => {
    if (!ref.current) return;

    // Save scrollY to restore position on iOS Safari.
    // https://github.com/willmcpo/body-scroll-lock/issues/237#issuecomment-954804479
    getHtml().style.scrollBehavior = "auto";
    scrollY.current = window.scrollY;

    disableBodyScroll(ref.current);

    document.body.style.setProperty("top", `${window.scrollY * -1}px`);
  };

  const enable = () => {
    if (!ref.current || scrollY.current == null) return;

    enableBodyScroll(ref.current);

    document.body.style.setProperty("top", "");
    document.body.scrollTo(0, scrollY.current);
    getHtml().style.scrollBehavior = "";
  };

  return {
    disableBodyScroll: disable,
    enableBodyScroll: enable,
    clearAllBodyScrollLocks,
  };
}

function getHtml() {
  return document.querySelector("html")!;
}
