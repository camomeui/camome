import clsx from "clsx";

import LogoIconSvg from "@/public/vector/logo-icon.svg";
import LogoTextSvg from "@/public/vector/logo-text.svg";

import styles from "./styles.module.scss";

type Props = {
  classNames?: { container?: string; icon?: string; text?: string };
};

export default function Logo({ classNames }: Props) {
  return (
    <div className={clsx(styles.container, classNames?.container)}>
      <LogoIconSvg className={clsx(styles.container__icon, classNames?.icon)} />
      <LogoTextSvg className={clsx(styles.container__text, classNames?.text)} />
    </div>
  );
}
