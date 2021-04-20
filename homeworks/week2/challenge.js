function search(array,target){
	var L = 0
	var R = array.length - 1
	if(target == array[L]){
		return L
	}else if(target == array[R]){
		return R
	}
	while((R - L) > 1 ){
		var M = Math.floor((L + R) / 2)
		if(target > array[M]){
			L = M
		}else if(target < array[M]){
			R = M
		}else{
			return M
		}
	}
	return -1
}
/* 測試資料
console.log(search([6, 10], 5))
console.log(search([6, 10], 11))
console.log(search([6, 10], 6))
console.log(search([6, 10], 10))
console.log(search([6, 10], 8))

console.log(search([2, 3, 10, 14, 39], 1))
console.log(search([2, 3, 10, 14, 39], 2))
console.log(search([2, 3, 10, 14, 39], 3))
console.log(search([2, 3, 10, 14, 39], 4))
console.log(search([2, 3, 10, 14, 39], 10))
console.log(search([2, 3, 10, 14, 39], 14))
console.log(search([2, 3, 10, 14, 39], 39))
console.log(search([2, 3, 10, 14, 39], 93))
*/
/*
function search(array,target){
	if(target > array[array.length - 1]){
			return -1
		}else if(target < array[0]){
			return -1
		}else if(target == array[0]){
			return 0
		}else if(target == array[array.length - 1]){
			return array.length - 1
		}

	var L = 0
	var R = array.length - 1
	while((R - L) > 1 ){
		var M = Math.floor((L + R) / 2)
		if(target > array[M]){
			L = M
		}else if(target < array[M]){
			R = M
		}else{
			return M
		}
	}
	return -1
}
*/