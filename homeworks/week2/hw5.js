function join(arr, concatStr) {
	var result= ''
	for(i = 0; i < arr.length; i ++){
		if(arr.length - 1 > i){
			result = result + arr[i] + concatStr
		}else{
			result = result + arr[i]
		}
	}
	return result
}
function repeat(str, times) {
	var result = ''
	for(i = 1; i <= times; i ++){
		result = result + str
	}
	return result
}
console.log(join([1, 2, 3], ''),join(["a", "b", "c"], "!"),join(["aaa", "bb", "c", "dddd"], ',,'));
console.log(repeat('yoyo', 2));