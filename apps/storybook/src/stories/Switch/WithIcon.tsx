import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { Switch } from "@camome/core/Switch";

export default function Default() {
  return (
    <Switch
      size="lg"
      on={<SunIcon width="1.2rem" height="1.2rem" strokeWidth={2.5} />}
      off={<MoonIcon width="1.2rem" height="1.2rem" strokeWidth={2.5} />}
      aria-label="Switch"
    />
  );
}
