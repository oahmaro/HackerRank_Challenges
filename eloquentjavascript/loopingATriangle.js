/* Write a loop that makes sven calls to console.log
 to output the following triangle:
#
##
###
####
#####
######
#######
*/

function loopingTriangle() {
  for (let i = 1; i <= 7; i++) {
    let line = ''
    for (let j = 1; j <= i; j++) {
      line += '*'
    }
    console.log(line)
  }
}

// Better Solution
function loopingTriangle() {
  for (let line = '*'; line.length < 8; line += '*')
    console.log(line)
}