function reverse(str) {
	var c=''
	for(i=str.length-1; i>=0; i--){
		c+=str[i]
	}
	console.log(c)
}
reverse('1,2,3,2,4');
