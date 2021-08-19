import $ from 'jquery' // eslint-disable-line

import { selectComment, countComment, insertComment, getFormTemplate } from './function.js' // eslint-disable-line

let containerElement = null
let comment = {}
export function init(options, div_comment) { // eslint-disable-line
  let commentData = { // eslint-disable-line
    count: 0,
    limit: 5,
    offset: 0,
    select_div_comment: div_comment
  }
  containerElement = $(options.containerSelector) // 搜尋到 comment-area，到時候會新增上模版的地方
  const formTemplate = getFormTemplate(options.secretCode)
  containerElement.append(formTemplate) // 新增模版上去
  commentData.select_div_comment = $(`.${options.secretCode}_div_comment`) // 搜尋到模版上面的留言區
  countComment(options, commentData)
  let isClicked = false
  $(`.${options.secretCode}SubmitBtn`).on('click', () => {
    if (isClicked) return
    isClicked = true
    comment = {
      'secretCode' :options.secretCode, // eslint-disable-line
      'nickname' :$(`input[name=${options.secretCode}_nickname]`).val(), // eslint-disable-line
      'content' :$(`textarea[name=${options.secretCode}_content]`).val() // eslint-disable-line
    }
    insertComment(options, comment, commentData)
  })
  $(`.${options.secretCode}`).click((e) => {
    selectComment(options, commentData, e)
  })
}
