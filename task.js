let taskId = 0

class Task {
  constructor(list, description, level){
    this.list = list
    this.description = description
    taskId++
    this.id = taskId
    this.level = level
    this.list.addTask(this)
  }

  static createTaskHtml(task) {
    let item = document.createElement('li')
    item.setAttribute("id", `task_${task.id}`)
    item.innerHTML = `<button>X</button> ${task.description}, ${task.level}`// + button
    let listHtml = document.querySelector(`#list_${task.list.id} ul`)
    listHtml.appendChild(item)
  }

  static deleteTaskById(taskId) {
    let item = document.getElementById(`task_${taskId}`)
    item.parentNode.removeChild(item)
  }

}
