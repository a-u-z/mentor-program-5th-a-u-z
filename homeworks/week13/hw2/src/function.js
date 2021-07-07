import $ from 'jquery' // eslint-disable-line

export function countComment(options, commentData) {
  $.ajax({ url: `${options.apiUrl}count_comment_api.php?secretCode=${options.secretCode}` }).done((data) => {
    if (!data.ok) {
      alert(data.message)
      return
    }
    commentData.count = data.count
    console.log(commentData.count)
  })
}
export function isMoreBtn(options, commentData, e) {
  if (commentData.count <= commentData.offset + commentData.limit) {
    e ? $(e.target).hide() : $(`.${options.secretCode}`).hide()
  }
}
export function selectComment(options, commentData, e) {
  let comment = {}
  $.ajax({ url: `${options.apiUrl}select_comment_api.php?secret_code=${options.secretCode}&limit=${commentData.limit}&offset=${commentData.offset}` }).done((data) => {
    if (!data.ok) {
      alert(data.message)
      console.log('123')
      return
    }
    const comments = data.comment
    for (comment of comments) {
      appendComment(commentData, comment, false)
    }
    isMoreBtn(options, commentData, e)
    commentData.offset += commentData.limit
  })
}
export function insertComment(options, comment, commentData) {
  $.ajax({
    type: 'POST',
    url: `${options.apiUrl}insert_comment_api.php`,
    data: comment
  }).done((data) => {
    if (!data.ok) {
      alert(data.message)
      return
    }
    appendComment(commentData, comment, true)
    $(`input[name=${options.secretCode}_nickname]`).val('')
    $(`textarea[name=${options.secretCode}_content]`).val('')
    isClicked = false // eslint-disable-line
  })
}
export function getFormTemplate(secretCode) {
  const formTemplate = `<div>
                            <form class="${secretCode}_comment_form">
                                <div class="mb-3">
                                    <label for="nickname" class="form-label">暱稱</label>
                                    <input name="${secretCode}_nickname" type="text" class="form-control" id="nickname" autofocus>
                                </div>
                                <div class="mb-3">
                                    <label for="content_textarea" class="form-label">留言內容</label>
                                    <textarea name="${secretCode}_content" class="form-control" id="content_textarea" rows="3"></textarea>
                                </div>
                                <button type="submit" class="${secretCode}SubmitBtn btn btn-primary">送出</button>
                            </form>
                            <div class="${secretCode}_div_comment"></div>
                            <button class="${secretCode} btn btn-primary more_comments_btn">載入更多</button>
                        </div>`
  return formTemplate
}
export function appendComment(commentData, comment, isPrepend) {
  const html =
              `<div class="card" >
                  <div class="card-body">
                      <h5 class="card-title">${escape(comment.nickname)}</h5>
                      <p class="card-text">${escape(comment.content)}</p>
                  </div>
              </div>`
  if (isPrepend) {
    commentData.select_div_comment.prepend(html)
  } else {
    commentData.select_div_comment.append(html)
  }
}
export function escape(toOutput) {
  return toOutput.replace(/\&/g, '&amp;') // eslint-disable-line
    .replace(/\</g, '&lt;') // eslint-disable-line
    .replace(/\>/g, '&gt;') // eslint-disable-line
    .replace(/\"/g, '&quot;') // eslint-disable-line
    .replace(/\'/g, '&#x27') // eslint-disable-line
    .replace(/\//g, '&#x2F') // eslint-disable-line
}
