/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
  const rotations = d % arr.length;
  const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];
  return rotatedArray;
}

module.exports = rotateLeft;
