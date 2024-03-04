/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Define alphabet string
  let maxHeight = 0; // Initialize maxHeight variable

  // Iterate over each character in the word
  for (const char of word) {
    const index = alphabet.indexOf(char); // Find index of current character in alphabet
    const height = h[index]; // Get height corresponding to the character
    maxHeight = Math.max(maxHeight, height); // Update maxHeight if necessary
  }

  const area = maxHeight * word.length; // Calculate area (height * length)
  return area;
}

module.exports = designerPdfViewer;
