const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})
const lines = []
rl.on('line', (line) => {
  lines.push(line)
})
rl.on('close', () => {
  solve(lines)
})
function solve(lines) {
  const amount = Number(lines[0])
  // console.log(amount, typeof(amount))
  const ladder = lines[1].split(' ')
  // console.log(ladder, typeof(ladder))
  const ladderArray = []
  for (let i = 0; i < amount; i++) {
    ladderArray.push(Number(ladder[i]))
  }
  // console.log(ladderArray, typeof(ladderArray[0]))
  let counter = 0
  let max = 0
  let a = ladderArray[0]
  // console.log(a)
  for (let i = 0; i < ladderArray.length; i++) {
    if (a === ladderArray[i]) {
      counter++
    } else {
      if (counter > max) {
        max = counter
        a = ladderArray[i]
        counter = 1
      }
      if (counter <= max) {
        a = ladderArray[i]
        counter = 1
      }
    }
  }
  if (counter > max) {
    max = counter
  }
  console.log(max)
  // console.log(max, typeof(max))
}
