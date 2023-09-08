const analyzeArrayTest = require("./analyzeArray");

test("Object 1", () => {
  const result = analyzeArrayTest(1, 8, 3, 4, 2, 6);
  expect(result).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("Object 1", () => {
  const result = analyzeArrayTest(1, "a", 3, "b", 2, 6);
  expect(result).toBe("Error");
});
