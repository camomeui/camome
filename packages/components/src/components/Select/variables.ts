import { encodeBase64 } from "@camome/utils";

import { ComponentCssVariables } from "../../types";

const variables = {
  marker: `url('data:image/svg+xml;base64,${encodeBase64(
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#718096"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>`
  )}')`,
} as const satisfies ComponentCssVariables;

export default variables;
