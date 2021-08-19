document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.className === 'edit') {
      editPrize(e)
    }
    if (e.target.innerText === '刪除') { // 因為刪掉就真的刪掉了，所以再讓使用者確認一次
      e.target.previousSibling.outerHTML = ''
      e.target.innerText = '再次確認刪除'
      return
    }
    if (e.target.innerText === '再次確認刪除') {
      deletePrize(e)
    }
    if (e.target.className === 'add') {
      addPrize(e)
    }
  })
})
function addPrize(e) {
  const targetTr = e.target.closest('tr')
  const newData = {}
  for (const input of ['prize', 'description', 'image', 'probability']) {
    newData[input] = targetTr.querySelector(`input[name= ${input}]`).value
    document.querySelector(`input[name=${input}]`).value = ''
  }
  const template = `
    <tr>
    <input type="hidden" name="id" value="">
    <td><input type="text" name="prize" value="${newData.prize}"></td>
    <td ><input type="text" name="description" value="${newData.description}"></td>
    <td ><input type="text" name="image" value="${newData.image}"></td>
    <td ><input type="text" name="probability" value="${newData.probability}"></td>
    <td>
      <button class="edit" >送出編輯</button><button class="delete" >刪除</button>
    </td>
    </tr>`
  const newTr = document.createElement('tr')
  newTr.innerHTML = template
  document.querySelector('#table').appendChild(newTr)
  fetchAdd(newData)
  alert('新增成功')
}
async function fetchAdd(newData) {
  try {
    await fetch('/handle-add', { // fetch 就是發一個 api
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    })
  } catch (error) {
    console.log(`errorMessage:${error}`)
  }
}
function deletePrize(e) {
  const targetTr = e.target.closest('tr')
  const newData = {}
  for (const input of ['id']) {
    newData[input] = targetTr.querySelector(`input[name= ${input}]`).value
  }
  targetTr.outerHTML = ''
  fetchDelete(newData)
  alert('刪除成功')
}
async function fetchDelete(newData) {
  try {
    await fetch(`/handle-delete/${newData.id}`, { // 這個 fetch 沒有回傳值
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    })
  } catch (error) {
    console.log(`errorMessage:${error}`)
  }
}
function editPrize(e) {
  const targetTr = e.target.closest('tr')
  const newData = {}
  for (const input of ['id', 'prize', 'description', 'image', 'probability']) {
    newData[input] = targetTr.querySelector(`input[name= ${input}]`).value
  }
  fetchEdit(newData)
  alert('編輯完成')
}
async function fetchEdit(newData) {
  try {
    await fetch(`/handle-edit/${newData.id}`, { // 這個 fetch 不會有回傳值
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    })
  } catch (error) {
    console.log(`errorMessage:${error}`)
  }
}
