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
// 要考慮 預計偷很多，不過現場沒有東西或是很少東西的狀況
// https://codepen.io/nicolas-cheng/pen/OJMWjXW
function solve(lines) {
  const [stoleLimit, count, ...items] = lines.map((x) => Number(x)) // 解構好神
  let stoledValue = 0 // 偷走的總價值
  const itemsBigtoSmall = items.sort((a, b) => { return b - a }) // eslint-disable-line
  for (let i = 0; i < Math.min(stoleLimit, count); i++) {
    stoledValue += itemsBigtoSmall[i]
  }
  console.log(stoledValue)
}
