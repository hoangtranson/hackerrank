/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(totalPrisoners, totalSweets, startingChair) {
    // Calculate the chair number where the last sweet will be placed
    let lastChair = (totalSweets + startingChair - 1) % totalPrisoners;
    // If lastChair becomes 0, it should be set to totalPrisoners
    // This handles the edge case when the last sweet is placed on the last chair
    return lastChair || totalPrisoners;
}

module.exports = saveThePrisoner;