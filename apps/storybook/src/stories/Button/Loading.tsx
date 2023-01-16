import { Button, Spinner } from "@camome/core";

export default function Loading() {
  return (
    <Button disabled leftIcon={<Spinner size="sm" />}>
      Saving...
    </Button>
  );
}
