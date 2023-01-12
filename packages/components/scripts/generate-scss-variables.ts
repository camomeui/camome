import fs from "fs";
import path from "path";

import { globby } from "globby";

import type { ComponentCssVariables } from "../src/types";

import { toKebabCase } from "@camome/utils";

(async () => {
  const componentFileList = await globby("src/components/**/index.tsx");
  const componentDirList = componentFileList.map((filepath) =>
    filepath.split(path.sep).slice(0, -1).join(path.sep)
  );

  for (const componentDir of componentDirList) {
    const componentName = componentDir.split(path.sep).pop()!;
    const variableTsPath = path.resolve(componentDir, "variables");
    if (!fs.existsSync(variableTsPath + ".ts")) continue;
    const variables: ComponentCssVariables = (await require(variableTsPath))
      .default;

    let scss = "";
    for (const [variable, defaultValue] of Object.entries(variables)) {
      const cssVarName = `--cmm-${componentName}-${toKebabCase(variable)}`;
      const sassVarName = `${variable}_name`;
      scss += `$${sassVarName}: ${cssVarName};\n`;
      scss += `$${variable}: var($${sassVarName}${
        defaultValue ? `, ${defaultValue}` : ""
      });\n`;
    }
    await fs.promises.writeFile(
      path.resolve(componentDir, "variables.scss"),
      scss
    );
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
