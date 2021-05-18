// https://www.youtube.com/watch?v=TFlv8yZBtDo
function multiply(a, b) {
  const result = new Array(a.length + b.length).fill(0)
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      const product = a[i] * b[j]
      const index = i + j + 1
      if (product > 9) {
        result[index - 1] += Math.floor(product / 10)
        result[index] += product % 10
      } else {
        result[index] += product
      }
    }
  }
  for (let i = result.length - 1; i >= 0; i--) {
    while (result[i] > 9) {
      result[i - 1] += Math.floor(result[i] / 10)
      result[i] = result[i] % 10
    }
  }
  return result.join('').replace(/^0/, '')
// 把 result 這個 array 變成字串，.join() 的意思就是，把 array 裡面的所有東西，用 () 裡面的東西連接，輸出的東西會是字串
// 不能用 toString() 的原因是因為輸出出來的會是有 , 的 所以不行
// 如果開頭有 0 要把它去除掉，replace() 的意思是，如果字串有第一個參數的正規表達式的情形發生，用第二個參數取代
}
console.log(multiply('98765', '56894')) // 5619135910
// 將開頭的 0 用掉
// let r = ''
//   for (let i = 0; i < result.length; i++) {
//     if (i === 0) {
//       if (result[i] !== 0) {
//         r += result[i]
//       }
//     } else {
//       r += result[i]
//     }
//   }
//   return r
