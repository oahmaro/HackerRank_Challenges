// Link to Question: https://www.hackerrank.com/challenges/a-very-big-sum/problem 
function aVeryBigSum(ar) {
  let sum = 0
  ar.map((item) => sum += item)

  return sum
}