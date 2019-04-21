function utopianTree(n) {
  let height = 0

  for (let i = 0; i <= n ; i++) {
    if (i % 2 === 0) {
      height = height + 1
    } else {
      height = height * 2
    }
  }
  return height
}
// utopianTree(0): Expected Result 1
// utopianTree(1): Expected Result 2
// utopianTree(2): Expected Result 3
// utopianTree(3): Expected Result 6
// utopianTree(4): Expected Result 7
// utopianTree(5): Expected Result 14
