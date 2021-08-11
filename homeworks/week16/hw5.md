## 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。

* 變數是沒有 type 的，typeof 檢測出來的東西，是檢測值或是物件本身，變數只是給人類參考用的。

* Call Stack：一個放 function 的地方，後進先出
* Blocking：因為一段程式碼，執行過久，導致程式卡在那邊。而 JavaScript 是用來寫網頁的，如果程式卡在那邊，也就是畫面卡在那邊，那這樣使用體驗很不好，所以要避免 Blocking 產生
* Web APIs ：這是瀏覽器提供的。像是 setTimeout(), call api 之類的都會被放到這區，然後執行。
* Callback Queue：當 Web APIs 完成後，就會被丟到 Callback Queue，交給 Event Loop 管理。先進先出。
* Event Loop：檢查 Call Stack 沒有東西後，就會放行 Callback Queue 的東西
* setTimeout() 所設定的時間為「至少」需要花的時間，並非絕對的時間，因為儘管時間到了，都還是要等 Call Stack 裡面的東西都執行好才能夠被 Event Loop 放行。
* Hoisting ：順序是 參數 -> function -> 變數。不管是在該 block 的哪裡宣告，都會被提升到該 block 的第一行
* var 的 hoisting 可以被讀到值是 undefined 。而 let, const 也會被 hoisting 但是不能夠被讀到值。在該 block 的第一行到 let const 宣告的地方稱為 TDZ，暫時性死區。如果去使用到的話就會出現 `ReferenceError`


覺得 closure 超級難，只能多看幾次資料並且慢慢看了