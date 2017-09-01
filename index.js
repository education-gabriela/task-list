document.addEventListener("DOMContentLoaded", () => {
  const addListButton = document.getElementById('submit-list')
  const taskFormDiv = document.getElementById('task-div')
  const selectList = document.getElementById('list-select')
  const addTaskButton = document.getElementById('submit-task')

  addListButton.addEventListener('click', (event)=> {
    let titleOfTheList = document.getElementById("list-title").value
    let currentList = new List(titleOfTheList)

    taskFormDiv.removeAttribute('style')
    List.addToSelect(currentList, selectList)
    List.createListHtml(currentList)
  })

  addTaskButton.addEventListener('click', (event)=>{
    let selectedList = document.getElementById('list-select')
    let selectedListId = selectedList.options[selectedList.selectedIndex].value
    let taskDescription = document.getElementById("task-description").value
    let taskPriority = document.getElementById('priority-level').value
    let currentTask = new Task(List.findById(selectedListId), taskDescription, taskPriority)
    Task.createTaskHtml(currentTask)
  })
});
