// Link to Question: https://www.hackerrank.com/challenges/service-lane/problem
function serviceLane(n, cases) {
  let sizes = []
  for (let item of cases) {
    let largestSize = 3
    for (let i = item[0]; i <= item[1]; i++) {
      if (n[i] < largestSize) {
        largestSize = n[i]
      }
    }
    sizes.push(largestSize)
  }
  return sizes
}

// Sample Input 1:
// [1, 2, 2, 2, 1], [[2, 3], [1, 4], [2, 4], [2, 3]]
// Sample Output 1:
// [2, 1, 1, 1, 2]

// Sample Input 2:
// [2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]
// Saomple Output 2:
// [1, 2, 3, 2, 1]

// serviceLane([1, 2, 2, 2, 1], [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]])
// serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]])
