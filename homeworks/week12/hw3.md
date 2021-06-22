## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
1. 雜湊（ Hash ）
	* 一種演算法，原文經過雜湊後，會得到一串雜湊值（ hash value）。
	* 相同的原文經過相同的雜湊演算法（像是函數的 n 對 1 的概念），會算出相同的雜湊值
	* 雜湊值是沒有辦法逆向演算回去原文
	* 有低機率不同的原文，經過雜湊演算後得到相同的雜湊值，稱為雜湊碰撞（a-->1, b-->1,c-->1），這也是為什麼無法逆向演算回去（怎麼知道 1 要逆向回 a, b 還是 c），好的雜湊演算法會讓碰撞機遇越低。
	* 不同長度的原文雜湊後的雜湊值長度是相同的
	
	
	* 運用於不能存明碼的密碼驗證

2. 加密（Encryption）
	* 將資訊經過密鑰（ key ）轉換的過程稱為加密
	* 具有可逆性，被加密過的資訊可以再經過 key 解密回去（像是函數的 1 對 1 的概念）
	* 運用於需要被還原的資料上面

3. 兩者差異
	* 最大的差異在雜湊不能逆向演算回去，加密可以逆向解密，

4.  為什麼密碼要雜湊？
	* 如果以明碼放入資料庫，當資料庫被駭入，那密碼就都被知道了
	* 如果以加密後的資料放入資料庫，那麼當資料庫被駭入，駭客在去找出金鑰，那麼就可以解密回去得到明碼，雖然有比明碼安全，可是還不夠安全，因為可以有內賊阿，擁有資料庫的人（管理者或是 admin之類的）一定擁有金鑰，那他就等於擁有明碼了
	* 暫停一下
	* 有個問題，為什麼要有密碼，因為機器要辨識使用者（人），而機器只讀的懂字串，所以使用者需要授權給字串讓它代表使用者，而這就是第一次的認證授權（使用者 -->字串），只是因為第一次的授權太過薄弱。所以需要再進化一次，改進的方式就變成我可以再授權一次，讓 hash value 可以代表我的密碼，所以這就是第二次的認證授權（字串 --> hash value）
	* 如果以 hash value 放入資料庫，那麼當資料庫被駭入，駭客可以得到的是一大堆 hash value，可是因為 **hash value 無法逆運算回去**，所以也沒有用
	* 所以如果忘記密碼的話，網站都是要我們重設密碼，因為他們也沒有辦法找回原本的密碼
	* but 太過短的密碼還是可以被[還原回去](https://www.dcode.fr/sha1-hash)，這就是網站都說至少要 8 碼的原因
	* 更安全的作法先加鹽再雜湊

題外話，對於要怎麼驗證使用者，死亡筆記本電影版裡面 L在網咖要登入他的帳號，然後跳出來的認證是讓他解一道謎題，換句話說，只要解的出謎題的就可以被承認為 L 。
	
	
* 參考資料
	* [什麼都能尬的果汁機 - 雜湊 Hash](https://ithelp.ithome.com.tw/articles/10247509)
	* [一次搞懂密碼學中的三兄弟 — Encode、Encrypt 跟 Hash](https://medium.com/starbugs/what-are-encoding-encrypt-and-hashing-4b03d40e7b0c)
	* [雜湊函式](https://zh.wikipedia.org/wiki/散列函數)
	* [ [淺談] 編碼(encoding) vs 加解密 vs 雜湊(Hash)](https://dotblogs.com.tw/daniel/2019/05/06/223004)


## `include`、`require`、`include_once`、`require_once` 的差別
              | include | require | include_once | require_once
--------------|:-----:|-----:| ----:|------------------------
是否先檢查檔案是否已經引入過一次    | X |  X |    O | O
檔案執行前是否編譯    | X |  O |  X | O
如果引入時有錯誤程式是否繼續  | O | X |  O | X  

因為這些特性所以

* include ：多用於條件判斷的程式碼，跑到 include 這行的時候，才引入開始執行，可用於迴圈
* require：多用於靜態擴充的程式碼，編譯時就一起把內容引入代換了，不能用於迴圈

## 請說明 SQL Injection 的攻擊原理以及防範方法

* 攻擊原理
	*  使用者在輸入資料時，注入 SQL 指令，若程式設計者沒有字元檢查處理，則會執行使用者的 SQL 指令，進而取得、刪改資料庫中資料
	*  理想中的使用狀況。使用者：aaa ，密碼：bbb

	```php=
let sql = `select * from users where username = "aaa" and password = "bbb"`;
```
	* 被 SQL Injection 。使用者：" or 1 = 1 ，密碼：被我入侵囉


	```
sql = `select * from users where username = "" or 1 = 1  and password = "被我入侵囉"
```
	* 這樣就可以跳過檢查，直接登入了
	
* 防範方法
	* 給予使用者最低的權限
	* 對於使用者的輸入進行編碼與檢查
	* prepare statement，避免透過字串拼接進行攻擊
	* bind_param()
	* excute()
	* 不要把用戶端輸入的東西拿來 SQL 語句拼接


##  請說明 XSS 的攻擊原理以及防範方法
跨網站指令碼攻擊（ Cross-Site Scripting ），其實跟 SQL Injection 很像，只是換成 JavaScript 來注入

* 攻擊原理
	* 因撰寫程式方未過濾使用者輸入的特殊字元，而達到可以利用 html 的標籤 `<script></script>`，植入 JavaScript 程式語言，以達到導向到其他網站，或是偷走 cookie 等等
*  防範方式
	* 不要讓使用者輸入的資料，被判斷成程式語言，進而執行其內容
	* php 可以使用跳脫字元 `htmlspecialchars`，來將可能被解讀成程式碼的字元替換成純文字
	* `& --> &amp`;   `< --> &lt;`
	* `> --> &gt`; `" --> &quot`
	* `' --> &#x27`; `/ --> &#x2F`
	* 將 innerHTML 改成 innerTEXT

	
## 請說明 CSRF 的攻擊原理以及防範方法
跨網站偽造請求（ Cross Site Request Forgery ）又稱為 one-click attack

* 攻擊原理
	* 利用未過期殘存的 cookie ，只要 cookie 沒有消失，就存在 CSRF 的風險 
	* 因為網站認證使用者的方式是換發通行證，而 CSRF 就是透過取得 cookie 來冒充使用者
	* 或是使用釣魚連結，讓使用者點進連結，發送 Request 而因為是使用者自己設備發送的 Request 所以當然有 cookie ，以達到目的
* 防範方法
	* client 端：使用完每個網站後，都登出帳號，這樣就可以銷毀 cookie
	* browser 端：可以在設定 cookie的時候加上 samesite
		* Strict 嚴格模式：同一個 domain 發出的 request 才會帶上 cookie
		* Lax 寬鬆模式：在 GET、 link、a（連結） 的時候都會帶上 cookie
	* Server端：雙重認證（手機簡訊， email 認證）
	* Server端：加上 CSRFtoken