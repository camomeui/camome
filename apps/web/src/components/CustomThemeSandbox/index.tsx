import clsx from "clsx";
import { useTheme } from "next-themes";
import React from "react";

import type { Option } from "./types";

import CustomThemeDemo from "@/components/CustomThemeSandbox/CustomThemeDemo";
import CustomThemeRadio from "@/components/CustomThemeSandbox/CustomThemeRadio";
import { generateThemeCss } from "@camome/system";

import styles from "./styles.module.scss";
import { themes } from "./themes";

const SANDBOX_ID = "custom-theme-sandbox" as const;

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function CustomThemeSandbox({ className, style }: Props) {
  const { resolvedTheme } = useTheme();
  const [selected, setSelected] = React.useState<Option>(themes[0]);
  const previewRef = React.useRef<HTMLDivElement>(null!);

  const handleChange = (opt: Option) => {
    const preview = previewRef.current;
    preview.style.colorScheme = opt.name.startsWith("dark") ? "dark" : "light";
    preview.dataset.theme = opt.name;

    const styleId = "custom-theme" as const;
    const linkId = "custom-theme-font" as const;

    document.getElementById(styleId)?.remove();
    document.getElementById(linkId)?.remove();

    const styleElm = document.createElement("style");
    styleElm.id = styleId;

    const selector = `#${SANDBOX_ID}[data-theme="${opt.name}"]`;

    let css = generateThemeCss(opt.properties, {
      selector,
      prefix: "cmm",
    });
    css += `${selector} ${opt.css}`;
    styleElm.innerHTML = css;

    document.head.appendChild(styleElm);

    if (opt.googleFont) {
      const linkElm = document.createElement("link");
      linkElm.id = linkId;
      linkElm.rel = "stylesheet";
      linkElm.href = `https://fonts.googleapis.com/css2?display=swap&family=${opt.googleFont}`;
      document.head.appendChild(linkElm);
    }

    setSelected(opt);
  };

  React.useEffect(() => {
    if (resolvedTheme === "dark") setSelected(themes[2]);
  }, [resolvedTheme]);

  return (
    <div className={clsx(styles.container, className)} style={style}>
      <div id={SANDBOX_ID} ref={previewRef} className={styles.preview}>
        <CustomThemeDemo />
      </div>
      <CustomThemeRadio
        options={themes}
        onChange={handleChange}
        selected={selected}
      />
    </div>
  );
}
