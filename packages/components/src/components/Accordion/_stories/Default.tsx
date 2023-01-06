import { Accordion } from "@camome/components/Accordion";

export default function Default() {
  return <Accordion items={data} />;
}

const data = [
  {
    summary: "Ad ullamco occaecat aliquip nisi?",
    details:
      "Reprehenderit exercitation proident et laboris dolor ex nostrud proident enim in consectetur magna aliqua.",
  },
  {
    summary:
      "Aliqua labore dolore exercitation esse anim consectetur eu aliquip?",
    details: "Officia minim est fugiat dolore.",
  },
  {
    summary:
      "Pariatur laboris do ut eu mollit ea adipisicing est in laborum enim sint commodo dolore?",
    details:
      "Qui ex labore proident et voluptate ut aliquip. Labore sit eu deserunt tempor consequat.",
  },
];

Default.parameters = {
  layout: "padded",
};
