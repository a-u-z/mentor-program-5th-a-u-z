function capitalize(str) {
  if(str[0]>='a'&&str[0]<='z'){
		var c=''
		c=str[0].toUpperCase()
		var g=''
		for(i=1; i<str.length; i++){
			g=g+str[i]
		}
		return(c+g)
	}else{
		return(str)
	}
}
console.log(capitalize(',hello'));
