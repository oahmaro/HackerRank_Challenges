// this is the recursive solution to this problem 

function isEven(n) {
  let absNum = Math.abs(n) // in order to deal with negative values
  if (absNum === 0) {
    return true
  } else if (absNum === 1) {
    return false
  } else return isEven(absNum - 2)
}

// Sample Input 1: 
// 100
// Sample Output 1:
// true

// Sample Input 2: 
// 97
// Sample Output 2:
// false

// Sample Input 3: 
// -77
// Sample Output 3:
// false