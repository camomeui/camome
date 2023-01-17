import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import React from "react";

import { IconButton } from "@camome/core";

import styles from "./styles.module.scss";

export default function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Show skelton to prevent layout shift.
    return <div className={styles.skelton} />;
  }

  const buttonsForCurrent = {
    dark: (
      <IconButton
        aria-label="Switch to light theme"
        onClick={() => setTheme("light")}
        size="sm"
        variant="outline"
        colorScheme="neutral"
      >
        <SunIcon />
      </IconButton>
    ),
    light: (
      <IconButton
        aria-label="Switch to dark theme"
        onClick={() => setTheme("dark")}
        size="sm"
        variant="outline"
        colorScheme="neutral"
      >
        <MoonIcon />
      </IconButton>
    ),
  };

  return buttonsForCurrent[(resolvedTheme as "dark" | "light") ?? "light"];
}
