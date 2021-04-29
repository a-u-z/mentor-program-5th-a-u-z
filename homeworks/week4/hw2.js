const request = require('request') // 引入 request 函式，如果有問題，可以上 github 去看 request 的文件

const process = require('process') // 引入 node js 內建的函式，用來引入參數 argv

const url = 'https://lidemy-book-store.herokuapp.com/books'
const action = process.argv[2]
switch (action) {
  case 'list': {
    request(
      {
        url: `${url}?_limit=20`
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
    break
  }
  case 'read': {
    request(
      {
        url: `${url}/${process.argv[3]}`
      },
      (error, response, body) => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          const json = JSON.parse(body)
          console.log(json)
        }
        if (response.statusCode >= 400 && response.statusCode < 500) {
          console.log('查無此書或是未輸入參數')
        }
      }
    )
    break
  }
  case 'delete': {
    request.delete(
      {
        url: `${url}/${process.argv[3]}`
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
    break
  }
  case 'create': {
    const bookName = process.argv[3]
    if (bookName) {
      request.post(
        {
          url: url, // eslint-disable-line
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
    break
  }
  case 'update': {
    const bookname = process.argv[4]
    if (bookname) {
      request.patch(
        {
          url: `${url}/${process.argv[3]}`,
          form: {
            name: bookname
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
    break
  }
}
