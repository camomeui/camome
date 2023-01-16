import { Tab as HeadlessTab } from "@headlessui/react";
import clsx from "clsx";

import { tabClassNames } from "@camome/core";

const { group, list, tab, tabActive, panel } = tabClassNames;

type TabsProps = {
  items: {
    id: string;
    label: React.ReactNode;
    panel: React.ReactNode;
  }[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
};

export default function DocsTabs({
  items,
  className,
  selectedIndex,
  onChange,
}: TabsProps) {
  return (
    <HeadlessTab.Group
      as="div"
      className={clsx(group, className)}
      selectedIndex={selectedIndex}
      onChange={onChange as any}
    >
      <HeadlessTab.List className={list}>
        {items.map((item) => (
          <HeadlessTab
            key={item.id}
            className={({ selected }) => clsx(tab, selected && tabActive)}
          >
            {item.label}
          </HeadlessTab>
        ))}
      </HeadlessTab.List>
      <HeadlessTab.Panels className={clsx(panel)}>
        {items.map((item) => (
          <HeadlessTab.Panel key={item.id}>{item.panel}</HeadlessTab.Panel>
        ))}
      </HeadlessTab.Panels>
    </HeadlessTab.Group>
  );
}
