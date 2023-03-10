import BoltIcon from "@heroicons/react/24/solid/BoltIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import SparklesIcon from "@heroicons/react/24/solid/SparklesIcon";
import SunIcon from "@heroicons/react/24/solid/SunIcon";

import type { Option } from "./types";

import { makeThemeFromConfig } from "@camome/system";

const purpleShade = {
  0: "#faf5ff",
  1: "#f3e8ff",
  2: "#e9d5ff",
  3: "#d8b4fe",
  4: "#c084fc",
  5: "#a855f7",
  6: "#9333ea",
  7: "#7e22ce",
  8: "#6b21a8",
  9: "#581c87",
} as const;

const pinkShade = {
  0: "#fdf2f8",
  1: "#fce7f3",
  2: "#fbcfe8",
  3: "#f9a8d4",
  4: "#f472b6",
  5: "#ec4899",
  6: "#db2777",
  7: "#be185d",
  8: "#9d174d",
  9: "#831843",
} as const;

const limeShade = {
  0: "#f7fee7",
  1: "#ecfccb",
  2: "#d9f99d",
  3: "#bef264",
  4: "#a3e635",
  5: "#84cc16",
  6: "#65a30d",
  7: "#4d7c0f",
  8: "#3f6212",
  9: "#3f6212",
} as const;

export const themes = [
  {
    name: "light",
    label: "Light",
    properties: makeThemeFromConfig("light", {}),
    icon: <SunIcon />,
  },
  {
    name: "light-energetic",
    label: "Energetic",
    properties: makeThemeFromConfig("light", {
      font: {
        family: {
          base: "Rubik, sans-serif",
        },
      },
      color: {
        primary: {
          ...pinkShade,
        },
        surface: {
          "1": "white",
        },
        border: {
          base: pinkShade[3],
        },
      },
    }),
    googleFont: "Rubik:wght@400;500;600;700",
    icon: <SparklesIcon />,
    css: `
#custom-theme-demo-container .Button,
#custom-theme-demo-container .Avatar {
  border-radius: 999px;
}
#custom-theme-demo-container .Tag--soft {
    border: 1px solid var(--cmm-color-border-base);
}
  `,
  },
  {
    name: "dark",
    label: "Dark",
    properties: makeThemeFromConfig("dark", {}),
    icon: <MoonIcon />,
  },
  {
    name: "dark-cyber",
    label: "Cyberpunk",
    properties: makeThemeFromConfig("dark", {
      font: {
        family: {
          base: (get) => get("font.family.code"),
        },
        size: {
          xs: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
          xl: "1.1rem",
        },
      },
      color: {
        primary: {
          ...purpleShade,
        },
        neutral: {
          ...limeShade,
          outline: {
            bgHover: limeShade[9],
            border: limeShade[4],
            font: limeShade[4],
          },
        },
        border: {
          base: limeShade[8],
          subtle: purpleShade[9],
        },
      },
      radius: {
        full: "none",
        xs: "none",
        sm: "none",
        md: "none",
        lg: "none",
        xl: "none",
      },
    }),
    icon: <BoltIcon />,
    css: `
   #custom-theme-demo-container {
    filter: drop-shadow(6px 6px 0px var(--cmm-color-neutral-emphasis));
   }
  `,
  },
] satisfies Option[];
