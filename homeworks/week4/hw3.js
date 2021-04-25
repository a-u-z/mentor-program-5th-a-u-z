const request = require('request')

const process = require('process')

request(
  `https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
  (error, response, body) => {
    let json = ''
    json = body
    console.log(json)
    let country = ''
    let capital = ''
    let coin = ''
    let callingCodes = ''
    const c = json.search('name')
    const c2 = json.search('topLevelDomain')
    country = json.slice(c + 7, c2 - 3)
    const c3 = json.search('capital')
    const c4 = json.search('altSpellings')
    capital = json.slice(c3 + 10, c4 - 3)
    const c5 = json.search('currencies')
    coin = json.slice(c5 + 22, c5 + 25)
    const c6 = json.search('callingCodes')
    if (c6 + 19 === Number) {
      callingCodes = json.slice(c6 + 16, c6 + 19)
    } else {
      callingCodes = json.slice(c6 + 16, c6 + 18)
    }
    console.log(`國家：${country}`)
    console.log(`首都：${capital}`)
    console.log(`貨幣：${coin}`)
    console.log(`國碼：${callingCodes}`)
  }
)
