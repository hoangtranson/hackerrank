/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    const studentsOnTime = a.filter(time => time <= 0).length;
    return studentsOnTime >= k ? "NO" : "YES";
}

module.exports = angryProfessor;