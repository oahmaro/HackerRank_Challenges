// Link to Question: https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=internal-search
function getMoneySpent(keyboards, drives, b) {
  let maxTotalPrice = 0
  let itteration = 0
  for (let i = 0; i <= keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let currentTotal = keyboards[i] + drives[j]
      if (currentTotal === b) return currentTotal
      if (currentTotal > maxTotalPrice && currentTotal <= b)
        maxTotalPrice = currentTotal
    }
  }
  return maxTotalPrice || -1
}

// Sample Input:
// [3, 1], [5,2,8], 10
// Sample Output:
// 9

// Sample Input 2:
// [4], [5], 5
// Sample Output 2:
// -1
