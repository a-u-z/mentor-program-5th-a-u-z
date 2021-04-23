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
  const starNumbers = Number(lines[0])
  printStar(starNumbers)
}
function printStar(n) {
  let result = ''
  for (let i = 1; i <= n; i++) {
    result += '*'
    console.log(result)
  }
}
