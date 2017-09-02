const lists = []
let list_id = 0

class List {
  constructor(title) {
    list_id++
    this.id = list_id
    this.title = title
    this.tasks = []
    lists.push(this)
  }

  addTask(task) {
    this.tasks.push(task)
  }

  static findById(id){
    id = parseInt(id)
    return lists[id-1]
  }

  static createListHtml (list) {
    let newDiv = document.createElement('div')
    newDiv.setAttribute("id", `list_${list.id}`)
    newDiv.setAttribute('class', 'list')
    newDiv.setAttribute('data-id', list.id)

    let button = document.createElement('button')
    button.innerText = "X"

    let title = document.createElement('h2')
    title.append(button)
    title.append(` ${list.title}`)

    newDiv.appendChild(title)

    let elementList = document.createElement('ul')
    elementList.setAttribute('class', 'task')
    newDiv.appendChild(elementList)

    let listsDiv = document.getElementById('lists')
    listsDiv.appendChild(newDiv)

    this.deleteListButtonListener(button)
  }

  static addToSelect(list, select) {
    let option = document.createElement("option")
    option.text = list.title
    option.value = list.id
    select.appendChild(option)
  }

  static deleteListButtonListener(button) {
    let listsDiv = document.querySelector("#lists")
    button.addEventListener('click', event => {
      let divList = event.target.parentNode.parentNode
      debugger
      let listId = parseInt(divList.dataset.id)
      listsDiv.removeChild(divList)
      lists[listId - 1] = undefined
    });
  }
}
