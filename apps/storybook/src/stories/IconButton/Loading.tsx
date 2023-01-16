import { IconButton, Spinner } from "@camome/core";

export default function Loading() {
  return (
    <IconButton disabled aria-label="loading">
      <Spinner size="sm" />
    </IconButton>
  );
}
