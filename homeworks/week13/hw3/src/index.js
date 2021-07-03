import css from './style.css' // eslint-disable-line

const topFiveUrl = 'https://api.twitch.tv/kraken/games/top?limit=5' // 前五名的遊戲種類的 api
getTopFive(topFiveUrl) // 執行取得前五名遊戲功能
async function getTopFive(topFiveUrl) {
  try {
    const getTopFiveResult = await sendRequest(topFiveUrl) // 發送 api 請求，等他回來
    const getTopFiveResultJson = await getTopFiveResult.json() // 把資料轉乘 json 格式
    for (let i = 0; i < 5; i++) { // 用迴圈新增前五名
      const navGame = document.createElement('span') // 讓 document 新增一個元素標籤 span
      navGame.classList.add('topGame') // 加上 topGame 這個 class
      navGame.innerHTML = getTopFiveResultJson.top[i].game.name // 把這個元素標籤的內部文字設定出來
      document.querySelector('.navbar__game').appendChild(navGame) // 去搜尋 navbar__game 底下新增上面這個元素標籤
    }
    const number1 = getTopFiveResultJson.top[0].game.name
    document.querySelector('.game__name').innerHTML = number1 // 預設顯示第一名
    navbarSelect() // 執行監聽點選 navbar 的功能
    const top1Url = `https://api.twitch.tv/kraken/streams/?game=${number1}&limit=20` // 設定搜尋出第一名的遊戲的前20名的 stream
    showStreamBox(top1Url) // 執行顯示前 20 名 stream 功能
  } catch (e) {
    console.log(`errorMessage:${e}`)
  }
}
function sendRequest(url) {
  return fetch(url, { // 傳入兩個參數，用 return 輸出拿到的資料
    method: 'GET',
    headers: {
      'Client-ID': 'ny29dihtbce4ubq6bvgupsrojiv8uf',
      'Accept': 'application/vnd.twitchtv.v5+json' // eslint-disable-line
    }
  })
}
function makeTemplate(stream, template) { // 做一個可以製造 template 的 function
  const newTemplate = document.createElement('div') // 宣告一個新的 div
  newTemplate.innerHTML = template
    .replace('$url', stream.channel.url)
    .replace('$preview', stream.preview.medium)
    .replace('$viewers', stream.viewers)
    .replace('$status', stream.channel.status)
    .replace('$logo', stream.channel.logo)
    .replace('$display_name', stream.channel.display_name) // 把模版塞入這個新的模版
  return newTemplate
}
const template = `<a href="$url" class="box">  
                            <div class="preview__placeholder">
                                <img class="preview" src="$preview" alt="" onload="this.style.opacity=1">
                            </div>
                            <div class="detail">
                                <img class="logo" src="$logo" alt="">
                                <div class="word">
                                    <span class="status">$status</span>
                                    <div class="display_name__wrapper">
                                        <span class="display__name">$display_name</span>
                                        <div class="viewers__wrapper">
                                            <span class="redSpot" > </span>
                                            <span class="viewers">$viewers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>`
async function showStreamBox(url) {
  try {
    const showStreamBoxResult = await sendRequest(url)
    const showStreamBoxResultJson = await showStreamBoxResult.json()
    const streams = await showStreamBoxResultJson.streams
    streams.forEach((stream) => document.querySelector('.box__wrapper').appendChild(makeTemplate(stream, template)))
  } catch (e) {
    console.log(`errorMessage:${e}`)
  }
}
async function navbarSelect() {
  document.querySelector('.navbar__game').addEventListener('click', (e) => { // 搜尋新的遊戲
    const nowSearch = e.target.closest('span').innerHTML // 設定現在點到的是哪個遊戲，取出名字
    if (e.target.classList.contains('topGame')) {
      document.querySelector('.box__wrapper').innerHTML = '' // 把 box 都清掉
      const isAlive = document.querySelector('.alive') // 搜尋之前是否有加上 alive 過
      isAlive ? isAlive.classList.remove('alive') : '' // eslint-disable-line
      // 如果有，移除它，沒有的話，不做事情
      document.querySelector('.game__name').innerHTML = nowSearch // 把現在遊戲的名字改成 現在搜出來的
    }
    const nowSearchUrl = `https://api.twitch.tv/kraken/streams/?game=${nowSearch}&limit=20` // 這次的網址，要搜的是現在的遊戲
    showStreamBox(nowSearchUrl)
    e.target.classList.toggle('alive') // 放離上面的 alive 太近會一起被清掉，不知道為什麼，所以放離上面遠一點點，就不會有這個問題
  })
}
