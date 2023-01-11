import { toKebabCase } from ".";

test("camelCase", () => {
  expect(toKebabCase("fooBar")).toBe("foo-bar");
});

test("PascalCase", () => {
  expect(toKebabCase("FooBar")).toBe("foo-bar");
});
