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
    let button = document.createElement('button')
    button.innerText = "X"
    item.append(button)
    item.append(` ${task.description}, ${task.level}`)
    let listHtml = document.querySelector(`#list_${task.list.id} ul`)
    listHtml.appendChild(item)
    this.deleteButtonListeners()
  }

  static deleteTaskById(taskId) {
    let item = document.getElementById(`task_${taskId}`)
    item.parentNode.removeChild(item)
  }

  static deleteButtonListeners() {
    let taskDeleteButtons = document.querySelectorAll(".task button")
    taskDeleteButtons.forEach((button) => {
      button.addEventListener('click', event => {
        let li = event.target.parentNode
        li.parentNode.removeChild(li)
      });
    });
  }
}
