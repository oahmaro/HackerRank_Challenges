// Link to Question: https://www.hackerrank.com/challenges/mini-max-sum/problem
function miniMaxSum(arr) {
  let sum = 0
  arr.sort().forEach((item) => {
    sum += item
  })

  let minSum = sum - arr[4]
  let maxSum = sum - arr[0]

  console.log(`${minSum} ${maxSum}`)
}

// Sample Input 1:
// [1, 3, 5, 7, 9]
// Sample Output 1:
// 16 24

// Sample Input 2:
// [1, 2, 3, 4, 5]
// Sample Output 2:
// 10 14