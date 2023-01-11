import { cssVar } from "./utils";

test("color token", () => {
  expect(
    cssVar("color.primary.5", {
      withVar: false,
    })
  ).toBe("--cmm-color-primary-5");
});

test("themed component", () => {
  expect(
    cssVar("Menu.fontGroup", {
      withVar: false,
    })
  ).toBe("--cmm-Menu-font-group");
});

test("custom prefix", () => {
  expect(
    cssVar("color.primary.5", {
      prefix: "custom",
      withVar: false,
    })
  ).toBe("--custom-color-primary-5");
});

test("themed component and custom prefix", () => {
  expect(
    cssVar("Menu.fontGroup", {
      withVar: false,
      prefix: "custom",
    })
  ).toBe("--custom-Menu-font-group");
});

test("lengthy", () => {
  expect(
    cssVar("color.neutral.solid.bgHover", {
      withVar: false,
    })
  ).toBe("--cmm-color-neutral-solid-bg-hover");
});
