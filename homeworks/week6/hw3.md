## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1.  `<sup></sup>`：上標字
2.  `<sub></sub>`：下標字
3.  `<select></select>`：選單標籤
	* 可在 select 裡面設定
		* size : 上下的寬
		* multiple：多選，沒有設定這個就是預設的單選
	* 範例：神魔常用隊伍
		* <select name="神魔常用隊伍" id="leader__select" >
    <option value="">請選擇</option>
    <option value="蚩尤">蚩尤</option>
    <option value="炭治郎">炭治郎</option>
    <option value="英格麗">英格麗</option>
</select>


 
資料來源

* [http://web.thu.edu.tw/hzed/www/tag.htm]()

## 請問什麼是盒模型（box modal）
* 盒模型就是由 border, padding, content 組成的，外面再加上 margin
	* 每一個盒模型，就是一個物件。
	* margin：物件跟物間之間的距離
	* border：這個盒模型的最外框
		* 粗度：border-width
		* 樣式：border-style
	* padding：內容物跟 border 的距離
	* content：放的內容物

資料來源

* [https://www.1keydata.com/css-tutorial/tw/border.php]()

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
1. inline
	* 常見元素： span, a, img, imput
	* 不可設定長寬，元素的寬高由內容撐開
	* 設定 padding 時並不會佔寬高，會被當成背景，等於下一個元素會在上面一層
	* 會乖乖排隊
	* 使用時機：要讓它跟一般的資料一起排隊的時候
	
2.  block
	*  常見元素：div, ul li, p, h1
	* 可以設定寬跟高，也可以設定 padding 與 margin
	* 不會乖乖排隊的，自成一橫列的，與上下都是。
		* `span` 後面的 `div`也會先換行，才顯示 `div` 。
	*  使用時機：想要獨樹一格的時候
	
3.  inline-block
	* 以 inline 的方式水平排列，但是有 block 的特性
	* 可以設定寬跟高的，就像是乖乖排隊的 block
	*  使用時機：設計導覽列的時候

資料來源

* [https://www.youtube.com/watch?v=TtvQsVjt9t8
]()
* [https://ytclion.medium.com/css教學-關於display-inline-inline-block-block的差別-1034f38eda82]()
* [https://saruwakakun.com/html-css/basic/display#section6](https://saruwakakun.com/html-css/basic/display#section6)

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
1. static
	* 一般都是預設這個，在應該出現的地方出現
	* 不可設定 top, right, bottom, left 和 z-index 
	* 使用時機：一般狀況
	 
2. relative
	* 以 static 會出現的地方偏移
	* 可以設定 top bottom left right
		* top 40px：距離原本物體的上面往下移動 40px
		* bottom 40px：距離原本物體的下面往上移動 40px
		* left 40px：距離原本物體的左邊往右移動 40px
		* right 40px：距離原本物體的右邊往左移動 40px
	*  使用時機：把 static 改成 relative 以達到讓 absolute 或是 relative 追蹤的效果
3. absolute
	* 移出資料流，往上找第一個 position 不是 static 的元素，當做參考點
	* 可以設定 top bottom left right，移動方式與 relative 相同
	* 使用時機：購物網，在圖片上面加上是否屬於 XX 檔期的字樣、跳出廣告關閉的 XX 按鈕
	
	* 資料來源：[https://www.youtube.com/watch?v=JOdZdHnuGmM]()
4. fixed
	* 移出資料流，以視窗為基準，固定在一個地方，滾動視窗時，並不移動
	* 使用時機：主選單，或是最上方的功能列
	* 資料來源：[https://developer.mozilla.org/zh-CN/docs/Web/CSS/position]()
