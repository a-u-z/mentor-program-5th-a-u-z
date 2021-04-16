``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行 isValid 這個函數，傳入陣列 [3, 5, 8, 13, 22, 35]
2. 進入第一個 for 迴圈，這時 i是0
3. 第一個 for 迴圈中的 if 判斷式，arr[0] 是 3，3 沒有小於等於 0 ，不用執行後面
4. i++ // i是1
5. 1(i) 小於 6 (arr.length)，進入第二圈
6. if 判斷式，arr[1] 是 5，5 沒有小於等於 0 ，不用執行後面
7. i++ // i是2
8.  2(i) 小於 6 (arr.length)，進入第三圈
9. if 判斷式，arr[2] 是 8，8 沒有小於等於 0 ，不用執行後面
10.  i++ // i是3
11.  3(i) 小於 6 (arr.length)，進入第四圈
12. if 判斷式，arr[3] 是 13，13 沒有小於等於 0 ，不用執行後面
13.  i++ // i是4
14.  4(i) 小於 6 (arr.length)，進入第五圈
15. if 判斷式，arr[4] 是 22，22 沒有小於等於 0 ，不用執行後面
16.  i++ // i是5
17.  5(i) 小於 6 (arr.length)，進入第六圈
18. if 判斷式，arr[5] 是 35，35 沒有小於等於 0 ，不用執行後面
19. i++ // i是6
20. 6(i) 沒有小於 6 (arr.length)，跳出第一個 for 迴圈
21. 進入第二個 for 迴圈，這時 i 是 2
22. if 判斷式，arr[2] 是 8 ，arr[1] 是 5，arr[0] 是 3，8不等於 5 加上 3這句話， 為否，後面不執行
23. i++ // i是 3，3（i） 小於 6（arr.length），繼續在迴圈裡面
24. if 判斷式，arr[3] 是 13 ，arr[2] 是 8，arr[1] 是 5，13不等於 8 加上 5 這句話，為否，後面不執行
25. i++ // i是 4，4（i） 小於 6（arr.length），繼續在迴圈裡面
26. if 判斷式，arr[4] 是 22 ，arr[3] 是 13，arr[2] 是 8，22不等於 13 加上 8 這句話，為否，後面不執行
27. i++ // i是 5，5（i） 小於 6（arr.length），繼續在迴圈裡面
28. if 判斷式，arr[5] 是 35 ，arr[4] 是 22，arr[3] 是 13，35不等於 22 加上 13 這句話，為否，後面不執行
29. i++ // i是 6，6（i） 沒有小於 6（arr.length），跳出迴圈
30. return valid
