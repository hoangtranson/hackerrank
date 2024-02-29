/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
  const arr = new Array(n).fill().map(() => []);
  const res = [];
  let lastAnswer = 0;

  for (const query of queries) {
    const [type, x, y] = query;
    const index = (x ^ lastAnswer) % n;

    if (type === 1) {
      arr[index].push(y);
    } else if (type === 2) {
      lastAnswer = arr[index][y % arr[index].length];
      res.push(lastAnswer);
    }
  }

  return res;
}


module.exports = dynamicArray;