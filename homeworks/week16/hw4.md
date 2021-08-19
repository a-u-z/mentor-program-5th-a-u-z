```
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

1. obj.inner.hello() // ??
	* 答案會是 2。因為要看在哪裡被呼叫。所以 this 是 obj.inner，那 obj.inner 的 value 是 2 
2. obj2.hello() // ??
	* 答案會是 2。在 obj2 被呼叫，那 obj2 又等於 obj.inner ，所以答案跟上一題相同 
3. hello() // ??
	* 如果是一般模式。在最外層呼叫，所以 this 就是最外層，如果是在 node.js  this 就是 globla ，如果是在 chrome this 就是 window。那因為沒有 value 的值 所以是 undefined 
	* 如果是 strict 模式。在最外層呼叫，所以 this 就是最外層，不管在 node.js 還是 在 chrome 執行 this 都是 undefined ，而 undefined 的 value 就是 `Cannot read property 'value' of undefined`