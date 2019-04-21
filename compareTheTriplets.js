function compareTriplets(a, b) {
  let scores = [0, 0]

  for (let i = 0; i < 3; i++) {
    if (a[i] && b[i] <= 100) {
      if (a[i] > b[i]) scores[0] += 1
      if (b[i] > a[i]) scores[1] += 1
    } else console.log('Scores must be in range 1 - 100')
  }

  return scores
}

// Sample input 0
// [5, 6, 7], [3, 6, 10]

// Sample output 0
// [1, 1]

// Sample input 1
// [17, 28, 30], [99, 16, 8]

// Sample output 1
// [2, 1]