/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Initialize an array to store the count of each bird type
  const count = new Array(6).fill(0); // There are 5 bird types (1 to 5), so we use 6 indices (0 to 5)

  // Count occurrences of each bird type
  for (const birdType of arr) {
    count[birdType]++;
  }

  // Find the most common bird type
  let maxCount = 0;
  let mostCommonBird = 0;
  for (let i = 1; i <= 5; i++) {
    if (count[i] > maxCount) {
      maxCount = count[i];
      mostCommonBird = i;
    }
  }

  return mostCommonBird;
}

module.exports = migratoryBirds;
