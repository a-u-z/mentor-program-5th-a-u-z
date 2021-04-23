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
  const loopsNumbers = Number(lines[0])
  // eslint-disable-next-line
  for (let i = 1; i <= loopsNumbers; i ++) {
    const [A, B, K] = lines[i].split(' ')
    console.log(compare(A, B, K))
  }
}
function compare(A, B, K) {
  if (A === B) {
    return 'DRAW'
  }
  if (K === '1') {
    if (A.length === B.length) {
      return A > B ? 'A' : 'B'
    }
    return A.length > B.length ? 'A' : 'B'
  }
  if (K === '-1') {
    if (A.length === B.length) {
      return A > B ? 'B' : 'A'
    }
    return A.length > B.length ? 'B' : 'A'
  }
}
