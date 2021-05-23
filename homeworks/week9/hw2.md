## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
文字的話有三種形態 char varchar text

1. char
	* 要設定好固定長度（身分證字號、手機或是信用卡號）
	* 索引速度：快
2. varchar 
	* 可以設定最大長度（姓名、地址或是學校）
	* 索引速度：中
	* 使用情境：可預期長度
3. text
	* 不需設定長度（簡介、文章）
	* 索引速度：慢
	* 使用情境：不可預期長度


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

1. Cookie 是實現 Session 的一種工具（為了解決 http 無狀態的問題）。是一個小型的純文字檔，讓我們在發送 request 的時候，夾帶 cookie 讓 Serve 知道使用者的基本資訊，來達成 Session 機制。
2. Server 可以在 Response Header 設定 `Set-cookie`
3. 瀏覽器在 Request Header 帶上 cookie 給 Server 

* 有一種第三方 cookie 可以蒐集用戶的使用習慣，然後在一起共享，目的是提升廣告投放精準度。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
1. 輸入內容如果是 HTML 標籤，要用 escapeHTML() 來跳脫
2. 密碼複雜度（大小寫、數字英文混和、最低位數）
3. 輸入兩次密碼（防止第一次輸入的不是大腦所預期的）
4. 密碼以明碼儲存
3. reCAPTCHA （防止機器人測試密碼或是大量製造帳號）
4. 沒有找回密碼機制（因為沒有設定電子信箱）
5. XSS(可以輸入程式碼來搜尋資料庫內容)

