import { Kbd } from "@camome/components/Kbd";

export default function Size() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "0.3rem",
        fontSize: "var(--cmm-font-size-lg)",
      }}
    >
      <Kbd>Ctrl</Kbd>+<Kbd>Alt</Kbd>+<Kbd>Delete</Kbd>
    </div>
  );
}
