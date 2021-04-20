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
	let loopsNumbers = Number(lines[0])
	for(i = 1; i <= loopsNumbers; i ++ ){
		let temp = lines[i].split(' ')
		let A = temp[0]
		let B = temp[1]
		let K = Number(temp[2])
		console.log(compare(A,B,K))
	}
}
function compare(A,B,K){
	if(A === B){
		return 'DRAW'
	}
	if(K === -1){
		var temp = A
		var A = B
		var B = temp
	}
	if(A.length == B.length){
		return A > B ? 'A' : 'B'
	}else{
		return A.length > B.length ? 'A' : 'B'
	}
}