/*
挑戰題
現在有一個排序好的陣列 arr，裡面的元素都是正整數而且保證不會重複。
給你一個數字 n，請寫出一個函式 search 回傳 n 在這個陣列裡面的 index，沒有的話請回傳 -1。
範例：
search([1, 3, 10, 14, 39], 14) => 3
search([1, 3, 10, 14, 39], 299) => -1
https://blog.techbridge.cc/2016/09/24/binary-search-introduction/
*/

function search(array, target) {

  if(target > array[array.length-1]) {
    return -1
  }else if(target==array[0]){
    return 0
  }else if(target ==array[array.length-1]){
    return array.length-1
  }

  var L = 0
  var R = array.length-1

  while((R-L)>1) {
    var M = Math.floor((L+R)/2)
    if(target > array[M]){
      L=M
    }else if(target < array[M]){
      R=M
    }else{
      return M
    }
  } 
}
console.log(search([1, 3, 10, 14, 39], 1))
console.log(search([1, 3, 10, 14, 39], 3))
console.log(search([1, 3, 10, 14, 39], 10))
console.log(search([1, 3, 10, 14, 39], 14))
console.log(search([1, 3, 10, 14, 39], 39))

console.log(search([1, 3, 10, 14, 39], 299))

