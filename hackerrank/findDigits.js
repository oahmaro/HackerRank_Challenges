// 1012
// 12
// 2

function findDigits(n) {
  let arr = String(n).split('')
  let counter = 0
  for (let i = 0; i < arr.length ; i++) {
    if (Number(arr[i]) !== 0) {
      if (n % Number(arr[i]) === 0) {
        counter += 1
      }
    }
  }
  return counter
}

// findDigits(1012) Expected output: 3
// findDigits(12) Expected output: 2
// findDigits(2) Expected output: 1
