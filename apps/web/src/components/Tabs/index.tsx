import { Tab as HeadlessTab } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

import { tabClassNames } from "@camome/core";
const { group, list, tab, tabActive, panel } = tabClassNames;

type TabsProps = {
  items: { id: string; label: React.ReactNode; panel: React.ReactNode }[];
  defaultIndex?: number;
  selectedIndex?: number;
  onChange?: (selected: number) => void;
  className?: string;
};

export default function Tabs({
  items,
  defaultIndex,
  selectedIndex,
  onChange,
  className,
}: TabsProps) {
  return (
    <HeadlessTab.Group
      defaultIndex={defaultIndex}
      selectedIndex={selectedIndex}
      onChange={onChange}
    >
      <div className={clsx(group, className)}>
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
        <HeadlessTab.Panels as={React.Fragment}>
          {items.map((item) => (
            <HeadlessTab.Panel key={item.id} className={panel}>
              {item.panel}
            </HeadlessTab.Panel>
          ))}
        </HeadlessTab.Panels>
      </div>
    </HeadlessTab.Group>
  );
}
