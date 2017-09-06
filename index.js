document.addEventListener("DOMContentLoaded", () => {
  const addListButton = document.getElementById("submit-list");
  const taskFormDiv = document.getElementById("task-div");
  const selectList = document.getElementById("list-select");
  const addTaskButton = document.getElementById("submit-task");
  const listForm = document.getElementById("main-form");
  const taskForm = document.getElementById("task-form");

  if(lists.length !== 0) {
    List.bootstrap(selectList);
    taskFormDiv.removeAttribute("style");
    Task.bootstrap();
  }

  addListButton.addEventListener("click", (event)=> {
    let titleOfTheList = document.getElementById("list-title");
    let currentList = new List(titleOfTheList.value);
    listForm.reset();

    taskFormDiv.removeAttribute("style");
    List.addToSelect(currentList, selectList);
    List.createListHtml(currentList);
  });

  addTaskButton.addEventListener("click", (event)=>{
    let selectedList = document.getElementById("list-select");
    let selectedListId = selectedList.options[selectedList.selectedIndex].value;
    let taskDescription = document.getElementById("task-description");
    let taskPriority = document.getElementById("priority-level");
    let currentTask = new Task(List.findById(selectedListId).id, taskDescription.value, taskPriority.value);
    Task.createTaskHtml(currentTask);
    taskForm.reset();
  });
});
