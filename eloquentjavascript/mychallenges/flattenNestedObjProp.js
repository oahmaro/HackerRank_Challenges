/* This is an experiment i have done to flatten nested 
objects property 
*/

function nestedObjProp(object) {
  let array = []
  for (property in object) {
    let value = object[property]
    if (typeof value === 'object') {
      array.push(nestedObjProp(value))
    } else array.push(value)
  }
  return array.flat()
}

nestedObjProp({
  name: 'object1',
  link: {
    name: 'object2'
  }
})