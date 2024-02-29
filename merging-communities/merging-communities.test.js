const processData = require("./merging-communities");
const fs = require("fs");
const path = require("path");

async function readInputFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    return data;
  } catch (error) {
    throw new Error(`Error reading the file: ${error}`);
  }
}

describe("merging-communities", () => {
  test("test case 1", async () => {
    const absolutePath = path.resolve(__dirname, "input.txt");
    const input = await readInputFile(absolutePath);
    expect(processData(input)).toEqual([1, 2, 3, 3]);
  });
});
