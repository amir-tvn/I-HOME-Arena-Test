const test = require("node:test");
const assert = require("node:assert/strict");
const { add } = require("./calculator");

test("add() adds two numbers", () => {
  assert.equal(add(2, 3), 5);
});
