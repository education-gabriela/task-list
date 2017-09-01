const lists = []
let list_id = 0

class List {
  constructor(title) {
    this.title = title
    this.tasks = []
    list_id++
    this.id = list_id
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
    let title = document.createElement('h2')
    title.innerText = list.title
    newDiv.appendChild(title)
    let elementList = document.createElement('ul')
    elementList.setAttribute('class', 'task')
    newDiv.appendChild(elementList)
    let listsDiv = document.getElementById('lists')
    listsDiv.appendChild(newDiv)
  }

  static addToSelect(list, select) {
    let option = document.createElement("option")
    option.text = list.title
    option.value = list.id
    select.appendChild(option)
  }

  static deleteListButton() {

  }



}
