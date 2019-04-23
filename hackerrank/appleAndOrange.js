// Link to Question: https://www.hackerrank.com/challenges/apple-and-orange/problem 
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesFalls = 0
  let orangesFalls = 0
  let limiter = apples.length > oranges.length ? apples.length : oranges.length
  for (let i = 0; i < limiter; i++) {
    if(apples[i] !== undefined) {
      let applePos = a + apples[i]
      if (applePos >= s && applePos <= t) {
        applesFalls += 1
      }
    }
    if(oranges[i] !== undefined) {
      let orangePos = b + oranges[i]
      if (orangePos >= s && orangePos <= t) {
        orangesFalls += 1
      }
    }
  }
  console.log(applesFalls + '\n' + orangesFalls)
}

// Sample Input 1: 
// 7, 10, 4, 12, [2, 3, -4], [3, -2, -4]
// Sample Output1:
// 1
// 2


