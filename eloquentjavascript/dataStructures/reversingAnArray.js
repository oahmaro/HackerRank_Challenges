/* write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.

Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?

*/

function reverseArray(arr) {
  let newArray = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray[i] = arr[(arr.length - 1) - i]
  }
  return newArray
}

function reverseArray(arr) {
  let copy = arr.slice()
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    newArray[i] = copy.pop()
  }
  return newArray
}


function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++){
    let prev = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = prev
  }
  return arr
}

/* The one the returns new array is more usefull because it doesn't mutate data
however i belive the reverseArrayInPlace() will run faster cause it only need to loop through half the array to get the result.
*/
