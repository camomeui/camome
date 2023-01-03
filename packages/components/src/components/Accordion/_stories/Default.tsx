import { Accordion } from "@camome/components/Accordion";

import styles from "./Default.module.scss";

export default function Default() {
  return (
    <div className={styles.container}>
      <Accordion items={data} />
    </div>
  );
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
