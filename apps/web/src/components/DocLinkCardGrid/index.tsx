import clsx from "clsx";
import sortBy from "lodash.sortby";
import React from "react";

import DocLinkCard from "@/components/DocLinkCard";
import { Locale } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  links: {
    id: string;
    label?: string;
    locale?: Locale;
  }[];
  sort?: "asc";
  className?: string;
  style?: React.CSSProperties;
};

export default function DocLinkGrid({
  links,
  sort = "asc",
  className,
  style,
}: Props) {
  return (
    <div className={clsx(styles.container, className)} style={style}>
      {(sort === "asc" ? sortBy(links, (item) => item.label) : links).map(
        (link) => (
          <DocLinkCard {...link} key={link.id + "@" + (link.locale ?? "")} />
        )
      )}
    </div>
  );
}
