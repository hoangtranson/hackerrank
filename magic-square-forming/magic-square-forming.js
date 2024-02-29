const magicSquares = [
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
];

const calculateCost = (source, target) => {
  let cost = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cost += Math.abs(source[i][j] - target[i][j]);
    }
  }
  return cost;
};

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */
function formingMagicSquare(s) {
  let minCost = Number.MAX_SAFE_INTEGER;
  for (const magicSquare of magicSquares) {
    const cost = calculateCost(s, magicSquare);
    minCost = Math.min(minCost, cost);
  }
  return minCost;
}

module.exports = formingMagicSquare;