/* eslint-disable */
const express = require('express') // 引入 express，才能夠使用 .get .listen 之類的東西

const app = express()
app.use(express.static(`${__dirname}/public`)) // 靜態的檔案的路徑設定
app.set('view engine', 'ejs') // 用 set 來設定 view engine，然後要用 ejs 的檔案
const session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
const port = process.env.PORT || 5566
const flash = require('connect-flash') // 用來顯示回應使用者的一句話

app.use(flash())
const bodyParser = require('body-parser') // 用來取得 POST 的資訊

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const controller = require('./controllers/controller')

app.listen(port, () => {
  console.log('你是最棒的!!!!加油～～ 愛你愛你愛你')
})
app.get('/register-page', controller.registerPage)
app.post('/handle-register', controller.handleRegister, redirectRegisterPage)
function redirectRegisterPage(req, res) {
  res.render('registerPage', {
    errMessage: req.flash('errMessage'),
    author: false
  })
}
app.get('/admin-page', controller.adminPage)
app.get('/login-page', controller.loginPage)
app.post('/handle-login', controller.handleLogin, redirectLoginPage)
function redirectLoginPage(req, res) {
  res.render('loginPage', {
    errMessage: req.flash('errMessage'),
    author: false
  })
}
app.get('/logout', controller.logout)
app.get('/edit-page/:id', controller.editPage)
app.post('/handle-edit/:id', controller.handleEditArticle)
app.get('/handle-delete/:id', controller.deleteArticle)
app.get('/article-list', controller.getAllArticle)
app.get('/blog/:id', controller.getFiveArticle)
app.get('/add-page', controller.addPage)
app.post('/handle-add', controller.handleAddArticle)
app.get('/chosen-Article/:id', controller.chosenArticle)
