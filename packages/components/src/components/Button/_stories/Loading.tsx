import { Button } from "@camome/components/Button";
import { Spinner } from "@camome/components/Spinner";

export default function Loading() {
  return (
    <Button disabled leftIcon={<Spinner size="sm" />}>
      Saving...
    </Button>
  );
}
