/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { isValidElement } from "react";

import { useIsBrowser } from "../../hooks/useIsBrowser";

export type BrowserOnlyProps = {
  children?: () => React.ReactNode;
  fallback?: React.ReactElement;
};

// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
export function BrowserOnly({
  children,
  fallback,
}: BrowserOnlyProps): JSX.Element | null {
  const isBrowser = useIsBrowser();

  if (isBrowser) {
    if (
      typeof children !== "function" &&
      process.env.NODE_ENV === "development"
    ) {
      throw new Error(`Docusaurus error: The children of <BrowserOnly> must be a "render function", e.g. <BrowserOnly>{() => <span>{window.location.href}</span>}</BrowserOnly>.
 Current type: ${
   isValidElement(children) ? "React element" : typeof children
 }`);
    }
    return <>{children?.()}</>;
  }

  return fallback ?? null;
}
