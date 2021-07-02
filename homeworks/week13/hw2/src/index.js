import $ from 'jquery' // eslint-disable-line

import { selectComment, countComment, insertComment, getFormTemplate } from './function.js' // eslint-disable-line

let containerElement = null
let comment = {}
export function init(options, commentData) { // eslint-disable-line
  containerElement = $(options.containerSelector) // 搜尋到 comment-area，到時候會新增上模版的地方
  const formTemplate = getFormTemplate(options.secretCode)
  containerElement.append(formTemplate) // 新增模版上去
  console.log(options.secretCode)
  commentData.select_div_comment = $(`.${options.secretCode}_div_comment`) // 搜尋到模版上面的留言區
  selectComment(options, commentData)
  $(`.${options.secretCode}_comment_form`).submit((e) => {
    e.preventDefault()
    comment = {
      'secretCode' :options.secretCode, // eslint-disable-line
      'nickname' :$(`input[name=${options.secretCode}_nickname]`).val(), // eslint-disable-line
      'content' :$(`textarea[name=${options.secretCode}_content]`).val() // eslint-disable-line
    }
    insertComment(options, comment, commentData)
  })
  $('.more_comments_btn').click((e) => {
    commentData.offset += commentData.limit
    countComment(options, commentData, e)
  })
}
