function capitalize(str){
	if(str[0] >= 'a' && str[0] <= 'z'){
		var changeToCapital = ''
		changeToCapital = str[0].toUpperCase()
		var others=''
		for(i = 1; i < str.length; i ++){
			others += str[i]
		}
		return (changeToCapital + others)
	}else{
		return (str)
	}
}
console.log(capitalize(',hello'));