import { Tab } from "@camome/components/Tab";

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
    <Tab.Group>
      <Tab.List>
        {items.map((item) => (
          <Tab key={item.id} active={item.id === 1}>
            {item.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panel>{items[0].panel}</Tab.Panel>
    </Tab.Group>
  );
}
