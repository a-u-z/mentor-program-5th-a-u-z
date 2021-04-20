function printStars(n) {
	for(i = 1; i <= n; i ++){
		console.log('*')
	}	
}
printStars(10)
/*
function printStars(n) {
	let a = 0
	let b = 0
	for(i = 1; i <= 30; i ++){
		if(n == i){
			for(i = 1; i <= n; i ++){
				console.log('*')
			}
			b = 1
		}else{
			a = 1
		}
	}
	if(a == 1 && b == 0){
		console.log('參數有誤')
	}
}
printStars(1.5)
*/