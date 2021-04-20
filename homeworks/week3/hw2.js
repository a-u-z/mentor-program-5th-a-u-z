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
	let temp = lines[0].split(' ')
	let startNumbers = Number(temp[0])
	let endNumbers = Number(temp[1])
	return flower(startNumbers,endNumbers)
}
function flower(startNumbers,endNumbers){
	for(i = startNumbers; i <= endNumbers; i ++){
		if(isflower(i) == true){
			console.log(i)
		}
	}
}
debugger
function isflower(n){
	let sum = 0
	let nString = n.toString()
	for(j = 0;j < nString.length; j ++){
		sum += Math.pow(nString[j],nString.length)
	}
	if(sum === n){
		return true
	}
}