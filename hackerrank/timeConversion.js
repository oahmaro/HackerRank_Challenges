// Link to Question: https://www.hackerrank.com/challenges/time-conversion/problem
function formatNumber(n) {
  let result = ''
  if (String(n).length < 2) {
    result = '0' + String(n)
  } else result = n
  return result
}

function timeConversion(s) {
  let timeCode = s.slice(-2).toUpperCase() 
  let newTime
  let time = s.slice(0, -2).split(':').map((item) => Number(item))

  if (
    time[0] > 0 &&
    time[0] <= 12 &&
    time[1] >= 0 &&
    time[1] <= 59 &&
    time[2] >= 0 &&
    time[2] <= 59 &&
    (timeCode === 'AM' ||
    timeCode === 'PM')) {
    if (timeCode === 'PM') {
      if (time[0] !== 12) {
        newTime = `${formatNumber(time[0] + 12)}:${formatNumber(time[1])}:${formatNumber(time[2])}`
      } else newTime = `12:${formatNumber(time[1])}:${formatNumber(time[2])}` 
    } else if(timeCode === 'AM') {
      if (time[0] !== 12) {
        newTime = `${formatNumber(time[0])}:${formatNumber(time[1])}:${formatNumber(time[2])}`
      } else newTime = `00:${formatNumber(time[1])}:${formatNumber(time[2])}`
    }
  } else newTime = 'Wrong Time Format'

  return newTime
}