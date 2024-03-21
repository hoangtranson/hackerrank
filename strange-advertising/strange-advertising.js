/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(days) {
  let totalLikes = 0;
  let sharesPerDay = 3;
  let recipients = 5;

  for (let day = 0; day < days; day++) {
    let likesToday = Math.floor(recipients / 2);
    let newShares = sharesPerDay * likesToday;
    recipients = newShares;
    totalLikes += likesToday;
  }

  return totalLikes;
}

module.exports = viralAdvertising;