function designerPdfViewer(h, word) {
  // character codes at upper case letters starts counting at 65, thats why subtract 64 so that i start counting from 1
  let characterCodes = word.split('').map((letter) => letter.toUpperCase().charCodeAt(0) - 64)
  let height = 1

  for (let i = 0; i < characterCodes.length; i++) {
    // loop over character codes and check if thier height is heigher than global height, if so the reset the global height to the new highest height
    if (h[characterCodes[i] - 1] > height) {
      height = h[characterCodes[i] - 1]
      // subtract 1 to match the 0 base counting in arrays
    }
  }
  return height * characterCodes.length
}

// designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba')
// designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc')
