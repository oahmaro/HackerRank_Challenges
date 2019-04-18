function aVeryBigSum(ar) {
  let sum = 0
  ar.map((item) => sum += item)

  return sum
}