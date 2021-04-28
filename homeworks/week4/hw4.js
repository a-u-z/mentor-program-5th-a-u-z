const request = require('request')

const url = 'https://api.twitch.tv/kraken/games/top'
request({
  url,
  headers: {
    'Client-ID': 'ny29dihtbce4ubq6bvgupsrojiv8uf',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
},
(error, response, body) => {
  const games = JSON.parse(body)
  for (let i = 0; i < 10; i++) {
    console.log(`${games.top[i].viewers} ${games.top[i].game.name}`)
  }
}
)
