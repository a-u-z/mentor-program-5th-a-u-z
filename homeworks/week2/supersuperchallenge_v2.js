// https://www.youtube.com/watch?v=TFlv8yZBtDo
function multiply(a, b) {
	let result = new Array(a.length + b.length).fill(0)
	for(i = a.length - 1; i >= 0; i --){
		for (j = b.length - 1; j >= 0; j --){
			const product = a[i] * b[j]
			const index = i + j + 1
			if(product > 9){
				result[index - 1] += Math.floor(product / 10)
				result[index] += product % 10
			}else{
				result[index] += product
			}
		}
	}
	for(i = result.length - 1; i >= 0; i --){
		while(result[i] > 9){
			result[i - 1] += Math.floor(result[i] / 10)
			result[i] =result[i] % 10
		}
	}
	let r = ""
	for(i = 0; i < result.length; i ++){
		if(i == 0){
			if(result[i] !== 0){
				r += result[i]
			}
		}else{
			r += result[i]
		}
	}
	return r
}
console.log(multiply("98765", "56894")) // 5619135910