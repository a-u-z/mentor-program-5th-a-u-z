const request = require('request') // 引入 request 函式，如果有問題，可以上 github 去看 request 的文件

const process = require('process') // 引入 node js 內建的函式，用來引入參數 argv

const url = 'https://lidemy-http-challenge.herokuapp.com/api/books'
const v2Url = 'https://lidemy-http-challenge.herokuapp.com/api/v2'
const v3Url = 'https://lidemy-http-challenge.herokuapp.com/api/v3'
const action = process.argv[2]
switch (action) {
  case 'list':
    list()
    break
  case 'read':
    read()
    break
  case 'delete':
    deleteBook()
    break
  case 'create':
    create()
    break
  case 'update':
    update()
    break
  case 'me':
    callme()
    break
  case 'v2Delete':
    v2Delete()
    break
  case 'v2Update':
    v2Update()
    break
  case 'v2List':
    v2List()
    break
  case 'v2Read':
    v2Read()
    break
  case 'newSys':
    newSys()
    break
  case 'hello':
    hello()
    break
  case 'log':
    log()
    break
  default :
    console.log('Invalid command. Please try list, read, delete,create and update')
}
function list() {
  request.get(
    {
      url: `${url}`
    },
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) { // 如果有成功的話，才執行後面
        let json = JSON.parse(body) // 把拿回來的 response 轉成 json 的物件
        try { // 測試看看抓到的資料是否是正規的 json 格式
          json = JSON.parse(body)
        } catch (e) {
          console.log(e) // 錯誤處理
        }
        for (let i = 0; i <= 99; i++) {
          console.log(`${i + 1} ${json[i].name}`)
        }
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('參數有誤')
      }
    }
  )
}
function read() {
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
}
function deleteBook() {
  request.delete(
    {
      url: `${url}/${process.argv[3]}`
    },
    (error, response, body) => {
      const json = JSON.parse(body)
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log(json)
        console.log('刪除成功')
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('參數有誤')
      }
    }
  )
}
function create() {
  const bookName = process.argv[3]
  const ISBNcode = process.argv[4]
  if (bookName) {
    request.post(
      {
        url: `${url}`,
        form: {
          name: bookName,
          ISBN: ISBNcode
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
function update() {
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
}
function callme() {
  request(
    {
      url: `${v2Url}/me`,
      headers: {
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=' // eslint-disable-line
      }
    },
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log(body)
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('參數有誤')
      }
    }
  )
}
function v2Delete() {
  request.delete(
    {
      url: `${v2Url}/books/${process.argv[3]}`
    },
    (error, response, body) => {
      const json = JSON.parse(body)
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log(json)
        console.log('刪除成功')
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('參數有誤')
      }
    }
  )
}
function v2Update() {
  const ISBNcode = process.argv[4]
  const bookName = process.argv[5]
  request.patch(
    {
      url: `${v2Url}/books/${process.argv[3]}`,
      headers: {
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=' // eslint-disable-line
      },
      form: {
        name: bookName,
        ISBN: ISBNcode
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
}
function v2List() {
  request.get(
    {
      url: `${v2Url}/books`,
      headers: {
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=' // eslint-disable-line
      }
    },
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) { // 如果有成功的話，才執行後面
        let json = JSON.parse(body) // 把拿回來的 response 轉成 json 的物件
        try { // 測試看看抓到的資料是否是正規的 json 格式
          json = JSON.parse(body)
        } catch (e) {
          console.log(e) // 錯誤處理
        }
        for (let i = 0; i <= 99; i++) {
          console.log(`${i + 1} ${json[i].name}`)
        }
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('參數有誤')
      }
    }
  )
}
function v2Read() {
  request(
    {
      url: `${v2Url}/books/${process.argv[3]}`,
      headers: {
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=' // eslint-disable-line
      }
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
}
function newSys() {
  request(
    {
      url: `${v2Url}/sys_info`,
      headers: {
        /* eslint-disable */
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=',
        'X-Library-Number': '20',
        'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)'
        /* eslint-enable */
      }
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
}
function hello() {
  request(
    {
      url: `${v3Url}/hello`,
      headers: {
        /* eslint-disable */
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=',
        'X-Library-Number': '20',
        'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)',
        'origin': 'lidemy.com'
        /* eslint-enable */
      }
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
}
function log() {
  request(
    {
      url: `${v3Url}/logs`,
      headers: {
        /* eslint-disable */
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=',
        'X-Library-Number': '20',
        'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)',
        'origin': 'lidemy.com',
        'x-forwarded-for': 'https://ph.yahoo.com'
        /* eslint-enable */
      }
    },
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log(body)
        const json = JSON.parse(body)
        console.log(json)
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('查無此書或是未輸入參數')
      }
    }
  )
}
