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
  for(let i = 1; i <= loopsNumbers; i ++ ){
	  const [A,B,K]=lines[i].split(' ')
	  console.log(compare(A,B,K))
  }
}
function compare(A,B,K){
  if(A === B){
	  return 'DRAW'
  }
  if(K === '1'){  // 要很確定傳進來的參數不是物件，才可以這樣做
	  var temp = A  // 普遍性來說，不會又宣告一組變數是原本變數的意思，這樣很混淆
	  var A = B     // 要把這個當成特殊解法，而非常規作法
	  var B = temp
  }
  if(A.length == B.length){
	  return A > B ? 'A' : 'B'
  }
  return A.length > B.length ? 'A' : 'B'
}