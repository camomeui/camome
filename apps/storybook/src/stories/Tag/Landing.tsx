import { Tag } from "@camome/core/Tag";

export default function Landing() {
  return (
    <Tag
      variant="soft"
      colorScheme="primary"
      size="lg"
      startDecorator={<span>🎉</span>}
    >
      This is a tag
    </Tag>
  );
}
