var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});
var lines = []
rl.on('line', function (line) {
  lines.push(line)
});
rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  var temp = lines[0]
  console.log(isReverse(temp)?'True':'False')
}
function isReverse(temp){
  var reverse = ''
  for(let i = temp.length - 1; i >= 0; i --){
	  reverse += temp[i]
  }
  return reverse === temp
}