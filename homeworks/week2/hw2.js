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
console.log(capitalize('hello'))
function regexCapital(str) {
  let answer = '' // 宣告答案區
  const isCapital = /[a-z]/.test(str) // 設定一個判斷傳入字串的第一個字元是否小寫
  isCapital ? answer += str[0].toUpperCase() : answer += str[0] // 三元判斷式，如果 isCapital 是 true ，那麼 answer 的第一個字母需要轉成大寫，如果是 false 就不用
  answer += str.slice(1) // 將剩餘的字母放入 answer
  return answer
}
console.log(regexCapital('hello'))
