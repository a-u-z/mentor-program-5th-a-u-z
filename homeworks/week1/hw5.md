## 請解釋後端與前端的差異。

看了很多區分前端和後端的差別的文章後，每次都有種好像懂了，但好像又更複雜了的想法，但是後來靈機一動，可能是我搞錯方法了，前端琳琅滿目的語言工具，但是後端好像相對單純，所以想要先從後端切入，剩下的就推給前端，這樣的分好應該相對容易一點。

前端後端通常是在說工作的內容，所以我就用培訓成為前端或是後端的機構，他們提供的教程來了解前後端的技能差異。

### 後端
1. 程式設計語言，開發框架，後端語言
2. 伺服器架設
2. 關聯式資料庫
3.  NoSQL 資料庫
4. API 和通訊協定
5. 資訊安全
6. 演算法
7. 雲端服務架構

### 前端
1. HTML + CSS +JavaScript
2. RWD, JQuery  互動式網頁
3. SASS/SCSS 加強版 CSS
3. Ajax 
4. API
5. web 前端工具（gulp,webpack）
6. web 後端開發（php, MySQL）
7. 掌握主流架構（Vue.js / React / Angular）
8.  技能樹，圖片太大張了用 url 取代 [https://miro.medium.com/max/1400/1*Scqsm4XG_UqXLdDmOWFCMQ.jpeg)](https://miro.medium.com/max/1400/1*Scqsm4XG_UqXLdDmOWFCMQ.jpeg)

看完了需要學習的技能後，大概可以知道前後端的區別了

不嚴謹的說法，前端的程式碼是給瀏覽器看的，後端的程式碼是給伺服器看的。

從這句話可以看出來

* 前端：比較靠近用戶端，畫面的呈現，與用戶的互動，增加使用體驗的
* 後端：比較靠近資料庫、伺服器端的，要與資料打交道，處理、儲存、操作資料，網頁邏輯

當然也會有前端後端都是一個人的時候，如果專案比較小，那麼就是由一個人來處理。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器叫電腦送出 request
2. 電腦叫網卡送出這個 request
3. 網卡送出 request
4. 查看 DNS cache 有沒有資料
	* 有的話，跳到 7
	* 沒有的話去找系統 cache 

4. 在系統 cache 看看有沒有資料
	* 有的話，跳到 7
	* 沒有的話，走 6
5. 去 DNS 查詢說 google 的伺服器在那
	*  DNS 可以對比成企業黃頁一樣
	*  黃頁可以查到公司個地址
	*  DNS 可以查伺服器的 ip 位置
2.  瀏覽器依照這個 request 去找到伺服器
3.  伺服器去資料庫裡面撈資料，整理好
4. 資料庫再回傳給伺服器
5. 伺服器回傳給網卡
5. 網卡給電腦
6. 電腦給瀏覽器
4. 瀏覽器渲染（ render ）成網頁




## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. `tail 檔案名稱.副檔名`
	* 可以印出檔案的最後幾行字
	* 看了文件是說預設是倒數 10 行，如果這 10內有 block 就會再把這個 block 印出來
	* `tail -數字 檔案名稱.副檔名`
	* 可以規定是要幾行
2. `head 檔案名稱.副檔名`
	* 可以印出檔案的最後幾行字
	* 看了文件是說預設是前 10 行，如果這 10內有 block 就會再把這個 block 印出來
	* `head -數字 檔案名稱.副檔名`
	* 可以規定是要幾行
3. `more 檔案名稱.副檔名` 
	* 可以把檔案用一頁一頁的模式呈現出來
	* 上下移動換頁，按 q 來離開
	* 有點像是網頁版的 ptt
	

##參考資料
https://ithelp.ithome.com.tw/articles/10231011

https://ithelp.ithome.com.tw/articles/10187675

https://medium.com/appworks-school/網頁新手入門-初探網頁架構和前後端語言-a88a5dc86ee3

https://noootown.com/frontend-backend-breakfast/

https://noootown.com/web-development-history-1/

https://softnshare.com/backenddeveloper/

https://training.pada-x.com/career/backend-developer-roadmap.jsp

https://www.tibame.com/goodjob/frontend_taipei?gclid=Cj0KCQjw38-DBhDpARIsADJ3kjkKijHmNLd1hb3N24ath1U4yv-zAFmVdJV8DtFLa3t5_-HMrqQZ02kaAmRxEALw_wcB

https://www.hexschool.com/qa/how-to.html

https://uderchain1989.pixnet.net/blog/post/283915072-看完這篇%2C終於搞懂前端工程師和後端工程師

https://www.zhihu.com/question/21923056

https://blog.techbridge.cc/2017/12/23/linux-commnd-line-tutorial/
