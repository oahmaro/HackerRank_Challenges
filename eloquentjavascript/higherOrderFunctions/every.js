/* Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.
Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.
*/

function every(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) return false
  }
  return true
}

function every(arr, func) {
  return !arr.some(item => !func(item))
}

