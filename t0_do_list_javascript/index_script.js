const todoinput = document.getElementById("todo-input");
const submitButton = document.getElementById("submit-button");
const taskList = document.getElementById("task-list");

submitButton.addEventListener("click",
() => {
  const taskName = todoinput.value;
  console.log(taskName);
  const newListItem = document.createElement("li");
    newListItem.innerHTML = taskName;
    console.log(newListItem);
    taskList.appendChild(newListItem);
    todoinput.value = '';
}
);