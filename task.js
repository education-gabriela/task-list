class Task {
  constructor(list, description, level){
    this.list = list
    this.description = description
    this.level = level
    this.list.addTask(this)
  }

}
