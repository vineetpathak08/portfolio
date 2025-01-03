const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadtasks();
function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    createTaskElement(task);
    taskInput.value = "";
    saveTask();
  } else {
    alert("Please Enter a Task");
  }
}
addButton.addEventListener("click", addTask);

function createTaskElement(task) {
  const listItem = document.createElement("li");

  const edit = document.createElement("button");
  edit.textContent = "Edit";
  listItem.appendChild(edit);

  listItem.textContent = task;
  taskList.appendChild(listItem);
  listItem.appendChild(edit);
  edit.className = "deleteTask";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteTask";

  listItem.append(deleteButton);
  taskList.appendChild(listItem);

  edit.addEventListener("click", function () {
    listItem.innerText = prompt("enter the task ");
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    listItem.appendChild(edit);
    edit.className = "deleteTask";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteTask";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
      saveTask();
    });

    listItem.append(deleteButton);
    saveTask();
  });

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(listItem);
    saveTask();
  });
  listItem.addEventListener("click", function (e) {
    if (e.target =="li"){
    e.target.classList.toggle('checked');
    }
    console.log(e);
  });
}

function saveTask() {
  let tasks = [];
  taskList.querySelectorAll("li").forEach(function (item) {
    tasks.push(
      item.textContent.replace("Delete","").replace("Edit","").trim()
    );
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadtasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(createTaskElement);
}
