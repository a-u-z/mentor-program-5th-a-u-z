const request = require('request')

const process = require('process')

request(
  `https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
  (error, response, body) => {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      const json = JSON.parse(body)
      if (json.length > 1) {
        for (let i = 0; i < json.length; i++) {
          const { currencies } = json[i].currencies
          console.log(`國家：${json[i].name}`)
          console.log(`首都：${json[i].capital}`)
          console.log(`貨幣：${currencies.name}`)
          console.log(`國碼：${json[i].callingCodes}`)
        }
      }
    }
    if (response.statusCode >= 400 && response.statusCode < 500) {
      console.log('參數有誤')
    }
  }
)
