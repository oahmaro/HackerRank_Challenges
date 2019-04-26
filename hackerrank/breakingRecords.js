// Link to Question: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
function breakingRecords(arr) {
  let highCounter = 0
  let lowCounter = 0
  let highestScore
  let lowestScore

  for (let item of arr) {
    if (highestScore === undefined) {
      highestScore = item
      lowestScore = item
    } else if (item > highestScore) {
      highCounter++
      highestScore = item
    }
    else if (item < lowestScore) {
      lowCounter++
      lowestScore = item
    }
  }
  return [highCounter, lowCounter]
}

// Sample Input 01:
// 10 5 20 20 4 5 2 25 1
// Sample Output 01:
// 2 4

// Sample Input 02:
// 3 4 21 36 10 28 35 5 24 42
// Sample Output 02:
// 4 0