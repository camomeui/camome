import { IconButton } from "@camome/core/IconButton";
import { Spinner } from "@camome/core/Spinner";

export default function Loading() {
  return (
    <IconButton disabled aria-label="loading">
      <Spinner size="sm" />
    </IconButton>
  );
}
