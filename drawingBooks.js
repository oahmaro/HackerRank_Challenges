// Link to Question: https://www.hackerrank.com/challenges/drawing-book/problem
function pageCount(n, p) {
  let flips = 0

  if (p <= n / 2) {
    // page requested is in the first have of the book
    for (let i = 1; i <= n; i = i + 2) {
      if (i !== p && i - 1 !== p) {
        flips++
      } else {
        return flips
      }
    }
  } else {
    // page requested is in the last have of the book
    for (let i = n; i >= 1; i = i - 2) {
      if (i % 2 === 0) {
        // check if the i is even or odd and based on that do i - 1 or i + 1
        if (i !== p && i + 1 !== p) {
          flips++
        } else return flips
      } else {
        if (i !== p && i - 1 !== p) {
          flips++
        } else return flips
      }
    }
  }
  return flips
}

// Sample Input:
// pageCount(6, 5)
// Sample Output:
// 1
