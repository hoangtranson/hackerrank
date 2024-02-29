/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
  const uniqueRanks = [...new Set(ranked)]; // Find unique ranks
  let currentIndex = uniqueRanks.length - 1; // Start from the last index
  const result = [];

  for (const score of player) {
    // Move the current index backward if the player's score is greater than or equal to the current rank
    while (currentIndex >= 0 && score >= uniqueRanks[currentIndex]) {
      currentIndex--;
    }
    // Push the rank to the result (index + 2 because ranks start from 1)
    result.push(currentIndex + 2);
  }

  return result;
}

module.exports = climbingLeaderboard;
