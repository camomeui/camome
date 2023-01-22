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

export const commonTheme = {
  color: {
    black: "#141517",
    white: "#fff",
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
      "0": "#F4FCF4",
      "1": "#D9F5DA",
      "2": "#9EE5A1",
      "3": "#5DD462",
      "4": "#4CBA51",
      "5": "#409D44",
      "6": "#358138",
      "7": "#2C6C2F",
      "8": "#235525",
      "9": "#1C431D",
    },
    warn: {
      "0": "#FFFAEB",
      "1": "#FEEDB9",
      "2": "#FECF48",
      "3": "#E2B640",
      "4": "#C79F38",
      "5": "#AA8630",
      "6": "#8D6D27",
      "7": "#765B21",
      "8": "#5E471A",
      "9": "#4B3815",
    },
    danger: {
      0: "#fff5f5",
      1: "#fed7d7",
      2: "#feb2b2",
      3: "#fc8181",
      4: "#f56565",
      5: "#e53e3e",
      6: "#c53030",
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
    xs: `2px 2px 2px ${cssVar("shadow.color")}`,
    sm: `2px 2px 6px ${cssVar("shadow.color")}`,
    md: `2px 2px 10px ${cssVar("shadow.color")}`,
    lg: `2px 2px 14px ${cssVar("shadow.color")}`,
    xl: `2px 2px 18px ${cssVar("shadow.color")}`,
  },
  transition: {
    bg: "background-color 0.3s",
  },
} as const;
