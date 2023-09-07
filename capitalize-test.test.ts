const capitalizeTest = require("./capitalize");

test("Capitalize test 1", () => {
  expect(capitalizeTest("test")).toBe("Test");
});

test("Capitalize test 2", () => {
  expect(capitalizeTest(" test")).toBe(" Test");
});

test("Capitalize test 3", () => {
  expect(capitalizeTest("1test")).toBe("1Test");
});

test("Capitalize test 4", () => {
  expect(capitalizeTest("1 test")).toBe("1 Test");
});

test("Capitalize test 5", () => {
  expect(capitalizeTest("t est")).toBe("T est");
});

test("Capitalize test 6", () => {
  expect(capitalizeTest("Test")).toBe("Test");
});

test("Capitalize test 7", () => {
  expect(capitalizeTest("12425 235262")).toBe("");
});

test("Capitalize test 7", () => {
  expect(capitalizeTest("12425 2tr5262")).toBe("12425 2Tr5262");
});

test("Capitalize test 8", () => {
  expect(capitalizeTest("")).toBe("");
});
