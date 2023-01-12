import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";
import React, { useEffect, useState } from "react";

function isDarkInStorage(): boolean {
  const themeString = localStorage.getItem("sb-addon-themes-3");

  if (themeString) {
    const theme = JSON.parse(themeString);

    return theme["current"] !== "light";
  }

  return false;
}

export const DocsContainer = ({ children, context }) => {
  const [isDark, setIsDark] = useState(isDarkInStorage());

  const handler = () => {
    setIsDark(isDarkInStorage());
  };

  useEffect(() => {
    window.addEventListener("storage", handler);

    return function cleanup() {
      window.removeEventListener("storage", handler);
    };
  });

  return (
    <BaseContainer
      context={context}
      theme={isDark ? themes.dark : themes.light}
    >
      {children}
    </BaseContainer>
  );
};
