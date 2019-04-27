// Link to Question: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
function divisibleSumPairs(n, k, ar) {
  let counter = 0

  for (let x = 0; x < n; x++) {
    for (let y = x + 1; y < n; y++) {
      if ((ar[x] + ar[y]) % k === 0) {
        counter++
      }
    }
  }

  return counter
}

divisibleSumPairs(6, 5, [1,2,3,4,5,6])

// Sample Input 01:
// 6, 5, [1, 2, 3, 4, 5 ,6]
// Sample Output 01:
// 3

// Sample Input 02:
// 6, 3, [1, 3, 2, 6, 1, 2]
// Sample Output 02:
// 5