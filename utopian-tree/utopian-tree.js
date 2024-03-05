/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
    let height = 1; // Initialize planted height

    // Loop through each growth cycle
    for (let i = 1; i <= n; i++) {
        i % 2 === 0 ? height += 1 : height *= 2;
    }

    return height;
}

module.exports = utopianTree;