/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  let maxSum = -Infinity;

  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = 0; j <= arr[i].length - 3; j++) {
      const top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      const middle = arr[i + 1][j + 1];
      const bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      const sum = top + middle + bottom;
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}


module.exports = hourglassSum;