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
  const temp = lines[0]
  console.log(isReverse(temp) ? 'True' : 'False')
}
function isReverse(temp) {
  let reverse = ''
  for (let i = temp.length - 1; i >= 0; i--) {
    reverse += temp[i]
  }
  return reverse === temp
}
