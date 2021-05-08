/* Four integers A, B, C, and D are given. The integers
can be used to describe two points on a plane by assigning
their values to the coordinates of the points. Each integer
has to be assigned to exactly one coordinate. Your task is
to assign the integers A, B, C and D to the coordinates of
two points in such a way as to maximize the squared distance
 between those points 

For example, let's consider the following values:
A = 1
B = 2
C = 2
D = 3

One way is to create two points (A, D) and (B, C) as shown below
the squared distance between the chosen points is equal to 1.
Another way would be to create points (A, C) and (D, B),
The squared distance between these points is equal to 5, which is
the maximum possible value. Note that this value can be also achived
by choosing points (A, B) and (C, D), as shown below
*/

function solution (A, B, C, D) {
  let maxDis = 0

  const d1 = Math.pow(A - B, 2) + Math.pow(C - D, 2)
  const d2 = Math.pow(A - C, 2) + Math.pow(B - D, 2)
  const d3 = Math.pow(A - D, 2) + Math.pow(B - C, 2)

  let totalDis = [d1, d2, d3]

  totalDis.forEach(dis => {
    if (dis > maxDis) {
      maxDis = dis
    }
  })

  return maxDis
}
