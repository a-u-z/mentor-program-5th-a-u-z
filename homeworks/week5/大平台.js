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
  const amount = lines[0]
  const numbers = []
  for (let i = 0; i < (amount * 2 - 1); i = i + 2) {
    const single = lines[1]
    numbers.push(Number(single[i]))
  }
  let nowNumber = numbers[0]
  let max = 0
  let counter = 0
  for (let i = 0; i < numbers.length; i++) {
    if (nowNumber === numbers[i]) {
      counter++
    }
    if (nowNumber !== numbers[i]) {
      if (counter >= max) {
        max = counter
      }
      counter = 0
      nowNumber = numbers[i]
      counter++
    }
    if (i === (numbers.length - 1)) {
      if (counter >= max) {
        max = counter
      }
    }
  }
  console.log(max)
}
