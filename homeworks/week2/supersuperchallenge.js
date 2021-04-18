// https://www.youtube.com/watch?v=TFlv8yZBtDo
debugger
function multiply(a, b) {
	let A=""
	A+=a
	let B=""
	B+=b
	let result= new Array(A.length+B.length).fill(0)
	for(i=A.length-1; i>=0; i--){
		for (j=B.length-1; j>=0; j--){
			const product=A[i]*B[j]
			const index=i+j+1
			if(product>9){
				result[index-1]+=Math.floor(product/10)
				result[index]+=product%10
				if(result[index]>9){
					result[index-1]+=1
					result[index]=result[index]%10
				}
			}else{
				result[index]+=product
				if(result[index]>9){
					result[index-1]+=1
					result[index]=result[index]%10
				}
			}
		}
	}
	let r=""
	for(i=0; i<result.length; i++){
		if(i==0){
			if(result[i]!==0){
				r+=result[i]
			}
		}else{
			r+=result[i]
		}
	}
	return r
}
console.log(multiply(391,25))