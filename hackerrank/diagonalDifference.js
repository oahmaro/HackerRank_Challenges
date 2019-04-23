function diagonalDifference(arr) {
  let primaryDiagonal = 0
  let secondaryDiagonal = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] <= 100 && arr[i][i] >= -100) {
      primaryDiagonal += arr[i][i]
      secondaryDiagonal += arr[i][arr.length - (1 + i)]
    }
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal)
}

// Sample Input:
// 1 2 3
// 4 5 6
// 9 8 9

// Sample Output:
// 2