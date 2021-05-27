function join(arr, concatStr) {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    const loopNumber = arr.length - 1
    if (loopNumber === i) { // 如果是最後一圈，不用加上 concatStr
      result = result + arr[i]
    } else { // 不是最後一圈的話，要加上 concatStr
      result = result + arr[i] + concatStr
    }
  }
  return result
}
function join2(arr, concatStr) {
  let result = arr[0]
  for (let i = 1; i < arr.length; i++) {
    result = result + concatStr + arr[i]
  }
  return result
}
function repeat(str, times) {
  let result = ''
  for (let i = 0; i < times; i++) {
    result += str
  }
  return result
}
console.log(join([1, 2, 3], ''), join(['a', 'b', 'c'], '!'), join(['aaa', 'bb', 'c', 'dddd'], ',,'))
console.log(repeat('yoyo', 2))
console.log(join2([1, 2, 3], ''))
