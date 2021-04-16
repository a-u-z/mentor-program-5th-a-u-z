function reverse(str) {
	var c=''
	for(i=str.length-1; i>=0; i--){
		c=c+str[i]
	}
	console.log(c)
}

reverse('hello');
