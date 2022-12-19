import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

import LogoSvg from "@/assets/logo.svg";
import BuyButton from "@/components/common/BuyButton";
import { IconButton } from "@camome/components";
import { type SvgComponent } from "@camome/utils";

import styles from "./Header.module.scss";

type Props = {
  setDevice: (device: "desktop" | "phone") => void;
  isHidden?: boolean;
  onClickClose?: () => void;
};

export default function PreviewHeader({
  setDevice,
  isHidden,
  onClickClose,
}: Props) {
  return (
    <header className={clsx(styles.header, isHidden && styles.hidden)}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <LogoSvg />
        </Link>
        <div className={styles.devices}>
          <DeviceButton
            Icon={DevicePhoneMobileIcon}
            onClick={() => setDevice("phone")}
          />
          <DeviceButton
            Icon={ComputerDesktopIcon}
            onClick={() => setDevice("desktop")}
          />
        </div>
        <div className={styles.right}>
          <BuyButton className={styles.buy} />
          <IconButton
            variant="ghost"
            colorScheme="secondary"
            onClick={onClickClose}
            className={styles.close}
            aria-label="Close menu"
          >
            <XMarkIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

type DeviceButtonProps = {
  Icon: SvgComponent;
  onClick?: () => void;
};

function DeviceButton({ Icon, onClick }: DeviceButtonProps) {
  return (
    <button className={styles.deviceButton} onClick={onClick}>
      <Icon />
    </button>
  );
}
