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
  return peace(lines)
}
function peace(lines) {
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
  if (teamA.length > teamB.length) { // teamA 人比較多
    if (teamB.length === 0) {
      console.log('PEACE') // 沒有人選 B，大家都選 A PEACE
    } else {
      for (let i = 0; i < teamB.length; i++) { // 但是有人選 B
        console.log(teamB[i]) // 印出選 B 的人的號碼
      }
    }
  } else if (teamB.length > teamA.length) { // teamB 人比較多
    if (teamA.length === 0) {
      console.log('PEACE') // 沒有人選 A，大家都選 B PEACE
    } else {
      for (let i = 0; i < teamA.length; i++) { // 但是有人選 A
        console.log(teamA[i]) // 印出選 A 的人的號碼
      }
    }
  } else { // 選 A 與選 B 的人一樣多
    console.log('PEACE')
  }
}
