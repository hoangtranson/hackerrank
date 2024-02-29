/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    const totalCost = bill.reduce((a, b) => a + b);
    const annaShouldPay = (totalCost - bill[k]) / 2;

    if (annaShouldPay === b) {
        return "Bon Appetit";
    }

    return `${Math.abs(b - annaShouldPay)}`;
}

module.exports = bonAppetit;