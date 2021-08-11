/* eslint-disable */
const db = require('../models')

const { Author, Article } = db
const bcrypt = require('bcrypt')

const saltRounds = 10
const adminPage = '/admin-page'
const blog = '/blog/1'
function isNumAndAlphabet(str) { // 判斷是否由英文及數字組成
  const rules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  return rules.test(str)
}
const controller = {
  registerPage: (req, res) => {
    res.render('registerPage', { errMessage: false, author: false })
  },
  handleRegister: (req, res, next) => {
    const { author, password, password2 } =  req.body // 取出使用者輸入的資料
    if (!author || !password || !password2) {
      req.flash('errMessage', '有地方沒有輸入喔')
      return next()
    }
    if (password.length < 5) {
      req.session.isLogin = true
      req.flash('errMessage', '太短囉XDD，要六碼')
      return next()
    }
    if (!isNumAndAlphabet(password)) {
      req.flash('errMessage', '可能缺少數字或是大寫或是小寫英文字母喔')
      return next()
    }
    if (password !== password2) {
      req.flash('errMessage', '兩次密碼輸入的不相同')
      return next()
    }
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if (err) {
        req.flash('errMessage', err.toString())
        return next()
      }
      Author.create({
        author,
        password: hash
      }).then((author) => {
        req.session.author = author
        res.redirect(adminPage)
      }).catch((err) => {
        req.flash('errorMessage', err.toString())
        return next()
      })
    })
  },
  adminPage: (req, res) => {
    Article.findAll({
      where: {
        is_deleted: 0
      },
      order: [['id', 'DESC']]
    }).then((results) => {
      res.render('adminPage', { results, author: req.session.author })
    })
  },
  loginPage: (req, res) => {
    res.render('loginPage', { errMessage: false, author: req.session.author })
  },
  handleLogin: (req, res, next) => {
    const { author, password } = req.body
    if (!author || !password) {
      req.flash('errMessage', '帳號或是密碼未輸入')
      return next()
    }
    Author.findOne({
      where: { author }
    }).then((results) => {
      if (!results) {
        console.log('no author')
        req.flash('errMessage', '帳號或是密碼錯誤')
        return next()
      }
      bcrypt.compare(password, results.dataValues.password, (err, result) => {
        if (result === true) {
          req.session.author = results.dataValues.author
          return res.redirect(adminPage)
        }
        if (result !== true) {
          req.flash('errMessage', '帳號或是密碼錯誤')
          return next()
        }
      })
    }).catch((err) => {
      req.flash('errorMessage', err.toString())
      return next()
    })
  },
  logout: (req, res) => {
    req.session.author = false
    res.redirect(blog)
  },
  editPage: (req, res) => {
    const { author } = req.session // 確認是否有登入過，有登入過才會有這個 session
    if (!author) return res.redirect('/') // 沒有的話給他導回一般頁面
    const id = req.params.id // 取出網址列上面的文章 id
    Article.findOne({
      where: { id }
    }).then((results) => {
      res.render('editPage', { results, author: req.session.author })
    })
  },
  handleEditArticle: (req, res, next) => {
    const id = req.params.id
    const { title, content } = req.body
    if (!title || !content) {
      req.flash('errMessage', '標題或是文章內容未輸入')
      return next()
    }
    const author = req.session.author
    if (!author) return next()
    Article.findOne({
      where: {
        id
      }
    }).then((results) => results.update({
      title,
      content
    })).then(() => {
      res.redirect(adminPage)
    }).catch((err) => {
      req.flash('errorMessage', err.toString())
      return next()
    })
  },
  deleteArticle: (req, res, next) => {
    const { id } = req.params
    const { author } = req.session
    if (!author) return res.redirect(blog)
    Article.findOne({
      where: { id }
    }).then((results) => results.update({
      is_deleted: 1
    })).then(() => {
      res.redirect(adminPage)
    }).catch((err) => {
      req.flash('errorMessage', err.toString())
      return next()
    })
  },
  getAllArticle: (req, res) => {
    Article.findAll({
      where: {
        is_deleted: 0
      },
      order: [['id', 'DESC']]
    }).then((results) => {
      res.render('articleList', { results, author: req.session.author })
    })
  },
  getFiveArticle: (req, res) => {
    let page = req.params.id
    const limit = 5
    let offset = (page - 1) * limit
    Article.findAndCountAll({
      where: {
        is_deleted: 0
      },
      order: [['id', 'DESC']],
      offset,
      limit
    }).then((results) => {
      const { count, rows } = results
      const lastPage = Math.ceil(count / limit)
      res.render('blog', { rows, author: req.session.author, page, lastPage })
    }).catch((err) => {
      console.log(err)
    })
  },
  addPage: (req, res) => {
    res.render('addPage', { errMessage: false, author: req.session.author })
  },
  handleAddArticle: (req, res, next) => {
    const { title, content } = req.body
    const { author } = req.session
    if (!title || !content || !author) {
      req.flash('errMessage', '標題或是文章內容未輸入')
      return next()
    }
    Article.create({
      title,
      content,
      is_deleted: 0
    }).then(() => {
      res.redirect(adminPage)
    })
  },
  chosenArticle: (req, res, next) => {
    const { id } = req.params
    Article.findOne({
      where: { id }
    }).then((result) => {
      res.render('oneArticle', { result, errMessage: false, author: false })
    }).catch((err) => {
      req.flash('errorMessage', err.toString())
      return next()
    })
  }
}
module.exports = controller
