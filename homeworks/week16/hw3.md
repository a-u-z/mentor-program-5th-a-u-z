程式一讀到這個檔案的時候

```
global EC {
	fn: function
	a : undefined -> 1 (line1) -> 10(line15)
	b： 100 (line13)
}
```
line1 : a = 1
line16 : 進入 fn EC

```
fn EC {
	fn2: function
	a: undefined -> 5(line4) -> 6(line6) -> 20(line12)
}
```
line3 : 印出 undefined ，因為 a 有提升上去，但是還沒有賦值。

line5： 印出 5 。因為賦值上去了

line7：再進入到 fn2 EC

```
fn2 EC {
	
}
```

line11：印出 6 。因為 fun2 裡面沒有宣告 a ，所以往外找，找到 fn EC 的 a

line9： 印出 20。因為 fn2 裡面沒有宣告 a ，所以 fn2 的賦值就往外跑，所以賦到 fn 的 a 身上

line17 ：印出 1。因為 fn 跑完了，所以就關掉了。找到 global 的 a:1

line19：印出 10。因為在 line18 a 又被賦值成 10 了。

line20：印出 100。因為之前 fn2 並沒有宣告 b ，所以 b = 100 賦值賦不上去，只好往外找，找到 fn 也沒有宣告過 b ，再往外找找到 global ，但是 global 也沒有宣告過 b，所以就直接在 global 宣告並且賦值。

 