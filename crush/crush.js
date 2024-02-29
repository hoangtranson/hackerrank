/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    const map = {};
    for (const [a, b, k] of queries) {
        const endExclusive = b + 1; // Renamed variable for clarity
        map[a] = (map[a] || 0) + k; // Used logical OR for nullish coalescing
        map[endExclusive] = (map[endExclusive] || 0) - k; // Used logical OR for nullish coalescing
    }
    
    let max = 0;
    let currentSum = 0; // Renamed variable for clarity
    for (let i = 1; i <= n; i++) {
        currentSum += (map[i] || 0); // Used logical OR for nullish coalescing
        if (currentSum > max) max = currentSum;
    }
    
    return max;
}


module.exports = arrayManipulation;
