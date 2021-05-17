function capitalize(str) {
  if (str[0] >= 'a' && str[0] <= 'z') {
    let changeToCapital = ''
    changeToCapital = str[0].toUpperCase()
    let others = ''
    for (let i = 1; i < str.length; i++) {
      others += str[i]
    }
    return (changeToCapital + others)
  } else {
    return (str)
  }
}
console.log(capitalize(',hello'))
