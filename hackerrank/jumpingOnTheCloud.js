// Link to Question: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
function jumpingOnClouds(c, k) {
  let energy = 100
  for (let i = 0; i <= c.length; i += k) {
    if (c[i] === 0) energy -= 1
    if (c[i] === 1) energy -= 3
  }
  return energy
}

// Sample Input:
// [0, 0, 1, 0, 0, 1, 1, 0], 2
// Sample Output:
// 92
