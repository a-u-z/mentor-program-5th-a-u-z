/* eslint-disable */
const db = require('../models')

const { Prize } = db
const { User } = db
const bcrypt = require('bcrypt') // eslint-disable

const controller = {
  index: (req, res) => { // Prize 是 資料庫裡面的一個 table 裡面裝獎品資訊
    renderFindAll(res, 'index')
  },
  draw: (req, res) => {
    drawPrize()
    async function drawPrize() {
      try {
        const allPrize = await findAll()
        const map = []
        let probabilitySum = 0
        for (const prize of allPrize) {
          probabilitySum += prize.dataValues.probability
          map.push({
            id: prize.dataValues.id,
            probability: probabilitySum
          })
        }
        console.log(map)
        const drawNumber = Math.floor(Math.random() * probabilitySum)
        console.log('drawNumber', drawNumber)
        const isDrawId = setPrize(map, drawNumber) // 找出對應到的獎項在資料庫裡面的 id
        const thePrize = await pickThePrize(isDrawId) // 這是一個 async function 所以也要 await
        const thePrizeJson = JSON.stringify(thePrize) // 上一行的 thePrize 是物件，把它轉成 JSON 的字串
        console.log(typeof { thePrizeJson })
        res.send(thePrizeJson) // 傳送出去
        // res.json(thePrize) // 這行等於上面兩行，可以二選一
      } catch (error) {
        console.log(`errorMessage:${error}`)
      }
    }
  },
  loginPage: (req, res) => {
    res.render('loginPage', { errorMessage: req.flash('errorMessage') })
  },
  handleLogin: (req, res) => {
    const { username, password } = req.body // 從 POST body 取出 username 跟 password
    if (!username || !password) {
      req.flash('errorMessage', '帳號或是密碼未輸入')
      return res.redirect('back') // 用 return 下面就不會執行，然後導回上一頁
    }
    isUserValid(username, password, req, res)
  },
  logout: (req, res) => {
    req.session.username = false // 將通行證設成 false ，代表沒有通行證
    return res.redirect('/') // 導回抽獎頁面
  },
  cms: (req, res) => {
    if (!req.session.username) { // 如果每有通行證
      return res.redirect('/') // 導回抽獎頁面
    }
    renderFindAll(res, 'cms')
  },
  handleEdit: (req, res) => {
    if (!req.session.username) { // 如果每有通行證
      return res.redirect('/') // 導回抽獎頁面
    }
    const { id, prize, description, image, probability } = req.body
    updatePrize(id, prize, description, image, probability)
  },
  handleDelete: (req, res) => {
    if (!req.session.username) { // 如果每有通行證
      return res.redirect('/') // 導回抽獎頁面
    }
    const { id } = req.params
    deletePrize(id)
    async function deletePrize(id) {
      try {
        await Prize.destroy({ where: { id } })
      } catch (error) {
        console.log(`errorMessage:${error}`)
      }
    }
  },
  handleAdd: (req, res) => {
    if (!req.session.username) { // 如果每有通行證
      return res.redirect('/') // 導回抽獎頁面
    }
    const { prize, description, image, probability } = req.body
    createPrize(prize, description, image, probability)
  }
}
async function createPrize(prize, description, image, probability) {
  try {
    await Prize.create({ prize, description, image, probability })
  } catch (error) {
    console.log(`errorMessage:${error}`)
  }
}
async function updatePrize(id, prize, description, image, probability) {
  try {
    await Prize.update({
      prize,
      description,
      image,
      probability
    }, { where: { id } })
  } catch (error) {
    console.log(`errorMessage:${error}`)
  }
}
async function renderFindAll(res, specificEjs) {
  try {
    const prizes = await findAll() // findAll 是一個 async function ，要等的前面就加 await
    res.render(specificEjs, { prizes })
  } catch (error) {
    console.log(`errorMessage:${error}`)
  }
}
async function isUserValid(username, password, req, res) {
  try {
    const findUserResult = await findUser(username) // 這是一個 async function 所以要等
    if (!findUserResult) { // 如果沒有搜到這個使用者，就出錯
      req.flash('errorMessage', '帳號或是密碼錯誤')
      return res.redirect('back')
    }
    bcrypt.compare(password, findUserResult.dataValues.password, (error, result) => {
      if (error) {
        req.flash('errorMessage', error)
        return res.redirect('back')
      }
      if (result !== true) {
        req.flash('errorMessage', '帳號或是密碼錯誤')
        return res.redirect('back')
      }
      if (result === true) {
        req.session.username = findUserResult.dataValues.username // 設置通行證
        return res.redirect('/cms') // 管理頁面
      }
    })
  } catch (error) {
    console.log(`errorMessage:${error}`)
  }
}
async function findUser(username) {
  try {
    const result = await User.findOne({ where: { username } }) // findOne 是 promise 等回傳，會是物件
    return result
  } catch (error) {
    console.log(`errorMessage:${error}`)
  }
}
async function pickThePrize(isDrawId) {
  try {
    const drawPrize = await Prize.findOne({ where: { id: isDrawId } })
    return drawPrize
  } catch (errorMessage) {
    console.log(`errorMessage:${errorMessage}`)
  }
}
async function findAll() { // 用 async 的意思就是跟程式說，這邊這個 function 要等喔
  try {
    const allPrize = await Prize.findAll({ // 向資料庫發送一個搜尋全部東西的請求，正常程式判斷，我發出請求就算結束，就可以往下執行了
      order: [['probability', 'ASC']] // 加上 await 的意思就是要等待資料回來，才可以往下執行，那什麼時候需要或是才能用 await 呢？
    }) // 後面的東西要等的時候就可以加 await，像是 promise, async function
    return allPrize // findAll 回傳回來的東西會是物件，把物件 return
  } catch (errorMessage) {
    console.log(`errorMessage:${errorMessage}`)
  }
  // Prize.findAll({ // 把獎品全部搜出來
  //   order:[['probability','ASC']] // 依照機率的大小，從小排到大（以越大的獎機率越低為基礎）
  // }).then(prizes => { // 有的話就搜出所有的獎
  //   res.render('cms', {prizes}) // 把這些獎 render 到 cms.ejs 這個頁面
  // })
}
function setPrize(map, drawNumber) {
  for (let i = 0; i < map.length; i++) {
    if (map[i].probability >= drawNumber) {
      return map[i].id
    }
  }
}

module.exports = controller
