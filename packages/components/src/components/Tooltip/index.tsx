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
    <div className={styles.target}>
      {children}
      <div role="tooltip" className={styles.content} data-placement={placement}>
        {label}
      </div>
    </div>
  );
}
