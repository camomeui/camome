import { IconButton } from "@camome/components/IconButton";
import { Spinner } from "@camome/components/Spinner";

export default function Loading() {
  return (
    <IconButton disabled aria-label="loading">
      <Spinner size="sm" />
    </IconButton>
  );
}
