// Link to Question: https://www.hackerrank.com/challenges/the-hurdle-race/problem
function hurdleRace(k, height) {
  if (k >= 1 && k <= 100) {
    let sum = 0
    for (let item of height) {
      if (item > sum && item >= 1 && item <= 100) sum = item
    }
    if (sum > k) {
      return sum - k
    } else return 0
  } else console.log('Wrong Input Range')
}

// Sample Input 1:
// 4, [1, 6, 3, 5, 2]
// Sample Output 1:
// 2

// Sample Input 2:
// 7, [2, 5, 4, 5, 2]
// Sample Output 2:
// 0