/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    const fromFront = Math.floor(p / 2);
    const fromBack = Math.floor((n % 2 === 0 ? n + 1 : n) / 2) - fromFront;
    return Math.min(fromFront, fromBack);
}

module.exports = pageCount;