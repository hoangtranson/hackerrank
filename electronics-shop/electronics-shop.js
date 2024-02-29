/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  let maxSpent = -1;

  for (let keyboard of keyboards) {
    for (let drive of drives) {
      const totalSpent = keyboard + drive;
      if (totalSpent <= b && totalSpent > maxSpent) {
        maxSpent = totalSpent;
      }
    }
  }

  return maxSpent;
}

module.exports = getMoneySpent;
