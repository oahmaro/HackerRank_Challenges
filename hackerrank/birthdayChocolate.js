// Link to Question: https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s, d, m) {
  let segments = 0
  for (let x = 0; x < s.length; x++) {
    let sum = s[x]
    for (let y = x + 1; y < x + m; y++) {
      sum += s[y]
    }
    if (sum === d) segments += 1
  }
  return segments
}

// Sample Input 1:
// [1, 2, 1, 3, 2], 3, 2
// Sample Output 1:
// 2

// Sample Input 2:
// [1, 1, 1, 1, 1, 1], 3, 2
// Sample Output 2:
// 0

// birthday([1, 2, 1, 3, 2], 3, 2)
// birthday([1, 1, 1, 1, 1, 1], 3, 2)
