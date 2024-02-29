/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
  if (year === 1918) {
    // Special case for 1918
    return `26.09.1918`;
  } else if (
    (year < 1918 && year % 4 === 0) || // Julian calendar leap year
    (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))
  ) {
    // Gregorian calendar leap year
    // Leap year case
    return `12.09.${year}`;
  } else {
    // Non-leap year case
    return `13.09.${year}`;
  }
}


module.exports = dayOfProgrammer;