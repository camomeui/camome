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
      0: "#f0f9ff",
      1: "#e0f2fe",
      2: "#bae6fd",
      3: "#7dd3fc",
      4: "#38bdf8",
      5: "#0ea5e9",
      6: "#0284c7",
      7: "#0369a1",
      8: "#075985",
      9: "#0c4a6e",
    },
    success: {
      0: "#f0fdf4",
      1: "#dcfce7",
      2: "#bbf7d0",
      3: "#86efac",
      4: "#4ade80",
      5: "#22c55e",
      6: "#16a34a",
      7: "#15803d",
      8: "#166534",
      9: "#14532d",
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
