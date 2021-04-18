function join(arr, concatStr) {
	var c=''
	for(i=0; i<arr.length; i++){
		if(arr.length-1>i){
			c=c+arr[i]+concatStr
		}else{
			c=c+arr[i]
		}
	}
	return c
}



function repeat(str, times) {
	var c=''
	for(i=1; i<=times; i++){
		c=c+str
	}
	return c
}

console.log(join([1, 2, 3], ''),join(["a", "b", "c"], "!"),join(["aaa", "bb", "c", "dddd"], ',,'));
console.log(repeat('yoyo', 2));

