import { Tab as HeadlessTab } from "@headlessui/react";
import clsx from "clsx";

import { tabClassNames } from "@camome/core/Tab";

const { group, list, tab, tabActive, panel } = tabClassNames;

const items = [
  {
    id: 1,
    label: "React",
    panel: "React is an awesome framework",
  },
  {
    id: 2,
    label: "Vue",
    panel: "Vue is an awesome framework",
  },
  {
    id: 3,
    label: "Svelte",
    panel: "Svelte is an awesome framework",
  },
];

export default function WithHeadlessUI() {
  return (
    <HeadlessTab.Group as="div" className={group}>
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
      <HeadlessTab.Panels className={panel}>
        {items.map((item) => (
          <HeadlessTab.Panel key={item.id}>{item.panel}</HeadlessTab.Panel>
        ))}
      </HeadlessTab.Panels>
    </HeadlessTab.Group>
  );
}

WithHeadlessUI.parameters = {
  layout: "padded",
};
