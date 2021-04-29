const request = require('request')

const url = 'https://lidemy-book-store.herokuapp.com/books?_limit=10'
request(
  url,
  (error, response, body) => {
    let bookArray = JSON.parse(body)
    try {
      bookArray = JSON.parse(body)
      for (let i = 0; i <= 9; i++) {
        console.log(`${i + 1} ${bookArray[i].name}`)
      }
    } catch (e) {
      console.log(e) // 錯誤處理
    }
  }
)
