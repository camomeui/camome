import { cssVar } from "../lib/utils";

export const BASE_STYLES = `body {
  font-family: ${cssVar("font.family.base")};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${cssVar("color.font.base")};
  background: ${cssVar("color.surface.0")};
}

*:focus-visible {
  outline: ${cssVar("outline.width")} solid ${cssVar("outline.color.primary")};
}

.visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
}` as const;

// Tokens are mostly borrowed from Tailwind (MIT)
// https://github.com/tailwindlabs/tailwindcss/blob/afd159dd8d5b91015e1d486df7158e10874dd815/src/public/colors.js
export const commonTheme = {
  color: {
    black: "#141517",
    white: "#ffffffe3",
    gray: {
      0: "#f7fafc",
      1: "#edf2f7",
      2: "#e2e8f0",
      3: "#cbd5e0",
      4: "#a0aec0",
      5: "#718096",
      6: "#4a5568",
      7: "#2d3748",
      8: "#1a202c",
      9: "#171923",
    },
    primary: {
      0: "#eff6ff",
      1: "#dbeafe",
      2: "#bfdbfe",
      3: "#93c5fd",
      4: "#60a5fa",
      5: "#3b82f6",
      6: "#2563eb",
      7: "#1d4ed8",
      8: "#1e40af",
      9: "#1e3a8a",
    },
    neutral: {
      0: "#f7fafc",
      1: "#edf2f7",
      2: "#e2e8f0",
      3: "#cbd5e0",
      4: "#a0aec0",
      5: "#718096",
      6: "#4a5568",
      7: "#2d3748",
      8: "#1a202c",
      9: "#171923",
    },
    info: {
      0: "#eff6ff",
      1: "#dbeafe",
      2: "#bfdbfe",
      3: "#93c5fd",
      4: "#60a5fa",
      5: "#3b82f6",
      6: "#2563eb",
      7: "#1d4ed8",
      8: "#1e40af",
      9: "#1e3a8a",
    },
    success: {
      "0": "#f0fdf4",
      "1": "#dcfce7",
      "2": "#bbf7d0",
      "3": "#86efac",
      "4": "#4ade80",
      "5": "#22c55e",
      "6": "#16a34a",
      "7": "#15803d",
      "8": "#166534",
      "9": "#14532d",
    },
    warn: {
      0: "#fff7ed",
      1: "#ffedd5",
      2: "#fed7aa",
      3: "#fdba74",
      4: "#fb923c",
      5: "#f97316",
      6: "#ea580c",
      7: "#c2410c",
      8: "#9a3412",
      9: "#7c2d12",
    },
    danger: {
      0: "#fef2f2",
      1: "#fee2e2",
      2: "#fecaca",
      3: "#fca5a5",
      4: "#f87171",
      5: "#ef4444",
      6: "#dc2626",
      7: "#b91c1c",
      8: "#991b1b",
      9: "#7f1d1d",
    },
  },
  font: {
    family: {
      base: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
      code: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`,
    },
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    weight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  outline: {
    offset: "2px",
    width: "2px",
  },
  radius: {
    none: "none",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.25rem",
    "4xl": "1.5rem",
    full: "9999px",
  },
  shadow: {
    xs: `0 1px 2px 0 rgb(0 0 0 / 0.075)`,
    sm: `0 1px 3px 0 rgb(0 0 0 / 0.075), 0 1px 2px -1px rgb(0 0 0 / 0.075)`,
    md: `0 4px 6px -1px rgb(0 0 0 / 0.075), 0 2px 4px -2px rgb(0 0 0 / 0.075)`,
    lg: `0 10px 15px -3px rgb(0 0 0 / 0.075), 0 4px 6px -4px rgb(0 0 0 / 0.075)`,
    xl: `0 20px 25px -5px rgb(0 0 0 / 0.075), 0 8px 10px -6px rgb(0 0 0 / 0.075)`,
  },
  transition: {
    bg: "background-color 0.3s",
  },
} as const;
