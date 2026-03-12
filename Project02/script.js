let tasks = [];
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
taskForm.addEventListener("submit", addTask);
function addTask(event) {

    event.preventDefault();

    const title = document.getElementById("taskTitle").value;
    const priority = document.getElementById("taskPriority").value;
    const status = document.querySelector('input[name="taskStatus"]:checked').value;

    const task = {
        title: title,
        priority: priority,
        status: status
    };

    tasks.push(task);

    displayTasks();

    taskForm.reset();
}
function displayTasks() {

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        const task = tasks[i];
        let priorityColor = "secondary";

if (task.priority === "Medium") {
    priorityColor = "warning";
}

if (task.priority === "High") {
    priorityColor = "danger";
}

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

  
    li.innerHTML =
"<div><strong>" + task.title + "</strong> | Priority: " +
"<span class='badge bg-" + priorityColor + "'>" + task.priority + "</span>" +
" | Status: " + task.status +
"</div>" +
"<div>" +
"<button class='btn btn-success btn-sm me-2' onclick='completeTask(" + i + ")'>Complete</button>" +
"<button class='btn btn-danger btn-sm' onclick='removeTask(" + i + ")'>Remove</button>" +
"</div>";
      
    if (task.status === "Completed") {
    li.style.textDecoration = "line-through";
}
    taskList.appendChild(li);
    }
}
function removeTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}
function completeTask(index) {

    tasks[index].status = "Completed";

    displayTasks();
}
