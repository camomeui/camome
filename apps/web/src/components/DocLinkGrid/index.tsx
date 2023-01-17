import clsx from "clsx";
import React from "react";

import DocLink from "@/components/DocLink";
import { Locale } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  links: {
    id: string;
    label?: string;
    locale?: Locale;
  }[];
  className?: string;
  style?: React.CSSProperties;
};

export default function DocLinkGrid({ links, className, style }: Props) {
  return (
    <div className={clsx(styles.container, className)} style={style}>
      {links.map((link) => (
        <DocLink {...link} key={link.id + "@" + (link.locale ?? "")} />
      ))}
    </div>
  );
}
