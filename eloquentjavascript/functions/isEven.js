/* We’ve seen that % (the remainder operator) can be used to test whether
  a number is even or odd by using % 2 to see whether it’s divisible by two.
  Here’s another way to define whether a positive whole number is even or odd: 55
    • Zero is even.
    • One is odd.
    • For any other number N, its evenness is the same as N - 2.
  Define a recursive function isEven corresponding to this description. The function
  should accept a single parameter (a positive, whole number)and return a Boolean.
*/

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

// Better Solution
function isEven(n) {
  if (n == 0) return true
  else if (n === 1) return false
  else if (n < 0) return isEven(-n)
  else return isEven(n - 2) 
}