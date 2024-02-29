/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
  const arrLength = a.length;
  for (let i = 0, j = arrLength - 1; i < j; i++, j--) {
    [a[i], a[j]] = [a[j], a[i]]; // Swap elements using destructuring assignment
  }
  return a;
}


module.exports = reverseArray;