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
  const teamA = []
  const teamB = []
  for (let i = 1; i <= amount; i++) {
    if (lines[i] === 'A') {
      teamA.push(i) // 在 teamA 這個 array 裡面登記，哪一號同學選了 A
    } else {
      teamB.push(i) // 在 teamB 這個 array 裡面登記，哪一號同學選了 B
    }
  }
  const isUnanimous = !lines.includes('A') || !lines.includes('B') || teamA.length === teamB.length
  // 沒有人投 A 或是 沒有人投 B 或是 投 A 與 投 B 的人數相同 都是一致的狀況
  if (isUnanimous) {
    console.log('PEACE')
  } else {
    const minority = teamA.length < teamB.length ? teamA : teamB // 判斷少數
    minority.forEach((e) => console.log(e)) // 印出少數
  }
}
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
