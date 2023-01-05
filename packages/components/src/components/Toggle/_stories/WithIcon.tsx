import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { Toggle } from "@camome/components/Toggle";

export default function Default() {
  return (
    <Toggle
      size="lg"
      on={<SunIcon width="1.2rem" height="1.2rem" strokeWidth={2.5} />}
      off={<MoonIcon width="1.2rem" height="1.2rem" strokeWidth={2.5} />}
    />
  );
}
