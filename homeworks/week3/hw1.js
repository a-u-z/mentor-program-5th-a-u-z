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
	return star(starNumbers)
}
function star(n){
	let result = ''
	for(i = 1; i <= n; i ++){
		result += '*'
		console.log(result)
	}
}