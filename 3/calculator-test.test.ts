const calculatorTest = require("./calculator");

test("Calculator add 1", () => {
  expect(calculatorTest("add", 2, 3)).toBe(5);
});

test("Calculator add 2", () => {
  expect(calculatorTest("add", 1, 2, 3, 4, 5, 6, 7, 8)).toBe(36);
});

test("Calculator logic test 1", () => {
  expect(calculatorTest(1, 2, 3, 4, 5, 6, 7, 8)).toBe(0);
});

test("Calculator logic test 2", () => {
  expect(calculatorTest("add")).toBe(0);
});

test("Calculator logic test 3", () => {
  expect(calculatorTest("add", "a")).toBe(0);
});

test("Calculator logic test 4", () => {
  expect(calculatorTest("add", "a", "1", 4, "b")).toBe(0);
});

test("Calculator subtract 1", () => {
  expect(calculatorTest("subtract", 100, 50, 30)).toBe(20);
});

test("Calculator subtract 2", () => {
  expect(calculatorTest("subtract", 100, 1000)).toBe(-900);
});

test("Calculator multiplication 1", () => {
  expect(calculatorTest("multiplication", 100, 1000)).toBe(100000);
});

test("Calculator division 1", () => {
  expect(calculatorTest("division", 100, 1000)).toBe(0.1);
});

test("Calculator division 2", () => {
  expect(calculatorTest("division", 100, 0)).toBe(Infinity);
});
