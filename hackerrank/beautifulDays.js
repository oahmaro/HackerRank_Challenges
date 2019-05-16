// Link to Question: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
function beautifulDays(i, j, k) {
  let beautifulDays = 0
  for (let day = i; day <= j; day++) {
    let reversedDay = Number(
      String(day)
        .split('')
        .reverse()
        .join('')
    )
    if (Number.isInteger((day - reversedDay) / k)) beautifulDays += 1
  }
  return beautifulDays
}

// Sample Input 1:
// 20 23 6
// Sample Output 1:
// 2

// Sample Input 2:
// 13 45 3
// Sample Output 2:
// 33

beautifulDays(20, 23, 6)
