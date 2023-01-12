import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import React from "react";

import { IconButton } from "@camome/components/IconButton";

export default function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return theme === "dark" ? (
    <IconButton
      aria-label="Switch to light theme"
      onClick={() => setTheme("light")}
      size="sm"
      variant="outline"
      colorScheme="neutral"
    >
      <SunIcon />
    </IconButton>
  ) : (
    <IconButton
      aria-label="Switch to dark theme"
      onClick={() => setTheme("dark")}
      size="sm"
      variant="outline"
      colorScheme="neutral"
    >
      <MoonIcon />
    </IconButton>
  );
}
