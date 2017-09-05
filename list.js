let listIncrementId = parseInt(storage.get("listIncrementId", () => 0));
let lists = storage.get("lists", () => []);

class List {
  constructor(title, list) {
    if(typeof list  === "object") {
      for(let key in list) {
        this[key] = list[key]
      }
    } else {
      listIncrementId++
      this.id = listIncrementId
      this.title = title
      lists.push(this)
      storage.set("lists", lists)
      storage.set("listIncrementId", listIncrementId)
    }
  }

  tasks() {
    return tasks.filter(task => task.listId === this.id)
  }

  static findById(id){
    id = parseInt(id)
    return lists.find(list => list.id === id)
  }

  static findByIdInStorage(id) {
    return storage.get("lists").find(element => element.id == id)
  }

  static bootStrap(selectList) {
    lists.forEach(list => {
      this.createListHtml(list)
      this.addToSelect(list, selectList)
    })
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
      let listId = parseInt(divList.dataset.id)
      listsDiv.removeChild(divList)
      this.deleteFromSelect(listId)
      this.deleteFromStorage(listId)
      this.hideListForm()
    });
  }

  static hideListForm() {
    const taskFormDiv = document.getElementById('task-div')
    if(lists.length === 0) {
      taskFormDiv.style.display = "none"
    }
  }

  static deleteFromSelect(listId) {
    let listSelect = document.getElementById('list-select')
    let listOptions = listSelect.options

    for(let i = 0, n = listOptions.length; i < n; i++) {
      if(listOptions[i].value == listId) {
        listSelect.remove(i)
        return ;
      }
    }
  }

  static deleteFromStorage(listId) {
    for (let key in lists) {
      if (lists[key].id === listId) {
        let listTasks = lists[key].tasks()

        for(let taskKey in listTasks) {
          tasks.splice(taskKey, 1)
          storage.set("tasks", tasks)
        }

        lists.splice(key, 1)
        storage.set("lists", lists)
        return ;
      }
    }
  }
}

(function() {
  lists = lists.map(function(list) {
    return new List(null, list)
  })
})();
