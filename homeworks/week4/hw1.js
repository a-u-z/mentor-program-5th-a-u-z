const request = require('request')

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    let json = JSON.parse(body)
    try {
      json = JSON.parse(body)
    } catch (e) {
      console.log(e) // 錯誤處理
    }
    console.log(json)
    for (let i = 0; i <= 9; i++) {
      console.log(`${i + 1} ${json[i].name}`)
    }
  }
)
