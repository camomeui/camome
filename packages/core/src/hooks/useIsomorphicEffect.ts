import React from "react";

export const useIsomorphicEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;
