type PackageManager = "npm" | "pnpm" | "yarn";

const installCmd: {
  [P in PackageManager]: string;
} = {
  npm: "install",
  pnpm: "add",
  yarn: "add",
};

const installDevOpt: {
  [P in PackageManager]: string;
} = {
  npm: "--save-dev",
  pnpm: "-D",
  yarn: "-D",
};

function join(str: string | string[]) {
  return typeof str === "string" ? str : str.join(" ");
}

export function install(
  pm: PackageManager,
  packages: string | string[],
  options?: string | string[]
): string {
  return `${pm} ${installCmd[pm]} ${options ? join(options) + " " : ""}${join(
    packages
  )}`;
}

export function installDev(
  pm: PackageManager,
  packages: string | string[]
): string {
  return install(pm, packages, installDevOpt[pm]);
}
