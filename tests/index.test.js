const { increase, double } = require("../src/index.js");

test("increase", function() {
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 15;

  expect(result).toBe(expected);
});

test("double", function() {
  const inner = double();
  expect(inner()).toBe(8);
  expect(inner()).toBe(16);
  expect(inner()).toBe(32);
});
