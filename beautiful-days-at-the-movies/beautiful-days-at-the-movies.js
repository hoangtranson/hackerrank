/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(start, end, divisor) {
  let beautifulCount = 0;

  for (let day = start; day <= end; day++) {
    const reversed = reverseNumber(day);
    if ((day - reversed) % divisor === 0) {
      beautifulCount++;
    }
  }

  return beautifulCount;
}

function reverseNumber(num) {
  return parseInt(String(num).split("").reverse().join(""));
}

module.exports = beautifulDays;
