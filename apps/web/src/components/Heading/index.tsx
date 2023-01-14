import { AiOutlineLink } from "react-icons/ai";

import styles from "./styles.module.scss";

type Props = {
  Level: "h2" | "h3" | "h4";
  children: React.ReactNode;
  id?: string;
};

export default function Heading({ Level, children, id }: Props) {
  return (
    <Level className={styles.Block} id={id}>
      {children}
      <a href={"#" + id} className="hash-link">
        <AiOutlineLink />
      </a>
    </Level>
  );
}
