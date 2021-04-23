const request = require('request')

const process = require('process')

if (process.argv[2] === 'list') {
  request(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/'
    },
    (error, response, body) => {
      let json = JSON.parse(body)
      try {
        json = JSON.parse(body)
      } catch (e) {
        console.log(e) // 錯誤處理
      }
      for (let i = 0; i <= 9; i++) {
        console.log(`${i + 1} ${json[i].name}`)
      }
    }
  )
}
if (process.argv[2] === 'read') {
  request(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/ ${process.argv[3]}`
    },
    (error, response, body) => {
      const a = JSON.parse(body)
      console.log(a)
      console.log(response.statusCode)
    }
  )
}
if (process.argv[2] === 'delete') {
  request.delete(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/ ${process.argv[3]}`
    },
    (error, response, body) => {
      const a = JSON.parse(body)
      console.log(a)
      console.log(response.statusCode)
    }
  )
}
if (process.argv[2] === 'creat') {
  const b = process.argv[4]
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: b
      }
    },
    (error, response, body) => {
      const a = JSON.parse(body)
      console.log(a)
      console.log(response.statusCode)
    }
  )
}
if (process.argv[2] === 'update') {
  const b = process.argv[4]
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/ ${process.argv[3]}`,
      form: {
        name: b
      }
    },
    (error, response, body) => {
      const a = JSON.parse(body)
      console.log(a)
      console.log(response.statusCode)
    }
  )
}
