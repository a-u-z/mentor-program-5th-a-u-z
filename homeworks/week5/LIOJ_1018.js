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
  const ladder = lines[1].split(' ')
  const ladderArray = []
  for (let i = 0; i < amount; i++) {
    ladderArray.push(Number(ladder[i]))
  }
  let counter = 0
  let max = 0
  let a = ladderArray[0]
  for (let i = 0; i < ladderArray.length; i++) {
    if (a === ladderArray[i]) {
      counter++
    } else {
      if (counter > max) {
        max = counter
      }
      a = ladderArray[i]
      counter = 1
    }
  }
  max = Math.max(max, counter) // 取大的當做大
  console.log(max)
}
