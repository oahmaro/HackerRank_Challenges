// Link to Question: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
function catAndMouse(x, y, z) {
  let distanceX = Math.abs(x - z)
  let distanceY = Math.abs(y - z)
  if (distanceX > distanceY) return 'Cat B'
  if (distanceY > distanceX) return 'Cat A'
  if (distanceX === distanceY) return 'Mouse C'
}

// Sample Input 1:
// 1 2 3
// Sample Output 1:
// Cat B

// Sample Input 2:
// 1 3 2
// Sample Output 2:
// Mouce C