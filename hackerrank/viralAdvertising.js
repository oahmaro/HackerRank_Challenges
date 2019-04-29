// Link to Question: https://www.hackerrank.com/challenges/strange-advertising/problem
function viralAdvertising(n) {
  if (n >= 1 && n<= 50) {
    let persons = 5
    let likes = 0
    for (let i = 0; i < n; i++) {
      likes += Math.floor(persons / 2)
      persons = Math.floor(persons / 2) * 3
    }
    return likes
  } else console.error('input is out of range')
}

// Sample Input:
// 3
// Sample Output:
// 9