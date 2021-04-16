// https://www.youtube.com/watch?v=TFlv8yZBtDo
function multiply(a, b) {
	let A=""
	A+=a
	let B=""
	B+=b
	let result= new Array(A.length+B.length).fill(0)

	for(i=0; i<A.length; i++){
		for (j=0; j<B.length; j++){
			const product=A[i]*B[j]
			const index=i+j
			if(product>9){
				result[index]+=Math.floor(product/10)
				result[index+1]+=product%10
				if(result[index]>9){
					result[index-1]+=1
					result[index]=result[index]%10
				}
			}else{
				result[index]+=product
			}
		}
	}
	let r=""
	if((A[0]*B[0])<10){
		for(i=0;i<result.length-1; i++){
			r+=result[i]
		}
	}else{
		for(j=0;j<result.length; j++){
			r+=result[j]
		}
	}
	return r
}
console.log(multiply(991,991))