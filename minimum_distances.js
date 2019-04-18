function minimumDistances(a) {
  let minDistance = 0
  let pair = 0
  let indexes = {}

  a.forEach((item, index) => {
    if (indexes.hasOwnProperty(item)) {
      indexes[item].push(index)
      pair += 1
      let distance = indexes[item][1] - indexes[item][0] 
      if (minDistance > distance || minDistance === 0) {
        minDistance = distance
      }
    } else indexes[item] = [index]
  })
  if (pair === 0) minDistance = -1

  return minDistance
}

// minDistance([7, 1, 3, 4, 1, 7])
// Expected Output: 3