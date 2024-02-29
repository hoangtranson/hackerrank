const matchingStrings = require("./sparse-arrays");

describe("sparse-arrays", () => {
  test("test case 1", () => {
    expect(
      matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
    ).toEqual([2, 1, 0]);
  });

  test("test case 2", () => {
    expect(matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"])).toEqual(
      [1, 0, 1]
    );
  });

  test("test case 3", () => {
    expect(
      matchingStrings(
        [
          "abcde",
          "sdaklfj",
          "asdjf",
          "na",
          "basdn",
          "sdaklfj",
          "asdjf",
          "na",
          "asdjf",
          "na",
          "basdn",
          "sdaklfj",
          "asdjf",
        ],
        ["abcde", "sdaklfj", "asdjf", "na", "basdn"]
      )
    ).toEqual([1, 3, 4, 3, 2]);
  });
});
