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
  const max = Number(lines[0])
  // eslint-disable-next-line
  for (let j = 1; j <= max ; j ++) {
    const temp = Number(lines[j])
    console.log(isPrime(temp) ? 'Prime' : 'Composite')
  }
}
function isPrime(n) {
  if (n === 1) {
    return false
  }
  const num = Math.sqrt(n)
  // eslint-disable-next-line
  for (let i = 2; i <= Math.floor(num); i ++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
