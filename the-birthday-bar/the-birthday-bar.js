/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */
function birthday(s, d, m) {
  let count = 0;

  // Iterate through array 's' only once
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;

    // Calculate sum of current subarray of length 'm'
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }

    // If sum matches 'd', increment count
    if (sum === d) {
      count++;
    }
  }

  return count;
}

module.exports = birthday;