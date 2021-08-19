/* eslint-disable */
const express = require('express') // 引入 express，才能夠使用 .get .listen 之類的東西

const app = express()
app.use(express.static(`${__dirname}/public`))
// __dirname 是 lottery.js 的所在地， /public 就是這層的下一層叫做 public 的檔案
// 任何需要引入的檔案的路徑都在這裡，所以都要丟到 public 這個資料夾裡面
app.set('view engine', 'ejs') // 用 set 來設定 view engine，然後要用 ejs 的檔案
const session = require('express-session') // 用來設定 req.session.username ，做通行證

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
const port = process.env.PORT || 9958 // 設定 port 救救我吧 好難阿
const flash = require('connect-flash') // 設定： req.flash('errorMessage','帳號或是密碼未輸入')，取值 const flashValue = req.flash('errorMessage)

app.use(flash()) // 用來顯示回應使用者的一句話，啟用 flash
const bodyParser = require('body-parser') // eslint-disable

app.use(bodyParser.urlencoded({ extended: false })) // 用來取得 POST 的資訊
app.use(bodyParser.json())
const controller = require('./controllers/controller') // 引入 controller 檔案

app.listen(port, () => { // 顯示有跑起來的證明
  console.log('跑跑跑，向前跑')
})
app.get('/', controller.index) // 抽獎頁面
app.get('/draw', controller.draw) // 點擊「我要抽獎」會用 fetch 發送 api 到 '/draw'
app.get('/login-page', controller.loginPage)
app.post('/handle-login', controller.handleLogin)
app.get('/logout', controller.logout)
app.get('/cms', controller.cms)
app.post('/handle-edit/:id', controller.handleEdit)
app.post('/handle-delete/:id', controller.handleDelete)
app.post('/handle-add', controller.handleAdd)
