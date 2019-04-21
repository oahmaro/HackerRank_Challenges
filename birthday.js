function birthdayCakeCandles(ar) {
  let highestNum = 0
  let candles = {}

  ar.forEach((item) => {
    if (candles[item] !== undefined) {
      candles[item] += 1
      highestNum = item > highestNum ? item : highestNum
    } else candles[item] = 1
  })

  return candles[highestNum]
}

// Sample Input 1:
// [3, 2, 1, 3]
// Sample Output 1:
// 2