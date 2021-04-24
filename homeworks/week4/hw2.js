const request = require('request')

const process = require('process')

if (process.argv[2] === 'list') {
  request(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books?_limit=20'
    },
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) { // 如果有成功的話，才執行後面
        let json = JSON.parse(body) // 把拿回來的 response 轉成 json 的物件
        try { // 測試看看抓到的資料是否是正規的 json 格式
          json = JSON.parse(body)
        } catch (e) {
          console.log(e) // 錯誤處理
        }
        for (let i = 0; i <= 19; i++) {
          console.log(`${i + 1} ${json[i].name}`)
        }
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('參數有誤')
      }
    }
  )
}
if (process.argv[2] === 'read') {
  request(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`
    },
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        const json = JSON.parse(body)
        console.log(json)
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('參數有誤')
      }
    }
  )
}
if (process.argv[2] === 'delete') {
  request.delete(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`
    },
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log('刪除成功')
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('參數有誤')
      }
    }
  )
}
if (process.argv[2] === 'create') {
  const bookName = process.argv[3]
  if (bookName) {
    request.post(
      {
        url: 'https://lidemy-book-store.herokuapp.com/books',
        form: {
          name: bookName
        }
      },
      (error, response, body) => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          const json = JSON.parse(body)
          console.log(json)
        }
        if (response.statusCode >= 400 && response.statusCode < 500) {
          console.log('參數有誤')
        }
      }
    )
  } else {
    console.log('請輸入書名')
  }
}
if (process.argv[2] === 'update') {
  const bookName = process.argv[4]
  if (bookName) {
    request.patch(
      {
        url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
        form: {
          name: bookName
        }
      },
      (error, response, body) => {
        const json = JSON.parse(body)
        if (response.statusCode >= 200 && response.statusCode < 300) {
          console.log(json)
        }
        if (response.statusCode >= 400 && response.statusCode < 500) {
          console.log('參數有誤')
        }
      }
    )
  } else {
    console.log('請輸入書名')
  }
}
