/* Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.

*/

function chessboard(char = '#', w = 8, h = 8) {
  for (let i = 1; i <= h; i++) {
    let line = ''
    for (let j = 1; j <= w; j++) {
      if (j % 2 === 0) {
        line += char
      } else line += ' '
    } line += '\n'
    console.log(line)
  }
}
