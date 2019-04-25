/* Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original arrays.
*/

function flattening(arr) {
  return arr.reduce((acc, value) => acc.concat(value), [])
}

// [[1,2], [3,4]]