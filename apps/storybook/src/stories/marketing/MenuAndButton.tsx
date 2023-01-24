import { Button } from "@camome/core/Button";
import { Tag } from "@camome/core/Tag";

export default function MenuAndButton() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button variant="solid" colorScheme="primary" size="md">
        Button
      </Button>
      <Tag>Tag</Tag>
    </div>
  );
}
