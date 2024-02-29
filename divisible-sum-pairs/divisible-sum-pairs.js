/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */
function divisibleSumPairs(n, k, ar) {
    let count = 0;

    // Create an array to store remainders
    const remainders = new Array(k).fill(0);

    // Count remainders of each element
    for (let i = 0; i < n; i++) {
        remainders[ar[i] % k]++;
    }

    // For each remainder, find its complement and count pairs
    for (let i = 1; i <= k / 2; i++) {
        if (i !== k - i) {
            count += remainders[i] * remainders[k - i];
        }
    }

    // Add pairs where remainder is zero
    count += Math.floor(remainders[0] * (remainders[0] - 1) / 2);

    // If k is even, add pairs where remainder is half of k
    if (k % 2 === 0) {
        count += Math.floor(remainders[k / 2] * (remainders[k / 2] - 1) / 2);
    }

    return count;
}

module.exports = divisibleSumPairs;