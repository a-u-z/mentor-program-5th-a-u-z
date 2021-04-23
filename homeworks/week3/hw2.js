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
  const temp = lines[0].split(' ')
  const startNumbers = Number(temp[0])
  const endNumbers = Number(temp[1])
  return flower(startNumbers, endNumbers)
}
function flower(startNumbers, endNumbers) {
  for (let i = startNumbers; i <= endNumbers; i++) {
    if (isflower(i)) console.log(i)
  }
}
function isflower(n) {
  let sum = 0
  const nString = n.toString()
  for (let j = 0; j < nString.length; j++) {
    sum += Math.pow(nString[j], nString.length)
  }
  return sum === n
}
