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

function solve(lines){
  let starNumbers = Number(lines[0])
  printStar(starNumbers)
}
function printStar(n){
  let result = ''
  for(let i = 1; i <= n; i ++){
	  result += '*'
	  console.log(result)
  }
}