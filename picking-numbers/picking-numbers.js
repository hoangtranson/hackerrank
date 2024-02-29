/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  a.sort((a, b) => a - b); // Sort the array in ascending order
  let maxArrayLen = 0;

  for (let i = 0; i < a.length; i++) {
    let currentNum = a[i];
    let count = 0;

    // Count the frequency of currentNum and currentNum + 1
    for (let j = i; j < a.length; j++) {
      if (Math.abs(a[j] - currentNum) <= 1) {
        count++;
      }
    }

    maxArrayLen = Math.max(maxArrayLen, count);
  }

  return maxArrayLen;
}

module.exports = pickingNumbers;
