## 請列出 React 內建的所有 hook，並大概講解功能是什麼
hook 都必須放在 component 裡面
* useState
	* 用來儲存 React 資料「狀態」的 hook
	* 	`const [state, setState] = useState(initialState)`
	*  `initialState` 
		*  是放初始值，可以是任何型態，如果要放空值的話，也要寫上，例如("") 。
		* 雖然是初始值，但是其實每次程式碼執行到 initialState 的時候都會執行一次，所以要用 Lazy initial state

```js
useState( () => { 
	const initialState = 複雜運算()
	return initialState
})  
```
* 續 useState
	*  `state` 
		* `state` 的初始值就是用上面所說的方式設定
	*  `setState` 
		*  是用來改變 `state` 的 function
		*  `setState( (prev) => prev + 100 )`
		*  要用上面的這種方式來寫 setState
		*  setState 裡面包一個箭頭函式，return 想要改變的值，這樣確保每次 state 都被改動到，才往下執行
*  useEffect
	*  effect 原始應該是 side effect 副作用的意思，不過不是日常生活中那種不好的副作用，而是額外的作用的意思，就是要在 React 更新 DOM 之後，再執行一些額外的程式碼。
	*  `useEffect(functionA, [state1, state2])`
	*  後面的 array 的意思是，第一個參數 function 裡面會用到的 state ，那當 state1 有改變時，才會執行第一個參數的 function 。state1, state2 的意思是可以放入多個 state
	*  第二個參數 array 也可以不要放進去，變成這樣 `useEffect(functionA)` 這樣就是每次 render 完之後，就會執行 function ，包括第一次喔
	*  第二個參數 array 也可以放空的 array ，變成這樣 `useEffect(functionA, [])`，這樣的意思是只有在第一次 render 完之後會執行 functionA，之後都不會了，因為之後 array 都不會改變了
	*  每一次的 useEffect 都是不同版本的 useEffect，裡面拿到的 state 都是那次版本最新的 state
	*  分成兩種。第一種是無需清除的 effect。第二種是需清除的 effect
	*  無需清除的 effect
		*  ```useEffect(() => { document.title = `You clicked ${count} times`})```
		*  可以放入 count ，這個是一個 state 而已
	*  需清除的 effect
		* 還沒研究.... 
* useContext
	* 原本要傳遞 state 資料，需要用 props 去傳遞。現在資料結構長這樣，曾祖父 --> 祖父 --> 父 --> 本身，那 state 建立在曾祖父上面，祖父跟父層是不需要這項資料的，但是必須幫忙傳遞 props，「本身」才能拿到資料。 useContext 要解決的就是這樣問題，可以變成跳過祖父與父這兩層（過客），直接在本身拿到
	* 需要 import { createContext, useContext } 兩個東西
	* 由三個東西組成。 `const XXX = createContext()`, `<XXX.Provider value={放一個 state 進來}></ XXX.Provider>`, `const 自己取個名字 = useContext(XXX)` 。 XXX 是變數名稱要自己取
	* 用上面提到的結構繼續說明。在宣告曾祖父的地方宣告`const XXX = createContext()`代表要使用 「 context 這個 hook 」，然後把曾祖父的 return 用 `<XXX.Provider value={放一個 state 進來}></ XXX.Provider>` 包起來， value 放剛剛在曾祖父裡面宣告的 state，這樣就完成了跟 react 的交代，等等可以把 state 傳送給曾祖父層底下的任何 component 。
	* 移動到「本身」這一層，在「本身」裡面  `const 自己取個名字 = useContext(XXX)`，就可以拿到曾祖父層的 state ，而且跳過祖父和父這兩個過客
* useReducer
	* 可以想成這是完整版本的 state 
	* 先宣告要使用 useReducer 
	* 
```js
	function Counter({initialCount}) {
			const [state, dispatch] = useReducer(
				reducer,
				initialCount,
				init
			)
	}
```

	* 後面 () 內的 reducer 是一個 function ，裡面將會如何改變 state，也就是會進行什麼操作
	* 
```js
	function reducer(state, action) {
			switch (action.type) {
				case 'reset':
					return {count: action.payload}
				case 'increment':
					return {count: state.count + 1}
				case 'decrement':
					return {count: state.count - 1}
				default:
					return state
			}
	}
```

	* initialState 放初始值或是代表初始值的變數，目前 initialState 這是一個由 function 參數傳進來的變數，所以到時候要用 pops 傳進 Counter ，像是這樣 `<Counter initialCount={1} />`
	* init 是一個 function ，用於把 initialState 做第一次加工
	* 
```js
	function init(initialCountState) {
			return {count: initialCountState + 1}
	}
```
	* 一樣接收 Counter 傳進來的參數 initialCountState 然後把它加工，所以第一次顯示出來的 count 會是 `<Counter initialCount={1} />` 1+1 所以是 2
	* 前面的 [] 內的 state 和 dispatch 是解構出來的。 state 是一個變數，dispatch 是 function 用來改變 state 。
	* 
```js
	<button onClick={
			()=> dispatch({type:'reset', payload: initialCount})
	}> reset </ button>
	<button onClick={
			()=> dispatch({type:'increment'})}> plus </ button>
	<button onClick={
			()=> dispatch({type:'decrement'})}> minus </ button>
```
	* 當點擊按鈕，會觸發執行 dispatch，dispatch 就會執行 reducer 這個 function，參數 state 就是舊的 state action 就是dispatch 傳入的參數。那 reducer return 的整個值就是 state 的值。

* useCallback
	* 避免 fucntion 被重新生成
	* 
```
	const aa = useCallback(
		() => {console.log('123')}, 
		[num]
	)
```
	* 在 useCallback 裡面要放兩個東西，第一個是一個 arrow function 裡面放要執行的東西，第二個是放一個依賴，當這個依賴改變的時候，整個 useCallback 才會重新生成
* useMemo
	*  




## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點

## 請問 class component 與 function component 的差別是什麼？

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？

uncontrolled component： 這個組件儲存自己的狀態，沒有透過 props 傳給別人，然後用 ref 去取她的值

controlled component ：會將自己的值透過 props 傳遞出去，用像是 onChange 的 callbacks 來偵測改變，再透過最源頭的那個組件去控制這個 state，再透過 props 傳遞出去
