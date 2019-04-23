function gradingStudents(grades) {
  let result = grades.map((item) => {
    if (item > 37) {
      if (item % 5 > 2) {
        return Math.ceil(item / 5) * 5
      } else return item
    } else return item
  })

  return result
}

// Sample Input 1:
// gradingStudents([73, 67, 38, 33])
// Sample Output 1:
// [75, 67, 40, 33]

