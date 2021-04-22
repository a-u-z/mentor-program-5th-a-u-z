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
  let max = Number(lines[0])
  for(let j = 1; j <= max ; j ++){
	  let temp=Number(lines[j])
	  console.log(isPrime(temp) ? 'Prime' : 'Composite')
  }
}
function isPrime(n){
  if(n === 1){
	  return false
  }
  const num = Math.sqrt(n)
  for(let i = 2; i <= Math.floor(num); i ++){
	  if(n % i === 0){
	  return false
	  }
  }
  return true
}