## Webpack 是做什麼用的？可以不用它嗎？
* 因為前端有各式各樣的工具可以協助開發，那在本地端都可以運行開發出來，因為本地端的電腦環境有這些程式可以跑這些檔案，但是瀏覽器就不一定支援了，所以需要 webpack 將這些統整起來，編譯成瀏覽器看的懂得程式碼
* 本地端檔案可以透過 node 的 require 來引入其他檔案達到模組化的感覺。但是舊的瀏覽器不行，所以要透過 Webpack 來實現模組化的功能
* 模組：將複雜的功能，切成小小的 function 檔案，透過引入的方式來使用功能，而不是全部寫在同一個檔案當中
* 可以將 css, sass 甚至圖片都是為一個模塊來打包
* 可以將模組化開發的語法組合成一個檔案的東西
* 舉例來說：如果要砍一棵樹，有電鋸當然就用電鋸，誰會想要菜刀，當然菜刀也可以，只是要很久會很累。但是要切蘋果的話，當然就用菜刀就夠了。所以要看要做的事情的特性選擇適合的工具

關於能不能不使用它

* 視專案的大小決定，如果專案大，那使用起來比較有感覺
* 當瀏覽器還沒有支援到最新的語法，但是程式用上了最新的語法這時就需要使用 webpack 來轉換
* 引入別的套件時，可能會有相容性，命名衝突產生，用 webpack 可以解解決

## gulp 跟 webpack 有什麼不一樣？

gulp做的到的事，webpack 也做的到事
* 將 ES6 轉換成 ES5
* 將 SASS 轉成 CSS
* 壓縮 CSS, img, js 檔案

gulp做的到的事情，但是 webpack 做不到的事情

* 任務管理
* 各項任務的自動化，簡化流程
* 壓縮檔案
* babel
* 發送 API
* 沒有打包功能

gulp 是一個任務管理工具，可以指定說我要做 a 這件事情，做完了接著 b 這件事情，至於為什麼可以執行 a 或是 b 這件事情，是因為 gulp 可以去抓起這執行 a, b 這些事情的程式，然後把大家串起來，達到自動化的效果，那 webpack 的功能，也可以被 gulp 調用


## CSS Selector 權重的計算方式為何？

* 排列由權重高到低排列


1. 最強：!important 
	
	```
	test.css
	.box {
		border: 30px !important;
	}  	
	```
2. 1-0-0-0
	* 透過 inline style(html 文件中內建的 style)設定屬性後
	* 權重加 1-0-0-0

	```
	test.html
	<div style="color:yellow">
		second: yellow inline style
	</div>
	```
	
		
3. 0-1-0-0：
	* 透過 id 選擇器（`#`）選取後
	* 權重加 0-1-0-0

	```
	test.css
	#box {
		border: 30px;
	}  	
	```
4. 0-0-1-0：
	* 透過 class 選擇器（`.`）選取
	* 透過 偽類（ psuedo-class ） 選擇器（`:hover`, `:focus`）選取
	* 透過 attribute 選擇器
	* 權重都是加 0-0-1-0，有兩個就是 0-0-2-0，以此類推

	```
	test.css
	.box { // 0-0-1-0
		border: 30px !important;
	}
	.box :hover { // 0-0-2-0
		border: 40px;
	}
	input[type=text] {
        color: pink;
    }
	```
5. 0-0-0-1：
	* 透過元素（標籤）選擇器
	* 透過 偽元素（ psuedo-element ） 選擇器（::after, ::before）
	* 權重加 0-0-0-1

	```
	test.css
	a { // 0-0-0-1
		color:yellow;
	}
	a :after { // 0-0-0-2
		color: red;
	}  	
	```
6. 0-0-0-0：
	* 透過全域選擇器 `*` 選取
	* 不會增加權重

	```
	test.css
	*{
		border: yellow solid 2px;
	}
	```



