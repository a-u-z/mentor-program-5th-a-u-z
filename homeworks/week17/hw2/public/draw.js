document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.btn').addEventListener('click', (e) => {
    changeView()
  })
})
async function fetchDraw() {
  try {
    const drawResponse = await fetch('/draw') // fetch 拿到的東西是物件像是 (Response {type: "basic", url: "http://localhost:9958/draw", redirected: false, status: 200, ok: true, …})
    console.log(drawResponse, '999')
    const drawResponseJson = await drawResponse.json() // .json() 後變成 promise ，然後我們要的是 promise 之後的東西，所以要 await
    console.log(typeof { drawResponseJson }) // 回來的東西會是 物件
    return drawResponseJson
  } catch (errorMessage) {
    console.log(`errorMessage:${errorMessage}`)
  }
}
async function changeView() {
  const data = await fetchDraw() // fetchDraw 是 async function 所以用 await 等東西回來，這個東西會是物件
  const { prize, description, image } = data
  document.querySelector('.draw__box__detail__wrapper').classList.add('hide')
  document.querySelector('.title').style = 'font-size:3em;color:black'
  document.querySelector('.photo').style.background = `url(${image}) center/cover no-repeat`
  document.querySelector('.title').innerHTML = `${prize}<br>${description}`
  document.querySelector('.btn').innerText = '再抽一次'
  document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.draw__box__detail__wrapper').classList.remove('hide')
    document.querySelector('.draw__box').style = ''
    document.querySelector('.title').style = ''
    document.querySelector('.photo').style.background = ''
    document.querySelector('.title').innerText = '2020 夏日輕盈特賞！ 抽獎活動辦法'
    document.querySelector('.btn').innerText = '我要抽獎'
  })
}
