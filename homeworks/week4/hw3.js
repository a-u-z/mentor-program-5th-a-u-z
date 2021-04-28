function cool() { // 這個 cool function 是為了讓 下面這個 if 可以 return ，來躲過 eslint
  const request = require('request')

  const process = require('process')
  if (!process.argv[2]) { // 這個 if
    return console.log('請輸入國家名稱')
  }
  request(
    `https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
    (error, response, body) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        const json = JSON.parse(body)
        if (json.length > 1) {
          for (let i = 0; i < json.length; i++) {
            // eslint-disable-next-line
            const currencies = json[i].currencies
            console.log('============')
            console.log(`國家：${json[i].name}`)
            console.log(`首都：${json[i].capital}`)
            console.log(`貨幣：${currencies[0].code}`)
            console.log(`國碼：${json[i].callingCodes}`)
          }
        }
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log('參數有誤')
      }
    }
  )
}
cool()
