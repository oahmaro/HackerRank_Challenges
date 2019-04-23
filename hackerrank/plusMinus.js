// Link to Question: https://www.hackerrank.com/challenges/plus-minus/problem
function plusMinus(arr) {
  let positiveCounter = 0
  let negativeCounter = 0
  let zeroCounter = 0

  arr.forEach((item) => {
    if (item === 0) {
      zeroCounter += 1
    }
    if (item > 0) {
      positiveCounter += 1
    }
    if (item < 0) {
      negativeCounter += 1
    }
  })

  console.log(positiveCounter / arr.length)
  console.log(negativeCounter / arr.length)
  console.log(zeroCounter / arr.length)
}

// plusMinus([-4, 3, -9, 0, 4, 1])
// Expected Result:
// 0.500000
// 0.333333
// 0.166667