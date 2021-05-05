## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1.  `<sup></sup>`：上標字
2.  `<sub></sub>`：下標字
3.  `<select></select>`：選單標籤
	* 裡面要放 `<option></option>`，來包住成為選項的東西
	* select 裡面可以設定 size，選單的大小，預設是 1 ，長不太需要調整
 
資料來源： http://web.thu.edu.tw/hzed/www/tag.htm

## 請問什麼是盒模型（box modal）
* 盒模型就是由 border, padding, content 組成的，外面再加上 margin
	* 每一個盒模型，就是一個物件。
	* margin：物件跟物間之間的距離
	* border：這個盒模型的最外框
		* 粗度：border-width
		* 樣式：border-style
	* padding：內容物跟 border 的距離
	* content：放的內容物

資料來源：https://www.1keydata.com/css-tutorial/tw/border.php

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* inline：不能設定寬跟高的，屬性：會乖乖排隊的
	* 使用時機：要讓它跟一般的資料一起排隊的時候
	
*  block：可以設定寬跟高的，屬性：不會乖乖排隊的，自成一橫列的，與上下都是。 `span` 後面的 `div`也會先換行，才顯示 `div` 。
	*  使用時機：想要獨樹一格的時候
*  inline-block：可以設定寬跟高的，會乖乖排隊的 block
	*  使用時機：設計導覽列的時候

資料來源：https://www.youtube.com/watch?v=TtvQsVjt9t8

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static：一般都是預設這個，在應該出現的地方出現
	* 使用時機：一般狀況
* relative：以 static 會出現的地方偏移
	* 使用時機：把 static 改成 relative 以達到讓 absolute 追蹤的效果
* absolute：移出資料流，以全部的網頁來說，固定在某一個地方
	* 使用時機：購物網，在圖片上面加上是否屬於 XX 檔期的字樣、跳出廣告關閉的 XX 按鈕
	* 往上找第一個 position 不是 static 的元素
		* 資料來源：https://www.youtube.com/watch?v=JOdZdHnuGmM
* fixed：移出資料流，以視窗來說，固定在一個地方
	* 使用時機：主選單，或是最上方的功能列
	* 資料來源：https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
