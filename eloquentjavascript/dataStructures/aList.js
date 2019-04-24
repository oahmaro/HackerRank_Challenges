/* Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
*/

// Solution 01 (My Solution)
function arrayToList(arr) {
  let store = []
  for (let i = 0; i < arr.length; i++) {
    let list = {}
    list.value = arr[i]
    store.push(list) 
    if (i > 0)  store[i - 1].rest = list
    if (i === arr.length - 1) store[i].rest = null
  }
  return store[0]
}

function listToArray(lists) {
  let array = []
  let node = lists
  while (node.rest !== null) {
    array.push(node.value)
    node = node.rest
  }
  return array
}

function prepend(element, list) {
  return {value, rest: list}
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

// Solution 02 (Book Solution)
function arrayToList(arr) {
  let list = null
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    }
  }
  return list
}