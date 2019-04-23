function staircase(n) {
  let output = ''
  for (let i = 1; i <= n; i++) {
    let stars = n
    let spaces = n - i
    for (let j = 1; j <= n; j++) {
      if (spaces !== 0) {
        output += ' '
        spaces -= 1
      } else output += '#'
    } output += '\n'
  }
  console.log(output)
}

// staircase(10) Expected
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ########
// #########
// ##########