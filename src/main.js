class Task {
    constructor(title, description, dueDate, dueTime) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.completed = false;
    }

    // Completar la tarea
    complete() {
        this.completed = true;
    }
}

// Agregar una tarea al DOM
function addTaskToDOM(task) {
    const taskList = document.getElementById("task-list");

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Due Date: ${task.dueDate}</p>
        <p>Due Time: ${task.dueTime}</p>
        <button class="complete-button">Completar</button>
        <button class="delete-button">Eliminar</button>
    `;

    taskList.appendChild(taskItem);

    // Buttons
    const completeButton = taskItem.querySelector(".complete-button");
    completeButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });

    const deleteButton = taskItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
}

// Formulario de agregar tarea
document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskTitleInput = document.getElementById("task-title");
        const taskDescriptionInput = document.getElementById("task-description");
        const dueDateInput = document.getElementById("due-date");
        const dueTimeInput = document.getElementById("due-time");

        const taskTitle = taskTitleInput.value.trim();
        const taskDescription = taskDescriptionInput.value.trim();
        const dueDate = dueDateInput.value;
        const dueTime = dueTimeInput.value;

        if (taskTitle === "") {
            alert("Mandatory! Add a title.");
            return;
        }

        const newTask = new Task(taskTitle, taskDescription, dueDate, dueTime);
        addTaskToDOM(newTask);

        // Limpiar el formulario
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        dueDateInput.value = "";
        dueTimeInput.value = "";
    });
});
