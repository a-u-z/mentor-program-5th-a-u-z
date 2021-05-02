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
  const stoleLimit = Number(lines[0]) // 可以偷的上限的量
  const items = [] // 能偷的物品
  for (let i = 2; i < 2 + Number(lines[1]); i++) {
    items.push(Number(lines[i]))
  }
  const itemsSequence = items.sort( (a, b) => {return b - a }) // eslint-disable-line
  let itemValue = 0
  if (stoleLimit > lines[1]) { // 全都偷
    for (let i = 0; i < itemsSequence.length; i++) {
      itemValue += itemsSequence[i]
    }
    console.log(itemValue)
  } else {
    for (let i = 0; i < stoleLimit; i++) {
      itemValue += itemsSequence[i]
    }
    console.log(itemValue)
  }
}
