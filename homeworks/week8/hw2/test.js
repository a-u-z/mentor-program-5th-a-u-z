const request = require('request')

const url = 'https://api.twitch.tv/kraken/streams/?game=Just Chatting&limit=20'
request({
  url,
  headers: {
    'Client-ID': 'ny29dihtbce4ubq6bvgupsrojiv8uf',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
},
(error, response, body) => {
  const games = JSON.parse(body)
  console.log(games)
}
)
