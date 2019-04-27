// Link to Question: https://www.hackerrank.com/challenges/kangaroo/problem
function kangaroo(x1, v1, x2, v2) {
  let x1Pos = x1
  let x2Pos = x2

  if (x2 > x1 && v2 > v1) return 'NO'

  for (let i = x1; i <= 10000; i++) {
    x1Pos += v1
    x2Pos += v2

    if (x1Pos === x2Pos) return 'YES'
  }

  return 'NO'
}

// Sample Input 01:
// 0 3 4 2
// Sample Output 01:
// YES

// Sample Input 02:
// 0 2 5 3
// Sample Output 02:
// NO