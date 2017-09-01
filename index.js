document.addEventListener("DOMContentLoaded", () => {
  const addListButton = document.getElementById('submit-list')
  const taskFormDiv = document.getElementById('task-div')
  let titleOfTheList
  let currentList
  const selectList = document.getElementById('list-select')
  const addTaskButton = document.getElementById('submit-task')

  addListButton.addEventListener('click', (event)=> {
    titleOfTheList = document.getElementById("list-title").value
    currentList = new List(titleOfTheList)
    taskFormDiv.removeAttribute('style')
    List.addToSelect(currentList, selectList)
  })

  let taskDescription
  let taskPriority
  let currentTask
  let selectedList
  let selectedListId

  addTaskButton.addEventListener('click', (event)=>{
    selectedList = document.getElementById('list-select')
    selectedListId = selectedList.options[selectedList.selectedIndex].value
    taskDescription = document.getElementById("task-description").value
    taskPriority = document.getElementById('priority-level').value
    currentTask = new Task(List.findById(selectedListId), taskDescription, taskPriority)
  })


})
