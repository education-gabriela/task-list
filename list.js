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

  static addToSelect(list, select) {
    let option = document.createElement("option")
    option.text = list.title
    option.value = list.id
    select.appendChild(option)
  }



}
