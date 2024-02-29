// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  x = Math.abs(x - z);
  y = Math.abs(y - z);

  let firstCat = x < y ? "Cat A" : "Cat B";

  return x === y ? "Mouse C" : firstCat;
}

module.exports = catAndMouse;