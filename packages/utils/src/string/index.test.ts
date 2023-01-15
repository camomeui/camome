import { toKebabCase } from ".";

test("camelCase", () => {
  expect(toKebabCase("fooBar")).toBe("foo-bar");
});

test("PascalCase", () => {
  expect(toKebabCase("FooBar")).toBe("foo-bar");
});

test("kebab-case", () => {
  expect(toKebabCase("foo-bar")).toBe("foo-bar");
});

test("white space", () => {
  expect(toKebabCase("foo bar")).toBe("foo-bar");
});

test("camelCasePascalCase", () => {
  expect(toKebabCase("fooBarFizzBuzz")).toBe("foo-bar-fizz-buzz");
});

test("camelCasePascalCase-kebab-case", () => {
  expect(toKebabCase("fooBarFizzBuzz-foo-bar")).toBe(
    "foo-bar-fizz-buzz-foo-bar"
  );
});

test("white space kebab-case", () => {
  expect(toKebabCase("foo bar fizz-buzz")).toBe("foo-bar-fizz-buzz");
});

test("everything", () => {
  expect(toKebabCase("foo bar fizz-buzzFooBar-fizz buzz")).toBe(
    "foo-bar-fizz-buzz-foo-bar-fizz-buzz"
  );
});
