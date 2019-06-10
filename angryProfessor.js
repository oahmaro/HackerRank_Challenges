// Link to Question: https://www.hackerrank.com/challenges/angry-professor/problem
function angryProfessor(k, a) {
  let availableStudents = a.filter(item => item <= 0)

  return availableStudents.length >= k ? 'NO' : 'YES'
}

// Sample Input 1: 3, [-1, -3, 4, 2]
// Sample Output 1: YES

// Sample Input 2: 2, [0, -1, 2, 1]
// Sample Output 2: NO
