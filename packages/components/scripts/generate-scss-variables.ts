import fs from "fs";
import path from "path";

import type { ComponentCssVariables } from "../src/types";

import { toKebabCase } from "@camome/utils";

(async () => {
  const componentRootDir = path.join(__dirname, "..", "src", "components");
  const componentDirList = await fs.promises.readdir(componentRootDir);

  for (const componentDir of componentDirList) {
    const variableTsPath = path.join(
      componentRootDir,
      componentDir,
      "variables"
    );
    if (!fs.existsSync(variableTsPath + ".ts")) continue;
    const variables: ComponentCssVariables = (await require(variableTsPath))
      .default;

    let scss = "";
    for (const [variable, defaultValue] of Object.entries(variables)) {
      const cssVarName = `--${componentDir}-${toKebabCase(variable)}`;
      const sassVarName = `${variable}_name`;
      scss += `$${sassVarName}: ${cssVarName};\n`;
      scss += `$${variable}: var($${sassVarName}${
        defaultValue ? `, ${defaultValue}` : ""
      });\n`;
    }
    await fs.promises.writeFile(
      path.join(componentRootDir, componentDir, "variables.scss"),
      scss
    );
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
