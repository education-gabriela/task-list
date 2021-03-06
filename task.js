let taskIncrementId = parseInt(storage.get("taskIncrementId", () => 0));
let tasks = storage.get("tasks", () => []);

class Task {
  constructor (listId, description, level){
    taskIncrementId++;
    this.id = taskIncrementId;
    this.listId = listId;
    this.description = description;
    this.level = level;
    tasks.push(this);
    storage.set("tasks", tasks);
    storage.set("taskIncrementId", taskIncrementId);
  }

  static bootstrap () {
    tasks.forEach(task => {
      this.createTaskHtml(task);
    });
  }

  static createTaskHtml (task) {
    let item = document.createElement("li");
    item.setAttribute("id", `task_${task.id}`);
    item.dataset.id = task.id;

    let button = document.createElement("button");
    button.innerText = "X";

    item.append(button);
    item.append(` ${task.description}, ${task.level}`);

    let listHtml = document.querySelector(`#list_${task.listId} ul`);
    listHtml.appendChild(item);

    this.deleteButtonListener(button);
  }

  static deleteButtonListener (button) {
    button.addEventListener("click", event => {
      let li = event.target.parentNode;
      li.parentNode.removeChild(li);
      this.deleteFromStorage(parseInt(li.dataset.id));
    });
  }

  static deleteFromStorage (taskId) {
    for (let key in tasks) {
      if (tasks[key].id === taskId) {
        tasks.splice(key, 1);
        storage.set("tasks", tasks);
        return ;
      }
    }
  }
}

(function () {
  tasks = tasks.map(function (task) {
    return Object.setPrototypeOf(task, Task.prototype);  });
})();
