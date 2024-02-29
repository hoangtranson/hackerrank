const divisibleSumPairs = require("./divisible-sum-pairs");

describe("divisible-sum-pairs", () => {
  it("test case 1", () => {
    expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
  });

  it("test case 2", () => {
    expect(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])).toBe(3);
  });

  it("test case 3", () => {
    expect(divisibleSumPairs(5, 2, [5, 9, 10, 7, 4])).toBe(4);
  });
});
