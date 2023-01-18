import { Button } from "@camome/core/Button";
import { Spinner } from "@camome/core/Spinner";

export default function Loading() {
  return (
    <Button disabled leftIcon={<Spinner size="sm" />}>
      Saving...
    </Button>
  );
}
