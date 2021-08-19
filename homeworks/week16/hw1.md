* Stack：堆疊。後進先出
* Queue：排隊。先進先出。
* Web APIs： setTimeout, XMLHttpsResquest
* Event Loop：Call stack 和 Callback Queue 和 Web APIs 的循環。

輸出結果： 1 -> 3 -> 5 -> 2 -> 4

```
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

1. 執行第一行：印出 1 
2. 執行第二行：執行 setTimeout() ，內容是叫瀏覽器設定 0 毫秒後執行 setTimeout() 的第一個參數。因為是 0 毫秒，所以直接到 Task Queue 排隊
3. 執行第五行：印出 3
4. 執行第六行：將 setTimeout() ， 內容是叫瀏覽器設定 0 毫秒後執行 setTimeout() 的第一個參數。因為是 0 毫秒，所以直接到 Task Queue 排隊
5. 執行第九行：印出 5
6. 因為有 Event Loop 機制，Call Stack 清空了（Stack 是一種資料結構，JS 選擇使用 Stack 作為 Call Stack 的資料結構），回到 task queue，因為先進先出，將 task queue 排隊的事件 `() => { console.log(2)}` 放入 Stack ，先印出 2，完成後 pop ，再將 `() => { console.log(4)}` 放入 Stack，再印出 4 



* [參考超有名影片](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [參考資料](https://medium.com/itsems-frontend/javascript-event-loop-event-queue-call-stack-74a02fed5625)