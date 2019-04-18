function bonAppetit(bill, k, b) {
  let cost = 0
  let half
  for (let i = 0; i < bill.length; i++) {
    if (k !== i) {
      cost += bill[i]
    }
  }
  half = cost / 2
  if (half === b) {
    console.log('Bon Appetit')
  } else console.log(b - half)
}

// bonAppetit([3, 10, 2, 9], 1, 12)
// bonAppetit([21, 2, 89, 94, 33, 45, 86, 22, 24, 60], 8, 226)