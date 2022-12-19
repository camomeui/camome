import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";

import { type LabeledLink } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  prev?: LabeledLink;
  next?: LabeledLink;
};

export default function DocsPageNav({ prev, next }: Props) {
  return (
    <nav className={styles.Block}>
      {prev ? <DocsPageLink {...prev} direction="prev" /> : <div />}
      {next ? <DocsPageLink {...next} direction="next" /> : <div />}
    </nav>
  );
}

type PageLinkProps = {
  direction: "next" | "prev";
} & LabeledLink;

function DocsPageLink({ direction, href, label }: PageLinkProps) {
  return (
    <Link href={href} className={clsx(styles.link, styles[direction])}>
      <div className={clsx(styles.link__upper, styles[direction])}>
        {direction === "next" ? "Next" : "Previous"}
      </div>
      <div className={clsx(styles.link__lower, styles[direction])}>
        {direction === "next" ? (
          <>
            <span>{label}</span>
            <ArrowSmallRightIcon />
          </>
        ) : (
          <>
            <ArrowSmallLeftIcon />
            <span>{label}</span>
          </>
        )}
      </div>
    </Link>
  );
}
