import styles from "./styles.module.scss";

export type TooltipProps = {
  children: React.ReactNode;
  label: React.ReactNode;
  placement?: "top" | "bottom";
};

// TODO: Should append `aria-labelledby` and `aria-describedby` to the children?
// Maybe accept a render function and pass it a ID?
export function Tooltip({ children, label, placement = "top" }: TooltipProps) {
  return (
    <span className={styles.target}>
      {children}
      <span
        role="tooltip"
        className={styles.content}
        data-placement={placement}
      >
        {label}
      </span>
    </span>
  );
}
